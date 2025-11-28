// src/components/Footer.tsx
import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    // Using DaisyUI component & theme classes
    // These rely on @plugin "daisyui" working AND CSS variables being set in globals.css
    <footer className="footer footer-center p-4 bg-base-300 text-base-content mt-12">
      {/* bg-base-300 uses --b3, text-base-content uses --bc */}
      <aside>
        <p>
          Copyright © {currentYear} - Antoni Christodoulou. All rights reserved.
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
