import { Categories } from "@/components/sections/Categories";
import { FeaturedCourse } from "@/components/sections/FeaturedCourse";
import { Hero } from "@/components/sections/Hero";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Testimonial } from "@/components/sections/Testimonial";
import {
  categories,
  featuredCourse,
  hero,
  howItWorks,
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
    </>
  );
}
