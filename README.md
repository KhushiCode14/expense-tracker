# Expense Tracker

An Expense Tracker web application built using React, Material-UI, and LocalStorage. This application allows users to track their income and expenses, search for specific transactions, and delete transactions.
### React JS Concepts:
- **JSX**: Syntax extension for JavaScript that allows you to write HTML in JavaScript.
- **Props**: Mechanism for passing data to child components from a parent.
- **State**: Local data storage for a React component that can change over time.
- **Event Handling**: Functions that execute when user interactions (like clicks or text input) occur.
- **Component-Based Architecture**: React is built around small, reusable components.
- **Functional Components**: Components written as functions instead of classes.
- **useState Hook**: React hook used to create and manage state in functional components.
- **Conditional Rendering**: Displaying different UI elements based on certain conditions (e.g., `if-else`, ternary operators).
- **map Method**: Used to iterate over arrays and return a new array based on the provided callback function.
- **reduce Method**: Used to accumulate values from an array into a single result (e.g., summing amounts in a list of transactions).
- **filter Method**: Creates a new array with all elements that pass the test implemented by the provided function.
- **includes Method**: Checks if a certain value exists in an array or string.
- **Template Literals**: Provides a way to embed expressions inside string literals, making string formatting easier.
- **Arrow Functions**: Shorter syntax for writing functions and maintaining the correct `this` context in JavaScript.

### HTML/CSS Concepts:
- **HTML Forms**: Used for capturing user input (e.g., adding transactions).
- **CSS Flexbox**: Used for layout and positioning elements in a flexible and responsive way.
- **CSS Grid**: A layout system for creating complex web layouts.
- **CSS Styling**: Basic styles to make the application visually appealing.
- **Trim Method**: Removes whitespace from both ends of a string.
- **Spread Operator**: Used to unpack elements from arrays or objects into separate elements.
- **Lowercase/Uppercase**: Methods to convert strings to lowercase or uppercase (e.g., `toLowerCase()`, `toUpperCase()`).
  
## Features

- **Track Income and Expenses**: Users can add transactions and categorize them as income or expense.
- **Filter Transactions**: Filter the transactions to display income, expenses, or all transactions.
- **Persistent Data**: Transaction data is saved in the browser using `localStorage` so that it persists even after the page is reloaded.
- **Responsive Design**: The app is responsive, ensuring a good user experience on both desktop and mobile devices.
- **Dynamic Transaction List**: The app allows dynamic addition, filtering, and removal of transactions based on user input.

## Key Concepts Used

### 1. **State Management**
State is used to store transaction data, the selected transaction type (income/expense), and other dynamic values.

```js
const [transactions, setTransactions] = useState([]);
const [selectedType, setSelectedType] = useState('all');

## Features

- Track income and expense transactions.
- Search transactions by description.
- Delete transactions.
- LocalStorage integration to persist data.
- Responsive design with Material-UI components.

## Tech Stack

- **Frontend**: React, Material-UI
- **State Management**: React Context API
- **Persistence**: LocalStorage
- **CSS Framework**: Material-UI (MUI)

## Getting Started

To run the project locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/expense-tracker.git
2. Site
3. ```
   https://expensetracker-khushicode.netlify.app/
   ```


## strategy 
1. install require packages
2. setup the configuration

