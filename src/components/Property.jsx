import { benefits } from "../constants";
import Heading from "./Heading";
import Section from "./Section";
import Arrow from "../assets/svg/Arrow";
import { camera, rest, bathtub, ruler, bhouse } from "../assets";
import PropertySearchForm from "./PropertySearchForm";

const Property = () => {
  return (
    <Section id="features">
      <div className="container relative z-2">
        <Heading
          className="md:max-w-md lg:max-w-2xl"
          title="Nekretnine"
          text="pronađite vašu idealnu nekretninu"
        />

        <PropertySearchForm />

        <div className="flex flex-wrap justify-center gap-10 mb-10 ">
          {benefits.map((item) => (
            <div
              className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem] shadow-lg rounded-3xl overflow-hidden"
              style={{
                backgroundImage: `url(${item.backgroundUrl})`,
              }}
              key={item.id}
            >
              <div className="absolute top-2 left-2 flex space-x-2 z-10">
                {item.features?.offer &&
                  item.features.offer.split(", ").map((offer, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-w-2 text-white text-xs font-bold rounded-md"
                    >
                      {offer}
                    </span>
                  ))}
              </div>

              <div className="relative h-48">
                {item.imageUrl && (
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                )}
                <div className="absolute bottom-2 left-2 text-white bg-w-5 px-2 rounded-md text-sm font-semibold">
                  {item.location}
                </div>
                <div className="absolute bottom-2 right-2 text-white bg-w-5 rounded-md px-2 flex items-center">
                  <span className="mr-1">{item.views} </span>
                  <img src={camera} alt="views" className="w-5 h-5 ml-2" />
                </div>
              </div>

              <div className="relative z-2 flex flex-col p-4 bg-w-5">
                <h5 className="h5 mb-2">{item.title}</h5>
                <p className="body-2 mb-2 text-n-4">{item.text}</p>
                <div className="text-lg font-bold text-w-1 mb-4">
                  {item.price}
                </div>

                {item.features && (
                  <div className="flex items-center mb-4 text-gray-600">
                    <span className="flex items-center mr-4">
                      <img
                        src={rest}
                        alt="rest"
                        width={16}
                        height={16}
                        className="mr-2"
                      />{" "}
                      {item.features.bedrooms} Sobe
                    </span>
                    <span className="flex items-center mr-4">
                      <img
                        src={bathtub}
                        alt="bathtub"
                        width={16}
                        height={16}
                        className="mr-2"
                      />{" "}
                      {item.features.bathrooms} Kupatila
                    </span>
                    <span className="flex items-center mr-4">
                      <img
                        src={ruler}
                        alt="ruler"
                        width={16}
                        height={16}
                        className="mr-2"
                      />{" "}
                      {item.features.size}
                    </span>
                  </div>
                )}

                <div className="flex items-center mt-auto">
                  <img
                    className="rounded-full w-12 h-12 object-cover"
                    src={item.iconUrl}
                    width={48}
                    height={48}
                    alt={item.owner}
                  />
                  <p className="ml-2 text-sm font-semibold">{item.owner}</p>
                  <p className="ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider">
                    Pogledaj više
                  </p>
                  <Arrow />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Property;
