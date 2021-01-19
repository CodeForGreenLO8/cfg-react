import SEO from "src/seo";
import Projects from "src/components/Projects";
import Technologies from "src/components/Technologies";
export default function Home() {
  return (
    <>
      <SEO title="Home" />
      <Projects />
      <hr />
      <Technologies/>
    </>
  );
}
