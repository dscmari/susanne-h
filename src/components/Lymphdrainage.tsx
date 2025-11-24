type Props = {
  isMobile: boolean;
};

export default function Lymphdrainage({ isMobile }: Props) {
  return (
    <div>
      {isMobile ? (
        <div
          id="lymphdrainage"
          className="bg-custom-darkblue p-8 text-custom-white my-24"
        >
          <p className="mb-8">
            Die Manuelle Lymphdrainage ist eine{" "}
            <span className="text-custom-blue">
              sanfte und rhythmische Behandlungstechnik
            </span>
            , die das körpereigene Lymphsystem zu aktiviert und den Abtransport
            von gestauter Gewebsflüssigkeit zu verbessert
          </p>

          <div className="flex flex-col gap-8">
            <div>
              <h2>
                <span className="pr-4">Ⅰ.</span> Die Rolle der Lymphe
              </h2>
              <p>
                Das Lymphsystem ist ein wichtiges Abflusssystem, das parallel
                zum Blutkreislauf verläuft. Es hat folgende Aufgaben:
              </p>
              <ol className="list-disc pl-4 text-base py-4 flex flex-col gap-4">
                <li>
                  Abtransport von Flüssigkeit: Es sammelt Gewebsflüssigkeit
                  (Lymphe) ein, die sich im Gewebe angesammelt hat.
                </li>
                <li>
                  Eiweiß- und Fetttransport: Es transportiert größere Moleküle
                  (wie Eiweiße) und Fette, die nicht über die Venen abfließen
                  können.
                </li>
                <li>
                  Reinigung: Es transportiert Abfallprodukte, Fremdkörper und
                  Entzündungsstoffe zu den Lymphknoten, wo sie gefiltert werden.
                </li>
              </ol>
            </div>

            <div>
              <h2>
                <span className="pr-4">ⅠⅠ.</span> Die Anwendungstechnik
              </h2>
              <p>
                Die Lymphdrainage arbeitet entgegen einer klassischen Massage
                nicht mit kräftigem Druck oder Kneten, da das Lymphsystem direkt
                unter der Haut liegt und zu starker Druck es verschließen würde.
              </p>
              <ol className="list-disc pl-4 text-base py-4 flex flex-col gap-4">
                <li>
                  Die Therapeutin wendet sanfte, kreisförmige und pumpende
                  Handgriffe an. Der Druck ist sehr leicht, aber gezielt.
                </li>
                <li>
                  Der geringe Druck bewirkt einen Dehnungsreiz auf der Haut und
                  das darunterliegende Bindegewebe.
                </li>
                <li>
                  Durch diesen Dehnungsreiz werden die initialen Lymphgefäße im
                  Gewebe geöffnet und die gestaute Gewebsflüssigkeit kann
                  effektiver in das Lymphsystem aufgenommen werden. Gleichzeitig
                  wird die Eigenmotorik der Lymphgefäße angeregt, wodurch die
                  Lymphe schneller weitergepumpt wird.
                </li>
              </ol>
            </div>

            <div>
              <h2>
                <span className="pr-4">ⅠⅠⅠ.</span> Behandlungsablauf
              </h2>
              <p>
                Die Behandlung erfolgt systematisch, um die Abflusswege zu
                öffnen.
              </p>
              <ol className="list-disc pl-4 text-base py-4 flex flex-col gap-4">
                <li>
                  Die Therapie beginnt meist am Hals und Rumpf, um die großen
                  Lymphknoten und Hauptabflusswege zu entleeren und
                  freizumachen.
                </li>
                <li>
                  Anschließend wird die Region behandelt, in der das Ödem liegt.
                  Die Griffe erfolgen dabei immer in Richtung der zentralen
                  Abflusswege Richtung Herz.
                </li>
                <li>
                  <li>
                    Ziel ist es, die gestaute Flüssigkeit über freie Bahnen in
                    den Blutkreislauf zurückzuführen, wo sie über die Nieren
                    ausgeschieden wird.
                  </li>
                </li>
              </ol>
            </div>
          </div>
        </div>
      ) : (
        <div
          id="lymphdrainage"
          className="bg-custom-darkblue px-24 py-32 text-custom-white"
        >
          <h1 className="!text-4xl lg:w-2/3 pb-24 ml-auto lg:text-right">
            Die Manuelle Lymphdrainage ist eine{" "}
            <span className="text-custom-blue">
              sanfte und rhythmische Behandlungstechnik
            </span>
            , die das körpereigene Lymphsystem zu aktiviert und den Abtransport
            von gestauter Gewebsflüssigkeit zu verbessert
          </h1>

          <div className="flex gap-8 text-lg">
            <div className="flex-1">
              <h1 className="mb-4">
                <span className="pr-4">Ⅰ.</span> Die Rolle der Lymphe
              </h1>
              <p className="pr-4">
                Das Lymphsystem ist ein wichtiges Abflusssystem, das parallel
                zum Blutkreislauf verläuft. Es hat folgende Aufgaben:
              </p>
              <ol className="list-disc pl-4 text-base py-4 flex flex-col gap-4">
                <li>
                  Abtransport von Flüssigkeit: Es sammelt Gewebsflüssigkeit
                  (Lymphe) ein, die sich im Gewebe angesammelt hat.
                </li>
                <li>
                  Eiweiß- und Fetttransport: Es transportiert größere Moleküle
                  (wie Eiweiße) und Fette, die nicht über die Venen abfließen
                  können.
                </li>
                <li>
                  Reinigung: Es transportiert Abfallprodukte, Fremdkörper und
                  Entzündungsstoffe zu den Lymphknoten, wo sie gefiltert werden.
                </li>
              </ol>
            </div>

            <div className="flex-1">
              <h1 className="mb-4">
                <span className="pr-4">ⅠⅠ.</span> Die Anwendungstechnik
              </h1>
              <p className="pr-4">
                Die Lymphdrainage arbeitet entgegen einer klassischen Massage
                nicht mit kräftigem Druck oder Kneten, da das Lymphsystem direkt
                unter der Haut liegt und zu starker Druck es verschließen würde.
              </p>
              <ol className="list-disc pl-4 text-base py-4 flex flex-col gap-4">
                <li>
                  Die Therapeutin wendet sanfte, kreisförmige und pumpende
                  Handgriffe an. Der Druck ist sehr leicht, aber gezielt.
                </li>
                <li>
                  Der geringe Druck bewirkt einen Dehnungsreiz auf der Haut und
                  das darunterliegende Bindegewebe.
                </li>
                <li>
                  Durch diesen Dehnungsreiz werden die initialen Lymphgefäße im
                  Gewebe geöffnet und die gestaute Gewebsflüssigkeit kann
                  effektiver in das Lymphsystem aufgenommen werden. Gleichzeitig
                  wird die Eigenmotorik der Lymphgefäße angeregt, wodurch die
                  Lymphe schneller weitergepumpt wird.
                </li>
              </ol>
            </div>

            <div className="flex-1">
              <h1 className="mb-4">
                <span className="pr-4">ⅠⅠⅠ.</span> Behandlungsablauf
              </h1>
              <p className="pr-4">
                Die Behandlung erfolgt systematisch, um die Abflusswege zu
                öffnen.
              </p>
              <ol className="list-disc pl-4 text-base py-4 flex flex-col gap-4">
                <li>
                  Die Therapie beginnt meist am Hals und Rumpf, um die großen
                  Lymphknoten und Hauptabflusswege zu entleeren und
                  freizumachen.
                </li>
                <li>
                  Anschließend wird die Region behandelt, in der das Ödem liegt.
                  Die Griffe erfolgen dabei immer in Richtung der zentralen
                  Abflusswege Richtung Herz.
                </li>
                <li>
                  {" "}
                  <li>
                    Ziel ist es, die gestaute Flüssigkeit über freie Bahnen in
                    den Blutkreislauf zurückzuführen, wo sie über die Nieren
                    ausgeschieden wird.
                  </li>
                </li>
              </ol>
            </div>
          </div>
          <a
            href="#kontakt"
            className="block mt-24 max-w-xs px-24 py-4 ml-auto text-center tracking-tight text-custom-darkblue bg-custom-white rounded"
          >
            KONTAKT
          </a>
        </div>
      )}
    </div>
  );
}
