import React from 'react';
import { StyleSheet, View, Text, ScrollView, useColorScheme } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

// Interface para experiência profissional
interface ExperienceProps {
  role: string;
  company: string;
  period: string;
  location?: string;
  description: string;
  skills: string[];
  isDark: boolean;
}

// Componente para exibir cada experiência profissional
const ExperienceItem: React.FC<ExperienceProps> = ({ 
  role, 
  company, 
  period,
  location,
  description, 
  skills,
  isDark 
}) => (
  <View style={[styles.experienceItem, { backgroundColor: isDark ? '#1e293b' : '#ffffff' }]}>
    <View style={styles.experienceHeader}>
      <View style={styles.companyInfo}>
        <Text style={[styles.role, { color: isDark ? '#f1f5f9' : '#0f172a' }]}>{role}</Text>
        <Text style={[styles.company, { color: isDark ? '#94a3b8' : '#64748b' }]}>{company}</Text>
        {location && (
          <Text style={[styles.location, { color: isDark ? '#94a3b8' : '#64748b' }]}>{location}</Text>
        )}
      </View>
      <View style={[styles.periodBadge, { backgroundColor: isDark ? '#0f172a' : '#f1f5f9' }]}>
        <Text style={[styles.periodText, { color: isDark ? '#cbd5e1' : '#475569' }]}>{period}</Text>
      </View>
    </View>
    
    <Text style={[styles.description, { color: isDark ? '#cbd5e1' : '#475569' }]}>{description}</Text>
    
    <View style={styles.skillsContainer}>
      {skills.map((skill, index) => (
        <View key={index} style={[styles.skillBadge, { backgroundColor: isDark ? '#0f172a' : '#f1f5f9' }]}>
          <Text style={[styles.skillText, { color: isDark ? '#cbd5e1' : '#475569' }]}>{skill}</Text>
        </View>
      ))}
    </View>
  </View>
);

