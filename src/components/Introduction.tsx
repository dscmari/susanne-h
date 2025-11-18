type Props = {
  isMobile: boolean;
};

export default function Introduction({ isMobile }: Props) {
  return (
    <div className="pt-8 pb-4 lg:p-0">
      {isMobile ? (
        <div className="flex flex-col mt-16">
          <div className="mx-8">
            <h2 className="intro flex items-center justify-center font-thin gap-4">
              Heilpraktikerin und <br />
              Lymphtherapeutin
            </h2>
            <div className=" merriweather mt-4 max-w-xs mx-auto">
              <h1 className="!text-3xl pl-4"> SUSANNE</h1>
              <h1 className="tracking-wider !text-3xl text-right pr-4">
                HACKENBERG
              </h1>
            </div>
          </div>

          <div className="my-12 bg-custom-blue">
            <img src="blank_woman_detailed_placeholder.png" alt="portrait" />
          </div>

          <div className="flex justify-center my-8">
            <div className="flex justify-center mx-8 relative max-w-sm">
              <span className="text-6xl absolute left-4 -top-4">“</span>
              <p className="text-center mx-8 w-2/3 text-center text-2xl/10 text-slate-600 italic font-light tracking-wide">
                Aus langjähriger Erfahrung wächst Spezialisierung: Mit voller
                Begeisterung widme ich mich der Lymphologie und löse, was die
                Lymphe staut.
              </p>
              <span className="text-6xl/0 absolute right-4 -bottom-4">”</span>
            </div>
          </div>
        </div>
      ) : (
        <div>
          {/* upper part */}
          <div className="mx-16 pt-16 max-w-xs ">
           <h2 className="intro !text-base flex font-thin gap-4 items-center justify-center">
              Heilpraktikerin und <br />
              Lymphtherapeutin
            </h2>
            <div className=" merriweather mt-2 max-w-1/2 mx-auto">
              <h1 className="!text-xl"> SUSANNE</h1>
              <h1 className="tracking-wider !text-xl text-right pl-12">
                HACKENBERG
              </h1>
            </div>
          </div>
          {/* lower part */}
          <div className="grid grid-cols-12 mx-12 py-36">
            <div className="col-span-6 pl-12 pr-16">
              <h1 className="!text-5xl tracking-wide">
                Detox und Wohlbefinden
              </h1>
              <h2 className="text-custom-blue !text-5xl mt-2">
                Leichtigkeit beginnt unter der Haut
              </h2>
              <p className="text-xl mt-16 mb-16">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
                aspernatur iste voluptate? Sequi consequatur, rem, fugiat
                veritatis quo blanditiis alias libero velit dolore illo quisquam
                doloribus incidunt, sunt iste sapiente?
              </p>
              <a
                href="#kontakt"
                className="block max-w-xs px-24 py-4 text-center tracking-tight text-custom-white bg-custom-blue rounded"
              >
                KONTAKT
                {/* <ArrowRight className="size-5" /> */}
              </a>
            </div>
            <div className="col-span-6 relative">
              <div className="absolute -top-28 -right-12">
                <img
                  src="aloe.jpg"
                  alt="Praxisräume"
                  style={{ height: "500px", width: "500px" }}
                />
              </div>
              <div className="landing-image bg-red-500 absolute top-12 left-12 z-100">
                <img
                  src="blank_woman_detailed_placeholder.png"
                  alt="portrait"
                  style={{ height: "500px" }}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
