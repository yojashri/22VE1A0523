import React, { useState } from "react";
import { TextField, Button, Box, Typography } from "@mui/material";
import { logger } from "../middleware/logger";
import { isValidUrl } from "../utils/validators";

interface Props {
  onShorten: (data: { longURL: string; validity?: number; customCode?: string }) => void;
}

export const URLInputForm: React.FC<Props> = ({ onShorten }) => {
  const [longURL, setLongURL] = useState("");
  const [validity, setValidity] = useState("");
  const [customCode, setCustomCode] = useState("");

  const handleSubmit = () => {
    if (!isValidUrl(longURL)) {
      alert("Invalid URL format!");
      logger("WARN", "User entered invalid URL", { longURL });
      return;
    }

    onShorten({
      longURL,
      validity: validity ? parseInt(validity) : undefined,
      customCode: customCode || undefined,
    });

    logger("INFO", "URL submitted", { longURL, validity, customCode });
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2, maxWidth: 500, mx: "auto", mt: 4 }}>
      <Typography variant="h5">URL Shortener</Typography>
      <TextField
        label="Long URL"
        value={longURL}
        onChange={(e) => setLongURL(e.target.value)}
      />
      <TextField
        label="Validity (minutes)"
        value={validity}
        onChange={(e) => setValidity(e.target.value)}
      />
      <TextField
        label="Custom Shortcode (optional)"
        value={customCode}
        onChange={(e) => setCustomCode(e.target.value)}
      />
      <Button variant="contained" onClick={handleSubmit}>
        Shorten
      </Button>
    </Box>
  );
};
