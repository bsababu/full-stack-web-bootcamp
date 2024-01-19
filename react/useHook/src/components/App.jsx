import React, { useState } from "react";

function App() {
  // const [fname, setFname] = useState("");
  // const [lname, setLname] = useState("");
  const [fullnames, setFullname] = useState({
    fname: "",
    lname: "",
  });

  // function handleFname(e) {
  //   setFname(e.target.value);
  // }
  // function handleLname(e) {
  //   setLname(e.target.value);
  // }

  function handleFullname(e) {
    const { value, name } = e.target;
    setFullname((prevVal) => {
      if (name === "fname") {
        return {
          fname: value,
          lname: prevVal.lname,
        };
      } else if (name === "lname") {
        return {
          lname: value,
          fname: prevVal.fname,
        };
      }
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {fullnames.fname} {fullnames.lname}
      </h1>
      <form>
        <input
          name="fname"
          placeholder="First Name"
          onChange={handleFullname}
          value={fullnames.fname}
        />
        <input
          name="lname"
          placeholder="Last Name"
          onChange={handleFullname}
          value={fullnames.lname}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
