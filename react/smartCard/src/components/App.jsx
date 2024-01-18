import React from "react";
import contacts from "../contacts";
import SmartCard from "./SmartCard";
import Avatar from "./Avatar";


function createdCard(contact) {
  return (
    <SmartCard 
        key={contact.id}
        name={contact.name}
        src={contact.imgURL}
        tel={contact.phone}
        mail={contact.email}
        id={contact.id}
    />
  )
}
function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Avatar src = "https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"/>
      {contacts.map(createdCard)}
      {/* <SmartCard
        name={contacts[0].name}
        src={contacts[0].imgURL}
        tel={contacts[0].phone}
        mail={contacts[0].email}
      />
      <SmartCard
        name={contacts[1].name}
        src={contacts[1].imgURL}
        tel={contacts[1].phone}
        mail={contacts[1].email}
      />
      <SmartCard
        name={contacts[2].name}
        src={contacts[2].imgURL}
        tel={contacts[2].phone}
        mail={contacts[2].email}
      /> */}
    </div>
  );
}

export default App;
