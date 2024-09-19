import { lines } from "../../assets";
import PlusSvg from "../../assets/svg/PlusSvg";

export const LeftLine = () => {
  return (
    <div className="hidden lg:block absolute top-1/2 right-full w-[92.5rem] h-[11.0625rem] -translate-y-1/2 pointer-events-none">
      <img
        className="w-full"
        src={lines}
        width={1480}
        height={177}
        alt="Lines"
      />
    </div>
  );
};

export const RightLine = () => {
  return (
    <div className="hidden lg:block absolute top-1/2 left-full w-[92.5rem] h-[11.0625rem] -translate-y-1/2 -scale-x-100 pointer-events-none">
      <img
        className="w-full"
        src={lines}
        width={1480}
        height={177}
        alt="Lines"
      />
    </div>
  );
};

export const BottomLine = () => {
  return (
    <>
      <div className="hidden absolute top-[90.25rem] left-10 right-10 h-0.25 bg-w-5 pointer-events-none xl:block" />

      <PlusSvg className="hidden absolute top-[90rem] left-[2.1875rem] z-2 pointer-events-none xl:block" />

      <PlusSvg className="hidden absolute top-[90rem] right-[2.1875rem] z-2 pointer-events-none xl:block" />
    </>
  );
};
