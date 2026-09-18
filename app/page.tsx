import Link from "next/link";
import { profile, services, caseStudies, method, engagements, experience, tools } from "@/lib/portfolio";

function Arrow() { return <span aria-hidden="true">↗</span>; }

function ServiceIcon({ type }: { type: string }) {
  return <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
    {type === "data" ? <><path d="M5 26V6M5 26h23M11 22v-7M18 22V9M25 22V4" /><circle cx="11" cy="11" r="1.5" /></> :
      type === "process" ? <><rect x="3" y="4" width="10" height="8" rx="2" /><rect x="19" y="20" width="10" height="8" rx="2" /><path d="M13 8h11v12M8 12v12h11M21 17l3 3 3-3" /></> :
      type === "communication" ? <><path d="M5 5h22v17H15l-7 5v-5H5zM10 11h12M10 16h8" /></> :
      <><path d="m18 3-11 15h8l-1 11 11-16h-8z" /></>}
  </svg>;
}

function WorkVisual({ id }: { id: string }) {
  if (id === "alx") return <div className="work-visual alx-visual" aria-label="Illustration of programme-health reporting, with on-track, at-risk and stalled categories">
    <div className="visual-topline"><span>PROGRAMME HEALTH</span><span>● Weekly review</span></div>
    <div className="health-categories"><span><i />On track</span><span><i />At risk</span><span><i />Stalled</span></div>
    <div className="chart-bars" aria-hidden="true">{[35, 49, 43, 61, 56, 74, 67, 88, 80, 96].map((h, i) => <span key={i} style={{ height: `${h}%` }} />)}</div>
    <div className="visual-bottomline"><span>VISIBILITY → INTERVENTION</span><span>Illustrative</span></div>
  </div>;
  if (id === "founders-factory") return <div className="work-visual market-visual" aria-label="Illustration of Kenya, Nigeria and South Africa feeding into shared definitions and consolidated reporting">
    <div className="visual-topline"><span>MULTI-MARKET MODEL</span><span>Proposed</span></div>
    <div className="market-nodes"><span>Kenya</span><span>Nigeria</span><span>South Africa</span></div>
    <div className="market-connectors" aria-hidden="true" />
    <div className="shared-model">Shared definitions · Local workflows</div>
    <div className="report-model">Consolidated reporting</div>
  </div>;
  return <div className="work-visual company-visual" aria-label="Illustration of an operating workflow from planning to delivery, review and follow-up">
    <div className="visual-topline"><span>THE EVERYDAY OPERATING SYSTEM</span><span>In use</span></div>
    <div className="workflow-list">{["Plan & prioritize", "Deliver & document", "Review & follow up"].map((label, i) => <div key={label}><span>0{i + 1}</span>{label}<span aria-hidden="true">{i === 2 ? "↺" : "↓"}</span></div>)}</div>
  </div>;
}

