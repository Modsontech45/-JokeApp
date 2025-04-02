# -JokeApp
A simple joke generator using Node.js and Express
# 😂 Joke Generator App

A simple **Joke Generator** web app built with **Node.js, Express, and EJS**. Users can select a joke category, and the app fetches a random joke from [JokeAPI](https://v2.jokeapi.dev/).

![Demo](https://your-demo-image-url.com) *(Optional: Add a screenshot here!)*

---

## 🚀 Features
- Select different joke categories (Programming, Dark, Pun, etc.).
- Fetch jokes dynamically using [JokeAPI](https://v2.jokeapi.dev/).
- Display jokes on the webpage with **EJS templating**.
- Beautiful and responsive UI with **CSS styling**.

---





## 🛠️ Installation & Setup

1. **Clone the repository:**
   ```sh
   git clone <YOUR_GITHUB_REPO_URL>
   cd JokeApp

 2. **Install dependencies and Run the app:**
   ```sh
    npm install
    node index.js
    http://localhost:3000
```

📂 Project Structure


JokeApp/
│── public/              # Static files (CSS, images)
│   ├── styles/          # CSS folder
│   ├── style.css        # Main stylesheet
│
│── views/               # EJS templates
│   ├── index.ejs        # Main HTML page
│
│── node_modules/        # Dependencies (not included in Git)
│── .gitignore           # Ignore node_modules
│── index.js             # Main server file
│── package.json         # Project metadata & dependencies
│── README.md            # Project documentation

🔗 API Used
This app uses the JokeAPI to fetch random jokes:

Base URL:
```sh
https://v2.jokeapi.dev/joke/{category}
```
Example:
```sh
https://v2.jokeapi.dev/joke/Programming

```
🤝 Contributing
Want to contribute? Follow these steps:

Fork the repo.

Create a new branch (git checkout -b feature-name).

Commit your changes (git commit -m "Added feature X").

Push to GitHub (git push origin feature-name).

Open a Pull Request!

📜 License
This project is MIT Licensed. Feel free to use and modify it. 🎉


