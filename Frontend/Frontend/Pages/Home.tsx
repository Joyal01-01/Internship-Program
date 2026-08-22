import React from "react";

const opportunities = [
	{ title: "Software Engineering Intern", company: "Northstar Labs", location: "London · Hybrid", type: "12 weeks", tag: "Technology" },
	{ title: "Marketing & Communications Intern", company: "Brightside Group", location: "Manchester · On-site", type: "6 months", tag: "Marketing" },
	{ title: "UX Design Intern", company: "Studio Eight", location: "Remote · UK", type: "3 months", tag: "Design" },
];

const benefits = [
	["01", "Discover your path", "Explore opportunities matched to your interests, skills and ambitions."],
	["02", "Build real experience", "Work on meaningful projects with supportive employers and expert mentors."],
	["03", "Start your future", "Grow your network, strengthen your CV and take the next confident step."],
];

export default function Home() {
	return (
		<main className="home-page">
			<style>{`
				:root { font-family: Inter, ui-sans-serif, system-ui, -apple-system, sans-serif; color: #17251f; background: #f8faf7; }
				* { box-sizing: border-box; } body { margin: 0; } a { color: inherit; text-decoration: none; }
				.home-page { overflow: hidden; } .container { width: min(1120px, calc(100% - 40px)); margin: auto; }
				.nav { display:flex; align-items:center; justify-content:space-between; padding:26px 0; }
				.logo { font-size:22px; font-weight:800; letter-spacing:-1px; } .logo span { color:#e47c45; }
				.nav-links { display:flex; gap:30px; font-size:14px; color:#52605a; } .nav-links a:hover { color:#e47c45; }
				.nav-actions { display:flex; align-items:center; gap:18px; font-size:14px; font-weight:600; }
				.button { display:inline-block; border:0; border-radius:8px; padding:13px 21px; background:#e47c45; color:white; font-weight:700; cursor:pointer; }
				.button:hover { background:#cc6835; } .button.light { background:#eaf1e9; color:#284333; }
				.hero { padding:78px 0 100px; background:linear-gradient(120deg,#edf5ec 0%,#f8faf7 65%); }
				.hero-grid { display:grid; grid-template-columns:1.05fr .95fr; gap:70px; align-items:center; }
				.eyebrow { color:#e47c45; text-transform:uppercase; letter-spacing:2px; font-size:12px; font-weight:800; }
				h1 { max-width:650px; margin:18px 0; font-size:clamp(42px,6vw,72px); line-height:1.02; letter-spacing:-4px; }
				.hero p { max-width:520px; color:#5c6962; font-size:18px; line-height:1.65; }
				.hero-actions { display:flex; gap:14px; margin-top:30px; align-items:center; }
				.visual { min-height:385px; border-radius:24px; background:#d5e7d5; position:relative; padding:25px; }
				.card { background:white; border-radius:15px; box-shadow:0 18px 40px #3754401c; padding:22px; }
				.profile-card { width:74%; position:absolute; top:35px; left:35px; } .profile-card strong { font-size:20px; display:block; margin:12px 0 5px; }
				.avatar { width:48px; height:48px; border-radius:50%; display:grid; place-items:center; background:#f7c9a6; font-weight:800; color:#75452d; }
				.match { position:absolute; right:24px; bottom:28px; width:48%; background:#284333; color:white; } .match small { color:#c4d6c8; }
				.match strong { display:block; font-size:30px; margin-top:8px; color:#f4b184; }
				.section { padding:88px 0; } .section-head { display:flex; justify-content:space-between; align-items:end; margin-bottom:34px; }
				h2 { font-size:38px; letter-spacing:-2px; margin:10px 0 0; } .section-head p { color:#65736a; max-width:370px; line-height:1.5; }
				.benefits { display:grid; grid-template-columns:repeat(3,1fr); gap:38px; } .benefit { border-top:1px solid #d6dfd7; padding-top:20px; }
				.number { color:#e47c45; font-weight:800; } .benefit h3 { font-size:20px; margin:24px 0 10px; } .benefit p { color:#68756d; line-height:1.6; margin:0; }
				.opportunities { background:#24412f; color:white; } .opportunities .section-head p { color:#c3d1c5; }
				.opportunity-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:18px; } .opportunity { color:#17251f; padding:24px; min-height:220px; display:flex; flex-direction:column; justify-content:space-between; }
				.tag { color:#e47c45; font-size:12px; font-weight:800; text-transform:uppercase; letter-spacing:1px; } .opportunity h3 { margin:18px 0 8px; font-size:21px; } .meta { color:#718078; font-size:14px; display:flex; gap:10px; flex-wrap:wrap; }
				.view-all { color:white; border-bottom:1px solid #90aa98; padding-bottom:3px; font-size:14px; }
				.cta { text-align:center; background:#f1e9dd; } .cta p { color:#68756d; max-width:510px; margin:16px auto 28px; line-height:1.6; }
				footer { padding:28px 0; color:#718078; font-size:13px; border-top:1px solid #e2e8e2; display:flex; justify-content:space-between; }
				@media(max-width:760px) { .nav-links { display:none; } .hero { padding:45px 0 65px; } .hero-grid, .benefits, .opportunity-grid { grid-template-columns:1fr; } .visual { min-height:320px; } h1 { letter-spacing:-2px; } .section-head { display:block; } footer { display:block; } }
			`}</style>

			<header className="container nav">
				<a className="logo" href="#top">intern<span>ship.</span></a>
				<nav className="nav-links" aria-label="Main navigation"><a href="#opportunities">Opportunities</a><a href="#how-it-works">How it works</a><a href="#about">About us</a></nav>
				<div className="nav-actions"><a href="#login">Log in</a><a className="button" href="#signup">Get started</a></div>
			</header>

			<section className="hero" id="top"><div className="container hero-grid"><div><div className="eyebrow">Your next chapter starts here</div><h1>Find an internship that moves you forward.</h1><p>Connect with ambitious employers, gain practical experience and discover what you are capable of.</p><div className="hero-actions"><a className="button" href="#opportunities">Explore opportunities →</a><a className="button light" href="#how-it-works">How it works</a></div></div><div className="visual" aria-label="Internship matching preview"><div className="card profile-card"><div className="avatar">AM</div><strong>Alex, meet your match</strong><small>Software Engineering · London</small></div><div className="card match"><small>Profile match</small><strong>94%</strong><small>Great fit for your goals</small></div></div></div></section>

			<section className="section" id="how-it-works"><div className="container"><div className="section-head"><div><div className="eyebrow">A simpler way forward</div><h2>Experience that counts.</h2></div><p>Whether you know exactly what you want or are still exploring, we make finding the right opportunity easier.</p></div><div className="benefits">{benefits.map(([number, title, text]) => <article className="benefit" key={number}><div className="number">{number}</div><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

			<section className="section opportunities" id="opportunities"><div className="container"><div className="section-head"><div><div className="eyebrow">Featured roles</div><h2>Make your mark.</h2></div><a className="view-all" href="#all-opportunities">View all opportunities →</a></div><div className="opportunity-grid">{opportunities.map((item) => <article className="card opportunity" key={item.title}><div><div className="tag">{item.tag}</div><h3>{item.title}</h3><div className="meta"><span>{item.company}</span><span>·</span><span>{item.location}</span></div></div><div className="meta">{item.type}<span>→</span></div></article>)}</div></div></section>

			<section className="section cta" id="about"><div className="container"><div className="eyebrow">Ready when you are</div><h2>Good things are ahead.</h2><p>Create your profile today and take the first step towards an opportunity built around your potential.</p><a className="button" href="#signup">Create your profile →</a></div></section>
			<footer className="container"><span>© {new Date().getFullYear()} internship.</span><span>Built for ambitious beginnings.</span></footer>
		</main>
	);
}
