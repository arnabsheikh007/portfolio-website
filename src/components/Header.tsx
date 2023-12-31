import { TypeAnimation } from "react-type-animation";
import {
  Angular,
  Laravel,
  Mongodb,
  Nodejs,
  Profile,
  Reactjs,
  Redux,
} from "../assets";
import { ImFilePdf } from "react-icons/im";
import { SiGithub } from "react-icons/si";
const Header: React.FC = () => {
  return (
    <div className="w-full flex flex-col lg:flex-row px-4 md:px-10 gap-10 2xl:gap-20 py-20">
      <div
        className="flex flex-col mb-20 lg:mb-0"
        data-aos="fade-down"
        data-aos-offset="100"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
      >
        <span className="text-lg font-bold text-orange-700">
          FULL-STACK SOFTWARE DEVELOPER
        </span>
        <div className="flex gap-4 items-center my-4">
          <h1 className="text-gray-800 dark:text-neutral-100 text-4xl md:text-5xl 2xl:text-7xl font-bold text-center">
            I'm a
          </h1>
          <div className="flex items-center justify-center text-white shadow-lg bg-blue-800 dark:bg-[#224cff10] dark:text-[#224cff] rounded-full">
            <p className="text-3xl 2xl:text-5xl font-bold px-5 py-2 pb-2 text-center">
              <TypeAnimation
                sequence={[
                  "Software Engineer",
                  1000,
                  "Competitive Programmer",
                  1000,
                  "Web Developer",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </p>
          </div>
        </div>

        <h1 className="text-5xl 2xl:text-7xl font-extrabold text-black dark:text-neutral-100 tracking-wider">
          Sheikh Bahauddin Arnab
        </h1>

        <p className="text-md text-black dark:text-gray-100 mt-5 2xl:mt-10">
          Diligent and quick-learning individual with a strong background in
          programming contests, seeking to enhance frontend and backend
          development skills. Committed to fulfilling obligations and
          contributing effectively to team and organizational growth.
        </p>

        <div className="mt-10 flex gap-10">
          <a
            href="#contact"
            className="bg-orange-700 text-lg text-white font-semibold rounded-md py-3 px-5 cursor-pointer hover:scale-110 ease-in-out duration-300"
          >
            Hire Me
          </a>
          <a
            href="https://github.com/arnabsheikh007"
            className="flex gap-3 items-center justify-center rounded-full shadow-lg py-2 px-4 bg-[#181441] text-white cursor-pointer hover:scale-110 ease-in-out duration-300"
          >
            <SiGithub size={14} />
            Github
          </a>
          <a
            href="https://drive.google.com/file/d/12dggwx15-jgnP0Pb1gt4DNozahHt9-UH/view?usp=sharing"
            className="flex gap-3 items-center justify-center rounded-full shadow-lg py-2 px-4 bg-[#181441] text-white cursor-pointer hover:scale-110 ease-in-out duration-300"
          >
            <ImFilePdf size={14} />
            Resume
          </a>
        </div>
      </div>

      <div className="w-full flex-1 flex justify-center">
        <div className="w-[300px] h-[290px] md:w-[400px] md:h-[400px] 2xl:w-[500px] 2xl:h-[500px]  border rounded-full border-gray-600 dark:border-gray-200 relative  md:mt-20 lg:mt-0 flex items-center justify-center">
          <img
            src={Profile}
            className="w-auto h-full absolute -top-5 md:-top-10 rounded-full"
            data-aos="fade-down"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="500"
            data-aos-easing="ease-in-out"
          />
          <div
            className="relative w-full h-full rounded-full"
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            <img
              src={Reactjs}
              className="absolute top-7 md:top-20 left-3 md:-left-3 2xl:left-2 w-12 h-12 md:w-16 md:h-16"
            />
            <img
              src={Redux}
              className="absolute bottom-7 left-3 md:bottom-10 2xl:left-12 w-12 h-12 md:w-16 md:h-16"
            />
            <img
              src={Mongodb}
              className="absolute top-5 md:top-14 right-3 md:-right-3 2xl:right-2 w-12 h-12 md:w-16 md:h-16"
            />
            <img
              src={Nodejs}
              className="absolute bottom-7 right-3 md:bottom-10 2xl:right-12 w-12 h-12 md:w-16 md:h-16"
            />
            <img
              src={Laravel}
              className="absolute top-[-50px] left-1/2 transform -translate-x-1/2 w-12 h-12 md:w-16 md:h-16"
            />
            <img
              src={Angular}
              className="absolute bottom-[-30px] left-1/2 transform -translate-x-1/2 w-12 h-12 md:w-16 md:h-16"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
