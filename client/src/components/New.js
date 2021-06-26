import React from "react";
import Button from "./Button";
import { useState } from "react";

export default function New() {
  const [state, setState] = useState({
    name: "",
    url: "",
    category: "",
    showPreview: false,
  });

  return (
    <div>
      <h1>Add new picture here</h1>
      <div className="new-form">
        <input
          name="url"
          type="url"
          value={state.url}
          onChange={(e) => {
            setState({ ...state, url: e.target.value });
          }}
          placeholder="picture url"
        ></input>
        <input
          name="name"
          value={state.name}
          type="text"
          onChange={(e) => {
            setState({ ...state, name: e.target.value });
          }}
          placeholder="name"
        ></input>

        <input
          name="category"
          value={state.category}
          onChange={(e) => {
            setState({ ...state, category: e.target.value });
          }}
          type="text"
          placeholder="category"
        ></input>
        <Button onClick={() => setState({ ...state, showPreview: true })}>
          Show Preview
        </Button>
      </div>
      {state.showPreview && <img src={state.url} alt={state.name} />}
    </div>
  );
}
