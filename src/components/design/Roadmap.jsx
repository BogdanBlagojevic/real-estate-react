import { gradient } from "../../assets";
import PlusSvg from "../../assets/svg/PlusSvg";
export const Gradient = () => {
  return (
    <div className="absolute top-[18.25rem] left-[30.375rem] w-[56.625rem] opacity-60 mix-blend-color-dodge pointer-events-none">
      <div className="absolute top-1/2 left-1/2 w-[58.85rem] h-[58.85rem] -translate-x-3/4 -translate-y-1/2">
        <img
          className="w-full"
          src={gradient}
          width={942}
          height={942}
          alt="Gradient"
        />
      </div>
    </div>
  );
};

export const BottomLine = () => {
  return (
    <>
      <div className="hidden absolute top-[130.25rem] left-10 right-10 h-0.25 bg-w-5 pointer-events-none xl:block" />

      <PlusSvg className="hidden absolute top-[130rem] left-[2.1875rem] z-2 pointer-events-none xl:block" />

      <PlusSvg className="hidden absolute top-[130rem] right-[2.1875rem] z-2 pointer-events-none xl:block" />
    </>
  );
};
