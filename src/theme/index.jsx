import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    pureBlack: { main: "#000", contrastText: "#FFFFFF" },
    pureLight: {
      main: "#fff",
      contrastText: "#000",
    },
  },
});
