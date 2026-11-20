import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Field } from "@/components/ui/Field";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { ContactContent } from "@/types/content";

interface ContactProps {
  content: ContactContent;
}

/**
 * < lg: info, then form card. ≥ lg: info (480px) and form card (540px) side by side.
 * The form is structure and visuals only for now (real labels, native `required` and
 * `type="email"`); validation and the mock submit come in Phase 4.
 */
export function Contact({ content }: ContactProps) {
  const { form } = content;

  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="bg-white py-[60px] md:py-20 lg:py-[100px]"
    >
      <Container className="grid items-center gap-10 lg:grid-cols-[minmax(0,480px)_minmax(0,540px)] lg:justify-between">
        <div className="flex flex-col gap-8 lg:gap-10">
          <SectionHeading
            id="contact-title"
            eyebrow={content.eyebrow}
            title={content.title}
            subtitle={content.description}
            smallSubtitleOnMobile
          />
          <ul className="flex flex-col gap-4">
            {content.items.map((item) => (
              <li
                key={item.title}
                className="flex items-center gap-4 rounded-item bg-cream p-4 lg:p-5"
              >
                <Image
                  src={item.icon}
                  alt=""
                  width={40}
                  height={40}
                  className="shrink-0"
                />
                <div className="flex flex-col gap-0.5 lg:gap-1">
                  <p className="type-body text-ink">{item.title}</p>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="type-body text-primary hover:underline"
                    >
                      {item.detail}
                    </a>
                  ) : (
                    <p className="type-body text-text-muted">{item.detail}</p>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>

        <form className="flex flex-col gap-6 rounded-card border border-border bg-white px-5 py-6 shadow-form lg:p-10">
          <div className="flex flex-col gap-2">
            {/* 20/32 on every breakpoint, unlike the other h5 titles. */}
            <h3 className="font-heading text-xl leading-8 font-bold text-ink">
              {form.title}
            </h3>
            <p className="type-body text-text">{form.description}</p>
          </div>
          <div className="flex flex-col gap-5">
            {form.fields.map((field) => (
              <Field key={field.id} field={field} />
            ))}
          </div>
          <Button type="submit" className="w-full">
            {form.submitLabel}
          </Button>
        </form>
      </Container>
    </section>
  );
}
