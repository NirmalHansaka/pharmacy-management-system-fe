import Layout from "./components/Layout";
import { ThemeProvider } from "@mui/material/styles";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { useEffect, useState } from "react";
import getTheme from "./theme";
import ROUTES from "./routes/config";
import SignIn from "./pages/SignIn";

function App() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const localTheme = localStorage.getItem("THEME");
    if (localTheme === "light") {
      setTheme("light");
    }
  });

  return (
    <ThemeProvider theme={getTheme(theme)}>
      <BrowserRouter>
        <Routes>
          {ROUTES.map((route) => (
            <Route
              exact
              path={route.path}
              element={<Layout>{route.element}</Layout>}
            />
          ))}
          <Route
              exact
              path={'/signin'}
              element={<SignIn />}
            />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
