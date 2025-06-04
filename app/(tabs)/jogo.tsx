import React, { useState, useEffect } from 'react';
import { 
  StyleSheet, 
  View, 
  Text, 
  ScrollView, 
  TextInput, 
  TouchableOpacity, 
  useColorScheme,
  Alert,
  FlatList
} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

// Interface para tentativa do jogo
interface Attempt {
  guess: string;
  bulls: number;
  cows: number;
}

export default function JogoScreen() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';
  
  // Estado para armazenar a combinação secreta
  const [secretCode, setSecretCode] = useState<string>('');
  
  // Estado para armazenar o palpite atual do usuário
  const [currentGuess, setCurrentGuess] = useState<string>('');
  
  // Estado para armazenar as tentativas anteriores
  const [attempts, setAttempts] = useState<Attempt[]>([]);
  
  // Estado para controlar se o jogo acabou
  const [gameOver, setGameOver] = useState<boolean>(false);
  
  // Estado para armazenar a mensagem de fim de jogo
  const [gameOverMessage, setGameOverMessage] = useState<string>('');
  
  // Número máximo de tentativas
  const MAX_ATTEMPTS = 10;
  
  // Gera uma combinação aleatória de 4 dígitos
  const generateSecretCode = (): string => {
    let digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    let code = '';
    
    // Embaralha os dígitos e pega os 4 primeiros
    for (let i = 0; i < 4; i++) {
      const randomIndex = Math.floor(Math.random() * digits.length);
      code += digits[randomIndex];
      digits.splice(randomIndex, 1); // Remove o dígito usado para evitar repetições
    }
    
    return code;
  };
  
  // Inicia um novo jogo
  const startNewGame = () => {
    const newCode = generateSecretCode();
    setSecretCode(newCode);
    setCurrentGuess('');
    setAttempts([]);
    setGameOver(false);
    setGameOverMessage('');
    
    // Comentário para debug
    console.log('Nova combinação: ', newCode);
  };
  
  // Avalia o palpite atual e atualiza as tentativas
  const evaluateGuess = () => {
    // Verifica se o palpite tem 4 dígitos
    if (currentGuess.length !== 4) {
      Alert.alert('Entrada inválida', 'Por favor, digite 4 dígitos.');
      return;
    }
    
    // Verifica se tem dígitos repetidos
    const digits = new Set(currentGuess.split(''));
    if (digits.size !== 4) {
      Alert.alert('Entrada inválida', 'Não use dígitos repetidos.');
      return;
    }
    
    // Calcula bulls (número e posição corretos) e cows (número correto, posição errada)
    let bulls = 0;
    let cows = 0;
    
    for (let i = 0; i < 4; i++) {
      if (currentGuess[i] === secretCode[i]) {
        bulls++;
      } else if (secretCode.includes(currentGuess[i])) {
        cows++;
      }
    }
    
    // Adiciona a nova tentativa à lista
    const newAttempt: Attempt = { guess: currentGuess, bulls, cows };
    const newAttempts = [newAttempt, ...attempts]; // Adiciona no início para ordem reversa
    setAttempts(newAttempts);
    setCurrentGuess('');
    
    // Verifica se o jogador acertou (4 bulls)
    if (bulls === 4) {
      setGameOver(true);
      setGameOverMessage('Parabéns! Você descobriu a combinação secreta!');
      Alert.alert('Parabéns!', 'Você descobriu a combinação secreta!');
    } 
    // Verifica se o jogador esgotou as tentativas
    else if (newAttempts.length >= MAX_ATTEMPTS) {
      setGameOver(true);
      setGameOverMessage(`Fim de jogo! Você esgotou suas ${MAX_ATTEMPTS} tentativas. A combinação era ${secretCode}.`);
      Alert.alert('Fim de jogo!', `Você esgotou suas ${MAX_ATTEMPTS} tentativas. A combinação era ${secretCode}.`);
    }
  };
  
  // Mostra a combinação secreta
  const revealCode = () => {
    if (secretCode) {
      Alert.alert('Combinação secreta', `A combinação é: ${secretCode}`);
    } else {
      Alert.alert('Erro', 'Não foi possível carregar a combinação. Tente iniciar um novo jogo.');
      startNewGame();
    }
  };
  
  // Inicializa o jogo quando o componente é montado
  useEffect(() => {
    startNewGame();
  }, []);
  
  // Renderiza cada tentativa anterior
  const renderAttemptItem = ({ item, index }: { item: Attempt, index: number }) => (
    <View 
      style={[
        styles.attemptItem, 
        { backgroundColor: isDark ? '#1e293b' : '#ffffff' }
      ]}
    >
      <Text style={[styles.attemptNumber, { color: isDark ? '#94a3b8' : '#64748b' }]}>
        {attempts.length - index}
      </Text>
      <View style={styles.guessContainer}>
        {item.guess.split('').map((digit, i) => (
          <View 
            key={i} 
            style={[styles.digitContainer, { backgroundColor: isDark ? '#0f172a' : '#f1f5f9' }]}
          >
            <Text style={[styles.digit, { color: isDark ? '#f1f5f9' : '#0f172a' }]}>
              {digit}
            </Text>
          </View>
        ))}
      </View>
      <View style={styles.resultContainer}>
        <View style={styles.resultItem}>
          <FontAwesome5 name="bullseye" size={14} color="#ef4444" />
          <Text style={[styles.resultText, { color: isDark ? '#f1f5f9' : '#0f172a' }]}>
            {item.bulls}
          </Text>
        </View>
        <View style={styles.resultItem}>
          <FontAwesome5 name="dot-circle" size={14} color="#eab308" />
          <Text style={[styles.resultText, { color: isDark ? '#f1f5f9' : '#0f172a' }]}>
            {item.cows}
          </Text>
        </View>
      </View>
    </View>
  );

  return (
    <View style={[styles.container, { backgroundColor: isDark ? '#0f172a' : '#f8fafc' }]}>
      <View style={styles.header}>
        <Text style={[styles.title, { color: isDark ? '#f1f5f9' : '#0f172a' }]}>
          Jogo Senha
        </Text>
        <TouchableOpacity 
          style={[styles.revealButton, { backgroundColor: isDark ? '#1e293b' : '#e2e8f0' }]}
          onPress={revealCode}
        >
          <FontAwesome5 name="eye" size={16} color={isDark ? '#cbd5e1' : '#475569'} />
          <Text style={[styles.revealText, { color: isDark ? '#cbd5e1' : '#475569' }]}>
            Revelar código
          </Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.infoCard}>
        <Text style={[styles.infoTitle, { color: isDark ? '#f1f5f9' : '#0f172a' }]}>
          Como jogar:
        </Text>
        <Text style={[styles.infoText, { color: isDark ? '#cbd5e1' : '#475569' }]}>
          • Adivinhe a combinação secreta de 4 dígitos (0-9) sem repetições.{'\n'}
          • 🎯 (Bulls) = dígitos corretos na posição correta.{'\n'}
          • ◎ (Cows) = dígitos corretos na posição errada.{'\n'}
          • Você tem {MAX_ATTEMPTS} tentativas para acertar a combinação.
        </Text>
      </View>
      
      <View style={styles.inputSection}>
        <View style={[styles.inputContainer, { 
          backgroundColor: isDark ? '#1e293b' : '#ffffff',
          borderColor: gameOver ? '#475569' : '#3b82f6',
        }]}>
          <TextInput
            style={[styles.input, { color: isDark ? '#f1f5f9' : '#0f172a' }]}
            value={currentGuess}
            onChangeText={text => {
              // Aceita apenas dígitos e limita a 4 caracteres
              const cleaned = text.replace(/[^0-9]/g, '').slice(0, 4);
              setCurrentGuess(cleaned);
            }}
            keyboardType="number-pad"
            maxLength={4}
            placeholder="Digite 4 dígitos"
            placeholderTextColor={isDark ? '#64748b' : '#94a3b8'}
            editable={!gameOver}
          />
          
          <TouchableOpacity 
            style={[
              styles.guessButton, 
              { 
                backgroundColor: gameOver ? '#475569' : '#3b82f6',
                opacity: currentGuess.length === 4 && !gameOver ? 1 : 0.7,
              }
            ]}
            onPress={evaluateGuess}
            disabled={currentGuess.length !== 4 || gameOver}
          >
            <Text style={styles.guessButtonText}>Verificar</Text>
          </TouchableOpacity>
        </View>
        
        {gameOver && (
          <TouchableOpacity 
            style={styles.newGameButton}
            onPress={startNewGame}
          >
            <FontAwesome5 name="redo" size={16} color="#ffffff" />
            <Text style={styles.newGameText}>Novo Jogo</Text>
          </TouchableOpacity>
        )}
      </View>
      
      {gameOver && (
        <View style={[styles.gameOverContainer, { 
          backgroundColor: isDark ? '#1e293b' : '#ffffff',
          borderColor: gameOverMessage.includes('Parabéns') ? '#eab308' : '#ef4444',
          borderLeftWidth: 4,
        }]}>
          <FontAwesome5 
            name={gameOverMessage.includes('Parabéns') ? 'trophy' : 'exclamation-circle'} 
            size={24} 
            color={gameOverMessage.includes('Parabéns') ? '#eab308' : '#ef4444'} 
          />
          <Text style={[styles.gameOverText, { color: isDark ? '#f1f5f9' : '#0f172a' }]}>
            {gameOverMessage}
          </Text>
        </View>
      )}
      
      <View style={styles.attemptsContainer}>
        <Text style={[styles.attemptsTitle, { color: isDark ? '#f1f5f9' : '#0f172a' }]}>
          Tentativas: {attempts.length}/{MAX_ATTEMPTS}
        </Text>
        
        {attempts.length > 0 ? (
          <FlatList
            data={attempts}
            renderItem={renderAttemptItem}
            keyExtractor={(_, index) => index.toString()}
            style={styles.attemptsList}
            contentContainerStyle={styles.attemptsListContent}
          />
        ) : (
          <View style={styles.noAttemptsContainer}>
            <FontAwesome5 name="question-circle" size={40} color={isDark ? '#475569' : '#cbd5e1'} />
            <Text style={[styles.noAttemptsText, { color: isDark ? '#94a3b8' : '#64748b' }]}>
              Faça sua primeira tentativa!
            </Text>
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  revealButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
    gap: 6,
  },
  revealText: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  infoCard: {
    backgroundColor: '#3b82f6',
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
  },
  infoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#ffffff',
  },
  infoText: {
    fontSize: 14,
    lineHeight: 20,
    color: '#ffffff',
  },
  inputSection: {
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    borderRadius: 12,
    borderWidth: 2,
    overflow: 'hidden',
  },
  input: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: 2,
  },
  guessButton: {
    paddingHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  guessButtonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  newGameButton: {
    flexDirection: 'row',
    backgroundColor: '#10b981',
    borderRadius: 12,
    paddingVertical: 12,
    marginTop: 12,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
  },
  newGameText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  attemptsContainer: {
    flex: 1,
  },
  attemptsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  attemptsList: {
    flex: 1,
  },
  attemptsListContent: {
    paddingBottom: 16,
  },
  attemptItem: {
    flexDirection: 'row',
    borderRadius: 12,
    padding: 12,
    marginBottom: 10,
    alignItems: 'center',
  },
  attemptNumber: {
    fontSize: 14,
    fontWeight: 'bold',
    marginRight: 12,
    width: 20,
    textAlign: 'center',
  },
  guessContainer: {
    flexDirection: 'row',
    flex: 1,
    gap: 6,
  },
  digitContainer: {
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  digit: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  resultContainer: {
    flexDirection: 'row',
    gap: 12,
    marginLeft: 12,
  },
  resultItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  resultText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  noAttemptsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 16,
  },
  noAttemptsText: {
    fontSize: 16,
  },
  gameOverContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  gameOverText: {
    flex: 1,
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 12,
    lineHeight: 22,
  },
}); 