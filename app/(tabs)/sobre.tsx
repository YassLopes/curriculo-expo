import React from 'react';
import { StyleSheet, View, Text, ScrollView, useColorScheme, Image } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

export default function SobreScreen() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  return (
    <ScrollView 
      style={[styles.container, { backgroundColor: isDark ? '#0f172a' : '#f8fafc' }]}
      contentContainerStyle={styles.content}
    >
      <View style={styles.profileSection}>
        <Image 
          source={require('../../assets/images/profile.jpg')}
          style={styles.profileImage}
        />
        
        <View style={styles.profileInfo}>
          <Text style={[styles.name, { color: isDark ? '#f1f5f9' : '#0f172a' }]}>
            Yasmin do Édem S. Lopes
          </Text>
          <Text style={[styles.bio, { color: isDark ? '#cbd5e1' : '#475569' }]}>
            Desenvolvedora Web & Analista de Dados
          </Text>
        </View>
      </View>
      
      <View style={styles.aboutSection}>
        <View style={[styles.card, { backgroundColor: isDark ? '#1e293b' : '#ffffff' }]}>
          <View style={styles.cardHeader}>
            <FontAwesome5 name="user" size={20} color="#3b82f6" solid />
            <Text style={[styles.cardTitle, { color: isDark ? '#f1f5f9' : '#0f172a' }]}>
              Sobre Mim
            </Text>
          </View>
          
          <Text style={[styles.paragraph, { color: isDark ? '#cbd5e1' : '#475569' }]}>
            Iniciei minha jornada acadêmica estudando física por 3 anos na Universidade Federal de Pernambuco, 
            onde desenvolvi uma forte base analítica e atenção aos detalhes. Essa formação me 
            proporcionou uma maneira única de abordar e resolver problemas complexos.
          </Text>
          
          <Text style={[styles.paragraph, { color: isDark ? '#cbd5e1' : '#475569' }]}>
            Atualmente, estou redirecionando minha carreira para o desenvolvimento web, 
            cursando Sistemas para Internet na Universidade Católica de Pernambuco. 
            Minha paixão pela tecnologia vai além do código - tenho grande interesse nas nuances 
            da experiência do usuário e na arte do design de interface.
          </Text>
          
          <Text style={[styles.paragraph, { color: isDark ? '#cbd5e1' : '#475569' }]}>
            Acredito que meu histórico analítico combinado com minha busca pela perfeição 
            traz uma perspectiva única para a indústria de tecnologia. Estou sempre em busca 
            de oportunidades para aplicar minhas habilidades, aprender e crescer dentro da 
            comunidade tecnológica.
          </Text>
        </View>
        
        <View style={[styles.card, { backgroundColor: isDark ? '#1e293b' : '#ffffff' }]}>
          <View style={styles.cardHeader}>
            <FontAwesome5 name="search" size={20} color="#ec4899" solid />
            <Text style={[styles.cardTitle, { color: isDark ? '#f1f5f9' : '#0f172a' }]}>
              Áreas de Interesse
            </Text>
          </View>
          
          <View style={styles.interestList}>
            <View style={styles.interestItem}>
              <FontAwesome5 name="laptop-code" size={18} color="#3b82f6" style={styles.interestIcon} />
              <Text style={[styles.interestText, { color: isDark ? '#cbd5e1' : '#475569' }]}>
                Desenvolvimento Web
              </Text>
            </View>
            
            <View style={styles.interestItem}>
              <FontAwesome5 name="drafting-compass" size={18} color="#10b981" style={styles.interestIcon} />
              <Text style={[styles.interestText, { color: isDark ? '#cbd5e1' : '#475569' }]}>
                Experiência do Usuário (UX)
              </Text>
            </View>
            
            <View style={styles.interestItem}>
              <FontAwesome5 name="paint-brush" size={18} color="#8b5cf6" style={styles.interestIcon} />
              <Text style={[styles.interestText, { color: isDark ? '#cbd5e1' : '#475569' }]}>
                Design de Interface (UI)
              </Text>
            </View>

            <View style={styles.interestItem}>
              <FontAwesome5 name="database" size={18} color="#f59e0b" style={styles.interestIcon} />
              <Text style={[styles.interestText, { color: isDark ? '#cbd5e1' : '#475569' }]}>
                Análise de Dados
              </Text>
            </View>
          </View>
        </View>
        
        <View style={[styles.card, { backgroundColor: isDark ? '#1e293b' : '#ffffff' }]}>
          <View style={styles.cardHeader}>
            <FontAwesome5 name="award" size={20} color="#10b981" solid />
            <Text style={[styles.cardTitle, { color: isDark ? '#f1f5f9' : '#0f172a' }]}>
              Pontos Fortes
            </Text>
          </View>
          
          <View style={styles.strengthsList}>
            <View style={styles.strengthItem}>
              <View style={[styles.strengthBadge, { backgroundColor: isDark ? '#0f172a' : '#f1f5f9' }]}>
                <FontAwesome5 name="search" size={16} color="#10b981" />
              </View>
              <View style={styles.strengthContent}>
                <Text style={[styles.strengthTitle, { color: isDark ? '#f1f5f9' : '#0f172a' }]}>
                  Orientada a Detalhes
                </Text>
                <Text style={[styles.strengthDesc, { color: isDark ? '#cbd5e1' : '#475569' }]}>
                  Minha formação em física me treinou para observar e agir sobre os mínimos detalhes.
                </Text>
              </View>
            </View>
            
            <View style={styles.strengthItem}>
              <View style={[styles.strengthBadge, { backgroundColor: isDark ? '#0f172a' : '#f1f5f9' }]}>
                <FontAwesome5 name="crown" size={16} color="#eab308" />
              </View>
              <View style={styles.strengthContent}>
                <Text style={[styles.strengthTitle, { color: isDark ? '#f1f5f9' : '#0f172a' }]}>
                  Liderança
                </Text>
                <Text style={[styles.strengthDesc, { color: isDark ? '#cbd5e1' : '#475569' }]}>
                  Espírito natural de liderança, sempre pronta para assumir responsabilidades e orientar.
                </Text>
              </View>
            </View>
            
            <View style={styles.strengthItem}>
              <View style={[styles.strengthBadge, { backgroundColor: isDark ? '#0f172a' : '#f1f5f9' }]}>
                <FontAwesome5 name="bolt" size={16} color="#3b82f6" />
              </View>
              <View style={styles.strengthContent}>
                <Text style={[styles.strengthTitle, { color: isDark ? '#f1f5f9' : '#0f172a' }]}>
                  Aprendizado Rápido
                </Text>
                <Text style={[styles.strengthDesc, { color: isDark ? '#cbd5e1' : '#475569' }]}>
                  Capacidade de absorver rapidamente novas informações e aplicá-las de forma eficaz.
                </Text>
              </View>
            </View>
            
            <View style={styles.strengthItem}>
              <View style={[styles.strengthBadge, { backgroundColor: isDark ? '#0f172a' : '#f1f5f9' }]}>
                <FontAwesome5 name="brain" size={16} color="#ec4899" />
              </View>
              <View style={styles.strengthContent}>
                <Text style={[styles.strengthTitle, { color: isDark ? '#f1f5f9' : '#0f172a' }]}>
                  Pensamento Analítico
                </Text>
                <Text style={[styles.strengthDesc, { color: isDark ? '#cbd5e1' : '#475569' }]}>
                  Resolução de problemas com uma abordagem lógica e estruturada.
                </Text>
              </View>
            </View>
          </View>
        </View>
        
        <View style={[styles.card, { backgroundColor: isDark ? '#1e293b' : '#ffffff' }]}>
          <View style={styles.cardHeader}>
            <FontAwesome5 name="globe-americas" size={20} color="#8b5cf6" solid />
            <Text style={[styles.cardTitle, { color: isDark ? '#f1f5f9' : '#0f172a' }]}>
              Idiomas
            </Text>
          </View>
          
          <View style={styles.languageList}>
            <View style={styles.languageItem}>
              <Text style={[styles.languageName, { color: isDark ? '#f1f5f9' : '#0f172a' }]}>
                Português
              </Text>
              <View style={styles.languageLevel}>
                <View style={[styles.languageDot, { backgroundColor: '#3b82f6' }]} />
                <View style={[styles.languageDot, { backgroundColor: '#3b82f6' }]} />
                <View style={[styles.languageDot, { backgroundColor: '#3b82f6' }]} />
                <View style={[styles.languageDot, { backgroundColor: '#3b82f6' }]} />
                <View style={[styles.languageDot, { backgroundColor: '#3b82f6' }]} />
              </View>
            </View>
            
            <View style={styles.languageItem}>
              <Text style={[styles.languageName, { color: isDark ? '#f1f5f9' : '#0f172a' }]}>
                Inglês
              </Text>
              <View style={styles.languageLevel}>
                <View style={[styles.languageDot, { backgroundColor: '#3b82f6' }]} />
                <View style={[styles.languageDot, { backgroundColor: '#3b82f6' }]} />
                <View style={[styles.languageDot, { backgroundColor: '#3b82f6' }]} />
                <View style={[styles.languageDot, { backgroundColor: '#3b82f6' }]} />
                <View style={[styles.languageDot, { backgroundColor: isDark ? '#334155' : '#cbd5e1' }]} />
              </View>
            </View>
            
            <View style={styles.languageItem}>
              <Text style={[styles.languageName, { color: isDark ? '#f1f5f9' : '#0f172a' }]}>
                Espanhol
              </Text>
              <View style={styles.languageLevel}>
                <View style={[styles.languageDot, { backgroundColor: '#3b82f6' }]} />
                <View style={[styles.languageDot, { backgroundColor: '#3b82f6' }]} />
                <View style={[styles.languageDot, { backgroundColor: '#3b82f6' }]} />
                <View style={[styles.languageDot, { backgroundColor: '#3b82f6' }]} />
                <View style={[styles.languageDot, { backgroundColor: isDark ? '#334155' : '#cbd5e1' }]} />
              </View>
            </View>
            
            <View style={styles.languageItem}>
              <Text style={[styles.languageName, { color: isDark ? '#f1f5f9' : '#0f172a' }]}>
                Francês
              </Text>
              <View style={styles.languageLevel}>
                <View style={[styles.languageDot, { backgroundColor: '#3b82f6' }]} />
                <View style={[styles.languageDot, { backgroundColor: isDark ? '#334155' : '#cbd5e1' }]} />
                <View style={[styles.languageDot, { backgroundColor: isDark ? '#334155' : '#cbd5e1' }]} />
                <View style={[styles.languageDot, { backgroundColor: isDark ? '#334155' : '#cbd5e1' }]} />
                <View style={[styles.languageDot, { backgroundColor: isDark ? '#334155' : '#cbd5e1' }]} />
              </View>
            </View>
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
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  profileImage: {
    width: 140,
    height: 140,
    borderRadius: 70,
    marginRight: 20,
  },
  profileInfo: {
    flex: 1,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  bio: {
    fontSize: 16,
  },
  aboutSection: {
    gap: 20,
  },
  card: {
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 12,
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 12,
  },
  interestList: {
    gap: 12,
  },
  interestItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  interestIcon: {
    marginRight: 12,
  },
  interestText: {
    fontSize: 16,
  },
  strengthsList: {
    gap: 16,
  },
  strengthItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  strengthBadge: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  strengthContent: {
    flex: 1,
  },
  strengthTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  strengthDesc: {
    fontSize: 14,
    lineHeight: 20,
  },
  languageList: {
    gap: 16,
  },
  languageItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  languageName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  languageLevel: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  languageDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginHorizontal: 3,
  },
}); 