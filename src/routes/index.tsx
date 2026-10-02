import { createFileRoute } from "@tanstack/react-router";
import Portfolio from "../components/Portfolio";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Swapnil Jaiswal — Computer Science & Cyber Physical Systems" },
      { name: "description", content: "Portfolio of Swapnil Jaiswal, a VIT Chennai Computer Science student specializing in Cyber Physical Systems." },
      { property: "og:title", content: "Swapnil Jaiswal — Engineering Portfolio" },
      { property: "og:description", content: "Research, engineering experience and projects across optimization, thermal systems and software." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return <Portfolio />;
}
