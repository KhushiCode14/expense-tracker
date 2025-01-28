import { useState } from "react";
// import SelectActionCard from "../components/ui/Card";
import { Box, Button, TextField, Typography } from "@mui/material";

const Home = () => {
  const [balance, setBalance] = useState(5200);
  const [showAddTransaction, setShowAddTransaction] = useState(false);

  const handleAddButton = () => {
    setShowAddTransaction(!showAddTransaction);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: 4,
        maxWidth: "100%",
        // backgroundColor: "#f9f9f9",
      }}
    >
      {/* Header */}
      <Typography
        variant="h4"
        sx={{ fontWeight: "bold", mb: 4, color: "#333" }}
      >
        Expense Tracker
      </Typography>

      {/* Current Balance Section */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          maxWidth: 400,
          padding: 2,
          backgroundColor: "#fff",
          borderRadius: 2,
          // boxShadow: 1,
          mb: 4,
        }}
      >
        <Typography variant="h6">Current Balance: ${balance}</Typography>
        <Button variant="contained" onClick={handleAddButton}>
          {showAddTransaction ? "Cancel" : "Add"}
        </Button>
      </Box>

      {/* Add Transaction Form */}
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
            sx={{ mb: 2 }}
          />
          <TextField
            label="Enter Description"
            variant="outlined"
            sx={{ mb: 2 }}
          />
          <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
            <Button
              variant="outlined"
              color="primary"
              sx={{ flex: 1 }}
              onClick={() => console.log("Expense Selected")}
            >
              Expense
            </Button>
            <Button
              variant="outlined"
              color="success"
              sx={{ flex: 1 }}
              onClick={() => console.log("Income Selected")}
            >
              Income
            </Button>
          </Box>
          <Button variant="contained" fullWidth>
            Add Transaction
          </Button>
        </Box>
      )}

      {/* Action Cards */}
      {/* <SelectActionCard /> */}
    </Box>
  );
};

export default Home;
