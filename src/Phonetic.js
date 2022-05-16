import React from "react";

export default function Phonetic(props) {
  return (
    <div classname="Phonetic">
      <a href={props.phonetic.audio} rel="noreferrer" target="_blank">
        Listen
      </a>
      <br />
      {props.phonetic.text}
    </div>
  );
}
