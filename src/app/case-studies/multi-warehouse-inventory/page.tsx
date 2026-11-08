import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Check } from "lucide-react";
import { WorkVisual } from "@/components/studio/Visuals";
import { Cta } from "@/components/studio/Cta";
export const metadata = {
  title: "Multi-warehouse inventory — A Softek Labs project",
  description:
    "Connecting warehouse stock visibility, order allocation, and dispatch tracking in a custom inventory workflow.",
};
export default function CaseStudy() {
  return (
    <>
      <section className="page-hero">
        <div className="shell">
          <Link className="breadcrumb" href="/#work">
            <ArrowLeft size={15} /> Back to our work
          </Link>
          <span className="eyebrow">
            CUSTOM SOFTWARE / IMPORT & DISTRIBUTION
          </span>
          <h1>
            Many warehouses.
            <br />
            One connected operation.
          </h1>
          <p>
            A growing importer needed a clearer way to manage stock across
            locations and decide which warehouse should fulfil each order.
          </p>
        </div>
      </section>
      <div className="shell" style={{ paddingTop: 40 }}>
        <WorkVisual />
      </div>
      <section className="section">
        <div className="shell case-content">
          <div>
            <span className="eyebrow" style={{ marginBottom: 20 }}>
              THE CHALLENGE
            </span>
            <h2>
              When the business grows,
              <br />
              the spreadsheets don’t.
            </h2>
            <p>
              Stock checks, warehouse selection, and dispatch coordination were
              spread across manual processes and messages. The team needed a
              shared picture of available stock and a consistent process for
              getting orders out.
            </p>
          </div>
          <div className="case-block">
            <h3>Built around the operation.</h3>
            <p>
              Softek Labs brought the key workflows into a custom inventory
              system.
            </p>
            <ul className="detail-list">
              {[
                "Real-time warehouse stock visibility",
                "Nearest warehouse recommendations",
                "Automated loading-order generation",
                "Dispatch tracking",
              ].map((s) => (
                <li key={s}>
                  <Check size={17} />
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="shell" style={{ marginTop: 45 }}>
          <Link className="text-link" href="/services/custom-software">
            Explore custom software <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>
      <Cta />
    </>
  );
}
