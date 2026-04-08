import veganIcon from "../assets/Vegaaninen.svg";
import workingIcon from "../assets/Kestavat_tyoolot.svg";
import finnishIcon from "../assets/Kotimainen.svg";
import materialsIcon from "../assets/Kestavat_materiaalit.svg";

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
    color: "#F096D3",
    icon: veganIcon,
    description:
      "Tuotteita tai raaka-aineita ei ole testattu eläimillä missään tuotantoketjun vaiheessa. Valinta, joka kunnioittaa kaikkia eläviä olentoja.",
  },
  working: {
    key: "working",
    label: "Hyvät työolosuhteet",
    color: "#F3E444",
    icon: workingIcon,
    description:
      "Tuotanto tapahtuu oikeudenmukaisissa oloissa – reilu palkka, turvalliset tilat ja ihmisarvoinen kohtelu kaikille tekijöille.",
  },
  finnish: {
    key: "finnish",
    label: "Suomalainen läpi linjan",
    color: "#1F6AD5",
    icon: finnishIcon,
    description:
      "Suunnittelu, materiaalit ja valmistus – kaikki tai suurin osa on suomalaista alkuperää. Tukee kotimaista työtä ja lyhyitä toimitusketjuja.",
  },
  materials: {
    key: "materials",
    label: "Kestävät materiaalit",
    color: "#45994B",
    icon: materialsIcon,
    description:
      "Tuotteissa käytetään ympäristöystävällisiä tekstiilimateriaaleja, kuten luomupuuvillaa, pellavaa tai kierrätettyjä kuituja – luonto mielessä joka ompeleessa.",
  },
};

export const CERT_KEYS = Object.keys(CERTIFICATIONS);
