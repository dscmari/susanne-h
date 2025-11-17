import { useEffect, useState } from "react";

export default function checkIsMobile() {
    const [isMobile, setIsMobile] = useState(false);
  
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        //md: 768 lg:1024
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };
  
    useEffect(() => {
      window.addEventListener("resize", handleResize);
      if (window.innerWidth < 1024) {
        //md: 768 lg:1024
        setIsMobile(true);
      }
    }, []);

    return isMobile
}

