import React from "react";
import { Box, Typography, Paper } from "@mui/material";

interface Props {
  result: {
    shortURL: string;
    createdAt: string;
    expiresAt: string;
    shortCode: string;
  };
}

export const URLResultCard: React.FC<Props> = ({ result }) => {
  return (
    <Paper elevation={3} sx={{ padding: 3, marginTop: 4, maxWidth: 600, mx: "auto" }}>
      <Typography variant="h6">Shortened URL:</Typography>
      <Typography variant="body1" color="primary">
        <a href={result.shortURL} target="_blank" rel="noopener noreferrer">
          {result.shortURL}
        </a>
      </Typography>

      <Typography variant="body2" sx={{ marginTop: 1 }}>
        Short Code: <strong>{result.shortCode}</strong>
      </Typography>
      <Typography variant="body2">Created At: {new Date(result.createdAt).toLocaleString()}</Typography>
      <Typography variant="body2">Expires At: {new Date(result.expiresAt).toLocaleString()}</Typography>
    </Paper>
  );
};
