"use client";

import { useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { MobileNavMenu } from "@/components/layout/MobileNavMenu";
import { site } from "@/data/portfolio";

const firstName = site.name.split(" ")[0];
const lastName = site.name.slice(firstName.length);

export function PageHeader() {
  const pathname = usePathname();
  const router = useRouter();
  const active = pathname.startsWith("/work") ? "work" : "intro";

  useEffect(() => {
    document.documentElement.classList.add("folio-nav-compact");
    return () => {
      document.documentElement.classList.remove("folio-nav-compact");
    };
  }, []);

  return (
    <header className="page-header">
      <Link
        href="/"
        className="display-serif page-header-name"
        aria-label={`${site.name}, home`}
      >
        <span>{firstName}</span>
        <span className="page-header-last">{lastName}</span>
      </Link>
      <MobileNavMenu
        active={active}
        onNavigate={(id) => router.push(`/#${id}`)}
      />
    </header>
  );
}
