import { Link } from "react-router-dom";
// import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io";
// import { RiTwitterXFill } from "react-icons/ri";

function Footer() {
  // const linkClasses =
  //   "text-xl text-zinc-700 transform  duration-200 hover:scale-110";

  // const footerLinkClasses = "text-sm text-zinc-600";

  // const headingClasses =
  //   "text-[1rem]  sm:text-base font-medium text-zinc-800 sm:tracking-wide";

  return (
    <footer className="w-full p-4 bg-zinc-50 shadow border-t">
      <div className="grid-cols-2 sm:grid w-full">
        <div className="text-sm text-gray-600 flex sm:justify-normal">
          © 2024 Restaurant. All rights reserved.
        </div>
        <div className="flex flex-col sm:flex-row sm:space-x-3 gap-0.5 mt-1 sm:mt-0 sm:justify-end text-sm">
          <Link className=" transition ease-in-out duration-300 ">
            Privacy Policy
          </Link>
          <Link className=" transition ease-in-out duration-300 ">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
