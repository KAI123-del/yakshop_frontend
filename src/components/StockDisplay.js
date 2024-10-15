import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

const StockDisplay = ({ stock }) => {
  if (!stock) return null;

  return (
    <div className="max-w-md mx-auto mt-6">
      <Card>
        <CardContent>
          <Typography variant="h5" component="div" gutterBottom>
            Stock After T Days
          </Typography>
          <Typography variant="body1">
            <strong>Milk:</strong> {stock.milk} liters
          </Typography>
          <Typography variant="body1">
            <strong>Skins:</strong> {stock.skins}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default StockDisplay;
