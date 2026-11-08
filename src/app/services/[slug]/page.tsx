import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Check } from "lucide-react";
import { services } from "@/data/services";
import { Cta } from "@/components/studio/Cta";
export function generateStaticParams() {
  return services.map(({ slug }) => ({ slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  return service
    ? {
        title: service.name,
        description: service.intro,
        alternates: { canonical: `/services/${slug}` },
      }
    : { title: "Service not found" };
}
export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();
  return (
    <>
      <section className="page-hero">
        <div className="shell">
          <Link className="breadcrumb" href="/#services">
            <ArrowLeft size={15} /> All services
          </Link>
          <span className="eyebrow">
            {service.number} / {service.name.toUpperCase()}
          </span>
          <h1>{service.headline}</h1>
          <p>{service.intro}</p>
          <Link
            className="button button-blue"
            href={`/submit-requirement?service=${service.slug}`}
          >
            Let’s talk {service.name.toLowerCase()} <ArrowUpRight size={19} />
          </Link>
        </div>
      </section>
      <section className="section">
        <div className="shell service-detail-grid">
          <div>
            <h2>What we can help with.</h2>
            <ul className="detail-list">
              {service.deliverables.map((d) => (
                <li key={d}>
                  <Check size={18} />
                  {d}
                </li>
              ))}
            </ul>
          </div>
          <aside className="detail-note">
            <h3>Is this for you?</h3>
            <p>{service.for}</p>
            <p>{service.note}</p>
          </aside>
        </div>
        <div className="shell" style={{ marginTop: 60 }}>
          <span className="eyebrow">CONNECT THE DOTS</span>
          <div className="related-services">
            {services
              .filter((s) => s.slug !== slug)
              .map((s) => (
                <Link key={s.slug} href={`/services/${s.slug}`}>
                  {s.name}
                  <ArrowUpRight size={16} />
                </Link>
              ))}
          </div>
        </div>
      </section>
      <Cta />
    </>
  );
}
