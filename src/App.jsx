import { Routes, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Notes from "./components/Notes";
import Create from "./components/Create";
import { createTheme, ThemeProvider } from "@mui/material";
import { purple } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: "#9c27b0",
    },
    secondary: purple,
  },
  typography: {
    fontFamily: "Quicksand",
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 500,
    fontWeightBold: 500,
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<Notes />} />
          <Route path="/create" element={<Create />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
