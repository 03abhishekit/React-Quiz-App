// reactQuestions.js
const qBank = [
    {
      id: 1,
      question: " 1.) What is React?",
      options: [
        "A CSS framework",
        "A database management system",
        "A JavaScript library for building user interfaces",
        "A web server"
      ],
      answer: "A JavaScript library for building user interfaces",
    },
    {
      id: 2,
      question: "2.) Who developed React?",
      options: [
        "Google",
        "Facebook",
        "Microsoft",
        "Apple"
      ],
      answer: "Facebook",
    },
    {
      id: 3,
      question: "3.) What is a component in React?",
      options: [
        "A type of function",
        "A reusable piece of UI",
        "A CSS class",
        "A database table"
      ],
      answer: "A reusable piece of UI",
    },
    {
      id: 4,
      question: "4.) What is JSX?",
      options: [
        "A CSS framework",
        "A database",
        "A web server",
        "A JavaScript XML syntax extension"
      ],
      answer: "A JavaScript XML syntax extension",
    },
    {
      id: 5,
      question: "5.) Which method is used to create components in React?",
      options: [
        "React.createClass()",
        "React.component()",
        "React.createComponent()",
        "React.makeComponent()"
      ],
      answer: "React.createClass()",
    },
    {
      id: 6,
      question: "6.) What are props in React?",
      options: [
        "HTML attributes",
        "Properties passed to components",
        "CSS classes",
        "Database queries"
      ],
      answer: "Properties passed to components",
    },
    {
      id: 7,
      question: "7.) What is state in React?",
      options: [
        "A way to manage data within a component",
        "A CSS style",
        "A database connection",
        "A type of HTML element"
      ],
      answer: "A way to manage data within a component",
    },
    {
      id: 8,
      question: "8.) How can you create a functional component in React?",
      options: [
        "By using a class",
        "By using a variable",
        "By using a JavaScript function",
        "By using a database"
      ],
      answer: "By using a JavaScript function",
    },
    {
      id: 9,
      question: "9.) What is the purpose of a useEffect hook?",
      options: [
        "To create a new component",
        "To define CSS styles",
        "To manage state",
        "To handle side effects in functional components"
      ],
      answer: "To handle side effects in functional components",
    },
    {
      id: 10,
      question: "10.) What does the useState hook do?",
      options: [
        "It defines CSS styles",
        "It connects to a database",
        "It declares state variables in functional components",
        "It handles HTTP requests"
      ],
      answer: "It declares state variables in functional components",
    },
    {
      id: 11,
      question: "11.) How do you pass data to a child component?",
      options: [
        "By using props",
        "By using state",
        "By using a database",
        "By using a CSS class"
      ],
      answer: "By using props",
    },
    {
      id: 12,
      question: "12.) What is the virtual DOM?",
      options: [
        "A CSS framework",
        "A database",
        "A web server",
        "A lightweight copy of the real DOM"
      ],
      answer: "A lightweight copy of the real DOM",
    },
    {
      id: 13,
      question: "13.) What is the purpose of the ReactDOM.render() method?",
      options: [
        "To connect to a database",
        "To render a React component to the DOM",
        "To define CSS styles",
        "To handle HTTP requests"
      ],
      answer: "To render a React component to the DOM",
    },
    {
      id: 14,
      question: "14.) What is the difference between a functional component and a class component?",
      options: [
        "Functional components are stateless, class components can have state",
        "Functional components can have state, class components cannot",
        "There is no difference",
        "Class components are faster"
      ],
      answer: "Functional components are stateless, class components can have state",
    },
    {
      id: 15,
      question: "15.) What is a higher-order component?",
      options: [
        "A CSS class",
        "A database query",
        "A type of HTTP request",
        "A function that takes a component and returns a new component"
      ],
      answer: "A function that takes a component and returns a new component",
    },
    {
      id: 16,
      question: "16.) How do you handle events in React?",
      options: [
        "By using event handlers",
        "By using CSS",
        "By using database queries",
        "By using HTML attributes"
      ],
      answer: "By using event handlers",
    },
    {
      id: 17,
      question: "17.) What is the purpose of keys in React?",
      options: [
        "To define CSS styles",
        "To connect to a database",
        "To help React identify which items have changed",
        "To handle HTTP requests"
      ],
      answer: "To help React identify which items have changed",
    },
    {
      id: 18,
      question: "18.) How do you handle forms in React?",
      options: [
        "By using CSS styles",
        "By using controlled components",
        "By using database queries",
        "By using HTML forms"
      ],
      answer: "By using controlled components",
    },
    {
      id: 19,
      question: "19.) What is the purpose of React Router?",
      options: [
        "To define CSS styles",
        "To connect to a database",
        "To handle HTTP requests",
        "To handle navigation in a React application",
      ],
      answer: "To handle navigation in a React application",
    },
    {
      id: 20,
      question: "20.) What is a context in React?",
      options: [
        "A way to share values between components",
        "A CSS style",
        "A database connection",
        "A type of HTML element"
      ],
      answer: "A way to share values between components",
    },
    {
      id: 21,
      question: "21.) How do you optimize performance in a React application?",
      options: [
        "By using CSS styles",
        "By using memoization and pure components",
        "By using database indexing",
        "By using HTTP caching"
      ],
      answer: "By using memoization and pure components",
    },
    {
      id: 22,
      question: "22.) What is the purpose of PropTypes?",
      options: [
        "To define CSS styles",
        "To connect to a database",
        "To handle HTTP requests",
        "To validate the types of props passed to a component",
      ],
      answer: "To validate the types of props passed to a component",
    },
    {
      id: 23,
      question: "23.) How do you manage state in a complex React application?",
      options: [
        "By using CSS styles",
        "By using database transactions",
        "By using HTTP requests",
        "By using state management libraries like Redux",
      ],
      answer: "By using state management libraries like Redux",
    },
    {
      id: 24,
      question: "24.) What is the purpose of Redux?",
      options: [
        "To define CSS styles",
        "To connect to a database",
        "To handle HTTP requests",
        "To manage state in a complex React application",
      ],
      answer: "To manage state in a complex React application",
    },
    {
      id: 25,
      question: "25.) What is a Redux store?",
      options: [
        "A central place to store the state of a React application",
        "A CSS style",
        "A database connection",
        "A type of HTML element"
      ],
      answer: "A central place to store the state of a React application",
    },
    {
      id: 26,
      question: "26.) How do you connect a React component to a Redux store?",
      options: [
        "By using CSS styles",
        "By using the connect() function",
        "By using database queries",
        "By using HTML forms"
      ],
      answer: "By using the connect() function",
    },
    {
      id: 27,
      question: "27.) What is the purpose of a reducer in Redux?",
      options: [
        "To define CSS styles",
        "To connect to a database",
        "To specify how the state changes in response to actions",
        "To handle HTTP requests"
      ],
      answer: "To specify how the state changes in response to actions",
    },
    {
      id: 28,
      question: "28.) What is the purpose of middleware in Redux?",
      options: [
        "To extend the capabilities of the Redux store",
        "To define CSS styles",
        "To connect to a database",
        "To handle HTTP requests"
      ],
      answer: "To extend the capabilities of the Redux store",
    }
];


export default qBank;