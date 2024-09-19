import Section from "./Section";
import { smallSphere } from "../assets";
import Heading from "./Heading";
import PricingList from "./PricingList";
import { BottomLine, LeftLine, RightLine } from "./design/Pricing";

const Pricing = () => {
  return (
    <Section className="overflow-hidden" id="pricing">
      <div className="container relative z-2">
        <div className="hidden relative justify-center mb-[6.5rem] lg:flex">
          <img
            src={smallSphere}
            className="relative z-1"
            width={255}
            height={255}
            alt="Sphere"
          />
        </div>

        <Heading
          tag="Nekretnine Blagojević specijalne ponude"
          title="Plati jednom koristi zauvek"
        />

        <div className="relative">
          <PricingList />
          <LeftLine />
          <RightLine />
        </div>

        <div className="flex justify-center mt-10">
          <a
            className="text-xs font-code font-bold tracking-wider uppercase border-b"
            href="/pricing"
          >
            Pogledaj više detalja
          </a>
        </div>
      </div>
      <BottomLine />
    </Section>
  );
};

export default Pricing;
