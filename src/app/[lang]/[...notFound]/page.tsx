import NotFoundEntry from "@/app/components/modules/NotFoundEntry";
import { getDictionary } from "../dictionaries";
import { tParams } from "@/app/layout";


export default async function NotFound({ params }: { params: tParams }) {
  const { lang } = await params;

  const dict = await (getDictionary as (locale: any) => Promise<any>)(lang);
  return <NotFoundEntry dict={dict} />;
}
