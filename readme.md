# vitest-docs

> API backend em TypeScript com Express, Prisma e testes com Vitest + Supertest, rodando via Docker — ideal para estudo.

---

## Índice

- [Sobre](#sobre)
- [Pré-requisitos](#pré-requisitos)
- [Configuração](#configuração)
- [Rodando o backend com Docker](#rodando-o-backend-com-docker)
- [Rodando os testes](#rodando-os-testes)
- [Estrutura do projeto](#estrutura-do-projeto)
- [Endpoints](#endpoints)
- [Contribuição](#contribuição)
- [Licença](#licença)

---

## Sobre

Projeto backend para gerenciamento de tarefas, feito para estudo prático com Docker, TypeScript, Prisma e testes.

---

## Pré-requisitos

- Docker e Docker Compose instalados
- Git instalado

---

## Configuração

Copie o arquivo `.env.example` para `.env` e ajuste conforme seu ambiente:

```bash
cp .env.example .env
```

---

## Rodando o backend com Docker

Para subir o backend com o banco em containers Docker, execute:

```bash
docker-compose up --build
```

Esse comando:

- Cria e sobe os containers da aplicação e do banco (SQLite ou outro)
- O backend ficará disponível na porta configurada no `.env` (padrão 3000)

**Importante:** O backend precisa estar rodando para que os testes possam se conectar.

---

## Em outro terminal

Rode:

```bash
docker exec -it app-vitest bash
```

### Rodar os seeds do projeto

```bash
npm run prisma:seed
```

### Fazer os testes com Supertest

Rode:

```bash
npm test
```

Os testes utilizam o **Supertest** para fazer requisições HTTP ao servidor em execução.

---

### Fluxo recomendado

1. Copie o arquivo `.env.example` e ajuste conforme necessário:

```bash
cp .env.example .env
```

2. Inicie o backend via Docker:

```bash
docker-compose up --build
```

3. Em outro terminal, acesse o container:

```bash
docker exec -it app-vitest bash
```

4. Rode os seeds do banco:

```bash
npm run prisma:seed
```

5. Execute os testes:

```bash
npm test
```

Assim, os testes simulam requisições reais para o servidor ativo.

---

## Estrutura do projeto

```
src/
 ├─ app.ts               # Configuração do Express e rotas
 ├─ server.ts            # Inicialização do servidor
 ├─ modules/task/        # Módulo das tarefas
 │    ├─ routes.ts       # Rotas da API
 │    ├─ service.ts      # Lógica de acesso ao banco via Prisma
 │    └─ controller.ts   # (se existir) Controladores HTTP
prisma/
 ├─ schema.prisma        # Modelo do banco de dados Prisma
 ├─ migrations/          # Migrations do banco
tests/                   # Testes com Vitest e Supertest
.env.example             # Exemplo de variáveis de ambiente
Dockerfile               # Configuração do container da aplicação
docker-compose.yml       # Configuração do Docker Compose
package.json             # Dependências e scripts npm
tsconfig.json            # Configuração TypeScript
vitest.config.ts         # Configuração Vitest
```

---

## Endpoints disponíveis

| Método | Endpoint     | Descrição                              |
| ------ | ------------ | -------------------------------------- |
| GET    | `/`          | Rota raiz, retorna texto simples       |
| GET    | `/api/tasks` | Retorna lista de tarefas               |

---

## Contribuição

Sinta-se livre para contribuir seguindo estes passos:

1. Faça um fork do projeto
2. Crie uma branch para sua feature/correção:

```bash
git checkout -b minha-feature
```

3. Faça commits claros e objetivos
4. Envie um Pull Request detalhando as mudanças

---

## Licença

Projeto licenciado sob a licença MIT.

---

# Contato

Desenvolvido por Fabrício Oliveira Lopes

---

# Bom estudo e bons testes! 🚀

