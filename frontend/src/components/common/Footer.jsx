import { Link } from "react-router-dom";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io";
import { RiTwitterXFill } from "react-icons/ri";

function Footer() {
  const linkClasses = "text-2xl transform  duration-200 hover:scale-110";

  return (
    <footer className="flex flex-col mt-16 sm:mt-10">
      <div className="flex flex-col">
        <div className="flex justify-evenly md:self-start md:gap-10 md:pl-5">
          <Link>
            <IoLogoGithub className={linkClasses} />
          </Link>
          <Link className={linkClasses}>
            <IoLogoLinkedin />
          </Link>
          <Link className={linkClasses}>
            <RiTwitterXFill />
          </Link>
        </div>
      </div>
      <small className="flex justify-center my-3 text-sm">
        Made with ❤️ by Aniket Chauhan
      </small>
    </footer>
  );
}

export default Footer;
