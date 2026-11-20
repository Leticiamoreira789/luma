import { Categories } from "@/components/sections/Categories";
import { Hero } from "@/components/sections/Hero";
import { categories, hero } from "@/data/content";

export default function Home() {
  return (
    <>
      <Hero content={hero} />
      <Categories content={categories} />
    </>
  );
}
