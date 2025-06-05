import { useState } from "react";
import { CheckCircle, TrendingUp, Shield, Layers, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function CivilNetSPA() {
  const [section, setSection] = useState("overview");

  const nav = [
    { id: "overview", label: "Overview" },
    { id: "modules", label: "Core Modules" },
    { id: "market", label: "Market" },
    { id: "roadmap", label: "Roadmap" },
    { id: "contact", label: "Contact" },
  ];

  const ModuleCard = ({ title, icon: Icon, children }) => (
    <Card className="w-full md:w-64 animate-fadeIn">
      <CardHeader className="flex flex-row items-center gap-2">
        <Icon className="w-6 h-6" />
        <CardTitle className="text-lg font-semibold">{title}</CardTitle>
      </CardHeader>
      <CardContent className="text-sm text-muted-foreground leading-relaxed">
        {children}
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-slate-100 font-sans">
      {/* Header */}
      <header className="sticky top-0 backdrop-blur-md bg-slate-900/60 z-20 shadow-inner">
        <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
          <h1 className="text-2xl font-bold tracking-wide">Civil‑Net</h1>
          <nav className="flex gap-4 text-sm">
            {nav.map((n) => (
              <button
                key={n.id}
                onClick={() => setSection(n.id)}
                className={`transition-colors hover:text-teal-400 ${
                  section === n.id ? "text-teal-400" : ""
                }`}
              >
                {n.label}
              </button>
            ))}
          </nav>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-6xl mx-auto p-6 md:p-12 space-y-16">
        {section === "overview" && (
          <section className="grid md:grid-cols-2 gap-8 items-center animate-fadeIn">
            <div className="space-y-6">
              <h2 className="text-4xl font-extrabold leading-tight">
                Empower families & teams to <span className="text-teal-400">anticipate</span>,
                <span className="text-teal-400"> coordinate</span> & <span className="text-teal-400">thrive</span>
                under disruption.
              </h2>
              <p className="text-lg text-slate-300">
                Civil‑Net is the first readiness SaaS that fuses live geopolitical
                signal feeds with role‑based logistics, turning complex crises into
                executable checklists for households, SMEs, and affinity groups.
              </p>
              <Button size="lg" onClick={() => setSection("modules")}>
                Explore Modules <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img src="https://images.unsplash.com/photo-1504386106331-3e4e71712b38?auto=format&fit=crop&w=900&q=60" alt="Dashboard preview" className="w-full h-full object-cover" />
            </div>
          </section>
        )}

        {section === "modules" && (
          <section className="space-y-10 animate-fadeIn">
            <h2 className="text-3xl font-bold">Core Modules</h2>
            <div className="flex flex-wrap gap-6">
              <ModuleCard title="Watcher API" icon={Shield}>
                Real‑time regex monitoring of global English feeds with webhook
                dispatch. Extensible to GDELT & NewsAPI for native‑language reach.
              </ModuleCard>
              <ModuleCard title="Ops Board" icon={Layers}>
                Trello‑style role & asset matrix with color‑code alerts synced to
                watcher triggers.
              </ModuleCard>
              <ModuleCard title="Inventory" icon={CheckCircle}>
                QR‑scan supplies, auto‑calculate burn‑rate by family size, export to
                CSV/PDF.
              </ModuleCard>
              <ModuleCard title="Skill Scheduler" icon={TrendingUp}>
                Calendar & push alerts for drills, AAR uploads, and YouTube field‑day
                integration.
              </ModuleCard>
            </div>
          </section>
        )}

        {section === "market" && (
          <section className="space-y-10 animate-fadeIn">
            <h2 className="text-3xl font-bold">Market Snapshot</h2>
            <p className="text-lg text-slate-300 max-w-3xl">
              ~8 million U.S. households identify as serious preparedness‑minded.
              A $15/mo freemium conversion at 0.5 % yields $7 M ARR potential.
              Competitors focus on enterprise (Everbridge) or static checklists.
              Civil‑Net targets the white‑space in family‑grade but data‑driven
              readiness.
            </p>
          </section>
        )}

        {section === "roadmap" && (
          <section className="space-y-8 animate-fadeIn">
            <h2 className="text-3xl font-bold">Roadmap</h2>
            <ul className="list-disc pl-6 space-y-2 text-slate-300">
              <li><strong>Q3 2025 :</strong> Watcher API GA · Stripe billing · MVP dashboard.</li>
              <li><strong>Q4 2025 :</strong> Mobile PWA · Inventory QR scanner · Affiliate marketplace.</li>
              <li><strong>Q1 2026 :</strong> Sat‑SMS fallback · Native‑language feed expansion · IAM roles.</li>
              <li><strong>Q2 2026 :</strong> Insurance‑score API · White‑label for veteran & LDS networks.</li>
            </ul>
          </section>
        )}

        {section === "contact" && (
          <section className="space-y-6 animate-fadeIn">
            <h2 className="text-3xl font-bold">Get in Touch</h2>
            <p className="text-slate-300 max-w-2xl">
              Interested in early access, investment, or pilot programs for your
              community? Reach out via <a href="mailto:founder@civil‑net.io" className="underline text-teal-400">founder@civil‑net.io</a>
              and let’s build resilient futures together.
            </p>
          </section>
        )}
      </main>

      <footer className="text-center py-6 text-xs text-slate-500">
        © {new Date().getFullYear()} Civil‑Net Cooperative · Built with React & Tailwind
      </footer>
    </div>
  );
}
