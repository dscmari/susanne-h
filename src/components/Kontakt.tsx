import Mail from "../assets/icons/mail";
import Phone from "../assets/icons/phone";

type Props = {
  isMobile: boolean;
  isTablet: boolean;
};

export default function Kontakt({ isMobile, isTablet }: Props) {
  return (
    <div>
      {isMobile ? (
        <div className="md:p-16 text-center md:max-w-md md:mx-auto contact-right-col">
          <h1>Jetzt unverbindlich anfragen</h1>
          <p className="my-4 font-thin">
            Sie erreichen mich per Telefon, WhatsApp
          </p>
          <ol id="kontakt" className="flex flex-col gap-4">
            <li className="px-4 py-2 text-center tracking-tight text-custom-white bg-custom-blue rounded-3xl text-xl w-xs md:w-full mx-auto">
              <a href="tel:+49891234567" className="">
                +49 89 123 4567
              </a>
            </li>
            <li>
              <p className="font-thin">oder Email</p>
            </li>
            <li className="px-4 py-2 text-center tracking-tight text-custom-white bg-custom-blue rounded-3xl text-xl w-xs md:w-full mx-auto">
              <a href="mailto:max.mustermann@ihre-domain.de">
                max.mustermann@domain.de
              </a>
            </li>
          </ol>
        </div>
      ) : (
        <div id="kontakt" className="grid grid-cols-12 contact-container">
          <div className="col-span-12 lg:col-span-6 flex flex-col justify-center pl-24 py-52">
            <div className="min-w-sm max-w-2/3 mx-auto ">
              <h1 className="!text-4xl ">
                Lass uns ganz unkompliziert einen Termin vereinbaren
              </h1>
              <h1 className="!text-4xl text-custom-blue">Melde Dich</h1>
              <div className="flex flex-col gap-4 my-12 text-xl">
                <div className="flex items-center gap-4">
                  <Phone className="size-12" />
                  <a href="tel:+49891234567" className="text-custom-darkblue">
                    +49 89 123 4567
                  </a>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="size-12" />
                  <a
                    href="mailto:max.mustermann@ihre-domain.de"
                    className="text-custom-darkblue"
                  >
                    max.mustermann@domain.de
                  </a>
                </div>
              </div>
            </div>
          </div>
          {isTablet ? (
            <div className="hidden col-span-6 relative relative contact-right-col">
              <img
                src="blank_woman_detailed_placeholder.png"
                className="bg-slate-300 absolute top-32 -left-12"
                alt="portrait"
                style={{ height: "400px" }}
              />
            </div>
          ) : (
            <div className="col-span-6 relative relative pr-24 contact-right-col">
              <img
                src="blank_woman_detailed_placeholder.png"
                className="bg-slate-300 absolute top-32 -left-12"
                alt="portrait"
                style={{ height: "500px" }}
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
}
