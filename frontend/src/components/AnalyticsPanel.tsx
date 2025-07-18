import React from "react";
import { Box, Typography, Divider } from "@mui/material";

interface AnalyticsPanelProps {
  clicks: number;
  source: string;
  lastClickedAt: string;
}

export const AnalyticsPanel: React.FC<AnalyticsPanelProps> = ({ clicks, source, lastClickedAt }) => {
  return (
    <Box sx={{ maxWidth: 500, mx: "auto", mt: 4, p: 2, border: "1px solid #ddd", borderRadius: 2 }}>
      <Typography variant="h6">Click Analytics</Typography>
      <Divider sx={{ my: 1 }} />
      <Typography>Total Clicks: {clicks}</Typography>
      <Typography>Source: {source}</Typography>
      <Typography>Last Clicked At: {lastClickedAt}</Typography>
    </Box>
  );
};
