import { check, about1, about2, about3, about4 } from "../assets";
import { collabContent } from "../constants";
import Button from "./Button";
import Section from "./Section";
import Heading from "./Heading";
import { BottomLine } from "./design/About";

const About = () => {
  return (
    <Section crosses id="about">
      <div className="container lg:flex flex-col justify-center items-center">
        <Heading title="O nama" text="Vaš pouzdan partner u svetu nekretnina" />

        <div className="w-full px-4 md:px-8">
          <div className="flex flex-col md:flex-row items-center md:items-start w-full">
            <div className="w-full md:w-1/2 mb-8 md:mb-0">
              <h5 className="h-5 mb-4 font-bold">
                Profesionalna agencija za nekretnine
              </h5>
              <ul className="list-disc list-inside mb-10 md:mb-14">
                {collabContent.map((item) => (
                  <li className="mb-3 py-3 flex items-start" key={item.id}>
                    <img
                      src={check}
                      width={24}
                      height={24}
                      alt="check"
                      className="mr-4"
                    />
                    <div>
                      <h6 className="body-2">{item.title}</h6>
                      {item.text && (
                        <p className="body-2 mt-3 text-n-4">{item.text}</p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
              <Button className="mb-8">Kontaktirajte nas</Button>
            </div>

            <div className="md:w-[45%] w-full md:ml-auto h-[24rem] md:mt-10 mb-8">
              <iframe
                className="absolut top-0 left-0 w-full h-full rounded-lg shadow-lg"
                src="https://www.youtube.com/embed/Sq_5TvGkm-I"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
        <div className=" mt-4">
          <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-4 ">
            <div className="relative flex max-w-4xl w-full  bg-w-2 border border-w-5 rounded-lg overflow-hidden p-8">
              <div className="w-2/3 z-1">
                <h2 className="h-2 font-bold mb-4">O Nama</h2>
                <h3 className="h-3 font-semibold mb-10 md:mb-8 lg:mb-4 text-w-5">
                  Vaš pouzdan partner
                </h3>
                <p className="body-2">
                  Posvećeni smo pružanju vrhunskih usluga u oblasti nekretnina,
                  sa fokusom na profesionalnost i transparentnost. Naš tim
                  pomaže klijentima da pronađu idealne domove i investicione
                  prilike.
                </p>
              </div>

              <div className="absolute bottom-0 right-0 w-[200px] h-[200px] overflow-hidden z-0">
                <div className="w-full h-full rounded-tl-full overflow-hidden">
                  <img
                    src={about1}
                    alt="Nekretnina"
                    className="object-cover w-full h-full opacity-20 md:opacity-100"
                  />
                </div>
              </div>
            </div>

            <div className="relative max-w-4xl w-full  bg-w-7 border border-w-5 rounded-lg p-8 overflow-hidden flex flex-row-reverse">
              <div className="w-2/3 sm:ml-[12rem] z-1">
                <h2 className="h-2 font-bold mb-4">Naša misija</h2>
                <h3 className="h-3 font-semibold mb-10 md:mb-8 lg:mb-4 text-w-2">
                  Posvećenost klijentima
                </h3>
                <p className="body-2">
                  Naša misija je da obezbedimo visokokvalitetne usluge i da
                  svakom klijentu omogućimo siguran i brz proces kupovine ili
                  prodaje nekretnina.
                </p>
              </div>

              <div className="absolute bottom-0 left-0 w-[200px] h-[200px] overflow-hidden z-0">
                <div className="w-full h-full rounded-tr-full overflow-hidden">
                  <img
                    src={about2}
                    alt="Nekretnina"
                    className="object-cover w-full h-full opacity-20"
                  />
                </div>
              </div>
            </div>

            <div className="relative flex max-w-4xl w-full  bg-w-7 border border-w-5 rounded-lg overflow-hidden p-8">
              <div className="w-2/3 z-1">
                <h2 className="h-2 font-bold mb-4">Zašto nas izabrati?</h2>
                <h3 className="h-3 font-semibold mb-10 md:mb-8 lg:mb-4 text-w-2">
                  Iskustvo i stručnost
                </h3>
                <p className="body-2">
                  Sa dugogodišnjim iskustvom u industriji nekretnina, naš tim
                  pruža personalizovane usluge i pomaže vam da donesete najbolje
                  odluke u vezi sa nekretninama.
                </p>
              </div>

              <div className="absolute top-0 right-0 w-[200px] h-[200px] overflow-hidden z-0">
                <div className="w-full h-full rounded-bl-full overflow-hidden">
                  <img
                    src={about3}
                    alt="Nekretnina"
                    className="object-cover w-full h-full opacity-20"
                  />
                </div>
              </div>
            </div>

            <div className="relative max-w-4xl w-full bg-w-7 border border-w-5  rounded-lg p-8 overflow-hidden flex flex-row-reverse ">
              <div className="w-2/3  sm:ml-[12rem] z-1">
                <h2 className="h-2 font-bold mb-4">Naš pristup</h2>
                <h3 className="h-3 font-semibold mb-10 md:mb-8 lg:mb-4 text-w-2">
                  Personalizovana rešenja
                </h3>
                <p className="body-2  ">
                  Svaki klijent je za nas jedinstven, i zato kreiramo rešenja
                  koja odgovaraju vašim specifičnim potrebama i zahtevima.
                </p>
              </div>

              <div className="absolute top-0 left-0 w-[200px] h-[200px] overflow-hidden z-0">
                <div className="w-full h-full rounded-br-full overflow-hidden">
                  <img
                    src={about4}
                    alt="Nekretnina"
                    className="object-cover w-full h-full opacity-20"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <BottomLine />
    </Section>
  );
};

export default About;
