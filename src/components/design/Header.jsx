import { desk } from "../../assets";

export const SideLines = () => {
  return (
    <>
      <div className="absolute top-0 left-5 w-0.25 h-full bg-w-5"></div>
      <div className="absolute top-0 right-5 w-0.25 h-full bg-w-5"></div>
    </>
  );
};

export const HamburgerMenu = () => {
  return (
    <div className="absolute inset-0 pointer-events-none lg:hidden">
      <div className="absolute inset-0 opacity-[.03]">
        <img
          className="w-full h-full object-cover"
          src={desk}
          width={688}
          height={953}
          alt="Background"
        />
      </div>

      <SideLines />
    </div>
  );
};
