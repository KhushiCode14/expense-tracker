import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import { FinanceState } from "../../context/FinanceProvider";

function SelectActionCard({ onCardClick }) {
  const { income, expense } = FinanceState();
  const totalIncome = income.reduce((sum, item) => sum + item.amount, 0);
  const totalExpense = expense.reduce((sum, item) => sum + item.amount, 0);

  return (
    <Box
      sx={{
        // width: "100%",
        display: "flex",
        flexDirection: { xs: "column", md: "row" }, // Stack on small screens, row on medium and up
        justifyContent: "center",
        alignItems: "center",
        gap: 2,
        padding: 2,
        maxWidth: "100%",
      }}
    >
      <Card
        style={{ cursor: "pointer" }}
        sx={{
          minWidth: 275,
          maxWidth: "100%",
          backgroundColor: "#e8f5e9",
          flex: 1,
          cursor: "pointer",
        }}
        onClick={() => onCardClick("income")}
        onDoubleClick={() => onCardClick(null)}
      >
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Income
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Total Income: ${totalIncome}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card
        sx={{
          minWidth: 275,
          maxWidth: "100%",
          backgroundColor: "#ffebee",
          flex: 1,
          cursor: "pointer",
        }}
        onClick={() => onCardClick("expense")} // Handle click for expense
        onDoubleClick={() => onCardClick(null)}
      >
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Expense
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Total Expense: ${totalExpense}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  );
}

export default SelectActionCard;
