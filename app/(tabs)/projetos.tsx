import React from 'react';
import { StyleSheet, View, Text, ScrollView, useColorScheme, TouchableOpacity, Linking } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import DummyImage from '../../components/DummyImage';

// Interface para as props do componente ProjectItem
interface ProjectProps {
  title: string;
  description: string;
  imageIcon: string;
  technologies: string[];
  github?: string;
  demo?: string;
  featured?: boolean;
  isDark: boolean;
}

// Componente para exibir cada projeto
const ProjectItem: React.FC<ProjectProps> = ({ 
  title, 
  description, 
  imageIcon, 
  technologies,
  github,
  demo,
  featured = false,
  isDark 
}) => (
  <View style={[
    styles.projectItem, 
    { 
      backgroundColor: isDark ? '#1e293b' : '#ffffff',
      borderColor: featured ? '#3b82f6' : isDark ? '#1e293b' : '#ffffff',
    }
  ]}>
    <DummyImage
      width="100%"
      height={180}
      icon={imageIcon}
      iconSize={40}
      backgroundColor={isDark ? '#0f172a' : '#e2e8f0'}
      iconColor={isDark ? '#94a3b8' : '#64748b'}
    />
    
    {featured && (
      <View style={styles.featuredBadge}>
        <FontAwesome5 name="star" size={10} color="#ffffff" solid />
        <Text style={styles.featuredText}>Destaque</Text>
      </View>
    )}
    
    <View style={styles.projectContent}>
      <Text style={[styles.projectTitle, { color: isDark ? '#f1f5f9' : '#0f172a' }]}>{title}</Text>
      
      <Text style={[styles.projectDescription, { color: isDark ? '#cbd5e1' : '#475569' }]}>
        {description}
      </Text>
      
      <View style={styles.techContainer}>
        {technologies.map((tech, index) => (
          <View key={index} style={[styles.techBadge, { backgroundColor: isDark ? '#0f172a' : '#f1f5f9' }]}>
            <Text style={[styles.techText, { color: isDark ? '#cbd5e1' : '#475569' }]}>{tech}</Text>
          </View>
        ))}
      </View>
      
      <View style={styles.buttonContainer}>
        {github && (
          <TouchableOpacity 
            style={[styles.button, { backgroundColor: isDark ? '#0f172a' : '#f1f5f9' }]}
            onPress={() => Linking.openURL(github)}
          >
            <FontAwesome5 name="github" size={16} color={isDark ? '#cbd5e1' : '#475569'} />
            <Text style={[styles.buttonText, { color: isDark ? '#cbd5e1' : '#475569' }]}>GitHub</Text>
          </TouchableOpacity>
        )}
        
        {demo && (
          <TouchableOpacity 
            style={[styles.button, { backgroundColor: '#3b82f6' }]}
            onPress={() => Linking.openURL(demo)}
          >
            <FontAwesome5 name="external-link-alt" size={14} color="#ffffff" />
            <Text style={[styles.buttonText, { color: '#ffffff' }]}>Demo</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  </View>
);

export default function ProjetosScreen() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  // Dados dos projetos
  const projects: ProjectProps[] = [
    {
      title: 'Análise de Sentimentos com Deep Learning',
      description: 'Implementação de um modelo de análise de sentimentos usando PyTorch Lightning e o dataset IMDB. Utiliza rede neural LSTM bidirecional para classificar resenhas de filmes como positivas ou negativas.',
      imageIcon: 'brain',
      technologies: ['Python', 'PyTorch', 'Deep Learning', 'NLP', 'LSTM'],
      github: 'https://github.com/YassLopes/IA-atividade-NLP',
      featured: true,
      isDark: isDark,
    },
    {
      title: 'Navega Aí',
      description: 'Projeto desenvolvido durante a Residência de Software do Porto Digital 2023.2. Aplicativo com protótipo navegável criado no Figma como parte do Kick Off para o Demoday 2023.2.',
      imageIcon: 'ship',
      technologies: ['Figma', 'Design', 'UX/UI', 'Agilidade', 'Briefing'],
      demo: 'https://www.figma.com/proto/V93Megkczg0lJXdUGVD2RS/Navega.a%C3%AD?type=design&node-id=2318-95&t=JISXu74dxZC0RjaW-0&scaling=scale-down&page-id=0%3A1&starting-point-node-id=2318%3A95&show-proto-sidebar=1',
      featured: true,
      isDark: isDark,
    },
    {
      title: 'Dice Roller',
      description: 'Aplicação front-end para simulação de rolagem de dados. Interface interativa e responsiva com visualização de resultados em tempo real.',
      imageIcon: 'dice',
      technologies: ['JavaScript', 'HTML/CSS', 'Front-end', 'UI Design'],
      github: 'https://github.com/YassLopes/front-end-dice-roller',
      demo: 'https://front-end-dice-roller.vercel.app',
      isDark: isDark,
    },
    {
      title: 'Semi-Supervised Learning para Classificação Médica',
      description: 'Implementação de aprendizado semi-supervisionado para classificação de sintomas médicos usando pseudo-rotulagem. Melhora a classificação em cenários com poucos dados rotulados.',
      imageIcon: 'heartbeat',
      technologies: ['Python', 'Machine Learning', 'NLP', 'Semi-Supervised Learning'],
      github: 'https://github.com/YassLopes/slm-to-semi-supervised',
      isDark: isDark,
    },
  ];

  return (
    <ScrollView 
      style={[styles.container, { backgroundColor: isDark ? '#0f172a' : '#f8fafc' }]}
      contentContainerStyle={styles.content}
    >
      <Text style={[styles.title, { color: isDark ? '#f1f5f9' : '#0f172a' }]}>
        Meus Projetos
      </Text>
      <Text style={[styles.subtitle, { color: isDark ? '#cbd5e1' : '#475569' }]}>
        Aqui estão alguns dos projetos que desenvolvi. Clique nos links para ver o código-fonte ou demonstração.
      </Text>

      <View style={styles.projectsContainer}>
        {projects.map((project, index) => (
          <ProjectItem key={index} {...project} />
        ))}
      </View>

      <View style={[styles.infoCard, { backgroundColor: isDark ? '#1e293b' : '#ffffff' }]}>
        <View style={styles.infoHeader}>
          <FontAwesome5 name="info-circle" size={20} color="#3b82f6" />
          <Text style={[styles.infoTitle, { color: isDark ? '#f1f5f9' : '#0f172a' }]}>
            Mais Projetos
          </Text>
        </View>
        <Text style={[styles.infoText, { color: isDark ? '#cbd5e1' : '#475569' }]}>
          Estes são apenas alguns dos projetos em que trabalhei. Visite meu perfil no GitHub para ver
          mais projetos, incluindo contribuições para projetos open source e experimentos.
        </Text>
        <TouchableOpacity 
          style={[styles.githubButton, { backgroundColor: isDark ? '#0f172a' : '#f1f5f9' }]}
          onPress={() => Linking.openURL('https://github.com/YassLopes')}
        >
          <FontAwesome5 name="github" size={18} color={isDark ? '#cbd5e1' : '#475569'} />
          <Text style={[styles.githubButtonText, { color: isDark ? '#cbd5e1' : '#475569' }]}>
            Ver Perfil no GitHub
          </Text>
        </TouchableOpacity>
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
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 24,
    lineHeight: 22,
  },
  projectsContainer: {
    gap: 24,
    marginBottom: 32,
  },
  projectItem: {
    borderRadius: 12,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    borderWidth: 2,
  },
  projectImage: {
    width: '100%',
    height: 180,
  },
  featuredBadge: {
    position: 'absolute',
    top: 12,
    right: 12,
    backgroundColor: '#3b82f6',
    borderRadius: 12,
    paddingHorizontal: 10,
    paddingVertical: 4,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  featuredText: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  projectContent: {
    padding: 16,
  },
  projectTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  projectDescription: {
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 16,
  },
  techContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: 16,
  },
  techBadge: {
    borderRadius: 12,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  techText: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 12,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    gap: 8,
  },
  buttonText: {
    fontWeight: 'bold',
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
    marginBottom: 16,
  },
  githubButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
    gap: 8,
    alignSelf: 'flex-start',
  },
  githubButtonText: {
    fontWeight: 'bold',
    fontSize: 14,
  },
}); 