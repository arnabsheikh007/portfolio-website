import { Profile } from "../assets";
import { FaLinkedinIn } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { BsWhatsapp } from "react-icons/bs";

const About = () => {
  return (
    <div className="w-full flex flex-col lg:flex-row px-8 md:px-10 gap-10 lg:gap-20 lg:py-20 ">
      <div className="w-full md:h-[290px] lg:w-1/3 flex flex-col items-center border border-gray-500 dark:bg-transparent rounded-md">
        <img
          src={Profile}
          className="h-[290px] p-1 rounded-md ease-in-out duration-300 hover:scale-125"
        />
      </div>

      <div className="w-full flex flex-col">
        <p className="text-3xl font-bold text-black dark:text-white  ">
          About Me
        </p>
        <p className="text-lg text-black dark:text-gray-400 leading-10">
          I am a diligent and quick-learning individual with a strong focus on
          learning new technologies and fulfilling responsibilities effectively.
          I have actively participated in various programming contests,
          demonstrating my skills in frontend and backend development, including
          React, Angular, Javascript, TypeScript, Next, ASP.NET, and Laravel. I
          am adept at working in a team, aiming to contribute to both personal
          and organizational development.
        </p>

        <div
          className="mt-5 2xl:mt-10 flex flex-wrap gap-5"
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          <a
            className="flex gap-3 items-center justify-center rounded-full shadow-lg py-2 px-4 bg-[#030a1c] text-white cursor-pointer hover:scale-110 ease-in-out duration-300"
            href="https://www.linkedin.com/in/arnabsheikh/"
          >
            <FaLinkedinIn size={14} /> Sheikh Bahauddin Arnab
          </a>
          <a
            className="flex gap-3 items-center justify-center rounded-full shadow-lg py-2 px-4 bg-[#030a1c] text-white cursor-pointer hover:scale-110 ease-in-out duration-300"
            href="mailto:arnab.sheikh007@gmail.com"
          >
            <SiGmail size={14} />
            {"arnab.sheikh007@gmail.com"}
          </a>
          <a
            href="https://wa.me/+8801779565288"
            className="flex gap-3 items-center justify-center rounded-full shadow-lg py-2 px-4 bg-[#030a1c] text-white cursor-pointer hover:scale-110 ease-in-out duration-300"
          >
            <BsWhatsapp size={14} /> +88 01779565288
          </a>
          {/* <p className="flex gap-3 items-center justify-center rounded-full shadow-lg py-2 px-4 bg-[#030a1c] text-white cursor-pointer">
            <MdWifiCalling2 size={14} /> +88 01601565288
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default About;
