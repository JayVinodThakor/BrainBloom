# BrainBlossom

# 🌸 BrainBloom AI

An AI-powered learning chatbot with voice interaction, built with Node.js, Express, MongoDB, and Groq (LLaMA 3.3 70B).

> Talk to your AI tutor — by text or voice — right from your browser.

---

## 🚀 Features

- 🔐 User Authentication (Register & Login with JWT)
- 🤖 AI Chat powered by **Groq API** (LLaMA 3.3 70B)
- 🎤 Voice Input via Web Speech API
- 🔊 Text-to-Speech AI responses (female voice)
- 🌀 Animated AI Orb that reacts while speaking
- 💾 MongoDB for user data storage
- 🚂 Deployed on Railway

---

## 🛠️ Tech Stack

| Layer      | Technology                        |
|------------|-----------------------------------|
| Frontend   | HTML, CSS, JavaScript             |
| Backend    | Node.js, Express.js               |
| Database   | MongoDB (Mongoose)                |
| AI Model   | Gemini- GEN AI                    |
| Auth       | JWT + bcryptjs                    |
| Hosting    | Railway                           |

---

## 📁 Project Structure
brainbloom/
├── server.js          # Express server, routes, Groq API integration
├── package.json       # Dependencies and scripts
├── index.html         # Login / Signup page
├── dashboard.html     # Main chat dashboard
└── .env               # Environment variables (not committed)

---

## ⚙️ Setup & Installation

### 1. Clone the repository
```bash
git clone https://github.com/your-username/brainbloom.git
cd brainbloom
```

### 2. Install dependencies
```bash
npm install
```

### 3. Create a `.env` file in the root directory
```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
GROQ_API_KEY=your_groq_api_key
PORT=5000
```

### 4. Start the server
```bash
npm start
```

### 5. Open the frontend
Open `index.html` in your browser, or serve it with a local server (e.g., Live Server in VS Code).

---

## 🔌 API Endpoints

| Method | Endpoint        | Description              |
|--------|-----------------|--------------------------|
| GET    | `/`             | Health check             |
| POST   | `/api/register` | Register a new user      |
| POST   | `/api/login`    | Login and receive token  |
| POST   | `/api/chat`     | Send message to AI       |

### Example — Chat Request
```json
POST /api/chat
{
  "message": "Explain photosynthesis simply"
}
```

### Example — Chat Response
```json
{
  "reply": "Photosynthesis is how plants make food using sunlight..."
}
```

---

## 🌐 Environment Variables

| Variable      | Description                        |
|---------------|------------------------------------|
| `MONGO_URI`   | MongoDB connection string          |
| `JWT_SECRET`  | Secret key for signing JWT tokens  |
| `GROQ_API_KEY`| API key from [console.groq.com](https://console.groq.com) |
| `PORT`        | Port to run the server (default 5000) |

---

## 🔒 Security Notes

- Passwords are hashed using **bcryptjs** (salt rounds: 10)
- JWT tokens expire in **1 hour**
- `.env` is gitignored — never commit your secrets

---

## 🧑‍💻 Contributing

1. Fork the repo
2. Create a branch: `git checkout -b feature/your-feature`
3. Commit: `git commit -m "Add your feature"`
4. Push: `git push origin feature/your-feature`
5. Open a Pull Request

---

## 📄 License

MIT License — free to use and modify.

---

## 👥 Team

Built with 💜 at UIT x KIIF Hackathon 2026
