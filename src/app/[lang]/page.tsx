import { getDictionary } from "@/app/[lang]/dictionaries";
import { tParams } from "./layout";
import Entry from "@/app/components/modules/Entry";

export default async function Home({ params }: { params: tParams }) {
  const { lang } = await params;
  const dict = await (getDictionary as (locale: any) => Promise<any>)(lang);
  return <Entry dict={dict} />;
}
