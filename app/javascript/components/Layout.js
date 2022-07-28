import React from "react";
import App from "./pages/App";


export default function Layout(props) {
  return (
    <>
      <div>
        <App {...props} />
      </div>
    </>
  );
}
