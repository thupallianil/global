import React from "react";

const ImpactTales = () => {
    return (
        <div className="bg-bg-base text-text-main transition-colors duration-500 min-h-screen">

            {/* Hero Section */}
            <section className="bg-primary py-20 text-center text-white transition-colors duration-500">
                <h1 className="text-4xl font-bold mb-4 uppercase tracking-tight">
                    Our <span className="text-accent underline decoration-accent/30 underline-offset-8">Impact Tales</span>
                </h1>
                <p className="max-w-3xl mx-auto text-gray-200 mb-6 font-medium leading-relaxed">
                    Proof is in the performance. See how we’ve powered Indian startups to
                    achieve rapid, compliant, and profitable international expansion.
                </p>
                <button className="bg-accent hover:bg-accent-hover px-6 py-3 rounded-lg font-bold text-primary transition-all shadow-lg shadow-accent/10 uppercase text-sm">
                    Browse Success Stories
                </button>
            </section>

            {/* Stats Section */}
            <section className="py-16 bg-bg-base transition-colors duration-500">
                <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {[
                        { value: "150+", label: "Successful Expansions" },
                        { value: "97%", label: "Compliance Success Rate" },
                        { value: "48 Hours", label: "Fastest Company Setup" },
                        { value: "0%", label: "Corporate Tax Secured" }
                    ].map((stat, index) => (
                        <div key={index} className="group">
                            <h2 className="text-4xl font-black text-accent group-hover:scale-110 transition-transform">
                                {stat.value}
                            </h2>
                            <p className="text-[10px] text-text-muted mt-2 font-black uppercase tracking-widest">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Case Studies Section */}
            <section className="py-20 bg-bg-alt transition-colors duration-500 border-y border-black/5">
                <h2 className="text-center text-2xl font-bold mb-12 uppercase tracking-wide">
                    Featured <span className="text-accent underline decoration-accent/30 underline-offset-4">Case Studies</span>
                </h2>

                <div className="max-w-4xl mx-auto space-y-8 px-6">

                    {/* Card 1 */}
                    <div className="bg-bg-base border border-black/5 rounded-xl shadow-sm p-8 hover:shadow-xl transition-all group hover:-translate-y-1">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="text-accent text-2xl font-black transform group-hover:rotate-12 transition-transform">⚡</div>
                            <h3 className="font-bold text-lg uppercase tracking-tight text-text-main">
                                Tech Startup: Accelerating from Hyderabad to Dubai
                            </h3>
                        </div>
                        <p className="text-accent font-black text-xl mb-2 tracking-tighter">
                            45 Days <span className="text-xs text-text-muted uppercase tracking-widest ml-2 opacity-75">Time to Market Entry</span>
                        </p>
                        <p className="text-text-muted text-sm leading-relaxed font-medium">
                            Enabled 100% foreign ownership and secured multiple regional
                            funding rounds within 6 months.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-bg-base border border-black/5 rounded-xl shadow-sm p-8 hover:shadow-xl transition-all group hover:-translate-y-1">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="text-accent text-2xl font-black transform group-hover:rotate-12 transition-transform">📦</div>
                            <h3 className="font-bold text-lg uppercase tracking-tight text-text-main">
                                E-commerce Giant: Optimizing Supply Chain via RAKEZ
                            </h3>
                        </div>
                        <p className="text-accent font-black text-xl mb-2 tracking-tighter">
                            30% <span className="text-xs text-text-muted uppercase tracking-widest ml-2 opacity-75">Operational Cost Reduction</span>
                        </p>
                        <p className="text-text-muted text-sm leading-relaxed font-medium">
                            Reduced logistics overhead and unlocked seamless GCC distribution
                            channels.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-bg-base border border-black/5 rounded-xl shadow-sm p-8 hover:shadow-xl transition-all group hover:-translate-y-1">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="text-accent text-2xl font-black transform group-hover:rotate-12 transition-transform">💰</div>
                            <h3 className="font-bold text-lg uppercase tracking-tight text-text-main">
                                FinTech Firm: Compliance & Capital in ADGM
                            </h3>
                        </div>
                        <p className="text-accent font-black text-xl mb-2 tracking-tighter">
                            $5M+ <span className="text-xs text-text-muted uppercase tracking-widest ml-2 opacity-75">Capital Raised Post Setup</span>
                        </p>
                        <p className="text-text-muted text-sm leading-relaxed font-medium">
                            Achieved regulatory approval and onboarded institutional investors
                            under ADGM framework.
                        </p>
                    </div>

                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 text-center bg-bg-base transition-colors duration-500">
                <h2 className="text-3xl font-bold mb-4 uppercase tracking-tight text-text-main">
                    Ready to Be Our Next <span className="text-accent">Impact Tale</span>?
                </h2>
                <p className="text-text-muted mb-8 max-w-xl mx-auto font-medium leading-relaxed">
                    Your global expansion story starts with a zero-obligation strategic consultation.
                </p>
                <button className="bg-accent hover:bg-accent-hover px-10 py-4 rounded-lg text-primary font-black transition-all shadow-lg shadow-accent/20 uppercase text-xs tracking-widest">
                    Confirm Your Expansion Call
                </button>
            </section>

        </div>
    );
};

export default ImpactTales;
