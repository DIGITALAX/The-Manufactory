import { useState } from "react";

const useArrows = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const cards: {
    image: string;
    title: {
      es: string;
      en: string;
    };
  }[] = [
    {
      image: "QmT5Rfj7yPx6g5PMutMU9E7Z9ovAu6VCaBpYDadYyeNW5j",
      title: {
        en: "SYNTH GENERATED STREETWEAR & AOP APPAREL",
        es: "STREETWEAR GENERADA POR SÍNTESIS Y ROPA AOP",
      },
    },
    {
      image: "QmcwrCwFFK1i1RYpGG4uTnBz5z9yTh3JmKwnCut33b1tbA",
      title: { en: "INTERACTIVE STORYCRAFT", es: "NARRACIÓN INTERACTIVA" },
    },
    {
      image: "QmcEzu4vL3TqG5o7ie6rZo2yMPAQf3ZNYXRgaG7onHK8SA",
      title: {
        en: "RARE COLLECTION AND STREET READY PRINTS",
        es: "COLECCIONES ÚNICAS Y ESTAMPADOS LISTOS PARA LA CALLE",
      },
    },
    {
      image: "QmYY4QBV6zfGiD1G8h8CJBxd61L4YrhVwJbCBA5Mx9ThQm",
      title: {
        en: "LOCAL & CLOUD PLATFORM GPU POOLS",
        es: "PISCINAS DE GPU DE PLATAFORMA LOCAL Y EN LA NUBE",
      },
    },
    {
      image: "QmewYPGvnsH4V97BRExToTfmADrbczVfR9JQp4KG1b8zuM",
      title: {
        en: "24/7 STUDIO DESIGN & FULFILLMENT SPACE IN THE HEART OF A 24/7 CITY",
        es: "ESPACIO DE DISEÑO Y CUMPLIMIENTO ESTUDIO 24/7 EN EL CORAZÓN DE UNA CIUDAD 24/7",
      },
    },
    {
      image: "QmPqVL57FcJat5aj1mFChXyk5a8i7Aqq3TnZtAbspK3ze4",
      title: {
        en: "REMOTE ACCESS VIA AUTONOMOUS VIRTUAL WORKSHOP",
        es: "ACCESO REMOTO MEDIANTE UN TALLER VIRTUAL AUTÓNOMO",
      },
    },
  ];

  const moveForward = (): void => {
    setCurrentIndex((currentIndex + 1) % cards?.length);
  };

  const moveBackward = (): void => {
    setCurrentIndex((currentIndex - 1 + cards?.length) % cards?.length);
  };

  return { cards, currentIndex, moveForward, moveBackward };
};

export default useArrows;
