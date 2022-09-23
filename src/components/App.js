import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";

// pass this data down as props to the child component(s) that need it!
import user from "../data/user";
console.log(user);

function App(user) {
  return (
    <div>
      <NavBar github={user.links.github} inkedin={user.links.inkedin}/>
      <Home  name={user.name} city={user.city}/>
      <About bio={user.bio}/>
    </div>
  );
}

export default App;
