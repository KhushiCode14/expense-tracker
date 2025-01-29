import { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { FinanceState } from "../context/FinanceProvider";
import SelectActionCard from "../components/ui/Card";
import TransactionShow from "./TransactionShow";
const Home = () => {
  // const [showAddTransaction, setShowAddTransaction] = useState(false);
  const [showAddTransaction, setShowAddTransaction] = useState(false);
  const [selectedType, setSelectedType] = useState(null);

  const {
    income,
    setIncome,
    expense,
    setExpense,
    setAmount,
    setDescription,
    amount,
    description,
  } = FinanceState();

  const totalIncome = income.reduce((sum, item) => sum + item.amount, 0);
  const totalExpense = expense.reduce((sum, item) => sum + item.amount, 0);
  const balanceIncome = totalIncome - totalExpense;
  const handleTransaction = (type) => {
    if (amount > 0 && description.trim()) {
      if (type === "income") {
        setIncome((prev) => [
          ...prev,
          { amount: parseFloat(amount), description },
        ]);
      } else {
        setExpense((prev) => [
          ...prev,
          { amount: parseFloat(amount), description },
        ]);
      }
      setAmount("");
      setDescription("");
      setShowAddTransaction(false);
    } else {
      alert("Please enter a valid amount and description.");
    }
  };

  const handleCardClick = (type) => {
    setSelectedType(type); // Set the selected type (income or expense)
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        // padding: 4,/
        maxWidth: "100%",
        minHeight: "100vh",
        padding: { xs: 2, sm: 4 },
        // boxShadow: 1,
      }}
    >
      <Typography
        variant="h4"
        sx={{ fontWeight: "bold", mb: 4, color: "#333" }}
      >
        Expense Tracker
      </Typography>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: { xs: "column", sm: "row" },
          alignItems: "center",
          width: "100%",
          maxWidth: 400,
          padding: 2,
          backgroundColor: "#fff",
          borderRadius: 2,
          mb: 4,
        }}
      >
        <Typography
          variant="h6"
          sx={{
            color:
              balanceIncome > 0 ? "green" : balanceIncome < 0 ? "red" : "black",
          }}
        >
          Current Balance: ${balanceIncome}
        </Typography>
        <Button
          variant="contained"
          sx={{ width: { xs: "100%", sm: "auto" } }}
          onClick={() => setShowAddTransaction((prev) => !prev)}
        >
          {showAddTransaction ? "Cancel" : "Add"}
        </Button>
      </Box>

      {showAddTransaction && (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            maxWidth: 400,
            backgroundColor: "#fff",
            padding: 3,
            borderRadius: 2,
            boxShadow: 1,
            mb: 4,
          }}
        >
          <TextField
            label="Enter Amount"
            type="number"
            variant="outlined"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            sx={{ mb: 2 }}
          />
          <TextField
            label="Enter Description"
            variant="outlined"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            sx={{ mb: 2 }}
          />
          <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
            <Button
              variant="outlined"
              color="primary"
              sx={{ flex: 1 }}
              onClick={() => handleTransaction("expense")}
            >
              Expense
            </Button>
            <Button
              variant="outlined"
              color="success"
              sx={{ flex: 1 }}
              onClick={() => handleTransaction("income")}
            >
              Income
            </Button>
          </Box>
        </Box>
      )}
      <Box sx={{ width: "100%", maxWidth: "100%" }}>
        {/* <TransactionShow /> */}
        <SelectActionCard onCardClick={handleCardClick} />
      </Box>
      <Box sx={{ width: "100%", maxWidth: "100%" }}>
        <TransactionShow selectedType={selectedType} />
      </Box>
    </Box>
  );
};

export default Home;
