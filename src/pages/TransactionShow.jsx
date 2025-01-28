import { Box, Button, TextField, Typography } from "@mui/material";
import { FinanceState } from "../context/FinanceProvider";
import { useState } from "react";
import PropTypes from "prop-types";

const TransactionShow = ({ selectedType }) => {
  const { expense, setExpense, income, setIncome } = FinanceState();
  const [searchQuery, setSearchQuery] = useState("");

  // Filter transactions based on the search query
  const filteredTransactions = () => {
    let transactions = [];
    if (selectedType === "income") {
      transactions = income;
    } else if (selectedType === "expense") {
      transactions = expense;
    } else {
      transactions = [...income, ...expense]; // Show all transactions if no type is selected
    }

    return transactions.filter((item) =>
      item.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  // Function to delete a transaction
  const deleteTransaction = (type, index) => {
    if (type === "income") {
      setIncome((prev) => prev.filter((_, i) => i !== index));
    } else {
      setExpense((prev) => prev.filter((_, i) => i !== index));
    }
  };

  // Reusable TransactionItem component
  const TransactionItem = ({ type, item, index }) => (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 2,
        backgroundColor: type === "income" ? "#e8f5e9" : "#ffebee",
        borderRadius: 2,
        mb: 1,
      }}
    >
      <Typography
        variant="body1"
        sx={{ fontWeight: "bold", color: type === "income" ? "green" : "red" }}
      >
        {type === "income" ? "+" : "-"} ${item.amount} - {item.description}
      </Typography>
      <Button
        variant="outlined"
        color="error"
        size="small"
        onClick={() => deleteTransaction(type, index)}
      >
        Delete
      </Button>
    </Box>
  );

  TransactionItem.propTypes = {
    type: PropTypes.string.isRequired,
    item: PropTypes.shape({
      amount: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      //   amount: PropTypes.number.isRequired,
    }).isRequired,
    index: PropTypes.number.isRequired,
  };
  //   const transactionsToShow = filteredTransactions();
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        //   display: "flex",
        //   flexDirection: "column",
        padding: { xs: 2, sm: 4 },
        // padding: 4,
        maxWidth: "100%",
        width: "100%",
        //   maxWidth: 800,
        //   backgroundColor: "#fff",
        backgroundColor: "#f9f9f9",
        //   padding: 3,
        borderRadius: 2,
        // boxShadow: 1,
        mb: 4,
      }}
    >
      <Typography
        variant="h6"
        sx={{ fontWeight: "bold", mb: 2, color: "#333" }}
      >
        Transactions
      </Typography>
      <TextField
        placeholder="Search transactions..."
        variant="outlined"
        fullWidth
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        sx={{ mb: 3 }}
      />
      <Box sx={{ width: "100%", maxWidth: 600 }}>
        {selectedType ? (
          // Render filtered transactions based on selected type
          filteredTransactions(selectedType).length > 0 ? (
            filteredTransactions(selectedType).map((item, index) => (
              <TransactionItem
                key={index}
                type={selectedType}
                item={item}
                index={index}
              />
            ))
          ) : (
            <Typography>No transactions found.</Typography>
          )
        ) : (
          // Render all transactions if no type is selected
          <>
            {income.map((item, index) => (
              <TransactionItem
                key={index}
                type="income"
                item={item}
                index={index}
              />
            ))}
            {expense.map((item, index) => (
              <TransactionItem
                key={index}
                type="expense"
                item={item}
                index={index}
              />
            ))}
          </>
        )}
      </Box>
      {/* <Box sx={{ width: "100%", maxWidth: 600 }}>
        {transactionsToShow.length > 0
          ? transactionsToShow.map((item, index) => (
              <TransactionItem
                key={index}
                sx={{
                  border: "1px solid #ccc",
                  borderRadius: 2,
                  mb: 1,
                  // border: "1px solid #ccc",
                }}
                type={item.amount > 0 ? "income" : "expense"} // Determine type based on amount
                item={item}
                index={index}
              />
            ))
          : null}
      </Box> */}
      {/* <Box sx={{ width: "100%", maxWidth: 600 }}>
        {filteredTransactions.income.length > 0
          ? filteredTransactions.income.map((item, index) => (
              <TransactionItem
                key={index}
                type="income"
                item={item}
                index={index}
              />
            ))
          : null}

        {filteredTransactions.expense.length > 0
          ? filteredTransactions.expense.map((item, index) => (
              <TransactionItem
                key={index}
                type="expense"
                item={item}
                index={index}
              />
            ))
          : null}
      </Box> */}
    </Box>
  );
};
TransactionShow.propTypes = {
  selectedType: PropTypes.string,
};

export default TransactionShow;
