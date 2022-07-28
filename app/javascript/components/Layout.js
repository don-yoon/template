import React from "react";
import App from "./pages/App";
import Header from "./components/Header";


export default function Layout(props) {
  return (
    <>
      <div >
        <Header/>
        <App {...props} />
        
      </div>
    </>
  );
}
