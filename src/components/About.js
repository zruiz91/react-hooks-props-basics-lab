import React from "react";

function About(user) {
  const bio = {bio};
  return (
    <div id="about">
      <h2>About Me</h2>
      {bio?<p>{bio}</p>:null}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      {/* add your <Links /> component here */}
    </div>
  );
}

export default About;
