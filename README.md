# Games Library

Projeto de estudo em React e TypeScript para praticar conceitos fundamentais de desenvolvimento frontend.

## 📝 Descrição

Aplicação simples de gerenciamento de jogos onde é possível adicionar e remover títulos com capa. Desenvolvida com foco em entender os pilares do React moderno aliando TypeScript e estilização com styled-components. Os dados são mantidos em `localStorage` para persistência entre sessões.

## 🔍 Preview

- Tela principal exibindo uma lista de jogos com capa e título.
- Formulário para inserir um novo jogo, indicando título e URL da imagem da capa.
- Botão para remover cada jogo cadastrado.

> O objetivo não é entregar uma solução completa, mas demonstrar o fluxo de estados e componentes.

## 🚀 Tecnologias utilizadas

- **React** (17/18) com hooks (`useState`)
- **TypeScript** para tipagem estática
- **styled-components** para estilização de componentes
- **Vite** como bundler / dev server

## 🧠 Conceitos praticados

- Componentização e composição de UI
- Gerenciamento de estado com `useState`
- Tipagem de props e estados em TypeScript
- Persistência simples com `localStorage`
- Criação de componentes estilizados usando `styled-components`

## 🛠️ Como rodar o projeto localmente

```bash
# clonar o repositório
git clone <URL-DO-REPO>
cd games-library

# instalar dependências (usa pnpm)
pnpm install

# iniciar servidor de desenvolvimento
pnpm dev
```

A aplicação estará disponível em `http://localhost:5173` (ou porta exibida pelo terminal).

## 📁 Estrutura do projeto

```
src/
├─ assets/          # imagens ou arquivos estáticos usados
├─ components/      # componentes React reutilizáveis
│  ├─ Game.tsx      # cartão de jogo
│  └─ InputText.tsx # campo de texto estilizado
├─ App.tsx          # componente raiz
└─ main.tsx         # ponto de entrada do React

public/             # arquivos estáticos servidos

package.json
vite.config.ts
```

## 🔮 Possíveis melhorias futuras

- Adicionar validação de formulário e feedback para entradas inválidas.
- Implementar edição de jogos já cadastrados.
- Utilizar contexto ou `useReducer` para gerenciar estado mais complexo.
- Migrar para uma API externa para persistência real.
- Incluir testes unitários com Jest/React Testing Library.

## 🧑‍💻 Autor

Iury H. — desenvolvedor estudando React e TypeScript.
