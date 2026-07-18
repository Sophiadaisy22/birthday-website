import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p>
        © {new Date().getFullYear()} Crafted with ❤️ by Sophia Ogogo. All Rights Reserved.
      </p>
    </footer>
  );
}

export default Footer;