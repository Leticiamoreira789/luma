import { Categories } from "@/components/sections/Categories";
import { Contact } from "@/components/sections/Contact";
import { FeaturedCourse } from "@/components/sections/FeaturedCourse";
import { FinalCta } from "@/components/sections/FinalCta";
import { Hero } from "@/components/sections/Hero";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { People } from "@/components/sections/People";
import { Testimonial } from "@/components/sections/Testimonial";
import {
  categories,
  contact,
  featuredCourse,
  finalCta,
  hero,
  howItWorks,
  people,
  testimonial,
} from "@/data/content";

export default function Home() {
  return (
    <>
      <Hero content={hero} />
      <Categories content={categories} />
      <FeaturedCourse content={featuredCourse} />
      <HowItWorks content={howItWorks} />
      <Testimonial content={testimonial} />
      <People content={people} />
      <Contact content={contact} />
      <FinalCta content={finalCta} />
    </>
  );
}
