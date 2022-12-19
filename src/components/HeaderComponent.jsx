import React from "react";

export const HeaderComponent = () => {
  return (
    <header className="header">
      <nav className="header-nav">
        <ul className="list">
          <li className="list-item active">
            <button className="btn-primary">home</button>
          </li>
          <li className="list-item">
            <button className="btn-primary btn-drop">coming soon</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};
