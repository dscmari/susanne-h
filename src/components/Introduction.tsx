import React from "react";

export default function Introduction() {
  return (
    <div className="pt-8 pb-4">
      {/* <div className="relative">
        <img
          src="/logo_dummy.png"
          alt="logo"
          style={{ height: "120px", width: "120px" }}
          className="absolute right-0"
        />
      </div> */}
      {/* {isMobile ? (
                <img
                  src="/logo_dummy.png"
                  alt="logo"
                  style={{ height: "200px", width: "200px" }}
                />
              ) : (
                <img
                  src="/logo_dummy.png"
                  alt="logo"
                  style={{ height: "120px", width: "120px" }}
                />
              )} */}

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

            <p className="quote text-center mx-8 w-2/3">
              Aus langjähriger Erfahrung wächst Spezialisierung: Mit voller
              Begeisterung widme ich mich der Lymphologie und löse, was die
              Lymphe staut
            </p>
            <span className="text-6xl/0 absolute right-4 -bottom-4">”</span>
          </div>
        </div>
      </div>
    </div>
  );
}
