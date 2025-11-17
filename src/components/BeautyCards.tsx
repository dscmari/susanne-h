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
        <div className="bg-custom-blue text-custom-white -mt-8 px-24">
          <h1 className="!text-4xl w-1/2 py-20">
            Die Manuelle Lymphdrainage ist Ihr Geheimnis für ein frisches und
            definiertes Erscheinungsbild. Sie ist die ultimative innere
            Reinigung.
          </h1>

          <div className="flex gap-8">
            <div className="">
              <h1 className="">Zellulite</h1>
              <p className="">
                Im Bindegewebe gestaute Flüssigkeiten und Stoffwechselabfälle
                werden abzutransportiert und Dellen gemildert
              </p>
            </div>

            <div className="">
              <h1 className="">Detox</h1>
              <p className="">
                Verbessert die körpereigene Entwässerung und Entschlackung des
                Gewebes
              </p>
            </div>

            <div className="">
              <h1 className="">Anti-Aging</h1>
              <p className="">
                Reduktion von Tränensäcken, um das Hautbild zu klären und einen
                frischen Teint zu fördern
              </p>
            </div>
          </div>

          <Kontakt />
        </div>
      )}
    </div>
  );
}
