import { useLocation } from "react-router-dom";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import logo from "../assets/4-small.png";
import { navigation } from "../constants";
import Button from "./Button";
import MenuSvg from "../assets/svg/MenuSvg";
import { HamburgerMenu } from "./design/Header";
import { useState } from "react";
const Header = () => {
  const pathname = useLocation();
  const [openNavigation, setOpenNavigaion] = useState(false);
  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigaion(false);
      enablePageScroll();
    } else {
      setOpenNavigaion(true);
      disablePageScroll();
    }
  };
  const handleClick = () => {
    if (!openNavigation) return;
    enablePageScroll();
    setOpenNavigaion(false);
  };
  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 border-b border-w-5 lg:backdrop-blur-sm ${
        openNavigation ? "bg-w-7" : "bg-w-7/90 backdrop-blur-sm"
      }`}
    >
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        <a className="block w-[12rem] xl:mr-8 " href="#hero">
          <img src={logo} width={70} height={70} alt="logo" />
        </a>
        <nav
          className={` ${
            openNavigation ? "flex" : "hidden"
          } fixed top-[5rem] left-0 right-0 bottom-0 bg-w-7 lg:static lg:flex lg:mx-auto lg:bg-transparent`}
        >
          <div className=" relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.url}
                onClick={handleClick}
                className={`block relative font-code tex-2xl uppercase text-n-1 transition-colors hover:text-color-1 ${
                  item.onlyMobile ? "lg:hidden" : ""
                } px-6 py-6 md:py-8 lg:-m-0.25 lg:text-xs lg:font-semibold ${
                  item.url === pathname.hash
                    ? "z-2 lg:text-n-1"
                    : "lg:text-n-1/50"
                } lg:leading-5 lg:hover:text-n-1 xl:px-12`}
              >
                {item.title}
              </a>
            ))}
          </div>
          <HamburgerMenu></HamburgerMenu>
        </nav>

        <Button className="hidden lg:flex" href="#Contact">
          Kontakt
        </Button>
        <Button
          className="ml-auto lg:hidden"
          px="px-3"
          onClick={toggleNavigation}
        >
          <MenuSvg openNavigation={openNavigation} />
        </Button>
      </div>
    </div>
  );
};

export default Header;
