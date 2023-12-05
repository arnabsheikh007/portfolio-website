import { AiFillTwitterCircle } from "react-icons/ai";
import { BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <hr className="hidden dark:block" />

      <div className="w-full flex flex-col md:flex-row py-20 px-8 md:px-10 gap-10 lg:gap-20 justify-between ">
        <p className="text-lg text-white font-semibold ">
          Address: Mirpur, Dhaka-1216
        </p>

        <div className="flex flex-col md:flex-row text-md gap-5 md:gap-20 text-white ">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
        </div>

        <div className="flex flex-col gap-5 text-md text-white ">
          <a href="mailto:arnab.sheikh007@gmail.com">
            arnab.sheikh007@gmail.com
          </a>
          <p>+880 1779565288</p>
        </div>
      </div>

      <div className="flex flex-col gap-10 items-center justify-center pb-20 ">
        <p className="text-white font-semibold tracking-wider">Social Media</p>

        <div className="flex gap-10 text-white text-2xl mb-10 ">
          <a href="http://www.facebook.com/arnab.sheikh">
            <BsFacebook className="hover:scale-125" />
          </a>
          <a href="https://www.instagram.com/arnab_sheikh/">
            <BsInstagram className="hover:scale-125" />
          </a>
          <a href="https://www.linkedin.com/in/arnabsheikh/">
            <BsLinkedin className="hover:scale-110" />
          </a>
          <a href="https://twitter.com/arnab_sheikh">
            <AiFillTwitterCircle className="hover:scale-125" />
          </a>
        </div>

        <p className="text-gray-400 text-md tracking-wider">
          @2023 Sheikh Bahauddin Arnab
        </p>
      </div>
    </footer>
  );
};

export default Footer;
