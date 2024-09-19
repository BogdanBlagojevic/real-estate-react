import React from "react";
import Section from "./Section";
import Heading from "./Heading";
import { post, phone, pin, house1 } from "../assets";

const Contact = () => {
  return (
    <Section id="Contact">
      {/* Heading deo */}
      <div className="container md:pb-10">
        <Heading
          tag="Imaš nedoumice?"
          title="Kontakt"
          text="Osecajte se slobodno da nas kontaktirate!"
        />

        {/* Sadržaj sekcije sa informacijama i formom */}
        <div className="flex flex-col md:flex-row justify-between">
          {/* Leva strana - Kontakt informacije i slika */}
          <div className="md:w-1/2 w-full p-4 space-y-6 flex flex-col">
            {/* Gornji div - Kontakt informacije */}
            <div className="flex-grow">
              <h2 className="h4 mb-10">Kontakt info</h2>

              {/* Telefon */}
              <div className="flex items-start space-x-4 mb-4">
                <img src={phone} alt="Phone Icon" className="w-10 h-10 " />
                <div>
                  <h3 className="text-lg font-semibold">Phone</h3>
                  <p className="body-2 text-n-4 mb-2">+1 234 567 890</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-4 mb-4">
                <img src={post} alt="Email Icon" className="w-10 h-10 " />
                <div>
                  <h3 className="text-lg font-semibold">Email</h3>
                  <p className="body-2 text-n-4 mb-4">info@example.com</p>
                </div>
              </div>

              {/* Adresa */}
              <div className="flex items-start space-x-4">
                <img src={pin} alt="Address Icon" className="w-10 h-10  " />
                <div>
                  <h3 className="text-lg font-semibold">Address</h3>
                  <p className="body-2 text-n-4 mb-4">
                    123 Main St, Anytown, USA
                  </p>
                </div>
              </div>
            </div>

            {/* Donji div - Slika koja zauzima celu površinu */}
            <div className="flex-shrink-0">
              <img
                src={house1}
                alt="Contact Us"
                className="w-full md:h-[350px]  object-cover rounded-md"
              />
            </div>
          </div>

          {/* Desna strana - Forma */}
          <div className="md:w-1/2 w-full p-4">
            <div className="flex-grow mb-5">
              <h2 className="h4 mb-4">Pišite Nam</h2>
              <p className="body-2 text-n-4 mb-4">
                Imate pitanja o nekretninama? Želite da saznate više o našim
                uslugama ili pronađete savršen dom? Naš tim stručnjaka je ovde
                da vam pomogne!
              </p>
              <p className="body-2 text-n-4 mb-8">
                Popunite obrazac ispod ili nas kontaktirajte direktno putem
                telefona ili e-maila. Radujemo se što ćemo vam pomoći u
                pronalaženju vašeg idealnog prostora.
              </p>
            </div>
            <form className="space-y-4">
              <div>
                <label className="block">Name</label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block ">Email</label>
                <input
                  type="email"
                  className="w-full p-2 border border-gray-300 rounded"
                  placeholder="Your Email"
                />
              </div>
              <div>
                <label className="block ">Subject</label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded"
                  placeholder="Subject"
                />
              </div>
              <div>
                <label className="block ">Message</label>
                <textarea
                  className="w-full p-2 border border-gray-300 rounded"
                  placeholder="Your Message"
                  rows="4"
                ></textarea>
              </div>
              <button
                type="submit"
                className="px-4 py-2 bg-w-6  text-white rounded hover:bg-w-2"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
