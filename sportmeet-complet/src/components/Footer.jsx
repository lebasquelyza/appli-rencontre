// sportmeet-complet/src/components/Footer.jsx
import React from "react";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-content">
        <span>MatchFit • {year}</span>
      </div>
    </footer>
  );
}
