import Kontakt from "./Kontakt";

type Props = {
  isMobile: boolean;
};

export default function BeautyCards({ isMobile }: Props) {
  return (
    <div className="max-w-6xl mx-auto lg:max-w-none">
      {isMobile ? (
        <div>
          <div className="my-16 mb-32">
            <Kontakt />
          </div>

          <section
            id="anwendungen"
            className="flex flex-col gap-8 rounded my-12 mx-8"
          >
            <p>
              In welchem Bereichen unterstützt die{" "}
              <a href="#lymphdrainage" className="underline">
                Lymphdrainage
              </a>
              ?
            </p>
            <div className="flex flex-col gap-8">
              <div className="bg-custom-white rounded p-4 py-8">
                <h1 className="text-center pb-4">Zellulite</h1>
                <p className="">
                  Im Bindegewebe gestaute Flüssigkeiten und Stoffwechselabfälle
                  werden abzutransportiert und Dellen gemildert
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-8">
              <div className="bg-custom-white rounded p-4 py-8">
                <h1 className="text-center pb-4">Detox</h1>
                <p className="">
                  Verbessert die körpereigene Entwässerung und Entschlackung des
                  Gewebes
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-8">
              <div className="bg-custom-white rounded p-4 py-8">
                <h1 className="text-center pb-4">Anti-Aging</h1>
                <p className="">
                  Reduktion von Tränensäcken, um das Hautbild zu klären und
                  einen frischen Teint zu fördern
                </p>
              </div>
            </div>
            <p></p>
          </section>
        </div>
      ) : (
        <div className="bg-custom-blue text-custom-white -mt-8 px-24 py-36">
          <h1 className="!text-4xl w-1/2 pb-24">
            Die Lymphdrainage ist das Geheimnis für ein frisches und
            definiertes Erscheinungsbild. Sie ist die ultimative innere
            Reinigung.
          </h1>

          <div className="flex gap-8 text-lg">
            <div className="flex-1">
              <h1 className="mb-4">Zellulite</h1>
              <p className="pr-4">
                Im Bindegewebe gestaute Flüssigkeiten und Stoffwechselabfälle
                werden abzutransportiert und Dellen gemildert. Dadurch gewinnt
                die Haut an Spannkraft und Elastizität zurück.
              </p>
            </div>

            <div className="flex-1">
              <h1 className="mb-4">Detox</h1>
              <p className="pr-4">
                Verbessert die körpereigene Entwässerung und Entschlackung des
                Gewebes. Ihr Körper wird vitalisiert und die Haut erhält ein
                frisches, gesundes Strahlen.
              </p>
            </div>

            <div className="flex-1">
              <h1 className="mb-4">Anti-Aging</h1>
              <p className="pr-4">
               Reduktion von Tränensäcken, um das Hautbild zu klären und einen frischen Teint zu fördern. Durch die bessere Versorgung mit Nährstoffen wird zudem die Kollagenproduktion angeregt und feine Fältchen gemindert.
              </p>
            </div>
          </div>

            <a
                href="#kontakt"
                className="block mt-24 max-w-xs px-24 py-4 text-center tracking-tight text-custom-blue bg-custom-white rounded"
              >
                KONTAKT
                {/* <ArrowRight className="size-5" /> */}
              </a>
          {/* <Kontakt /> */}
        </div>
      )}
    </div>
  );
}
