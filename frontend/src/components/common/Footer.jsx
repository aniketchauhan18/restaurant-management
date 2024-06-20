import { Link } from "react-router-dom";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io";
import { RiTwitterXFill } from "react-icons/ri";

function Footer() {
  const linkClasses =
    "text-xl text-zinc-700 transform  duration-200 hover:scale-110";

  const footerLinkClasses = "text-sm text-zinc-600";

  const headingClasses =
    "text-[1rem]  sm:text-base font-medium text-zinc-800 sm:tracking-wide";

  return (
    <footer className="grid bottom-0 font-inter mt-16 sm:mt-10 bg-zinc-100/40 border-t p-3">
      <div className="grid sm:grid-cols-2 gap-3 w-full">
        <div className="grid sm:grid-cols-2  ml-2 mr-2 flex-col gap-3 sm:flex-row">
          <div className="flex flex-col w-1/2 sm:gap-1 ">
            <p className={headingClasses}>ABOUT US</p>
            <Link className={footerLinkClasses}>Who We Are</Link>
            <Link className={footerLinkClasses}>Blog</Link>
            <Link className={footerLinkClasses}>Work with us</Link>
            <Link className={footerLinkClasses}>Contact Us</Link>
          </div>
          <div className="flex flex-col w-1/2 sm:gap-1">
            <p className={`${headingClasses} w-full`}>FOR RESTAURANTS</p>
            <Link className={footerLinkClasses}>Partner With Us</Link>
            <Link className={footerLinkClasses}>Features For You</Link>
          </div>
        </div>
        <div className="grid sm:grid-cols-2  ml-2 mr-2  flex-col gap-3 sm:flex-row">
          <div className="flex flex-col sm:gap-1">
            <p className={headingClasses}>LEARN MORE</p>
            <Link className={footerLinkClasses}>Privacy</Link>
            <Link className={footerLinkClasses}>Security</Link>
            <Link className={footerLinkClasses}>Terms</Link>
          </div>
          <div className="flex flex-col w-1/2">
            <div className="flex flex-col sm:gap-1 gap-1">
              <p className={headingClasses}>SOCIAL LINKS</p>
              <div className="flex gap-4">
                <a
                  href="https://github.com/aniketchauhan18/restaurant-management"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClasses}
                >
                  <IoLogoGithub />
                </a>
                <a
                  href="https://www.linkedin.com/in/aniketchauhan18/"
                  target="_blank"
                  className={linkClasses}
                >
                  <IoLogoLinkedin />
                </a>
                <a
                  href="https://x.com/aniket_chn18"
                  target="_blank"
                  className={linkClasses}
                >
                  <RiTwitterXFill />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <small className="flex justify-center text-sm mt-5 text-zinc-800">
        Made with ❤️ by Aniket Chauhan
      </small>
    </footer>
  );
}

export default Footer;
