import React, { useState } from "react";
import { Container, CircularProgress, Alert } from "@mui/material";
import Header from "./components/Header";
import InputForm from "./components/InputForm";
import StockDisplay from "./components/StockDisplay";
import HerdDisplay from "./components/HerdDisplay";
import axios from "axios";

const App = () => {
  const [stock, setStock] = useState(null);
  const [herd, setHerd] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchStock = async (T) => {
    setLoading(true);
    setError("");
    setStock(null);
    setHerd(null);
    try {
      const response = await axios.get(
        `http://localhost:8000/yak-shop/stock/${T}`
      );
      setStock(response.data);
    } catch (err) {
      setError("Failed to fetch stock data. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const fetchHerd = async (T) => {
    setLoading(true);
    setError("");
    setStock(null);
    setHerd(null);
    try {
      const response = await axios.get(
        `http://localhost:8000/yak-shop/herd/${T}`
      );
      setHerd(response.data.herd);
    } catch (err) {
      setError("Failed to fetch herd data. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <Container maxWidth="md" className="p-4">
        <InputForm onFetchStock={fetchStock} onFetchHerd={fetchHerd} />
        {loading && (
          <div className="flex justify-center mt-6">
            <CircularProgress />
          </div>
        )}
        {error && (
          <Alert severity="error" className="mt-6">
            {error}
          </Alert>
        )}
        <StockDisplay stock={stock} />
        <HerdDisplay herd={herd} />
      </Container>
    </div>
  );
};

export default App;
