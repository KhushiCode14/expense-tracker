import { createContext, useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

const financeContext = createContext();

const FinanceProvider = ({ children }) => {
  const [balance, setBalance] = useState(() => {
    const storedBalance = localStorage.getItem("balance");
    return storedBalance ? JSON.parse(storedBalance) : 0;
  });
  const [income, setIncome] = useState(() => {
    const storedIncome = localStorage.getItem("income");
    return storedIncome ? JSON.parse(storedIncome) : [];
  });
  const [expense, setExpense] = useState(() => {
    const storedExpense = localStorage.getItem("expense");
    return storedExpense ? JSON.parse(storedExpense) : [];
  });
  const [amount, setAmount] = useState(0);
  const [description, setDescription] = useState("");

  // Save data to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("balance", JSON.stringify(balance));
    localStorage.setItem("income", JSON.stringify(income));
    localStorage.setItem("expense", JSON.stringify(expense));
  }, [balance, income, expense]);

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
