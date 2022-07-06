// import { StrictMode } from "react";
// import * as ReactDOMClient from "react-dom/client";

// import App from "./App";

// const rootElement = document.getElementById("root");
// const root = ReactDOMClient.createRoot(rootElement);

// root.render(
//   <StrictMode>
//     <App />
//   </StrictMode>
// );

// import { render } from "react-dom";

// import App from "./App";

// const rootElement = document.getElementById("root");
// render(<App />, rootElement);

import { StrictMode } from "react";
import ReactDom from "react-dom";

import App from "./App";

ReactDom.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);
