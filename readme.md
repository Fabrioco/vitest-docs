````markdown
# 🧪 Projeto Vitest + Docker para Testes Unitários em Node.js + TypeScript

Este projeto é um exemplo prático de como configurar e executar **testes unitários** em uma aplicação Node.js com TypeScript, utilizando a ferramenta de testes moderna [Vitest](https://vitest.dev/), e como orquestrar esse ambiente usando **Docker** e **Docker Compose**.

---

## 🎯 Objetivo do Projeto

- Demonstrar como escrever testes simples para funções em TypeScript.
- Mostrar a configuração do Vitest para rodar testes e gerar relatórios de cobertura.
- Exibir o uso do Docker para criar um ambiente isolado, facilitando a execução dos testes sem precisar instalar nada localmente além do Docker.
- Ensinar como integrar Docker Compose para facilitar o gerenciamento do container.

---

## 📋 Tecnologias Utilizadas

| Tecnologia   | Descrição                                     | Links Oficiais                         |
|--------------|-----------------------------------------------|---------------------------------------|
| Node.js      | Ambiente JavaScript para servidor             | https://nodejs.org/                   |
| TypeScript   | Superset do JavaScript com tipagem estática   | https://www.typescriptlang.org/       |
| Vitest       | Framework de testes unitários moderno          | https://vitest.dev/                   |
| Docker       | Plataforma para criar, rodar e gerenciar containers | https://www.docker.com/             |
| Docker Compose| Ferramenta para definir e rodar multi-containers | https://docs.docker.com/compose/     |

---

## 📁 Estrutura do Projeto

```text
vitest-docs/
├── src/
│   ├── server.ts             # Arquivo de exemplo do servidor (sem lógica)
│   └── test/
│       ├── soma.ts           # Função que soma dois números
│       ├── subtracao.ts      # Função que subtrai dois números
│       └── soma.test.ts      # Teste unitário para a função soma
├── Dockerfile                # Instruções para construir a imagem Docker
├── docker-compose.yml        # Configuração para rodar o container via Compose
├── vitest.config.ts          # Configurações do Vitest
├── package.json              # Dependências e scripts do npm
└── tsconfig.json             # Configuração do TypeScript
````

---

## ⚙️ Configuração Inicial

### Requisitos

* [Node.js](https://nodejs.org/en/download/) (para rodar localmente, caso queira)
* [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) (vem junto com Node)
* [Docker](https://docs.docker.com/get-docker/) e [Docker Compose](https://docs.docker.com/compose/install/) instalados

---

## 🔧 Como usar

### Rodando localmente (sem Docker)

1. Clone o repositório:

   ```bash
   git clone https://github.com/Fabrioco/vitest-docs.git
   cd vitest-docs
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Rode os testes com cobertura:

   ```bash
   npm run test
   ```

4. Abra o relatório de cobertura (gerado em `coverage/index.html`) no navegador para visualizar os detalhes.

---

### Rodando via Docker + Docker Compose

> Você só precisa do Docker instalado para rodar esse passo.

1. Clone o repositório e entre na pasta:

   ```bash
   git clone https://github.com/Fabrioco/vitest-docs.git
   cd vitest-docs
   ```

2. Suba o container (irá construir a imagem se for a primeira vez):

   ```bash
   docker compose up --build
   ```

3. Isso irá rodar o comando `npm run dev` dentro do container, que deixa o Vitest rodando em modo watch.

4. Para rodar os testes uma única vez com cobertura, você pode entrar no container:

   ```bash
   docker exec -it app-vitest bash
   npm run test
   ```

5. Para parar o container:

   ```bash
   docker compose down
   ```

---

## 🧪 Testes e Cobertura

### Scripts npm configurados

No `package.json`:

```json
"scripts": {
  "dev": "vitest --watch",
  "test": "vitest run --coverage"
}
```

* `npm run dev`: executa o Vitest em modo de observação, para desenvolvimento interativo.
* `npm run test`: executa os testes uma única vez e gera relatório de cobertura.

### Como escrever testes

Exemplo em `src/test/soma.test.ts`:

```ts
import { describe, it, expect } from "vitest";
import { soma } from "./soma";

describe("Função soma", () => {
  it("Deve somar dois números corretamente", () => {
    expect(soma(2, 3)).toBe(5);
  });
});
```

---

## 📄 Explicando os arquivos Docker

### Dockerfile

```Dockerfile
FROM node:18

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

CMD ["npm", "run", "dev"]
```

* Define a imagem base do Node 18.
* Copia os arquivos de dependência e instala os pacotes.
* Copia o restante do projeto.
* Define o comando padrão para rodar `npm run dev`.

### docker-compose.yml

```yaml
version: "3.8"

services:
  app:
    build:
      context: .
      dockerfile: Dockerfile
    command: npm run dev
    container_name: app-vitest
    volumes:
      - .:/app
    tty: true
```

* Define um serviço chamado `app` que será o container do seu projeto.
* Mapeia o código local para dentro do container (`volumes`).
* Executa o comando `npm run dev`.
* Mantém o terminal interativo.

---

## 📌 Boas práticas e dicas

* **Não versionar arquivos gerados automaticamente:**
  A pasta `coverage/` está no `.gitignore` porque é gerada ao rodar os testes e não precisa ficar no Git.

* **Use o Docker para garantir que todos rodem o projeto no mesmo ambiente**
  Isso evita bugs que acontecem só em algumas máquinas por diferenças de versão.

* **Adicione mais testes para aumentar a cobertura**
  Crie testes para as funções em `subtracao.ts` e qualquer outra função que for adicionar.

---

## 🎓 Sugestões para estudo

* Crie uma função `multiplicar` e teste ela.
* Crie uma função que lance erro (ex: divisão por zero) e teste se o erro é lançado.
* Use os comandos Docker para entrar no container e experimentar rodar testes manualmente.
* Experimente modificar o `docker-compose.yml` para rodar `npm run test` automaticamente ao subir.
* Explore a documentação oficial do Vitest para testar mocks, spies, hooks e mais.

---

## 🤝 Contribuições

Contribuições são bem-vindas! Faça um fork, crie branches com melhorias e envie pull requests.

---

## 📜 Licença

Este projeto está licenciado sob a licença MIT.

---

## 👨‍💻 Autor

Fabrício Oliveira Lopes
[https://github.com/Fabrioco](https://github.com/Fabrioco)

---
