import React, { useState } from "react";
import { TextField, Button, Grid, Alert } from "@mui/material";

const InputForm = ({ onFetchStock, onFetchHerd }) => {
  const [days, setDays] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e, fetchType) => {
    e.preventDefault();
    const T = parseInt(days);
    if (isNaN(T) || T < 0) {
      setError("Please enter a valid non-negative integer for days.");
      return;
    }
    setError("");
    if (fetchType === "stock") {
      onFetchStock(T);
    } else if (fetchType === "herd") {
      onFetchHerd(T);
    }
  };

  return (
    <form className="max-w-[100%] mx-auto mt-6 p-4 border rounded shadow">
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} sm={4}>
          <TextField
            label="Enter Days (T)"
            type="number"
            variant="outlined"
            fullWidth
            value={days}
            onChange={(e) => setDays(e.target.value)}
            inputProps={{ min: 0 }}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Button
            variant="contained"
            color="primary"
            className="h-12"
            fullWidth
            onClick={(e) => handleSubmit(e, "stock")}>
            Get Stock
          </Button>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Button
            variant="contained"
            color="success"
            className="h-12"
            fullWidth
            onClick={(e) => handleSubmit(e, "herd")}>
            Get Herd
          </Button>
        </Grid>
      </Grid>
      {error && (
        <Alert severity="error" className="mt-4">
          {error}
        </Alert>
      )}
    </form>
  );
};

export default InputForm;
