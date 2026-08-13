import Link from "next/link";
import { site } from "@/data/portfolio";

export default function NotFound() {
  return (
    <main className="case-page">
      <p className="label-mono text-muted">{site.name}</p>
      <h1 className="display-serif case-title mt-6 font-medium">
        Page not found.
      </h1>
      <p className="mt-5 max-w-md text-sm leading-relaxed text-muted sm:text-base">
        That route does not exist. Return to the portfolio or browse selected
        work.
      </p>
      <Link href="/" className="case-back label-mono mt-8 inline-flex">
        ← Back to portfolio
      </Link>
    </main>
  );
}
