# CodePulse — LeetCode Analyzer

CodePulse is a React-based web application that lets you analyze and visualize a LeetCode user's profile and problem-solving statistics in one place.

## Features

*  Search LeetCode users by username
*  View user profile information
*  Visualize solved problems by difficulty
*  View contest rating and number of question solved in that contest
*  View problem-solving statistics
*  View recent submissions
*  Dark theme support
*  Responsive dashboard

## Tech Stack

* **React.js**
* **JavaScript**
* **Bootstrap**
* **React Router**
* **Context API**
* **Custom Hooks**
* **REST API**
* **Vite**

## API

CodePulse uses the [Alfa LeetCode API](https://alfa-leetcode-api.onrender.com/) to fetch LeetCode user data.


src/
├── components/
│   ├── ContestStats.jsx
│   ├── Loader.jsx
│   ├── RecentSubmissions.jsx
│   ├── SolvedStats.jsx
│   └── UserInfo.jsx
│
├── context/
│   └── ThemeProvider.jsx
│
├── hooks/
│   └── useFetch.jsx
│
├── pages/
│   ├── Dashboard.jsx
│   ├── Home.jsx
│   └── NotFound.jsx
│
├── App.jsx
├── main.jsx
└── components/index.css


## What I Learned

This project helped me practice:

* Building reusable React components
* Managing state with `useState`
* Fetching API data with `useEffect`
* Creating custom React hooks
* Managing global state with Context API
* Routing with React Router
* Handling loading and error states
* Working with external REST APIs
* Building responsive interfaces with Bootstrap

## Future Improvements

* Add more detailed contest analytics
* Add submission heatmaps
* Add language-wise statistics
* Add comparison between multiple users
* Improve data visualization
* Add more detailed problem/topic analysis

## Author

**Digvijay**

Engineering Student | React & DSA Learner

---

⭐ If you find this project useful, consider giving it a star!
