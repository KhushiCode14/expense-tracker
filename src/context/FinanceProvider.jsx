import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";

const financeContext = createContext();
const FinanceProvider = ({ children }) => {
  const [balance, setBalance] = useState(0);

  return (
    <financeContext.Provider value={{ balance, setBalance }}>
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
