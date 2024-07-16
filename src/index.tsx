import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { base } from "viem/chains";
import { OnchainKitProvider } from "@coinbase/onchainkit";
import { BrowserRouter } from "react-router-dom";
import "./global.css";

const container = document.getElementById("root");
const root = createRoot(container!);

root.render(
  <OnchainKitProvider
    chain={base}
    apiKey={process.env.PUBLIC_ONCHAINKIT_API_KEY}
  >
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </OnchainKitProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
