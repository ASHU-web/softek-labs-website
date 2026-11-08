"use client";
import { useState } from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  Megaphone,
  MessageCircle,
  Clapperboard,
  Code2,
  Globe,
  Check,
} from "lucide-react";
import { services } from "@/data/services";
const icons = [Megaphone, MessageCircle, Clapperboard, Code2, Globe];
export function ServiceExplorer() {
  const [active, setActive] = useState(0);
  const service = services[active];
  const Icon = icons[active];
  return (
    <div className="service-explorer">
      <div
        className="service-tabs"
        role="tablist"
        aria-label="Explore our services"
      >
        {services.map((s, i) => {
          const I = icons[i];
          return (
            <button
              key={s.slug}
              id={`tab-${s.slug}`}
              type="button"
              role="tab"
              aria-selected={i === active}
              aria-controls="service-panel"
              tabIndex={i === active ? 0 : -1}
              className={active === i ? "active" : ""}
              onClick={() => setActive(i)}
              onKeyDown={(e) => {
                let next = i;
                if (e.key === "ArrowDown" || e.key === "ArrowRight")
                  next = (i + 1) % services.length;
                else if (e.key === "ArrowUp" || e.key === "ArrowLeft")
                  next = (i + services.length - 1) % services.length;
                else if (e.key === "Home") next = 0;
                else if (e.key === "End") next = services.length - 1;
                else return;
                e.preventDefault();
                setActive(next);
                document.getElementById(`tab-${services[next].slug}`)?.focus();
              }}
            >
              <span className="service-tab-number">{s.number}</span>
              <I size={21} />
              <span>{s.name}</span>
              <ArrowUpRight size={19} />
            </button>
          );
        })}
      </div>
      <div
        id="service-panel"
        role="tabpanel"
        aria-labelledby={`tab-${service.slug}`}
        tabIndex={0}
        className={`service-panel ${service.color}`}
      >
        <div className="service-panel-top">
          <span className="eyebrow">{service.category}</span>
          <span className="service-large-icon">
            <Icon size={35} strokeWidth={1.5} />
          </span>
        </div>
        <h3>{service.short}</h3>
        <p>{service.intro}</p>
        <ul className="service-deliverables">
          {service.tags.map((t) => (
            <li key={t}>
              <Check size={16} />
              {t}
            </li>
          ))}
        </ul>
        <Link href={`/services/${service.slug}`} className="text-link">
          Explore {service.name.toLowerCase()} <ArrowUpRight size={19} />
        </Link>
        <span className="service-background-number" aria-hidden="true">
          0{active + 1}
        </span>
      </div>
    </div>
  );
}
