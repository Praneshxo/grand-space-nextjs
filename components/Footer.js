export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <p className="footer-mark">GS INTERIOR STUDIO</p>
            <p>Interior design with a distinct sense of place, purpose and personality.</p>
          </div>
          <div>
            <h4>Quick Links</h4>
            <p>
              <a href="#">Home</a><br />
              <a href="#about">About</a><br />
              <a href="#services">Services</a><br />
              <a href="#projects">Gallery</a><br />
              <a href="#contact">Contact</a>
            </p>
          </div>
          <div>
            <h4>Services</h4>
            <p>Residential Interior Design<br />Commercial Interior Design<br />Office Space Planning<br />Custom Furniture Design<br />3D Visualization</p>
          </div>
          <div className="footer-contact">
            <h4>Enquiries</h4>
            <a href="mailto:gsinteriorstudio20@gmail.com">gsinteriorstudio20@gmail.com</a>
            <a href="tel:+919087665511">+91 90876 65511</a>
            <p>Chennai, India</p>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© GS Interior Studio</span><span>Designed for spaces with soul</span>
        </div>
      </div>
    </footer>
  );
}
