import { useEffect, useState } from "react";

export default function Navbar() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth >= 1024) {
      setIsMobile(true);
    }
    console.log(isMobile);
  }, []);

  return (
    <div className="px-4 my-8">
      <div className="">
        {/* <a
          href="#lymphdrainage"
          className="flex items-center justify-between px-4 py-2 text-custom-white bg-custom-blue rounded tracking-tight text-xl"
        >
          <span className="tracking-wider">LYMPHDRAINAGE</span>
          <ArrowRight className="size-8" />
        </a>
        <a
          href="#lymphdrainage"
          className="flex items-center justify-between px-4 py-2 text-custom-white bg-custom-blue rounded tracking-tight text-xl"
        >
          <span className="tracking-wider">ANWENDUNGEN</span>
          <ArrowRight className="size-8" />
        </a> 
        <a
          href="#lymphdrainage"
          className="flex items-center justify-between px-4 py-2 text-custom-white bg-custom-blue rounded tracking-tight text-xl"
        >
          <span className="tracking-wider">ANGEBOT</span>
          <ArrowRight className="size-8" />
        </a> */}
        <a
          href="#kontakt"
          className="px-4 py-2 text-center tracking-tight text-custom-white bg-custom-blue rounded text-xl w-1/2"
        >
          KONTAKT
          {/* <ArrowRight className="size-5" /> */}
        </a>
      </div>
    </div>
  );
}
