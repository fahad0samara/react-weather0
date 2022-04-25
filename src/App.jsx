
import { useContext } from "react";
import { themeContext } from "./Context";
import './index.css'
import { Fatch } from "./page/Fatch";
import Navbar from "./page/Navbar";

function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
      <div
      className="App"
      style={{
        background: darkMode ? "black" : "",
        color: darkMode ? "white" : "",
      }}
    >
      <Navbar />
      <Fatch/>
      
    </div>
  );
}

export default App
