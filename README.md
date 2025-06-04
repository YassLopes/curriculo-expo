# Currículo/Portfólio Mobile

Um aplicativo mobile desenvolvido com React Native e Expo, que funciona como um currículo/portfólio interativo.

## Funcionalidades

- **Design Responsivo:** Interface moderna e adaptável a diferentes tamanhos de tela
- **Tema Claro/Escuro:** Suporte automático para temas claros e escuros do sistema
- **Navegação por Abas:** Navegação simples e intuitiva entre as seis seções principais
- **Jogo Interativo:** Implementação do jogo "Senha" (Bulls and Cows)

## Seções do Aplicativo

1. **Home:** Página inicial com informações básicas e habilidades
2. **Sobre:** Tecnologias utilizadas no desenvolvimento do aplicativo
3. **Acadêmico:** Formação acadêmica e certificações
4. **Profissional:** Experiência profissional e especialidades
5. **Projetos:** Portfólio de projetos desenvolvidos
6. **Jogo:** Implementação do jogo Senha (Bulls and Cows)

## Tecnologias Utilizadas

- **React Native:** Framework para desenvolvimento de aplicativos móveis
- **Expo:** Plataforma para simplificar o desenvolvimento React Native
- **Expo Router:** Sistema de navegação baseado em arquivos
- **TypeScript:** Tipagem estática para JavaScript
- **React Hooks:** useState, useEffect, useColorScheme
- **Componentes Personalizados:** Criação de componentes reutilizáveis

## Jogo Senha (Bulls and Cows)

O jogo implementado na seção "Jogo" é uma versão digital do clássico jogo Senha (também conhecido como Bulls and Cows). As regras são:

- O aplicativo gera uma combinação secreta de 4 dígitos (0-9) sem repetições
- O jogador tenta adivinhar a combinação em até 10 tentativas
- A cada tentativa, o jogo informa:
  - Bulls (🎯): Dígitos corretos na posição correta
  - Cows (◎): Dígitos corretos na posição errada
- O jogo termina quando o jogador acerta a combinação ou esgota as tentativas

## Como Executar o Projeto

### Pré-requisitos

- Node.js
- npm ou yarn
- Expo CLI

### Passos para Executar

1. Clone o repositório:
   ```
   git clone https://github.com/seu-usuario/curriculo-expo.git
   ```

2. Navegue até a pasta do projeto:
   ```
   cd curriculo-expo
   ```

3. Instale as dependências:
   ```
   npm install
   ```
   ou
   ```
   yarn install
   ```

4. Inicie o servidor de desenvolvimento:
   ```
   npx expo start
   ```

5. Escaneie o QR code com o aplicativo Expo Go no seu dispositivo ou use um emulador

## Estrutura de Arquivos

```
curriculo/
├── app/                 # Arquivos de tela e navegação
│   ├── (tabs)/          # Telas organizadas em abas
│   │   ├── index.tsx    # Tela Home
│   │   ├── sobre.tsx    # Tela Sobre
│   │   ├── academico.tsx # Tela Acadêmico
│   │   ├── profissional.tsx # Tela Profissional
│   │   ├── projetos.tsx # Tela Projetos
│   │   ├── jogo.tsx     # Tela Jogo
│   │   └── _layout.tsx  # Layout das abas
│   └── _layout.tsx      # Layout principal
├── assets/              # Imagens, fontes e outros recursos
├── components/          # Componentes reutilizáveis
└── constants/           # Constantes e configurações
```

## Licença

Este projeto está licenciado sob a licença MIT - consulte o arquivo LICENSE para obter detalhes.

---

Desenvolvido como parte de um projeto educacional.
