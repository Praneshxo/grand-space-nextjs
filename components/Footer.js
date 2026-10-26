export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div>
            <h4>Grand Space Interiors</h4>
            <p>At Grand Space Interiors, we specialize in innovative interior design solutions that transform spaces. Our experienced team works closely with clients to create environments that reflect their unique style and needs.</p>
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
            <h4>Our Services</h4>
            <p>Residential Interior Design<br />Commercial Interior Design<br />Office Space Planning<br />Custom Furniture Design<br />3D Visualization</p>
          </div>
          <div>
            <h4>Contact Us</h4>
            <p>No:12, Jones Glory Gardens-Ponmar.<br />Vengadamangalam Road, Chennai-600048<br />+91 90876 65511<br />+91 90876 65522<br />gsinteriorstudio20@gmail.com</p>
          </div>
        </div>
        <div style={{ textAlign: 'center', borderTop: '1px solid #333', paddingTop: 20 }}>
          © Grand Space Interiors , All Right Reserved.
        </div>
      </div>
    </footer>
  );
}
