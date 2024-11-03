import React from "react";
import About from "./About";
function Links({ github, linkedin }) {
  return (
    <div id="links">
      <h3>Links</h3>
        <a href={github}>{github}</a>
      <br /> 
        <a href={linkedin}> {linkedin}</a>
    </div>
  );
}

export default Links;
