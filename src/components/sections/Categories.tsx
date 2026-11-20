import { AppLink } from "@/components/ui/AppLink";
import { ArrowRightIcon } from "@/components/ui/ArrowRightIcon";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { CategoriesContent } from "@/types/content";

interface CategoriesProps {
  content: CategoriesContent;
}

/** 1 column on mobile, 2×2 on tablet (not in Figma), 4 columns from lg. */
export function Categories({ content }: CategoriesProps) {
  return (
    <section
      id="categories"
      aria-labelledby="categories-title"
      className="bg-white py-[60px] md:py-20 lg:py-[100px]"
    >
      <Container>
        <SectionHeading
          id="categories-title"
          eyebrow={content.eyebrow}
          title={content.title}
          subtitle={content.subtitle}
          className="max-w-[560px]"
        />

        <ul className="mt-12 grid gap-4 md:mt-10 md:grid-cols-2 md:gap-5 lg:grid-cols-4">
          {content.items.map((item) => (
            <li key={item.number}>
              <AppLink
                href={item.href}
                className="flex h-full min-h-[200px] flex-col justify-between rounded-card border border-border bg-white p-6 transition-[border-color,box-shadow,transform] hover:border-primary hover:shadow-[0_8px_24px_rgb(23_27_44/0.08)] focus-visible:border-primary motion-safe:hover:-translate-y-1 motion-safe:focus-visible:-translate-y-1 lg:min-h-[260px] lg:p-7"
              >
                <div>
                  <span className="type-overline block w-fit rounded-tag bg-primary-soft px-2 py-1 text-primary">
                    {item.number}
                  </span>
                  <h3 className="type-h5 mt-5 text-ink">{item.title}</h3>
                  <p className="type-body mt-3 text-text-muted">
                    {item.description}
                  </p>
                </div>
                <span className="type-body mt-6 inline-flex items-center gap-2 font-bold text-ink">
                  {content.cardCta}
                  <ArrowRightIcon />
                </span>
              </AppLink>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
