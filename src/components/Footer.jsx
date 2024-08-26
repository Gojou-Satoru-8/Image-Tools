import { Link } from "react-router-dom";
const Footer = function () {
  return (
    <div>
      <p className="text-center">
        Created with ❤️ by <Link to="/about">Ankush Bhowmik</Link>
      </p>
    </div>
  );
};

export default Footer;
