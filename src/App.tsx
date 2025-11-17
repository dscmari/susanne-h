import Introduction from "./components/Introduction.tsx";
import Kontakt from "./components/Kontakt.tsx";
import Footer from "./components/Footer.tsx";
import ScrollToTopButton from "./components/ScrollToTopButton.tsx";
import checkIsMobile from "./utils/checkIsMobile";
import BeautyCards from "./components/BeautyCards.tsx";

function App() {
  const isMobile = checkIsMobile();

  return (
    <div id="home-container" className="relative">
      <Introduction isMobile={isMobile} />
      <BeautyCards isMobile={isMobile}/>

      <div className="my-16">
        <div className="my-12">
          <img src="/aloe.jpg" alt="Praxisräume" />
        </div>

        <section id="anwendungen" className="rounded mx-8">
          <p className="py-4">
            Was sind klassische gesundheitsbezogene Anwendungbereiche der
            Lymphdrainage?
          </p>
          <div className="flex flex-col gap-8">
            <div className="bg-custom-white rounded p-4 py-8">
              <h1 className="text-center pb-4">Lymphödeme</h1>
              <p className="">
                Die Lymphdrainage hilft, Schwellungen, z.B. nach
                Krebsbehandlungen oder Lymphknotenentfernungen, zu reduzieren
              </p>
            </div>
            <div className="bg-custom-white p-4 rounded py-8">
              <h1 className="text-center pb-4">Postoperative Behandlungen</h1>
              <p className="">
                Schwellungen und Ödeme können reduziert, die Schmerzlinderung
                gefördert und die gesamte Heilungszeit verkürzt werden
              </p>
            </div>
            <div className="bg-custom-white p-4 rounded py-8">
              <h1 className="text-center pb-4">Rheumatismus</h1>
              <p className="">
                Schmerzempfinden und Schwellungen in Gelenken können verbessert
                werden
              </p>
            </div>
            <p>
              Weitere Anwendugsgebiete, bei denen die Lymphdrainage unterstützen
              kann sind Arthrose, offene/geschwollene Beine, Migräne und
              Narbenbehandlung.
            </p>
          </div>
        </section>
        <Kontakt/>
        <section id="lymphdrainage" className="mx-8 mt-16">
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
        </section>
      </div>
      <Kontakt/>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}

export default App;
