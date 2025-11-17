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
          <div className="bg-custom-blue -mt-8">

            <p className="w-1/2">Die Manuelle Lymphdrainage (MLD) ist Ihr Geheimnis für ein frisches und definiertes Erscheinungsbild. Sie ist die ultimative innere Reinigung, die Ihrem Körper hilft, das zu beseitigen, was Sie beschwert.</p>

              <div className="max-w-xl flex flex-col justify-center bg-custom-white rounded-lg p-12 aspect-square">
                <h1 className="text-center !text-4xl pb-4">Zellulite</h1>
                <p className="">
                  Im Bindegewebe gestaute Flüssigkeiten und Stoffwechselabfälle
                  werden abzutransportiert und Dellen gemildert
                </p>
              </div>

              <div className="max-w-xl flex flex-col justify-center bg-custom-white rounded-lg p-12">
                <h1 className="text-center !text-4xl pb-4">Detox</h1>
                <p className="">
                  Verbessert die körpereigene Entwässerung und Entschlackung des
                  Gewebes
                </p>
              </div>

              <div className="max-w-xl flex flex-col justify-center bg-custom-white rounded-lg p-12">
                <h1 className="text-center !text-4xl pb-4">Anti-Aging</h1>
                <p className="">
                  Reduktion von Tränensäcken, um das Hautbild zu klären und
                  einen frischen Teint zu fördern
                </p>
              </div>

              <Kontakt />
       
          </div>
      )}
    </div>
  );
}
