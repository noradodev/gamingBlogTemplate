import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer bg-white/10 text-center underline-offset-1 p-4">
      <h1 className="text-white">
        ©Copyright Reserve <Link to="/">MyGame.space</Link>
      </h1>
    </div>
  );
};

export default Footer;
