import Link from "next/link";
import { ArrowUpRight, ArrowDown, Check, Plus } from "lucide-react";
import { HeroVisual, WorkVisual } from "@/components/studio/Visuals";
import { ServiceExplorer } from "@/components/studio/ServiceExplorer";
import { Cta } from "@/components/studio/Cta";
export const metadata = { alternates: { canonical: "/" } };

const faqs = [
  [
    "Can I start with just one service?",
    "Absolutely. Start with a website, an ad campaign, content, WhatsApp messaging, or a software project. We can connect other services as your needs evolve.",
  ],
  [
    "How much will my project cost?",
    "We quote based on your goals, scope, deliverables, and timeline. Advertising spend, platform charges, hosting, and ongoing support are discussed separately where relevant, so you know what your proposal covers.",
  ],
  [
    "Can you help if I don’t know where to start?",
    "Yes. Tell us what you want to improve—more enquiries, better content, a stronger online presence, or smoother operations. We’ll help you identify a sensible starting point.",
  ],
  [
    "How does WhatsApp bulk messaging work?",
    "We help plan and coordinate business messaging for opted-in customer audiences. We discuss the audience, message content, platform requirements, opt-out process, and any messaging charges before starting.",
  ],
  [
    "Do you create AI videos and edit existing footage?",
    "Yes. We offer AI video content, poster ads, and video editing. Share your idea, brand assets, or footage, and we’ll scope the formats and deliverables with you.",
  ],
  [
    "What happens after I send an enquiry?",
    "We review your requirements and contact you to clarify the brief. You’ll receive a proposed approach, scope, and quote before any project begins.",
  ],
];
export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="shell hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">
              <span className="status-dot" /> YOUR PARTNER IN DIGITAL GROWTH
            </span>
            <h1>
              Make your
              <br />
              next move
              <br />
              <span className="hero-blue">
                a big one<span className="hero-period">.</span>
              </span>
            </h1>
            <p>
              Marketing that gets you noticed. Content that makes you memorable.
              Technology that moves your business forward.
            </p>
            <div className="hero-actions">
              <Link className="button button-blue" href="/submit-requirement">
                Let’s build your next <ArrowUpRight size={20} />
              </Link>
              <a className="quiet-link" href="#services">
                Explore services <ArrowDown size={17} />
              </a>
            </div>
            <div className="hero-footnote">
              <span className="mini-asterisk">✳</span>
              <span>
                One creative + technology partner.
                <br />
                <strong>More possibilities for your business.</strong>
              </span>
            </div>
          </div>
          <HeroVisual />
        </div>
      </section>
      <div className="service-ribbon" aria-label="Our capabilities">
        <div className="shell">
          <span>ONLINE MARKETING</span>
          <i>✳</i>
          <span>WHATSAPP CAMPAIGNS</span>
          <i>✳</i>
          <span>DIGITAL CONTENT</span>
          <i>✳</i>
          <span>CUSTOM SOFTWARE</span>
          <i>✳</i>
          <span>WEBSITES</span>
        </div>
      </div>
      <section id="services" className="section services-section">
        <div className="shell">
          <div className="section-heading">
            <div>
              <span className="eyebrow">01 / WHAT WE DO</span>
              <h2>
                Different skills.
                <br />
                One shared ambition.
              </h2>
            </div>
            <p>
              Help your business go further.
              <br />
              From the first impression to the systems
              <br className="desktop-break" /> behind the scenes, we connect the
              dots.
            </p>
          </div>
          <ServiceExplorer />
        </div>
      </section>
      <section className="connection-section">
        <div className="shell connection-grid">
          <div>
            <span className="eyebrow">BETTER, TOGETHER</span>
            <h2>
              A good ad opens a door.
              <br />
              Let’s build what
              <br />
              comes next.
            </h2>
            <p>
              Your marketing, content, website, and software should work
              together. We bring the creative and technical pieces into one
              clear plan.
            </p>
            <Link href="/submit-requirement" className="text-link">
              Find your starting point <ArrowUpRight size={20} />
            </Link>
          </div>
          <div className="connection-flow">
            {[
              ["01", "Get discovered", "Online ads + creative content"],
              ["02", "Start a conversation", "Your website + WhatsApp"],
              [
                "03",
                "Keep business moving",
                "Custom software + better workflows",
              ],
            ].map(([n, title, body]) => (
              <div className="flow-row" key={n}>
                <span>{n}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </div>
                <ArrowUpRight size={24} />
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="work" className="section work-section">
        <div className="shell">
          <div className="section-heading">
            <div>
              <span className="eyebrow">02 / FROM THE LAB</span>
              <h2>
                Real challenges.
                <br />
                Thoughtful solutions.
              </h2>
            </div>
            <p>
              A closer look at how we bring
              <br />
              business ideas to life.
            </p>
          </div>
          <Link
            className="work-card"
            href="/case-studies/multi-warehouse-inventory"
          >
            <WorkVisual />
            <div className="work-card-info">
              <div>
                <div className="tag-row">
                  <span>CUSTOM SOFTWARE</span>
                  <span>IMPORT & DISTRIBUTION</span>
                </div>
                <h3>
                  Many warehouses.
                  <br />
                  One connected operation.
                </h3>
                <p>
                  A custom inventory system that brings stock visibility,
                  warehouse allocation, and dispatch tracking into one workflow.
                </p>
                <span className="text-link">
                  Explore the project <ArrowUpRight size={19} />
                </span>
              </div>
              <span className="round-arrow">
                <ArrowUpRight size={26} />
              </span>
            </div>
          </Link>
          <div className="testimonial">
            <span className="quote-mark">“</span>
            <blockquote>
              Softek Labs reduced our work and increased productivity. Our team
              adapted to the custom interface within a day.
            </blockquote>
            <div className="quote-person">
              <span className="person-initials">SK</span>
              <div>
                <strong>Sanjiv Kumar</strong>
                <span>Nexus Decors</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="approach" className="section approach-section">
        <div className="shell">
          <div className="section-heading">
            <div>
              <span className="eyebrow">03 / HOW WE WORK</span>
              <h2>
                Good work starts
                <br />
                with a good conversation.
              </h2>
            </div>
            <p>
              No one-size-fits-all packages.
              <br />A clear process, built around your needs.
            </p>
          </div>
          <div className="process-grid">
            {[
              [
                "01",
                "Understand",
                "We listen to your goals, audience, and everyday challenges before suggesting a solution.",
              ],
              [
                "02",
                "Plan",
                "We shape the approach, deliverables, timeline, and budget together. You know what’s included.",
              ],
              [
                "03",
                "Create",
                "We design, build, or produce your project with feedback at the moments that matter.",
              ],
              [
                "04",
                "Launch & evolve",
                "We bring it to life and agree on the next steps for support, optimisation, or future growth.",
              ],
            ].map(([n, title, body]) => (
              <article key={n}>
                <div className="process-number">
                  {n}
                  <ArrowUpRight size={22} />
                </div>
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            ))}
          </div>
          <div className="approach-bottom">
            <span>
              <Check size={17} /> Clear scope
            </span>
            <span>
              <Check size={17} /> Collaborative process
            </span>
            <span>
              <Check size={17} /> Built for your business
            </span>
          </div>
        </div>
      </section>
      <section id="faqs" className="section faq-section">
        <div className="shell faq-grid">
          <div>
            <span className="eyebrow">A FEW THINGS YOU MIGHT BE WONDERING</span>
            <h2>
              Let’s clear
              <br />
              things up.
            </h2>
            <p>Still have a question?</p>
            <Link className="text-link" href="/submit-requirement">
              We’re happy to help <ArrowUpRight size={18} />
            </Link>
          </div>
          <div className="faq-list">
            {faqs.map(([q, a]) => (
              <details key={q}>
                <summary>
                  {q}
                  <Plus size={21} />
                </summary>
                <p>{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
      <Cta />
    </>
  );
}
