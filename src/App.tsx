import Introduction from "./components/Introduction.tsx";
import Kontakt from "./components/Kontakt.tsx";
import Footer from "./components/Footer.tsx";
import ScrollToTopButton from "./components/ScrollToTopButton.tsx";
import checkIsMobile from "./utils/checkIsMobile";
import BeautyCards from "./components/BeautyCards.tsx";
import Services from "./components/Services.tsx";
import Lymphdrainage from "./components/Lymphdrainage.tsx";

function App() {
  const isMobile = checkIsMobile();

  return (
    <div id="home-container" className="relative">
      <Introduction isMobile={isMobile} />
      <BeautyCards isMobile={isMobile} />
        {isMobile && (
          <div className="my-12">
            <img src="/aloe.jpg" alt="Praxisräume" />
          </div>
        )}
        <Services isMobile={isMobile} />
        {isMobile && <Kontakt isMobile={false} />}
        <Lymphdrainage isMobile={isMobile} />
        {/* <section id="lymphdrainage" className="mx-8 mt-16">
          <h1>Wie funktionert eine Lymphdrainage?</h1>
          <p className="my-4">
            Die Manuelle Lymphdrainage ist eine spezielle, sanfte Therapieform,
            die darauf abzielt, den Transport der Lymphflüssigkeit im Körper
            anzuregen. Dabei wird mit sanften, rhythmischen und kreisenden
            Grifftechniken gearbeitet. Diese speziellen Dehnreize auf Haut und
            Gewebe regen die Eigenmotorik der Lymphgefäße an.
          </p>
          <p>
            Das Lymphsystem ist essenziell für den Abtransport von
            überschüssiger Gewebsflüssigkeit, Eiweißen, Fetten und
            Abfallstoffen, die nicht über den Blutkreislauf entsorgt werden
            können. Ist dieser Abfluss gestört – etwa nach Operationen oder bei
            Erkrankungen wie dem Lymphödem – staut sich die Flüssigkeit im
            Gewebe an. Die Lymphdrainage stimuliert das verlangsamte System
            gezielt, fördert so die Entstauung des Gewebes, reduziert
            Schwellungen und unterstützt damit indirekt das Immunsystem und die
            Heilung.
          </p>
        </section> */}
 
      <Kontakt isMobile={isMobile} />
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}

export default App;
