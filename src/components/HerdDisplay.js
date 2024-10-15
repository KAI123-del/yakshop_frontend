import React from "react";
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  Typography,
} from "@mui/material";

const HerdDisplay = ({ herd }) => {
  if (!herd) return null;

  return (
    <div className="max-w-4xl mx-auto mt-6 p-4">
      <Typography variant="h5" component="div" gutterBottom>
        Herd After T Days
      </Typography>
      <TableContainer component={Paper}>
        <Table aria-label="herd table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Age (years)</TableCell>
              <TableCell>Age Last Shaved (years)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {herd.map((yak) => (
              <TableRow key={yak.name}>
                <TableCell>{yak.name}</TableCell>
                <TableCell>{yak.age}</TableCell>
                <TableCell>{yak.ageLastShaved}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default HerdDisplay;
