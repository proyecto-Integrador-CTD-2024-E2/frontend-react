import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  const isDetailPage = location.pathname.includes("/detail");
  const col12Classes = isDetailPage ? "lg:!px-[20em]" : "";
  return (
    <footer className={col12Classes}>
      <div className="flex flex-col items-center p-4 sm:p-12 md:flex-row">
        <div className="flex flex-col items-center gap-8 md:gap-6 md:flex-row">
          <a href="#" className="flex font-semibold items-center text-gray-800">
            <img
              className="w-auto h-8 md:h-10"
              src="../../public/logoSVG.svg"
              alt=""
            />
          </a>
          <p className="m-0 p-2 text-lg leading-5 font-medium text-colorSecundario">
            ©️ 2024 Tools House.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 md:gap-16">
          <Link
            to="/"
            className="text-sm leading-5 font-light text-gray-500 hover:underline"
          ></Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
