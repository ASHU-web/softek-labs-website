import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
export function Cta() {
  return (
    <section className="cta-section">
      <div className="shell cta-inner">
        <div>
          <span className="eyebrow">LET’S MAKE YOUR NEXT MOVE COUNT</span>
          <h2>
            Big idea?
            <br />
            Let’s build on it<span>.</span>
          </h2>
          <p>Tell us where you are. We’ll help you figure out what’s next.</p>
        </div>
        <Link className="cta-circle" href="/submit-requirement">
          <ArrowUpRight size={48} strokeWidth={1.2} />
          <span>Start a conversation</span>
        </Link>
      </div>
    </section>
  );
}
