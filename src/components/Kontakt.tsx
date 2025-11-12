
export default function Kontakt() {
  return (
    <div className="p-8 text-center my-8">
      <h1>Jetzt unverbindlich anfragen</h1>
      <p className="my-4">
        Sie erreichen mich per Telefon, WhatsApp 
      </p>
      <ol id="kontakt" className="flex flex-col gap-4">
        <li className="px-4 py-2 text-center tracking-tight text-custom-white bg-custom-blue rounded-3xl text-xl w-full mx-auto">
          <a href="tel:+49891234567" className="">+49 89 123 4567</a>
        </li>
        <li><p>oder Email</p></li>
        <li className="px-4 py-2 text-center tracking-tight text-custom-white bg-custom-blue rounded-3xl text-xl w-full mx-auto">
          <a href="mailto:max.mustermann@ihre-domain.de">
            max.mustermann@domain.de
          </a>
        </li>
      </ol>
    </div>
  );
}
