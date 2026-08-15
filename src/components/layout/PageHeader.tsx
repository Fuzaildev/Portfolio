import Link from "next/link";
import { site } from "@/data/portfolio";

export function PageHeader() {
  return (
    <header className="page-header">
      <Link href="/" className="display-serif page-header-name">
        {site.name}
      </Link>
    </header>
  );
}
