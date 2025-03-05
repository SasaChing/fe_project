import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: Arial, sans-serif;
    font-size: 16px;
  }
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
    border-radius: 10px;
  }
  ::-webkit-scrollbar-track {
    background: #f0f0f0;
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb {
    background: #C1C8CA;
    border-radius: 10px;
    transition: background 0.3s ease-in-out;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #C1C8CA
  }
  p: {
    margin: 0;
  }
`;