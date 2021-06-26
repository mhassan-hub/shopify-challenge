import React from "react";
// import "components/Button.scss";

export default function Button(props) {
  return (
    <button href={props.href} onClick={props.onClick} disabled={props.disabled}>
      {props.children}
    </button>
  );
}
