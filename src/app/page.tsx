import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

// TEMPORARY: primitives preview for the Phase 2 review. Phase 3 replaces this with the real sections.
export default function Home() {
  return (
    <Container className="py-16">
      <SectionHeading
        as="h1"
        size="h1"
        eyebrow="Learn at your own pace"
        title="Phase 2 preview."
        subtitle="Tokens, fonts and primitives. Replaced by the real sections in Phase 3."
      />
      <div className="mt-8 flex flex-wrap items-stretch gap-3">
        <Button>Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="accent">Accent</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="link" href="#main">
          Link
        </Button>
        <Button size="sm" href="#main">
          Small link
        </Button>
      </div>
    </Container>
  );
}
