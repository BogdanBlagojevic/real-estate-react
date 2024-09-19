import PlusSvg from "../../assets/svg/PlusSvg";

export const BottomLine = () => {
  return (
    <>
      <div className="hidden absolute top-[90.25rem] left-10 right-10 h-0.25 bg-w-5 pointer-events-none xl:block" />

      <PlusSvg className="hidden absolute top-[90rem] left-[2.1875rem] z-2 pointer-events-none xl:block" />

      <PlusSvg className="hidden absolute top-[90rem] right-[2.1875rem] z-2 pointer-events-none xl:block" />
    </>
  );
};
