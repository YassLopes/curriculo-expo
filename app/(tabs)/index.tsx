import { StyleSheet, View, Text, ScrollView, useColorScheme, Linking, TouchableOpacity, Image } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

export default function HomeScreen() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';
  
  return (
    <ScrollView 
      style={[styles.container, { backgroundColor: isDark ? '#0f172a' : '#f8fafc' }]}
      contentContainerStyle={styles.content}
    >
      <View style={styles.profileContainer}>
        <Image
          source={require('../../assets/images/profile.jpg')}
          style={styles.profileImage}
        />
        
        <Text style={[styles.name, { color: isDark ? '#f1f5f9' : '#0f172a' }]}>
          Yasmin do Édem Santana Lopes
        </Text>
        
        <Text style={[styles.title, { color: isDark ? '#cbd5e1' : '#475569' }]}>
          Desenvolvedora Web & Analista de Dados
        </Text>
        
        <View style={styles.contactInfo}>
          <Text style={[styles.contactText, { color: isDark ? '#cbd5e1' : '#475569' }]}>
            Email: yasslopes2001@gmail.com | Tel: (81) 9.8245-2163
          </Text>
          <Text style={[styles.contactText, { color: isDark ? '#cbd5e1' : '#475569' }]}>
            Recife, PE
          </Text>
        </View>
        
        <View style={styles.socialContainer}>
          <TouchableOpacity 
            style={[styles.socialButton, { backgroundColor: isDark ? '#1e293b' : '#e2e8f0' }]}
            onPress={() => Linking.openURL('mailto:yasslopes2001@gmail.com')}
          >
            <FontAwesome5 name="envelope" size={20} color={isDark ? '#e2e8f0' : '#334155'} />
          </TouchableOpacity>
          <TouchableOpacity 
            style={[styles.socialButton, { backgroundColor: isDark ? '#1e293b' : '#e2e8f0' }]}
            onPress={() => Linking.openURL('https://linkedin.com/in/yasminlopes')}
          >
            <FontAwesome5 name="linkedin" size={20} color={isDark ? '#e2e8f0' : '#334155'} />
          </TouchableOpacity>
          <TouchableOpacity 
            style={[styles.socialButton, { backgroundColor: isDark ? '#1e293b' : '#e2e8f0' }]}
            onPress={() => Linking.openURL('tel:+5581982452163')}
          >
            <FontAwesome5 name="phone" size={20} color={isDark ? '#e2e8f0' : '#334155'} />
          </TouchableOpacity>
        </View>
      </View>
      
      <View style={[styles.card, { backgroundColor: isDark ? '#1e293b' : '#ffffff' }]}>
        <Text style={[styles.cardTitle, { color: isDark ? '#f1f5f9' : '#0f172a' }]}>Sobre Mim</Text>
        <Text style={[styles.cardText, { color: isDark ? '#cbd5e1' : '#475569' }]}>
          Iniciei minha jornada acadêmica estudando física por 3 anos, onde desenvolvi precisão e atenção aos detalhes. 
          Atualmente, estou redirecionando minha carreira para desenvolvimento web, cursando Sistemas para Internet.
          Minha formação analítica em física combinada com minha paixão por tecnologia traz uma perspectiva única para a área.
          Tenho grande interesse em desenvolvimento web, experiência do usuário (UX) e design de interface (UI).
        </Text>
      </View>
      
      <View style={[styles.card, { backgroundColor: isDark ? '#1e293b' : '#ffffff' }]}>
        <Text style={[styles.cardTitle, { color: isDark ? '#f1f5f9' : '#0f172a' }]}>Habilidades</Text>
        
        <View style={styles.skillsContainer}>
          <View style={styles.skillItem}>
            <FontAwesome5 name="code" size={24} color="#3b82f6" solid />
            <Text style={[styles.skillText, { color: isDark ? '#cbd5e1' : '#475569' }]}>HTML/CSS</Text>
          </View>
          
          <View style={styles.skillItem}>
            <FontAwesome5 name="paint-brush" size={24} color="#ec4899" solid />
            <Text style={[styles.skillText, { color: isDark ? '#cbd5e1' : '#475569' }]}>UX/UI Design</Text>
          </View>
          
          <View style={styles.skillItem}>
            <FontAwesome5 name="figma" size={24} color="#10b981" solid />
            <Text style={[styles.skillText, { color: isDark ? '#cbd5e1' : '#475569' }]}>Figma</Text>
          </View>
          
          <View style={styles.skillItem}>
            <FontAwesome5 name="python" size={24} color="#4f46e5" solid />
            <Text style={[styles.skillText, { color: isDark ? '#cbd5e1' : '#475569' }]}>Python</Text>
          </View>
          
          <View style={styles.skillItem}>
            <FontAwesome5 name="chart-bar" size={24} color="#f59e0b" solid />
            <Text style={[styles.skillText, { color: isDark ? '#cbd5e1' : '#475569' }]}>Análise de Dados</Text>
          </View>
          
          <View style={styles.skillItem}>
            <FontAwesome5 name="users" size={24} color="#6366f1" solid />
            <Text style={[styles.skillText, { color: isDark ? '#cbd5e1' : '#475569' }]}>Trabalho em Equipe</Text>
          </View>
        </View>
      </View>
      
      <View style={[styles.card, { backgroundColor: isDark ? '#1e293b' : '#ffffff' }]}>
        <Text style={[styles.cardTitle, { color: isDark ? '#f1f5f9' : '#0f172a' }]}>Idiomas</Text>
        
        <View style={styles.languageContainer}>
          <View style={styles.languageItem}>
            <Text style={[styles.languageName, { color: isDark ? '#f1f5f9' : '#0f172a' }]}>Português</Text>
            <View style={styles.languageLevel}>
              <View style={[styles.languageDot, { backgroundColor: '#3b82f6' }]} />
              <View style={[styles.languageDot, { backgroundColor: '#3b82f6' }]} />
              <View style={[styles.languageDot, { backgroundColor: '#3b82f6' }]} />
              <View style={[styles.languageDot, { backgroundColor: '#3b82f6' }]} />
              <View style={[styles.languageDot, { backgroundColor: '#3b82f6' }]} />
            </View>
          </View>
          
          <View style={styles.languageItem}>
            <Text style={[styles.languageName, { color: isDark ? '#f1f5f9' : '#0f172a' }]}>Inglês</Text>
            <View style={styles.languageLevel}>
              <View style={[styles.languageDot, { backgroundColor: '#3b82f6' }]} />
              <View style={[styles.languageDot, { backgroundColor: '#3b82f6' }]} />
              <View style={[styles.languageDot, { backgroundColor: '#3b82f6' }]} />
              <View style={[styles.languageDot, { backgroundColor: '#3b82f6' }]} />
              <View style={[styles.languageDot, { backgroundColor: isDark ? '#334155' : '#cbd5e1' }]} />
            </View>
          </View>
          
          <View style={styles.languageItem}>
            <Text style={[styles.languageName, { color: isDark ? '#f1f5f9' : '#0f172a' }]}>Espanhol</Text>
            <View style={styles.languageLevel}>
              <View style={[styles.languageDot, { backgroundColor: '#3b82f6' }]} />
              <View style={[styles.languageDot, { backgroundColor: '#3b82f6' }]} />
              <View style={[styles.languageDot, { backgroundColor: '#3b82f6' }]} />
              <View style={[styles.languageDot, { backgroundColor: '#3b82f6' }]} />
              <View style={[styles.languageDot, { backgroundColor: isDark ? '#334155' : '#cbd5e1' }]} />
            </View>
          </View>
          
          <View style={styles.languageItem}>
            <Text style={[styles.languageName, { color: isDark ? '#f1f5f9' : '#0f172a' }]}>Francês</Text>
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
      
      <View style={[styles.card, { backgroundColor: isDark ? '#1e293b' : '#ffffff' }]}>
        <Text style={[styles.cardTitle, { color: isDark ? '#f1f5f9' : '#0f172a' }]}>Pontos Fortes</Text>
        
        <View style={styles.strengthsContainer}>
          <View style={styles.strengthItem}>
            <FontAwesome5 name="search" size={18} color="#10b981" style={styles.strengthIcon} />
            <View style={styles.strengthTextContainer}>
              <Text style={[styles.strengthTitle, { color: isDark ? '#f1f5f9' : '#0f172a' }]}>Orientada a Detalhes</Text>
              <Text style={[styles.strengthDesc, { color: isDark ? '#cbd5e1' : '#475569' }]}>
                Minha formação em física me treinou para observar e agir sobre os mínimos detalhes.
              </Text>
            </View>
          </View>
          
          <View style={styles.strengthItem}>
            <FontAwesome5 name="crown" size={18} color="#eab308" style={styles.strengthIcon} />
            <View style={styles.strengthTextContainer}>
              <Text style={[styles.strengthTitle, { color: isDark ? '#f1f5f9' : '#0f172a' }]}>Liderança</Text>
              <Text style={[styles.strengthDesc, { color: isDark ? '#cbd5e1' : '#475569' }]}>
                Espírito natural de liderança, sempre pronta para assumir responsabilidades e orientar.
              </Text>
            </View>
          </View>
          
          <View style={styles.strengthItem}>
            <FontAwesome5 name="bolt" size={18} color="#3b82f6" style={styles.strengthIcon} />
            <View style={styles.strengthTextContainer}>
              <Text style={[styles.strengthTitle, { color: isDark ? '#f1f5f9' : '#0f172a' }]}>Aprendizado Rápido</Text>
              <Text style={[styles.strengthDesc, { color: isDark ? '#cbd5e1' : '#475569' }]}>
                Capacidade de absorver rapidamente novas informações e aplicá-las de forma eficaz.
              </Text>
            </View>
          </View>
          
          <View style={styles.strengthItem}>
            <FontAwesome5 name="brain" size={18} color="#ec4899" style={styles.strengthIcon} />
            <View style={styles.strengthTextContainer}>
              <Text style={[styles.strengthTitle, { color: isDark ? '#f1f5f9' : '#0f172a' }]}>Pensamento Analítico</Text>
              <Text style={[styles.strengthDesc, { color: isDark ? '#cbd5e1' : '#475569' }]}>
                Resolução de problemas com uma abordagem lógica e estruturada.
              </Text>
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
  profileContainer: {
    alignItems: 'center',
    marginBottom: 24,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 16,
  },
  name: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
  },
  title: {
    fontSize: 18,
    marginBottom: 12,
    textAlign: 'center',
  },
  contactInfo: {
    alignItems: 'center',
    marginBottom: 16,
  },
  contactText: {
    fontSize: 14,
    marginBottom: 4,
    textAlign: 'center',
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 16,
  },
  socialButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  cardText: {
    fontSize: 16,
    lineHeight: 24,
  },
  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
  },
  skillItem: {
    alignItems: 'center',
    width: '28%',
    marginBottom: 12,
  },
  skillText: {
    marginTop: 8,
    fontSize: 14,
    textAlign: 'center',
  },
  languageContainer: {
    gap: 12,
  },
  languageItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#334155',
  },
  languageName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  languageLevel: {
    flexDirection: 'row',
    gap: 4,
  },
  languageDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#cbd5e1',
  },
  strengthsContainer: {
    gap: 16,
  },
  strengthItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  strengthIcon: {
    marginTop: 2,
    marginRight: 12,
  },
  strengthTextContainer: {
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
});
