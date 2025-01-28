import { createContext, useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

const financeContext = createContext();

const FinanceProvider = ({ children }) => {
  const [balance, setBalance] = useState(0);
  const [income, setIncome] = useState([]);
  const [expense, setExpense] = useState([]);
  const [amount, setAmount] = useState(0);
  const [description, setDescription] = useState("");

  // Retrieve data from localStorage on component mount
  useEffect(() => {
    const storedBalance = localStorage.getItem("balance");
    const storedIncome = localStorage.getItem("income");
    const storedExpense = localStorage.getItem("expense");

    // Safely parse the data, ensuring it's valid JSON
    setBalance(storedBalance ? JSON.parse(storedBalance) : 0);
    setIncome(storedIncome ? JSON.parse(storedIncome) : []);
    setExpense(storedExpense ? JSON.parse(storedExpense) : []);
  }, []);

  return (
    <financeContext.Provider
      value={{
        balance,
        setBalance,
        expense,
        setExpense,
        income,
        setIncome,
        description,
        setDescription,
        amount,
        setAmount,
      }}
    >
      {children}
    </financeContext.Provider>
  );
};

FinanceProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

const FinanceState = () => {
  return useContext(financeContext);
};

export { FinanceState, FinanceProvider };
