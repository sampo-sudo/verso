export interface Certification {
  key: string;
  label: string;
  color: string;
  icon: string;
  description: string;
}

export const CERTIFICATIONS: Record<string, Certification> = {
  vegan: {
    key: "vegan",
    label: "Vegaaninen",
    color: "#FFB6C1",
    icon: "🐰",
    description:
      "Tuotteita tai raaka-aineita ei ole testattu eläimillä missään tuotantoketjun vaiheessa. Valinta, joka kunnioittaa kaikkia eläviä olentoja.",
  },
  working: {
    key: "working",
    label: "Hyvät työolosuhteet",
    color: "#FFD700",
    icon: "💪",
    description:
      "Tuotanto tapahtuu oikeudenmukaisissa oloissa – reilu palkka, turvalliset tilat ja ihmisarvoinen kohtelu kaikille tekijöille.",
  },
  finnish: {
    key: "finnish",
    label: "Suomalainen läpi linjan",
    color: "#4A90D9",
    icon: "🇫🇮",
    description:
      "Suunnittelu, materiaalit ja valmistus – kaikki tai suurin osa on suomalaista alkuperää. Tukee kotimaista työtä ja lyhyitä toimitusketjuja.",
  },
  materials: {
    key: "materials",
    label: "Kestävät materiaalit",
    color: "#4CAF50",
    icon: "🌳",
    description:
      "Tuotteissa käytetään ympäristöystävällisiä tekstiilimateriaaleja, kuten luomupuuvillaa, pellavaa tai kierrätettyjä kuituja – luonto mielessä joka ompeleessa.",
  },
};

export const CERT_KEYS = Object.keys(CERTIFICATIONS);
