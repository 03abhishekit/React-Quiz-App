// reactQuestions.js
const qBank = [
    {
      id: 1,
      question: " 1.) What is React?",
      options: [
        "A JavaScript library for building user interfaces",
        "A CSS framework",
        "A database management system",
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
        "A reusable piece of UI",
        "A type of function",
        "A CSS class",
        "A database table"
      ],
      answer: "A reusable piece of UI",
    },
    {
      id: 4,
      question: "4.) What is JSX?",
      options: [
        "A JavaScript XML syntax extension",
        "A CSS framework",
        "A database",
        "A web server"
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
        "Properties passed to components",
        "HTML attributes",
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
        "By using a JavaScript function",
        "By using a class",
        "By using a variable",
        "By using a database"
      ],
      answer: "By using a JavaScript function",
    },
    {
      id: 9,
      question: "9.) What is the purpose of a useEffect hook?",
      options: [
        "To handle side effects in functional components",
        "To create a new component",
        "To define CSS styles",
        "To manage state"
      ],
      answer: "To handle side effects in functional components",
    },
    {
      id: 10,
      question: "10.) What does the useState hook do?",
      options: [
        "It declares state variables in functional components",
        "It defines CSS styles",
        "It connects to a database",
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
        "A lightweight copy of the real DOM",
        "A CSS framework",
        "A database",
        "A web server"
      ],
      answer: "A lightweight copy of the real DOM",
    },
    {
      id: 13,
      question: "13.) What is the purpose of the ReactDOM.render() method?",
      options: [
        "To render a React component to the DOM",
        "To connect to a database",
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
        "A function that takes a component and returns a new component",
        "A CSS class",
        "A database query",
        "A type of HTTP request"
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
        "To help React identify which items have changed",
        "To define CSS styles",
        "To connect to a database",
        "To handle HTTP requests"
      ],
      answer: "To help React identify which items have changed",
    },
    {
      id: 18,
      question: "18.) How do you handle forms in React?",
      options: [
        "By using controlled components",
        "By using CSS styles",
        "By using database queries",
        "By using HTML forms"
      ],
      answer: "By using controlled components",
    },
    {
      id: 19,
      question: "19.) What is the purpose of React Router?",
      options: [
        "To handle navigation in a React application",
        "To define CSS styles",
        "To connect to a database",
        "To handle HTTP requests"
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
        "By using memoization and pure components",
        "By using CSS styles",
        "By using database indexing",
        "By using HTTP caching"
      ],
      answer: "By using memoization and pure components",
    },
    {
      id: 22,
      question: "22.) What is the purpose of PropTypes?",
      options: [
        "To validate the types of props passed to a component",
        "To define CSS styles",
        "To connect to a database",
        "To handle HTTP requests"
      ],
      answer: "To validate the types of props passed to a component",
    },
    {
      id: 23,
      question: "23.) How do you manage state in a complex React application?",
      options: [
        "By using state management libraries like Redux",
        "By using CSS styles",
        "By using database transactions",
        "By using HTTP requests"
      ],
      answer: "By using state management libraries like Redux",
    },
    {
      id: 24,
      question: "24.) What is the purpose of Redux?",
      options: [
        "To manage state in a complex React application",
        "To define CSS styles",
        "To connect to a database",
        "To handle HTTP requests"
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
        "By using the connect() function",
        "By using CSS styles",
        "By using database queries",
        "By using HTML forms"
      ],
      answer: "By using the connect() function",
    },
    {
      id: 27,
      question: "27.) What is the purpose of a reducer in Redux?",
      options: [
        "To specify how the state changes in response to actions",
        "To define CSS styles",
        "To connect to a database",
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