export default function ProfissionalScreen() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  // Dados de experiência profissional
  const experiences: ExperienceProps[] = [
    {
      role: 'Estagiária em Dados e Inteligência de Negócios',
      company: 'Lumi Consult',
      period: 'Dez 2024 - Jun 2025',
      description: 'Participação em reuniões com clientes. Apoio em engenharia de dados com Java, SQL. Apoio em ciência de dados com Power BI. Treinamento em processos de negócio com BIZAGI.',
      skills: ['Java', 'SQL', 'Power BI', 'BIZAGI', 'Processos de Negócio'],
      isDark: isDark,
    },
    {
      role: 'Data Analyst Intern',
      company: 'Marketing Leal Pires',
      period: 'Abr 2024 - Dez 2024',
      location: 'Híbrido - Recife, PE',
      description: 'Criação de insights e visualizações interativas com Python e Streamlit. Análise de métricas de vendas e comportamento de clientes na Hotmart. Apoio à tomada de decisões com base em dados.',
      skills: ['Python', 'Streamlit', 'Análise de Dados', 'Visualização de Dados', 'Negócios Digitais'],
      isDark: isDark,
    },
    {
      role: 'Designer e Atendente',
      company: 'Gráfica São Bento',
      period: 'Jan 2022 - Jul 2022',
      description: 'Atendimento ao cliente, briefing e produção gráfica.',
      skills: ['Atendimento ao Cliente', 'Design Gráfico', 'Produção Gráfica'],
      isDark: isDark,
    },
    {
      role: 'Designer e Assistente de Audiovisual',
      company: 'WAV Arte Gráfica',
      period: 'Jan 2021 - Jul 2021',
      description: 'Criação de identidades visuais, filmagens e materiais promocionais.',
      skills: ['Design Gráfico', 'Audiovisual', 'Identidade Visual'],
      isDark: isDark,
    },
  ];

  return (
    <ScrollView 
      style={[styles.container, { backgroundColor: isDark ? '#0f172a' : '#f8fafc' }]}
      contentContainerStyle={styles.content}
    >
      <View style={styles.header}>
        <Text style={[styles.title, { color: isDark ? '#f1f5f9' : '#0f172a' }]}>
          Experiência Profissional
        </Text>
        <View style={styles.yearContainer}>
          <FontAwesome5 name="briefcase" size={16} color={isDark ? '#94a3b8' : '#64748b'} />
          <Text style={[styles.yearText, { color: isDark ? '#94a3b8' : '#64748b' }]}>
            4+ anos de experiência
          </Text>
        </View>
      </View>

      <View style={styles.timelineContainer}>
        {experiences.map((experience, index) => (
          <View key={index} style={styles.timelineItem}>
            <View style={styles.timelineLine} />
            <View style={styles.experienceContainer}>
              <View 
                style={[
                  styles.timelineDot, 
                  { backgroundColor: index === 0 ? '#3b82f6' : isDark ? '#475569' : '#cbd5e1' }
                ]} 
              />
              <ExperienceItem {...experience} />
            </View>
          </View>
        ))}
      </View>

      <View style={[styles.infoCard, { backgroundColor: isDark ? '#1e293b' : '#ffffff' }]}>
        <View style={styles.infoHeader}>
          <FontAwesome5 name="star" size={20} color="#eab308" solid />
          <Text style={[styles.infoTitle, { color: isDark ? '#f1f5f9' : '#0f172a' }]}>
            Competências
          </Text>
        </View>
        <View style={styles.specialtiesList}>
          <View style={styles.specialtyItem}>
            <FontAwesome5 name="users" size={16} color={isDark ? '#94a3b8' : '#64748b'} />
            <Text style={[styles.specialtyText, { color: isDark ? '#cbd5e1' : '#475569' }]}>
              Trabalho em Equipe
            </Text>
          </View>
          <View style={styles.specialtyItem}>
            <FontAwesome5 name="crown" size={16} color={isDark ? '#94a3b8' : '#64748b'} />
            <Text style={[styles.specialtyText, { color: isDark ? '#cbd5e1' : '#475569' }]}>
              Liderança
            </Text>
          </View>
          <View style={styles.specialtyItem}>
            <FontAwesome5 name="lightbulb" size={16} color={isDark ? '#94a3b8' : '#64748b'} />
            <Text style={[styles.specialtyText, { color: isDark ? '#cbd5e1' : '#475569' }]}>
              Pensamento Criativo
            </Text>
          </View>
          <View style={styles.specialtyItem}>
            <FontAwesome5 name="puzzle-piece" size={16} color={isDark ? '#94a3b8' : '#64748b'} />
            <Text style={[styles.specialtyText, { color: isDark ? '#cbd5e1' : '#475569' }]}>
              Resolução de Problemas
            </Text>
          </View>
          <View style={styles.specialtyItem}>
            <FontAwesome5 name="code" size={16} color={isDark ? '#94a3b8' : '#64748b'} />
            <Text style={[styles.specialtyText, { color: isDark ? '#cbd5e1' : '#475569' }]}>
              Programação
            </Text>
          </View>
          <View style={styles.specialtyItem}>
            <FontAwesome5 name="tasks" size={16} color={isDark ? '#94a3b8' : '#64748b'} />
            <Text style={[styles.specialtyText, { color: isDark ? '#cbd5e1' : '#475569' }]}>
              Autogestão
            </Text>
          </View>
          <View style={styles.specialtyItem}>
            <FontAwesome5 name="clock" size={16} color={isDark ? '#94a3b8' : '#64748b'} />
            <Text style={[styles.specialtyText, { color: isDark ? '#cbd5e1' : '#475569' }]}>
              Gerenciamento de Tempo
            </Text>
          </View>
          <View style={styles.specialtyItem}>
            <FontAwesome5 name="handshake" size={16} color={isDark ? '#94a3b8' : '#64748b'} />
            <Text style={[styles.specialtyText, { color: isDark ? '#cbd5e1' : '#475569' }]}>
              Comprometimento
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 20,
    paddingBottom: 40,
  },
  header: {
    marginBottom: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  yearContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  yearText: {
    fontSize: 16,
    marginLeft: 8,
  },
  timelineContainer: {
    marginBottom: 24,
  },
  timelineItem: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  timelineLine: {
    width: 2,
    backgroundColor: '#64748b',
    marginHorizontal: 12,
    marginTop: 28,
    height: '85%',
    position: 'absolute',
    left: 6,
    zIndex: 1,
  },
  timelineDot: {
    width: 16,
    height: 16,
    borderRadius: 8,
    marginRight: 8,
    zIndex: 2,
  },
  experienceContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    flex: 1,
  },
  experienceItem: {
    flex: 1,
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  experienceHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  companyInfo: {
    flex: 1,
  },
  role: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 2,
  },
  company: {
    fontSize: 14,
    marginBottom: 2,
  },
  location: {
    fontSize: 12,
    fontStyle: 'italic',
  },
  periodBadge: {
    borderRadius: 12,
    paddingHorizontal: 10,
    paddingVertical: 4,
    marginLeft: 8,
  },
  periodText: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 15,
    lineHeight: 22,
    marginBottom: 12,
  },
  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  skillBadge: {
    borderRadius: 12,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  skillText: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  infoCard: {
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  infoHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  infoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  specialtiesList: {
    gap: 12,
  },
  specialtyItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  specialtyText: {
    fontSize: 15,
    marginLeft: 12,
  },
}); 