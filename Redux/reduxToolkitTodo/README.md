# 📝 Redux Toolkit Todo App

A modern and responsive **Todo Application** built with **React**, **Redux Toolkit**, and **Tailwind CSS**. This project demonstrates global state management using Redux Toolkit by implementing CRUD operations for todos.

## 🚀 Live Demo

🔗 https://redux-showcase.vercel.app

---

## 📸 Preview


<img width="1862" height="912" alt="Screenshot 2026-07-27 073145" src="https://github.com/user-attachments/assets/70d95af7-7c7b-4091-9604-d53ff9e4153a" />


---

## ✨ Features

- ➕ Add new todos
- ✏️ Edit existing todos
- 🔄 Update todo text
- ❌ Delete individual todos
- 🧹 Reset all todos
- 📊 Display total number of todos
- ⚡ Global state management with Redux Toolkit
- 🎨 Responsive UI with Tailwind CSS

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| React | Frontend Library |
| Redux Toolkit | State Management |
| React Redux | Connect React with Redux |
| Tailwind CSS | Styling |
| Vite | Build Tool |

---

## 📂 Project Structure

```text
src/
│
├── app/
│   └── store.js
│
├── features/
│   └── todo/
│       └── todoSlice.js
│
├── components/
│   ├── AddTodo.jsx
│   ├── TodoList.jsx
│   └── Stats.jsx
│
├── App.jsx
└── main.jsx
```

---

## ⚙️ Installation

Clone the repository:

```bash
git clone https://github.com/your-username/redux-todo-app.git
```

Go to the project directory:

```bash
cd redux-todo-app
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

---

## 🧠 Redux Toolkit Concepts Used

- configureStore()
- createSlice()
- Provider
- useDispatch()
- useSelector()
- Reducers
- Actions
- Payload
- Global State Management

---

## 🔄 Redux Data Flow

```text
User Action
     │
     ▼
dispatch(action)
     │
     ▼
Reducer (createSlice)
     │
     ▼
Redux Store Updates
     │
     ▼
useSelector Reads State
     │
     ▼
React Re-renders UI
```

---

## 📌 What I Learned

Through this project, I learned:

- How Redux Toolkit simplifies state management.
- Creating and configuring a Redux Store.
- Managing state with createSlice().
- Dispatching actions using useDispatch().
- Reading state using useSelector().
- Understanding the Redux data flow.
- Writing cleaner Redux code with Immer.

---

## 🌍 Real-World Use Cases

Redux Toolkit is commonly used in:

- 🛒 E-commerce Shopping Carts
- 🔐 Authentication Systems
- 🌙 Theme Switching
- 👤 User Profile Management
- 📦 Inventory Management
- 📊 Dashboards
- 📅 Task Management Applications

---

## 🎯 Future Improvements

- ✅ Mark todos as completed
- 🔍 Search todos
- 🏷️ Filter by status
- 🌙 Dark Mode
- 💾 Persist data using Local Storage
- ☁️ Backend integration with API

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository
2. Create a new branch

```bash
git checkout -b feature-name
```

3. Commit your changes

```bash
git commit -m "Add new feature"
```

4. Push to GitHub

```bash
git push origin feature-name
```

5. Open a Pull Request

---

## 📜 License

This project is licensed under the MIT License.

---

## 👨‍💻 Author

**Ali Haider**

- GitHub: https://github.com/md-alihaider
- Portfolio: https://alihaider-dev.vercel.app

---

⭐ If you found this project helpful, consider giving it a **star** on GitHub!
