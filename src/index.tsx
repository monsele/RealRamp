
import { createRoot } from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { base } from "viem/chains";
import Providers from "./OnchainProviders";
import { BrowserRouter } from "react-router-dom";
import "./global.css";

const container = document.getElementById("root");
const root = createRoot(container!);

root.render(
  <Providers>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Providers>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
