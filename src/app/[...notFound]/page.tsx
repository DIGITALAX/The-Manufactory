import NotFoundEntry from "@/app/components/modules/NotFoundEntry";
import { getDictionary } from "../[lang]/dictionaries";

export default async function NotFound() {
  const dict = await (getDictionary as (locale: any) => Promise<any>)("en");
  return <NotFoundEntry dict={dict} />;
}
