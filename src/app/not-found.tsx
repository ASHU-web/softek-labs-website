import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
export default function NotFound() {
  return (
    <section className="page-hero">
      <div className="shell">
        <span className="eyebrow">404 / A SMALL DETOUR</span>
        <h1>
          Let’s get you
          <br />
          back on track.
        </h1>
        <p>
          That page doesn’t exist. Explore our services or tell us what you’re
          looking for.
        </p>
        <Link className="button button-blue" href="/">
          Back to home <ArrowUpRight size={18} />
        </Link>
      </div>
    </section>
  );
}