export default function Home() {
  return (
    <>
      <section className="hero-section portfolio-container" aria-labelledby="hero-heading">
        <div className="hero-copy">
          <p className="eyebrow"><span className="eyebrow-line" />Operations · Data · Strategy</p>
          <p className="hero-name">{profile.name} <span>/{profile.location}</span></p>
          <h1 id="hero-heading">Clear systems.<br />Meaningful metrics.<br /><em>Strategy in motion.</em></h1>
          <p className="hero-description">{profile.headline}</p>
          <p className="hero-support">{profile.introduction}</p>
          <div className="hero-actions"><a className="button-primary" href="#work">View selected work <Arrow /></a><a className="button-secondary" href={profile.resume} download>Download résumé <span aria-hidden="true">↓</span></a></div>
          <a className="hero-contact" href="#contact">Have a challenge in mind? Let’s talk <Arrow /></a>
        </div>
        <div className="hero-portrait">
          <div className="portrait-frame">
            <span className="portrait-corner corner-top" aria-hidden="true" /><span className="portrait-corner corner-bottom" aria-hidden="true" />
            <div className="portrait-grid" aria-hidden="true" /><span className="portrait-circle" aria-hidden="true" />
            <span className="portrait-full-name" aria-hidden="true">{profile.name.split(" ").map((name) => <span key={name}>{name}</span>)}</span>
            <div className="portrait-caption"><span>{profile.name}</span><span>{profile.title}<br />{profile.focus}</span></div>
          </div>
          <p className="portrait-note">From strategy to systems.<br />From information to action.</p>
        </div>
      </section>

      <section className="proof-section" aria-label="Selected programme outcomes">
        <div className="portfolio-container proof-grid">
          <div><strong>60,000<span>+</span></strong><p>Participants supported annually</p></div>
          <div><strong>21% <span>→</span> 43%</strong><p>Graduation improvement</p></div>
          <div><strong>62% <span>→</span> 71%</strong><p>Activation improvement</p></div>
          <div><strong>90%<span>+</span></strong><p>Customer satisfaction</p></div>
          <div><strong>48<span>%</span></strong><p>Team capacity freed for strategic work</p></div>
        </div>
        <p className="proof-context portfolio-container">Selected outcomes from programme operations at ALX Africa.</p>
      </section>

      <section id="services" className="portfolio-section portfolio-container" aria-labelledby="services-heading">
        <div className="section-heading"><div><p className="eyebrow">01 / What I do</p><h2 id="services-heading">Make the work<br /><em>work better.</em></h2></div><p>I work across operations, reporting, process improvement, communication, automation and AI-enabled workflows, from simple systems for SMEs to structured solutions for multi-market organizations.</p></div>
        <div className="services-grid">{services.map((service) => <article className="service-card" key={service.number}><div className="service-top"><ServiceIcon type={service.icon} /><span>{service.number}</span></div><h3>{service.title}</h3><p>{service.description}</p><div className="service-deliverable">{service.deliverable}</div></article>)}</div>
        <div className="audience-note"><span className="small-label">BUILT FOR YOUR CONTEXT</span><p>For SMEs and startups, I favour simple, affordable systems teams can maintain. For larger organizations, I support structured reporting, cross-functional workflows, governance, integrations and automation.</p></div>
      </section>

      <section id="work" className="work-section portfolio-section" aria-labelledby="work-heading"><div className="portfolio-container">
        <div className="section-heading"><div><p className="eyebrow">02 / Selected work</p><h2 id="work-heading">Real challenges.<br /><em>Practical responses.</em></h2></div><p>A closer look at the problems, approaches and outcomes behind the work. Implemented systems, proposed models and the tools I use myself.</p></div>
        <div className="case-grid">{caseStudies.map((study) => <article key={study.id} className="case-card"><WorkVisual id={study.id} /><div className="case-content"><div className="case-meta"><span>{study.organization}</span><span className={`status-tag ${study.id === "founders-factory" ? "proposed" : ""}`}>{study.status}</span></div><h3>{study.title}</h3><p>{study.summary}</p><div className="case-metric"><strong>{study.metric}</strong><span>{study.metricLabel}</span></div><details className="case-details"><summary>Explore the case study <span className="details-plus" aria-hidden="true">+</span></summary><div><h4>Challenge</h4><p>{study.challenge}</p><h4>My contribution</h4><p>{study.contribution}</p><h4>{study.id === "founders-factory" ? "Status & scope" : "Outcome"}</h4><p>{study.outcome}</p><div className="capability-tags">{study.capabilities.map((item) => <span key={item}>{item}</span>)}</div><a href="#resume">View professional experience <Arrow /></a></div></details></div></article>)}</div>
      </div></section>

      <section id="approach" className="portfolio-section portfolio-container" aria-labelledby="approach-heading">
        <div className="section-heading"><div><p className="eyebrow">03 / How I work</p><h2 id="approach-heading">Understand first.<br /><em>Build for real use.</em></h2></div><p>A system only creates value when people can use it. My approach connects the objective to the everyday decisions, tools and habits that make progress possible.</p></div>
        <ol className="method-grid">{method.map((step, i) => <li key={step.title}><span className="method-number">0{i + 1}</span><h3>{step.title}</h3><p>{step.description}</p></li>)}</ol>
        <div className="engagement-panel"><div><p className="eyebrow">Ways to work together</p><h3>The right support<br />for the next step.</h3><a href="#contact">Discuss your challenge <Arrow /></a></div><ul>{engagements.map((item) => <li key={item}><span aria-hidden="true">↗</span>{item}</li>)}</ul></div>
      </section>

      <section id="about" className="about-section portfolio-section" aria-labelledby="about-heading"><div className="portfolio-container about-grid"><div><p className="eyebrow">04 / About</p><h2 id="about-heading">At the intersection<br />of strategy<br /><em>and execution.</em></h2><p className="about-signature">{profile.name}<span>{profile.title}</span></p></div><div className="about-copy"><p>I enjoy taking information that is scattered, unclear or difficult to manage and turning it into processes, reporting systems and tools that people can use consistently.</p><p>My experience spans large-scale multi-country programme operations, performance reporting, startup and SME environments, multi-market process design, and building my own company.</p><p>I combine operational rigour with an understanding of people, communication and adoption, because a system only creates value when teams can use it.</p><div className="toolkit"><h3>Tools I work with</h3><div>{tools.map((tool) => <span key={tool}>{tool}</span>)}</div></div></div></div></section>

      <section id="resume" className="portfolio-section portfolio-container" aria-labelledby="resume-heading"><div className="section-heading"><div><p className="eyebrow">05 / Résumé</p><h2 id="resume-heading">The experience<br /><em>behind the approach.</em></h2></div><div><p>3+ years managing large-scale, multi-country initiatives across Africa. Programme health, recurring reporting, workflow automation and cross-functional execution.</p><a className="button-secondary resume-download" href={profile.resume} download>Download full résumé <span aria-hidden="true">↓</span></a></div></div>
        <div className="resume-grid"><div className="experience-list">{experience.map((job) => <article key={job.role}><div className="job-meta"><span>{job.company}</span><span>{job.dates}</span></div><h3>{job.role}</h3><p>{job.summary}</p></article>)}<a className="text-link" href="#work">Explore selected case studies <Arrow /></a></div><aside className="education-panel"><p className="small-label">EDUCATION & CERTIFICATIONS</p><h3>BSc Industrial Chemistry</h3><p>University of Embu · 2019</p><ul><li><strong>Data Analytics Certificate</strong><span>ALX Africa · 2025</span></li><li><strong>McKinsey Forward Program</strong><span>McKinsey & Company · 2023</span></li><li><strong>Human Capital Management</strong><span>Corporate Finance Institute · 2023</span></li><li><strong>Leading High-Performing Teams</strong><span>Corporate Finance Institute · 2023</span></li></ul></aside></div>
      </section>

      <section id="contact" className="contact-section portfolio-section" aria-labelledby="contact-heading"><div className="portfolio-container contact-grid"><div><p className="eyebrow">06 / Let’s talk</p><h2 id="contact-heading">What could<br /><em>work better?</em></h2><p>If you need help organizing operational data, identifying the metrics that matter, improving processes or turning recommendations into an implementation system, I would be glad to discuss the challenge.</p><a className="button-amber" href={`mailto:${profile.email}?subject=Let%27s%20discuss%20an%20operations%20challenge`}>Start a conversation <Arrow /></a></div><div className="contact-links"><a href={`mailto:${profile.email}`}><span>Email</span><strong>{profile.email}</strong><Arrow /></a><a href="tel:+254790149924"><span>Phone</span><strong>{profile.phone}</strong><Arrow /></a><a href={profile.linkedin} target="_blank" rel="noreferrer"><span>Connect</span><strong>LinkedIn</strong><Arrow /></a><div><span>Based in</span><strong>{profile.location}</strong></div><p>Supporting teams across Africa and beyond.</p></div></div></section>
    </>
  );
}
