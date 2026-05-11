
import { createRoot } from "react-dom/client";
import App from "./app/App.tsx";
import "./styles/index.css";

console.log('Mental Math Master landing booted');

const fetchVisitorIp = async () => {
  try {
    const response = await fetch('https://api.ipify.org?format=json');

    if (!response.ok) {
      throw new Error(`IP lookup failed with status ${response.status}`);
    }

    const data: { ip?: string } = await response.json();
    console.log('Visitor IP:', data.ip ?? 'IP not found in response');
  } catch (error) {
    console.warn('Could not fetch visitor IP:', error);
  }
};

void fetchVisitorIp();

createRoot(document.getElementById("root")!).render(<App />);
  
