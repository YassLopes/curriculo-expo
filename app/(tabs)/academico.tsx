import React from 'react';
import { StyleSheet, View, Text, ScrollView, useColorScheme } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

// Interface para as props do componente EducationItem
interface EducationItemProps {
  degree: string;
  institution: string;
  period: string;
  description?: string;
  icon?: string;
  isDark: boolean;
}

// Componente para exibir cada item de educação
const EducationItem: React.FC<EducationItemProps> = ({ 
  degree, 
  institution, 
  period, 
  description, 
  icon = 'graduation-cap',
  isDark 
}) => (
  <View style={[styles.educationItem, { backgroundColor: isDark ? '#1e293b' : '#ffffff' }]}>
    <View style={styles.headerRow}>
      <View style={[styles.iconContainer, { backgroundColor: isDark ? '#0f172a' : '#f8fafc' }]}>
        <FontAwesome5 name={icon} size={20} color="#3b82f6" />
      </View>
      <View style={styles.headerInfo}>
        <Text style={[styles.degree, { color: isDark ? '#f1f5f9' : '#0f172a' }]}>{degree}</Text>
        <Text style={[styles.institution, { color: isDark ? '#94a3b8' : '#64748b' }]}>{institution}</Text>
      </View>
    </View>
    
    <View style={styles.periodContainer}>
      <FontAwesome5 name="calendar-alt" size={14} color={isDark ? '#94a3b8' : '#64748b'} />
      <Text style={[styles.period, { color: isDark ? '#94a3b8' : '#64748b' }]}>{period}</Text>
    </View>
    
    {description && (
      <Text style={[styles.description, { color: isDark ? '#cbd5e1' : '#475569' }]}>{description}</Text>
    )}
  </View>
);

// Interface para certificação
interface CertificationProps {
  name: string;
  issuer: string;
  date: string;
  isDark: boolean;
}

// Componente para exibir certificações
const Certification: React.FC<CertificationProps> = ({ name, issuer, date, isDark }) => (
  <View style={[styles.certificationItem, { backgroundColor: isDark ? '#1e293b' : '#ffffff' }]}>
    <View style={styles.certificationHeader}>
      <FontAwesome5 name="certificate" size={16} color="#3b82f6" />
      <Text style={[styles.certificationName, { color: isDark ? '#f1f5f9' : '#0f172a' }]}>{name}</Text>
    </View>
    <Text style={[styles.certificationIssuer, { color: isDark ? '#94a3b8' : '#64748b' }]}>
      {issuer} • {date}
    </Text>
  </View>
);

export default function AcademicoScreen() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  // Dados de educação
  const educationData: EducationItemProps[] = [
    {
      degree: 'Sistemas para Internet',
      institution: 'Universidade Católica de Pernambuco',
      period: '2022 - Presente',
      icon: 'laptop-code',
      isDark: isDark,
    },
    {
      degree: 'Bacharelado em Física (trancado)',
      institution: 'Universidade Federal de Pernambuco',
      period: '2019 - 2022',
      icon: 'atom',
      isDark: isDark,
    },
  ];

  // Dados de certificações
  const certifications: CertificationProps[] = [
    {
      name: 'User Experience (UX)',
      issuer: 'FIAP',
      date: 'Mai 2022',
      isDark: isDark,
    },
    {
      name: 'Marketing em Plataformas de Social Media',
      issuer: 'FIAP',
      date: 'Jul 2023',
      isDark: isDark,
    },
    {
      name: 'Business Intelligence (BI)',
      issuer: 'FIAP',
      date: 'Jan 2025',
      isDark: isDark,
    },
    {
      name: 'UX Agile, Introdução ao Product Design e UX Design',
      issuer: 'Cesar School',
      date: '2023',
      isDark: isDark,
    },
    {
      name: 'Métodos de Pesquisa de Guerrilha',
      issuer: 'Cesar School',
      date: '2023',
      isDark: isDark,
    },
    {
      name: 'Fundamentos da Agilidade',
      issuer: 'Cesar School',
      date: '2023',
      isDark: isDark,
    },
    {
      name: 'Introdução à Programação e Pensamento Computacional',
      issuer: 'DIO',
      date: '2023',
      isDark: isDark,
    },
    {
      name: 'Bootcamp DIO - Educação gratuita e empregabilidade juntas!',
      issuer: 'DIO',
      date: '2023',
      isDark: isDark,
    },
    {
      name: 'Residência Tecnológica de Software',
      issuer: 'Porto Digital',
      date: '2023',
      isDark: isDark,
    },
  ];

  // Dados de participações
  const participations: CertificationProps[] = [
    {
      name: 'I e II Jornada de Sistemas para Internet',
      issuer: 'Even3',
      date: '2022-2023',
      isDark: isDark,
    },
    {
      name: 'Tech Woman 1ª Edição',
      issuer: 'Even3',
      date: '2023',
      isDark: isDark,
    },
  ];

  return (
    <ScrollView 
      style={[styles.container, { backgroundColor: isDark ? '#0f172a' : '#f8fafc' }]}
      contentContainerStyle={styles.content}
    >
      <Text style={[styles.title, { color: isDark ? '#f1f5f9' : '#0f172a' }]}>
        Formação Acadêmica
      </Text>

      <View style={styles.educationList}>
        {educationData.map((education, index) => (
          <EducationItem key={index} {...education} />
        ))}
      </View>

      <Text style={[styles.sectionTitle, { color: isDark ? '#f1f5f9' : '#0f172a' }]}>
        Cursos e Certificados
      </Text>

      <View style={styles.certificationList}>
        {certifications.map((certification, index) => (
          <Certification key={index} {...certification} />
        ))}
      </View>
      
      <Text style={[styles.sectionTitle, { color: isDark ? '#f1f5f9' : '#0f172a' }]}>
        Participações e Eventos
      </Text>

      <View style={styles.certificationList}>
        {participations.map((participation, index) => (
          <Certification key={index} {...participation} />
        ))}
      </View>

      <View style={[styles.infoCard, { backgroundColor: isDark ? '#1e293b' : '#ffffff' }]}>
        <View style={styles.infoHeader}>
          <FontAwesome5 name="lightbulb" size={20} color="#eab308" solid />
          <Text style={[styles.infoTitle, { color: isDark ? '#f1f5f9' : '#0f172a' }]}>
            Áreas de Interesse
          </Text>
        </View>
        <Text style={[styles.infoText, { color: isDark ? '#cbd5e1' : '#475569' }]}>
          Tenho grande interesse nas áreas de desenvolvimento web, experiência do usuário (UX) e 
          design de interface (UI). Minha formação analítica em física me proporciona uma 
          abordagem diferenciada para a solução de problemas na área de tecnologia.
        </Text>
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
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  educationList: {
    gap: 16,
    marginBottom: 32,
  },
  educationItem: {
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  headerRow: {
    flexDirection: 'row',
    marginBottom: 12,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  headerInfo: {
    flex: 1,
    justifyContent: 'center',
  },
  degree: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 2,
  },
  institution: {
    fontSize: 14,
  },
  periodContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  period: {
    fontSize: 14,
    marginLeft: 6,
  },
  description: {
    fontSize: 15,
    lineHeight: 22,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  certificationList: {
    gap: 12,
    marginBottom: 32,
  },
  certificationItem: {
    borderRadius: 12,
    padding: 14,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  certificationHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  certificationName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 8,
  },
  certificationIssuer: {
    fontSize: 14,
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
    marginBottom: 12,
  },
  infoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  infoText: {
    fontSize: 15,
    lineHeight: 22,
  },
}); 