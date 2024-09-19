import { gradient, play, notification1 } from "../../assets";
import ChatBubbleWing from "../../assets/svg/ChatBubbleWing";
import PlusSvg from "../../assets/svg/PlusSvg";

export const Gradient = () => {
  return (
    <div className="absolute top-0 -left-[10rem] w-[56.625rem] h-[56.625rem] opacity-50 mix-blend-color-dodge pointer-events-none">
      <img
        className="absolute top-1/2 left-1/2 w-[79.5625rem] max-w-[79.5625rem] h-[88.5625rem] -translate-x-1/2 -translate-y-1/2"
        src={gradient}
        width={1417}
        height={1417}
        alt="Gradient"
      />
    </div>
  );
};

export const PhotoChatMessage = () => {
  return (
    <div className="absolute top-8 right-8 max-w-[17.5rem] py-6 px-8 bg-w-5 rounded-t-xl rounded-bl-xl font-code text-base lg:top-16 lg:right-[8.75rem] lg:max-w-[17.5rem]">
      Kreiranje kvalitetnih slika vaseg objekta
      <ChatBubbleWing className="absolute left-full bottom-0" />
    </div>
  );
};

export const VideoChatMessage = () => {
  return (
    <div className="absolute top-8 left-[3.125rem] w-full max-w-[14rem] pt-2.5 pr-2.5 pb-7 pl-5 bg-w-5 rounded-t-xl rounded-br-xl font-code text-base md:max-w-[17.5rem]">
      Kreiranje videa!
      <div className="absolute left-5 -bottom-[1.125rem] flex items-center justify-center w-[2.25rem] h-[2.25rem] bg-w-2 rounded-[0.75rem]">
        <img
          className="rounded-[0.70rem]"
          src={notification1}
          width={36}
          height={36}
          alt="Blagojevic"
        />
      </div>
      <p className="tagline absolute right-2.5 bottom-1 text-[0.625rem] text-n-3 uppercase">
        Upravo sad
      </p>
      <ChatBubbleWing
        className="absolute right-full bottom-0 -scale-x-100"
        pathClassName="fill-w-5"
      />
    </div>
  );
};

export const VideoBar = () => {
  return (
    <div className="absolute left-0 bottom-0 w-full flex items-center p-6">
      <img
        src={play}
        width={24}
        height={24}
        alt="Play"
        className="object-contain mr-3"
      />

      <div className="flex-1 bg-[#D9D9D9]">
        <div className="w-1/2 h-0.5 bg-w-2"></div>
      </div>
    </div>
  );
};

export const BottomLine2 = () => {
  return (
    <>
      <div className="hidden absolute top-[115.25rem] left-10 right-10 h-0.25 bg-w-5 pointer-events-none xl:block" />

      <PlusSvg className="hidden absolute top-[115rem] left-[2.1875rem] z-2 pointer-events-none xl:block" />

      <PlusSvg className="hidden absolute top-[115rem] right-[2.1875rem] z-2 pointer-events-none xl:block" />
    </>
  );
};
