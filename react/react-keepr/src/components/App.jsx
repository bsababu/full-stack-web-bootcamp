import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";

function App() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <Note />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
