import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactForm } from "./ContactForm";
import type { ContactContent } from "@/types/content";

interface ContactProps {
  content: ContactContent;
}

/**
 * < lg: info, then form card. ≥ lg: info (480px) and form card (540px) side by side.
 * The form is the only client component here (see ContactForm).
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

        <ContactForm content={form} />
      </Container>
    </section>
  );
}
