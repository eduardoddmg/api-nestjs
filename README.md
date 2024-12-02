<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

---

# **Projeto: API CRUD de Usuários com NestJS e Prisma**

Este projeto é uma API desenvolvida com o framework **NestJS** para gerenciar operações de **CRUD (Create, Read, Update, Delete)** de usuários, utilizando o **Prisma ORM** como interface para o banco de dados.

---

## **Visão Geral**

Este projeto tem como objetivo demonstrar a aplicação prática de conceitos como:

- **Estrutura Modular com NestJS**
- **Integração com Prisma ORM**
- **Validação de Dados**
- **Boas Práticas de Versionamento com Git Flow**
- **Manutenção de APIs RESTful**

---

## **Tecnologias Utilizadas**

### **Backend**
- **[NestJS](https://nestjs.com/):** Framework Node.js progressivo para criação de aplicações escaláveis.
- **[Prisma](https://www.prisma.io/):** ORM moderno para manipulação de bancos de dados relacionais e NoSQL.
- **[SQLite](https://sqlite.org/index.html):** Banco de dados relacional leve para ambiente de desenvolvimento.
  
### **Outras Dependências**
- **Class Validator e Class Transformer:** Para validação e transformação de dados recebidos.
- **Dotenv:** Para gerenciar variáveis de ambiente.

---

## **Instalação e Configuração**

### **1. Pré-requisitos**
- **Node.js** v16 ou superior
- **NPM** ou **Yarn**

### **2. Clonar o Repositório**
```bash
git clone https://github.com/eduardoddmg/api-nestjs.git
cd nestjs-prisma-crud
```

### **3. Instalar Dependências**
```bash
npm install
```

### **4. Configurar o Banco de Dados**
O projeto utiliza o **SQLite** para desenvolvimento. Certifique-se de que o arquivo de configuração do Prisma está correto em `prisma/schema.prisma`:

```prisma
datasource db {
  provider = "sqlite"
  url      = "file:./dev.db"
}
```

Crie o banco de dados e sincronize os modelos:
```bash
npx prisma db push
```

### **5. Rodar a Aplicação**
```bash
# Modo desenvolvimento
npm run start:dev
```

A aplicação estará disponível em: [http://localhost:3000](http://localhost:3000)

---

## **Estrutura do Projeto**

```
src
├── app.module.ts        # Módulo principal
├── prisma               # Configuração do Prisma ORM
│   ├── prisma.module.ts
│   └── prisma.service.ts
├── user                 # Módulo de Usuários
│   ├── user.module.ts
│   ├── user.service.ts
│   └── user.controller.ts
```

- **Prisma:** Contém o serviço de conexão e manipulação do banco de dados.
- **User:** Implementa as operações CRUD para a entidade `User`.

---

## **Endpoints**

### **Base URL:** `http://localhost:3000`

### **1. Criar Usuário**
**POST** `/users`

#### **Body**
```json
{
  "name": "Carlos Eduardo",
  "email": "carlos@example.com"
}
```

#### **Resposta**
```json
{
  "id": 1,
  "name": "Carlos Eduardo",
  "email": "carlos@example.com",
  "createdAt": "2024-12-02T12:00:00.000Z"
}
```

---

### **2. Listar Usuários**
**GET** `/users`

#### **Resposta**
```json
[
  {
    "id": 1,
    "name": "Carlos Eduardo",
    "email": "carlos@example.com",
    "createdAt": "2024-12-02T12:00:00.000Z"
  }
]
```

---

### **3. Buscar Usuário por ID**
**GET** `/users/:id`

#### **Resposta**
```json
{
  "id": 1,
  "name": "Carlos Eduardo",
  "email": "carlos@example.com",
  "createdAt": "2024-12-02T12:00:00.000Z"
}
```

---

### **4. Atualizar Usuário**
**PUT** `/users/:id`

#### **Body**
```json
{
  "name": "Carlos Eduardo Silva"
}
```

#### **Resposta**
```json
{
  "id": 1,
  "name": "Carlos Eduardo Silva",
  "email": "carlos@example.com",
  "createdAt": "2024-12-02T12:00:00.000Z"
}
```

---

### **5. Deletar Usuário**
**DELETE** `/users/:id`

#### **Resposta**
```json
{
  "message": "Usuário deletado com sucesso."
}
```

---

## **Testes**

### **1. Testes Unitários**
```bash
npm run test
```

### **2. Testes E2E (End-to-End)**
```bash
npm run test:e2e
```

---

## **Validação de Dados**

Este projeto utiliza `class-validator` para garantir a integridade dos dados recebidos.

### Exemplo de Validação
Caso tente criar um usuário sem email, a API retornará:
```json
{
  "statusCode": 400,
  "message": ["email must be an email"],
  "error": "Bad Request"
}
```

---

## **Boas Práticas Utilizadas**

1. **Estrutura Modular:** Cada módulo é independente, facilitando manutenção e escalabilidade.
2. **Git Flow:** Estratégia de versionamento clara e organizada.
3. **Validação de Dados:** Garantia de consistência e segurança.
4. **ORM Prisma:** Operações de banco de dados eficientes e seguras.

---

## **Licença**

Este projeto está licenciado sob a [Licença MIT](LICENSE).

---

## **Contribuição**

Contribuições são bem-vindas! Para contribuir:
1. Faça um fork do projeto.
2. Crie uma branch para sua feature (`git checkout -b feature/sua-feature`).
3. Envie um pull request com suas alterações.

---

## **Contato**

- **Autor:** Carlos Eduardo
- **Email:** [eduardoddmg@gmail.com](mailto:eduardoddmg@gmail.com)
- **LinkedIn:** [Eduardo Melo](https://linkedin.com/in/eduardoddmg)

Sinta-se à vontade para dar feedbacks e sugestões! 🎉
