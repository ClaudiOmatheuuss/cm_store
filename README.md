# 🛒 CRUD de Produtos com Node.js, Express, MongoDB e EJS

Este é um projeto de CRUD de produtos utilizando Node.js com Express, MongoDB (via Mongoose) e o motor de visualização EJS. Ele permite:

- Criar, listar e buscar produtos via API (JSON)
- Listar produtos no navegador com renderização de páginas EJS

---

## 🚀 Funcionalidades

- 📦 Listar todos os produtos (`/products`)
- 🔍 Buscar um produto por ID (`/products/:id`)
- 🖼️ Ver produtos renderizados no HTML com EJS (`/views/products`)
- 🌐 Página simples `/home` como teste
- 🔧 Middleware de log de requisições
- ✅ Conexão com banco de dados MongoDB via Mongoose

---

## 🛠 Tecnologias utilizadas

- Node.js
- Express.js
- MongoDB + Mongoose
- EJS (para renderização de views)
- dotenv

---

## 📁 Estrutura de Pastas

project/
├── modules/
│ ├── express.js # Onde o app Express está configurado
│ └── ... # Outros módulos de exemplo (fs, http, path)
├── src/
│ ├── database/
│ │ └── connect.js # Conexão com MongoDB
│ ├── models/
│ │ └── product.model.js # Schema do produto
│ └── views/
│ └── index.ejs # Visualização dos produtos
├── .env
├── .gitignore
├── index.js # Arquivo principal
├── package.json


---

## 📦 Instalação

1. **Clone o repositório**:
```bash
git clone https://github.com/ClaudiOmatheuuss/cm_store.git
cd seu-repo

2. **Instale as dependências**:
npm install

3. Configure seu arquivo .env com usuário e senha do MongoDB Atlas:

MONGODB_USERNAME=admin
MONGODB_PASSWORD=admin

Rode o projeto:
npm run dev

📡 Rotas disponíveis
Método	Rota	Descrição
GET	/home	Página simples "Hello World"
GET	/products	Retorna todos os produtos (JSON)
GET	/products/:id	Retorna um produto pelo ID
GET	/views/products	Renderiza os produtos com EJS

📌 Exemplo de Produto
{
  "_id": "64d8123c7ab3ff35e25d9c41",
  "name": "Mouse Gamer",
  "price": 149.99,
  "category": "Periféricos"
}

💡 Melhorias futuras (sugestões)
  - Adicionar rotas POST, PUT e DELETE para completar o CRUD

  - Validação com Joi ou middleware de validação

  - Paginação e filtros

  - Estilização com CSS nas views EJS

  - Upload de imagens com multer

🧠 Aprendizados
- Uso de Express com middleware e roteamento

- Conexão segura com MongoDB via Mongoose

- Renderização com EJS

- Separação de responsabilidades no projeto usando ejs e node(modularização)

📃 Licença
Este projeto é livre para fins de estudo e aprimoramento profissional.