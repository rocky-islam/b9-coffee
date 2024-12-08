import logo from "../../../assets/images/more/logo1.png";
import footer2 from "../../../assets/images/more/24.jpg";
import footer1 from "../../../assets/images/more/13.jpg";

const Footer = () => {
  return (
    <div className="mt-32">
      <footer
        className="footer text-base-content p-10"
        style={{ backgroundImage: `url(${footer1})` }}
      >
        <aside>
          <img src={logo} alt="" className="w-24" />
          <p>
            Espresso Emporium
            <br />
            Providing reliable Food since 1992
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
      <footer className="footer footer-center text-base-content p-4"style={{ backgroundImage: `url(${footer2})` }}>
        <aside>
          <p className="text-white">
            Copyright © {new Date().getFullYear()} - All right reserved by Espresso Emporium
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
