import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import ReservationPage from "./component/scenes/ReservationPage";
import SideBar from "./component/scenes/global/SideBar.jsx";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../src/component/scenes/dashboard";

function App() {
  const [theme, colorMode] = useMode();
  return (
    <>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <div className="app">
            <SideBar />

            <main className="content">
              <Routes>
                <Route path="/dash" element={<Dashboard />} />
                <Route path="/reservation" element={<ReservationPage />} />
              </Routes>
            </main>
          </div>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </>
  );
}

export default App;
