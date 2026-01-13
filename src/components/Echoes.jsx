import React from "react";

const Echoes = () => {
    return (
        <div className="bg-bg-base text-text-main transition-colors duration-500 min-h-screen">

            {/* Hero Section */}
            <section className="bg-primary py-20 text-center text-white transition-colors duration-500">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="text-3xl mb-4 text-accent">❝❞</div>
                    <h1 className="text-4xl font-bold mb-4 uppercase tracking-tight">
                        The <span className="text-accent">Echoes</span> of Success
                    </h1>
                    <p className="text-gray-200 mb-6 font-medium leading-relaxed">
                        Hear directly from founders and executives who have successfully
                        expanded their businesses globally with the ExpandMe ecosystem.
                    </p>
                    <button className="bg-accent text-primary font-bold px-8 py-3 rounded-lg hover:bg-accent-hover transition-all shadow-lg shadow-accent/10 uppercase text-sm">
                        Read Success Stories
                    </button>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-20 bg-bg-base transition-colors duration-500">
                <h2 className="text-center text-2xl font-bold mb-12 uppercase tracking-wide">
                    Verified Client <span className="text-accent">Feedback</span>
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">

                    {[
                        {
                            text:
                                "The end-to-end guidance was exceptional. Our expansion process into Dubai was seamless and transparent.",
                            name: "Rakesh Sharma",
                            role: "CEO, TechNova Solutions"
                        },
                        {
                            text:
                                "Their strategic clarity helped us move faster and avoid costly mistakes in the UAE market.",
                            name: "Priya Dogra",
                            role: "Founder, FinEdge Ventures"
                        },
                        {
                            text:
                                "ExpandMe delivered exactly what they promised — speed, compliance, and access.",
                            name: "David Lee",
                            role: "COO, GlobalMart"
                        },
                        {
                            text:
                                "From ideation to execution, the team felt like an extension of our own leadership.",
                            name: "Aisha Khan",
                            role: "Managing Director, Nexus Group"
                        },
                        {
                            text:
                                "We reduced setup timelines dramatically while maintaining full regulatory compliance.",
                            name: "Vikram Reddy",
                            role: "VP Strategy, CoreLogix"
                        },
                        {
                            text:
                                "Their ecosystem approach gave us confidence and momentum in a new market.",
                            name: "Sarah Chen",
                            role: "Co-founder, CloudSphere"
                        }
                    ].map((item, index) => (
                        <div
                            key={index}
                            className="border border-black/5 rounded-xl p-8 shadow-sm hover:shadow-xl transition-all bg-bg-alt group hover:-translate-y-1"
                        >
                            <div className="text-accent mb-4 text-xs font-black tracking-widest">★★★★★</div>
                            <p className="text-sm text-text-muted mb-6 leading-relaxed font-medium">“{item.text}”</p>
                            <h4 className="font-bold text-text-main uppercase tracking-tight">{item.name}</h4>
                            <p className="text-[10px] text-text-muted font-black uppercase tracking-widest opacity-75">{item.role}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 text-center bg-bg-alt transition-colors duration-500 border-t border-black/5">
                <h2 className="text-3xl font-bold mb-6 uppercase tracking-tight text-text-main">
                    Ready for <span className="text-accent">Your</span> Success Story?
                </h2>
                <p className="text-text-muted mb-8 max-w-xl mx-auto font-medium leading-relaxed">
                    Join the ranks of successful global entrepreneurs. Let’s co-create your
                    expansion journey.
                </p>
                <button className="bg-accent hover:bg-accent-hover px-10 py-4 rounded-lg text-primary font-black transition-all shadow-lg shadow-accent/20 uppercase text-xs tracking-widest">
                    Book My Expansion Strategy
                </button>
            </section>
        </div>
    );
};

export default Echoes;
