import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: "",
  });

  function handleContact(e) {
    const { name, value } = e.target;
    setContact((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
    // setContact((prev) => {
    //   if (name === "fName") {
    //     return {
    //       fName: value,
    //       lName: prev.lName,
    //       email: prev.email,
    //     };
    //   }
    //   if (name === "lName") {
    //     return {
    //       lName: value,
    //       fName: prev.fName,
    //       email: prev.email,
    //     };
    //   }
    //   if (name === "email") {
    //     return {
    //       fName: prev.lName,
    //       lName: prev.lName,
    //       email: value,
    //     };
    //   }
    // });
  }

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input onChange={handleContact} name="fName" placeholder="First Name" />
        <input onChange={handleContact} name="lName" placeholder="Last Name" />
        <input onChange={handleContact} name="email" placeholder="Email" />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
