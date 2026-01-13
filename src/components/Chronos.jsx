import React from "react";

const milestones = [
    {
        year: "2018",
        title: "Founding Focus on India–GCC Trade",
        desc: "Laid the foundation by enabling seamless India–GCC market entry through strategic advisory.",
        side: "right"
    },
    {
        year: "2020",
        title: "UAE Free Zone Official Partnership",
        desc: "Became an official partner with leading UAE free zones, enabling faster company formation.",
        side: "left"
    },
    {
        year: "2021",
        title: "The 48-Hour Blueprint Launch",
        desc: "Introduced the rapid setup blueprint for qualifying startups to launch within 48 hours.",
        side: "right"
    },
    {
        year: "2022",
        title: "Zero-Tax Financial Structuring Program",
        desc: "Launched optimized financial structures for global businesses ensuring tax efficiency.",
        side: "left"
    },
    {
        year: "2023",
        title: "Expansion to Broader Global Markets",
        desc: "Expanded advisory services beyond GCC into multiple international jurisdictions.",
        side: "right"
    },
    {
        year: "2024",
        title: "Launch of Co-Creation Lab (Synergy Pilot)",
        desc: "Introduced immersive strategy labs to co-create scalable global expansion plans.",
        side: "left"
    }
];

const Chronos = () => {
    return (
        <div className="bg-bg-base text-text-main transition-colors duration-500 min-h-screen">

            {/* Hero Section */}
            <section className="bg-primary py-20 text-center text-white transition-colors duration-500">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="text-3xl mb-4 text-accent">⏳</div>
                    <h1 className="text-4xl font-bold mb-4 uppercase tracking-tight">
                        Our <span className="text-accent">Chronos</span> | A History of Expansion
                    </h1>
                    <p className="text-gray-200 mb-6 font-medium leading-relaxed">
                        Our journey is defined by a commitment to systematic, zero-risk
                        global expansion. Explore the milestones that built the ExpandMe legacy.
                    </p>
                    <button className="bg-accent hover:bg-accent-hover px-8 py-3 rounded-lg font-bold text-primary transition-all shadow-lg shadow-accent/10 uppercase text-sm">
                        View Our Journey
                    </button>
                </div>
            </section>

            {/* Timeline Section */}
            <section className="py-20 bg-bg-base transition-colors duration-500">
                <h2 className="text-center text-2xl font-bold mb-12 uppercase tracking-wide">
                    Key <span className="text-accent underline decoration-accent/30 underline-offset-4">Milestones</span>
                </h2>

                <div className="relative max-w-5xl mx-auto px-6">

                    {/* Vertical Line */}
                    <div className="absolute left-1/2 top-0 h-full w-1 bg-accent/20 transform -translate-x-1/2" />

                    {milestones.map((item, index) => (
                        <div
                            key={index}
                            className={`mb-12 flex ${item.side === "left" ? "justify-start" : "justify-end"
                                }`}
                        >
                            <div className="w-full md:w-1/2 group">
                                <div className="bg-bg-alt border border-black/5 rounded-xl p-8 relative hover:shadow-xl transition-all group-hover:-translate-y-1">

                                    {/* Dot */}
                                    <span
                                        className={`absolute top-10 ${item.side === "left" ? "-right-[13px]" : "-left-[13px]"
                                            } w-6 h-6 bg-accent rounded-full border-4 border-bg-alt z-10`}
                                    />

                                    <span className="text-[10px] text-accent font-black uppercase tracking-widest">
                                        {item.year}
                                    </span>
                                    <h3 className="font-bold mt-2 mb-3 text-text-main uppercase tracking-tight">
                                        {item.title}
                                    </h3>
                                    <p className="text-xs text-text-muted leading-relaxed font-medium">{item.desc}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 text-center bg-bg-alt transition-colors duration-500 border-t border-black/5">
                <h2 className="text-3xl font-bold mb-6 uppercase tracking-tight text-text-main">
                    Building the <span className="text-accent underline decoration-accent/30 underline-offset-4">Next Chapter</span>
                </h2>
                <p className="text-text-muted mb-8 max-w-xl mx-auto font-medium leading-relaxed">
                    Our history of compliance, speed, and profitability is the foundation
                    for your future success. Let’s write the next milestone together.
                </p>
                <button className="bg-accent hover:bg-accent-hover px-10 py-4 rounded-lg text-primary font-black transition-all shadow-lg shadow-accent/20 uppercase text-xs tracking-widest">
                    Start My Expansion Story
                </button>
            </section>
        </div>
    );
};

export default Chronos;
