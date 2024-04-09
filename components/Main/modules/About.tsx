import { FunctionComponent } from "react";
import { AboutProps } from "../types/main.types";
import Text from "./Text";

const About: FunctionComponent<AboutProps> = ({
  reelNumber,
  handleConnect,
  handleMint,
  connected,
  mintLoading,
  claimed,
  dispatch,
  router,
  t,
}): JSX.Element => {
  switch (reelNumber) {
    case 4:
      return (
        <Text
          t={t}
          message={
            {
              es: "UNA VENTAJA VIRTUAL. COIN OP ESTÁ EN LÍNEA. PREROLLOS, LIENZO, MISIONES Y CRÉDITOS DE GPU.",
              en: "A VIRTUAL HEADSTART. COIN OP IS ONLINE. PREROLLS, CANVAS, QUESTS AND GPU CREDITS.",
            }[router.locale as "en" | "es"]
          }
          coinop
        />
      );

    case 3:
      return (
        <Text
          t={t}
          message={
            {
              es: "NOSOTROS SOMOS QUIÉNES GIRAMOS LA RUEDA DE COLORES. TEJIENDO DECLARACIONES VESTIBLES, CON CADA PUNTADA, CADA LÍNEA, CADA TINTE, CONSTRUYENDO AUTONOMÍA DESDE LA CREACIÓN HASTA EL CUMPLIMIENTO.",
              en: "WE’RE THE ONES SPINNING THE COLOR WHEEL. CRAFTING WEARABLE STATEMENTS, WITH EACH STITCH, EACH LINE, EACH SHADE, BUILD AUTONOMY FROM CREATION TO FULFILLMENT.",
            }[router.locale as "en" | "es"]
          }
        />
      );

    case 2:
      return (
        <Text
          t={t}
          message={
            {
              es: "NADA DE BRAZOS ROBÓTICOS COMPITIENDO CON ARTISTAS POR QUIÉN DISEÑARÁ EL ÚLTIMO LOTE DE TEXTILES. ESTÁMOS DEMASIADO OCUPADOS UTILIZANDO TODO EL EQUIPO QUE ESPERARÍAS EN UN LUGAR COMO ESTE.",
              en: "NO ROBOT ARMS WRESTLING ARTISTS OVER WHO GETS TO DESIGN THE LATEST BATCH OF TEXTILES. WE’RE TOO BUSY USING ALL THE EQUIPMENT YOU’D EXPECT IN A PLACE LIKE THIS.",
            }[router.locale as "en" | "es"]
          }
        />
      );

    // case 2:
    //   return <Text message={"WHERE IT IS"} />;

    case 1:
      return (
        <Text
          t={t}
          message={
            {
              es: "INDIFERENTE ANTE LA IDEA DE VER EL MUNDO PASAR, UN NUEVO LOTE DE ARTISTAS SE MEZCLAN CON LAS MÁQUINAS MÁS RECIENTES, LOS CREADORES DE MERCADO Y LOS MODELES MÁS AVANZADOS.",
              en: "LISTLESS AT THE THOUGHT OF WATCHING THE WORLD PASS BY, A NEW BATCH OF CREATORS COMINGLE WITH THE LATEST MACHINES, MARKET MAKERS & MODELS",
            }[router.locale as "en" | "es"]
          }
        />
      );

    default:
      return (
        <Text
          t={t}
          message={
            {
              es: "EL CUMPLIMIENTO ESTÁ MÁS CERCA DE LO QUE CREES. DISFRUTA DE UN MINT GRATIS ANTES DE SER CONSIDERADO PARA UNIRTE A LA COOPERATIVA.",
              en: "FULFILLMENT IS CLOSER THAN YOU THINK. HAVE A FREE MINT BEFORE YOU GET INTO CO-OP CONSIDERATION & JOIN IN.",
            }[router.locale as "en" | "es"]
          }
          mint
          handleConnect={handleConnect}
          handleMint={handleMint}
          connected={connected}
          mintLoading={mintLoading}
          claimed={claimed}
          dispatch={dispatch}
        />
      );
  }
};

export default About;
