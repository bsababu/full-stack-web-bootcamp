import React from "react";
import ReactDOM from "react-dom";

function Card(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <img src={props.src} alt="avatar_img" />
      <p>{props.number}</p>
      <p>{props.mail}</p>
    </div>
  );
}

ReactDOM.render(
  <div>
    <h1>My Contacts</h1>
    <Card
      name="Beyonce Kare"
      number="123 000343"
      mail="b@beyonce.com"
      src="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
    />

    <Card
      name="Jack Bauer"
      number="+987 654 321"
      mail="jack@nowhere.com"
      src="https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg"
    />

<Card
      name="Chuck Norris"
      number="+918 372 574"
      mail="gmail@chucknorris.com"
      src="https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png"
    />
  </div>,
  document.getElementById("root")
);
