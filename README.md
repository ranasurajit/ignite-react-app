# 🔥 ignite-react-app

A lightweight CLI tool to instantly scaffold a React.js project with Webpack, Babel, and modern tooling — all from scratch.

## ⚡ Features

- Zero-config React + Webpack setup
- Hot Module Replacement (HMR)
- Babel for modern JavaScript/JSX support
- Auto-generated `index.html` with `HtmlWebpackPlugin`
- Instant dev server at `localhost:3000`
- Easy to extend and customize

## 🚀 Getting Started

### 1. Install the CLI globally

```bash
npm install -g ignite-react-app
```

### 2. Create a new React project

```bash
ignite-react-app my-awesome-app
```

### 3. Start the development server

```bash
cd my-awesome-app
npm start
```

Now open [http://localhost:3000](http://localhost:3000) and start building!

---

## 📦 Folder Structure

```
my-awesome-app/
├── public/
│   └── index.html
├── src/
│   ├── App.jsx
│   └── index.jsx
├── .babelrc
├── webpack.config.js
├── package.json
└── ...
```

---

## 🧠 Why Another CLI?

`ignite-react-app` is for developers who want:
- Full control over Webpack config
- To understand what goes under the hood of Create React App
- A minimal, extendable starting point for professional apps

---

## 🛠️ Tech Stack

- React 18+
- Webpack 5
- Babel 7
- HTML Webpack Plugin
- CSS + Style Loader
- dotenv support

---

## 🧩 Future Roadmap

- TypeScript template support
- Prettier + ESLint integration
- Template customization via flags
- Add SASS / Tailwind options
- Option to skip `npm install`

---

## 🙌 Contributing

Contributions, issues and suggestions are welcome!  
Please feel free to fork, submit PRs, or open issues.

---

## 📄 License

MIT © [Surajit Rana](https://github.com/ranasurajit)
