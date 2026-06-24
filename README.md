# CBE Receipt Verifier

A clean, internal web tool that automates **Commercial Bank of Ethiopia (CBE) receipt verification**. Instead of manually constructing verification URLs, users simply enter an FT number and account digits — and the tool handles the rest instantly.

Built for **Gefrem Engineering** (Axon Tech) internal team use.

---

## 🔥 Live Demo

🌐 [cbe-verifier-1.vercel.app](https://cbe-verifier-1.vercel.app)

---

## 📸 Preview

![home](https://res.cloudinary.com/dineyc77u/image/upload/v1782337296/cbe_verifier_irsc9i.png)

---

## 💡 The Problem It Solves

CBE receipt verification requires navigating to a specific URL format:

```
https://apps.cbe.com.et:100/?id=<FT_NUMBER><LAST_8_DIGITS>
```

Doing this manually for every receipt is slow and error-prone — especially for teams processing multiple transactions daily. This tool eliminates that friction entirely.

---

## ✨ Features

- **Instant URL construction** — builds the CBE verification URL in real time as you type
- **Live URL preview** — shows the exact URL before opening it, with color-coded FT and account segments
- **One-click verify** — opens the CBE receipt page directly in a new tab
- **Copy URL** — copies the generated link to clipboard with a visual confirmation
- **Keyboard-first UX** — press `Enter` in FT field to jump to account field; press `Enter` again to verify
- **Input validation** — verify button is disabled until both fields are correctly filled (12-char FT + 8-digit account)
- **Clean, minimal UI** — green brand palette matching CBE's color identity

---

## 🛠️ Built With

| Technology | Purpose |
|---|---|
| React | UI components and state management |
| Tailwind CSS | Styling and responsive layout |
| Vite | Fast development and production builds |
| Vercel | Deployment and hosting |

---

## 📁 Project Structure

```
cbe_verifier/
├── public/
├── src/
│   ├── icons/
│   │   └── Icons.jsx        # Custom SVG icons (Receipt, Copy, Check, ExternalLink)
│   ├── App.jsx              # Main app logic and UI
│   └── main.jsx
├── index.html
├── tailwind.config.js
└── vite.config.js
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js v18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/smile679/cbe_verifier-1.git

# Navigate into the project directory
cd cbe_verifier-1

# Install dependencies
npm install

# Start the development server
npm run dev
```

The app will be running at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

---

## 🧠 How It Works

1. User enters the **FT number** (12 characters, e.g. `FT260886R92Z`)
2. User enters the **last 8 digits** of the CBE account number
3. The tool constructs the URL: `https://apps.cbe.com.et:100/?id=FT260886R92Z76345507`
4. User clicks **Verify Receipt** → CBE receipt page opens in a new tab
5. User can also **Copy URL** to share or save it

---

## 👨‍💻 Developer

**Samson Gidey** — Fullstack MERN Developer & UI Designer

- 🌐 Portfolio: [samsongideyportfolio.netlify.app](https://samsongideyportfolio.netlify.app)
- 💼 GitHub: [@smile679](https://github.com/smile679)
- 📧 Email: samsongidey9@gmail.com
- 🔗 LinkedIn: [Samson Gidey](https://www.linkedin.com/in/samson-gidey-b5a905303)

---

## 📄 License

Built for internal use by **Gefrem Engineering / Axon Tech**. All rights reserved.
