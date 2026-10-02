import { createFileRoute } from "@tanstack/react-router";
import Portfolio from "../components/Portfolio";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Swapnil Jaiswal — Cyber Physical Systems Engineer" },
      { name: "description", content: "Developer portfolio of Swapnil Jaiswal, a Cyber Physical Systems student and Dromos Hyperloop subsystem engineer." },
      { property: "og:title", content: "Swapnil Jaiswal — Developer & Systems Engineer" },
      { property: "og:description", content: "Projects in cyber physical systems, machine learning, optimization and high-performance engineering." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return <Portfolio />;
}
