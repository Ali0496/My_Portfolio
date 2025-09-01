import Container from "@/components/Container";
import Hero from "@/components/home/Hero";
import Projects from "@/components/home/Projects";

export default function Home() {
  return (
    <main>
      <Container>
        <Hero />
        <Projects />
      </Container>
    </main>
  );
}
