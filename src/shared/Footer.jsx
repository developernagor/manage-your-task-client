import React from 'react';

function Footer(props) {
    return (
        <footer className="footer footer-center bg-base-300 text-base-content p-4">
  <aside>
    <p>Copyright © {new Date().getFullYear()} - All right reserved by MJ Industries Ltd</p>
  </aside>
</footer>
    );
}

export default Footer;