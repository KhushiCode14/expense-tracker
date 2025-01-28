import { Box, TextField, Typography } from "@mui/material";

// import React from "react";
const TransactionShow = () => {
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: 4,
          maxWidth: "100%",
          backgroundColor: "#f9f9f9",
        }}
      >
        {/* Show Transaction Form */}

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            maxWidth: 400,
            backgroundColor: "#fff",
            padding: 3,
            borderRadius: 2,
            // boxShadow: 1,
            mb: 4,
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              mb: 2,
              color: "#333",
              //   backgroundColor: "lightgray",
              padding: 2,
              //   borderRadius: 2,
              //   boxShadow: 1,
            }}
          >
            {" "}
            Transactions{" "}
          </Typography>{" "}
          <TextField
            placeholder="Search..."
            sx={{
              //   fontWeight: "bold",
              mb: 4,
              color: "#333",
              placeholder: "Search...",
              backgroundColor: "lightgray",
              //   padding: 2,
              borderRadius: 2,
              //   boxShadow: 1,
            }}
          />
          <Box
            sx={{
              display: "flex",
              gap: 2,
              mb: 2,
              color: "#333",
              backgroundColor: "lightgray",
              paddingX: "10px",
              paddingY: "10px",
              justifyContent: "center", // Adjusted for centering
              alignItems: "center",
              borderRadius: "10px",
            }}
          >
            <Typography
              variant="outlined"
              sx={{
                flex: 1,
                textAlign: "center", // Center text within each Typography
                color: "#333",
                cursor: "pointer", // Add pointer for clickable effect
              }}
              onClick={() => console.log("Expense Selected")}
            >
              Expense
            </Typography>
            <Typography
              variant="outlined"
              sx={{
                flex: 1,
                textAlign: "center", // Center text within each Typography
                color: "#333",
                cursor: "pointer", // Add pointer for clickable effect
              }}
              onClick={() => console.log("Income Selected")}
            >
              Income
            </Typography>
          </Box>
          {/* <Button variant="contained" fullWidth>
            Add Transaction
          </Button> */}
        </Box>
      </Box>
    </div>
  );
};

export default TransactionShow;
