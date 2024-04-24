import React from "react";

import LocationList from "../../components/LocationList";
import BanniereAccueil from "../../components/BanniereAccueil";


export default function Home() {
  return (
    <main className="main-home">
      <BanniereAccueil />
      <LocationList />
    </main>
  );
}
