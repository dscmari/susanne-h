
type Props = {
  isMobile: boolean;
  isTablet: boolean;
};

export default function Services({ isMobile, isTablet }: Props) {
  return (
    <div className="">
      {isMobile ? (
        <section id="anwendungen" className="rounded mx-8 mb-24">
          <p className="py-8">
            Was sind klassische{" "}
            <span className="text-custom-blue">gesundheitsbezogene</span>{" "}
            Anwendungbereiche der Lymphdrainage?
          </p>
          <div className="flex flex-col gap-8">
            <div className="flex flex-col justify-center bg-custom-white rounded p-8 aspect-square">
              <h1 className="text-center pb-4 !text-4xl tracking-wider">
                Lymphödeme
              </h1>
              <p className="text-lg">
                Die Lymphdrainage hilft, Schwellungen, z.B. nach
                Krebsbehandlungen oder Lymphknotenentfernungen, zu reduzieren
              </p>
            </div>
            <div className="flex flex-col justify-center bg-custom-white rounded p-8 aspect-square">
              <h1 className="text-center pb-4 !text-4xl tracking-wider">
                Postoperative Behandlungen
              </h1>
              <p className="text-lg">
                Schwellungen und Ödeme können reduziert, die Schmerzlinderung
                gefördert und die gesamte Heilungszeit verkürzt werden
              </p>
            </div>
            <div className="flex flex-col justify-center bg-custom-white rounded p-8 aspect-square">
              <h1 className="text-center pb-4 !text-4xl tracking-wider">
                Rheumatismus
              </h1>
              <p className="text-lg">
                Schmerzempfinden und Schwellungen in Gelenken können verbessert
                werden
              </p>
            </div>
            <p>
              Weitere Anwendugsgebiete, bei denen die Lymphdrainage unterstützen
              kann sind <span className="text-custom-blue">Arthrose</span>,{" "}
              <span className="text-custom-blue">geschwollene Beine</span>,
              <span className="text-custom-blue"> Migräne</span> und bei der
              Behandlung von <span className="text-custom-blue">Narben</span>.
            </p>
          </div>
        </section>
      ) : (
        <div className="grid grid-cols-12 py-36 pr-24">
          {isTablet ? (
            <div className="col-span-6 relative">
              <img
                src="blank_woman_detailed_placeholder.png"
                className="absolute top-0 left-1/2 -translate-x-1/2 bg-slate-300"
                alt="portrait"
                style={{ height: "600px", width: "400px" }}
              />
            </div>
          ) : (
            <div className="col-span-6 relative">
              <img
                src="blank_woman_detailed_placeholder.png"
                className="absolute -top-50 left-1/2 -translate-x-1/2 bg-slate-300"
                alt="portrait"
                style={{ height: "750px", width: "500px" }}
              />
            </div>
          )}

          <div className="col-span-6 md:pl-4">
            <div>
              <h1 className="!text-4xl">
                <span className="text-custom-blue">Medizinische </span>Anwendung
              </h1>
              <p className="py-4">
                {" "}
                Kurzes Intro zu anwendungsfällen: Lorem ipsum dolor sit amet,
                consectetur adipisicing elit. Iusto possimus, voluptatem
                veritatis, suscipit reprehenderit similique adipisci distinctio,
                at maxime dicta molestias quae vero beatae nam animi tenetur.
                Beatae, sed vitae.
              </p>
            </div>
            <div className="py-8 flex flex-col gap-12">
              <div className="flex items-center gap-12 pl-4">
                <div className="w-28">
                  <img
                    src="/icons_svg/first-aid.svg"
                    alt="Medizinisches Kreuz"
                    style={{ height: "75px" }}
                  />
                </div>
                <div>
                  <h1 className="mb-4">Lymphödeme</h1>
                  <p className="text-custom-darkblue text-lg">
                    {" "}
                    Die Lymphdrainage hilft, Schwellungen, z.B. nach
                    Krebsbehandlungen oder Lymphknotenentfernungen, zu
                    reduzieren
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-12 pl-4">
                <div className="w-46">
                  <img
                    src="/icons_svg/first-aid-kit.svg"
                    alt="Medizinisches Kreuz"
                    style={{ height: "75px" }}
                  />
                </div>
                <div>
                  <h1 className="mb-4">Rheumatismus</h1>
                  <p className="text-custom-darkblue text-lg">
                    Die manuelle Lymphdrainage kann das Schmerzempfinden und
                    Schwellungen in Gelenken bei entzündlich-rheumatischen
                    Erkrankungen spürbar verbessern und so zur Steigerung der
                    Beweglichkeit beitragen.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-12 pl-4">
                <div className="w-28">
                  <img
                    src="/icons_svg/hospital.svg"
                    alt="Medizinisches Kreuz"
                    style={{ width: "75px" }}
                  />
                </div>
                <div>
                  <h1 className="mb-4">Postoperative Behandlungen</h1>
                  <p className="text-custom-darkblue text-lg">
                    {" "}
                    Schwellungen und Ödeme können reduziert, die
                    Schmerzlinderung gefördert und die gesamte Heilungszeit
                    verkürzt werden
                  </p>
                </div>
              </div>
              <p>
                {" "}
                <span className="text-custom-blue">
                  {" "}
                  Weitere Anwendugsgebiete
                </span>
                , bei denen die Lymphdrainage unterstützen kann sind{" "}
                <span className="text-custom-blue">Arthrose</span>,{" "}
                <span className="text-custom-blue">geschwollene Beine</span>,
                <span className="text-custom-blue"> Migräne</span> und bei der
                Behandlung von <span className="text-custom-blue">Narben</span>.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
