import React from "react";

export default function Footer() {
  return (
    <div className="grid grid-cols-1  lg:grid-cols-2 bg-custom-white p-8 mt-20">
      <div className="">
        <h3>Impressum</h3>
        <ol>
          <li>Susanne Hackenberg</li>
          <li>Mustermannstrasse 1</li>
          <li>xxxxx München</li>
          <li>email@domain.de</li>
          <li>12345 123412122</li>
        </ol>
      </div>
      <div className="mt-8 text-center">
        <ol className="underline"><li><a href="/Datenschutz" >Datenschutz</a></li>
        <li><a href="AGBs">Allgemeine Geschäftsbedingungen</a></li></ol>
      </div>
    </div>
  );
}
