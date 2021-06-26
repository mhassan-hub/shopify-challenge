import React from "react";

export default function Profile() {
  return (
    <div>
      <h1>Welcome, User!</h1>
      <h3>Here you can see and manage all your pictures</h3>
      <div className="image-feed">
        <img
          src="https://images.unsplash.com/photo-1513682121497-80211f36a7d3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
          alt="placeholder-img"
        />
        <img
          src="https://images.unsplash.com/photo-1533003505519-6a9b92ed4911?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
          alt="placeholder-img2"
        />
        <img
          src="https://images.unsplash.com/photo-1531279550271-23c2a77a765c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
          alt="placeholder-img3"
        />
      </div>
    </div>
  );
}
