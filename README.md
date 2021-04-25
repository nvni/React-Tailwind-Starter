# React + Tailwind CSS

## Tech Stack

**Client:** React, Redux, TailwindCSS

**Server:** Node, Express

## Installation

React App

```bash
  npx create-react-app my-app
  cd my-app
```

Install Tailwind CSS

```bash
  yarn install -D tailwindcss@latest postcss@latest autoprefixer@lates
```

Install npm-run-all

```bash
  yarn add npm-run-all --dev
```

Setup Config

```bash
  npx tailwindcss init -p
  touch postcss.config.js
```

Edit Config

`tailwind.config.js`

```javascript
module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
```

`postcss.config.js`

```javascript
const tailwindcss = require("tailwindcss");
module.exports = {
  plugins: [tailwindcss("./tailwind.config.js"), require("autoprefixer")],
};
```

`package.json`

```json
  "scripts": {
    "dev:start": "react-scripts start",
    "dev:css": "NODE_ENV=development postcss src/assets/tailwind.css -o src/assets/main.css",
    "dev":"run-p dev:*",
    "start": "react-scripts start",
    "build": "npm run watch:css && react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject",
    "watch:css": "postcss src/assets/tailwind.css -o src/assets/main.css"
  },
```

## Deployment

To deploy this project run

```bash
  npm run deploy
```

## Documentation

https://tailwindcss.com/docs/just-in-time-mode#enabling-jit-mode
