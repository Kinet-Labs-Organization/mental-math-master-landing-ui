
import { createRoot } from "react-dom/client";
import App from "./app/App.tsx";
import "./styles/index.css";

console.log('Mental Math Master landing booted');

createRoot(document.getElementById("root")!).render(<App />);
  
