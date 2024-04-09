import Main from "@/components/Main/Main";
import MicroFooter from "@/components/Main/modules/MicroFooter";
import Modals from "@/components/Modals/Modals";
import Sidebar from "@/components/Sidebar/Sidebar";
import Head from "next/head";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function Home() {
  const router = useRouter();
  const { t, i18n } = useTranslation();
  return (
    <div
      className="relative w-full h-full antes:h-screen flex flex-col antes:flex-row overflow-x-hidden selection:bg-azul selection:text-offBlack items-start justify-start"
      id="app"
    >
      <Head>
        <title>The Manufactory</title>
        <meta
          name="description"
          content="The Manufactory is a no-nonsense operational hub that puts the power of autonomous markets back into the hands of independent creators."
        />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:site_name" content="The Manufactory" />
        <meta
          property="og:image"
          content="https://themanufactory.xyz/card.png/"
        />
        <meta property="og:type" content="website" />
      </Head>
      <Main router={router} t={t} i18n={i18n} />
      <div
        className="relative w-full h-2 antes:w-2 antes:h-screen"
        id="bg"
      ></div>
      <Sidebar router={router} t={t} />
      <div className="relative w-full h-fit flex antes:hidden pt-12">
        <MicroFooter t={t} />
      </div>
      <Modals />
    </div>
  );
}

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common", "footer"])),
  },
});
