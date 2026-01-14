import React from "react";

const ImpactTales = () => {
    return (
        <div className="bg-white text-[#0F172A] min-h-screen">

            {/* Hero Section */}
            <section className="px-4 pt-4">
                <div className="bg-primary py-20 text-center text-white rounded-3xl border border-[#1E293B]">
                    <h1 className="text-4xl font-bold mb-4 uppercase tracking-tight">
                        Our <span className="text-gold underline decoration-gold/30 underline-offset-8">Impact Tales</span>
                    </h1>
                    <p className="max-w-3xl mx-auto text-gray-200 mb-6 font-medium leading-relaxed">
                        Proof is in the performance. See how we've powered Indian startups to
                        achieve rapid, compliant, and profitable international expansion.
                    </p>
                    <button className="bg-gold hover:bg-gold-hover px-6 py-3 rounded-lg font-bold text-primary transition-all shadow-lg shadow-gold/10 uppercase text-sm">
                        Browse Success Stories
                    </button>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 bg-white">
                <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {[
                        { value: "150+", label: "Successful Expansions" },
                        { value: "97%", label: "Compliance Success Rate" },
                        { value: "48 Hours", label: "Fastest Company Setup" },
                        { value: "0%", label: "Corporate Tax Secured" }
                    ].map((stat, index) => (
                        <div key={index} className="group">
                            <h2 className="text-4xl font-black text-gold group-hover:scale-110 transition-transform">
                                {stat.value}
                            </h2>
                            <p className="text-[10px] text-gray-500 mt-2 font-black uppercase tracking-widest">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Case Studies Section */}
            <section className="py-20 bg-gray-50 border-y border-gray-100">
                <h2 className="text-center text-2xl font-bold mb-12 uppercase tracking-wide">
                    Featured <span className="text-gold underline decoration-gold/30 underline-offset-4">Case Studies</span>
                </h2>

                <div className="max-w-4xl mx-auto space-y-8 px-6">

                    {/* Card 1 */}
                    <div className="bg-white border border-gray-100 rounded-xl shadow-sm p-8 hover:shadow-xl transition-all group hover:-translate-y-1">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="text-gold text-2xl font-black transform group-hover:rotate-12 transition-transform">⚡</div>
                            <h3 className="font-bold text-lg uppercase tracking-tight text-[#0F172A]">
                                Tech Startup: Accelerating from Hyderabad to Dubai
                            </h3>
                        </div>
                        <p className="text-gold font-black text-xl mb-2 tracking-tighter">
                            45 Days <span className="text-xs text-gray-500 uppercase tracking-widest ml-2 opacity-75">Time to Market Entry</span>
                        </p>
                        <p className="text-gray-500 text-sm leading-relaxed font-medium">
                            Enabled 100% foreign ownership and secured multiple regional
                            funding rounds within 6 months.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white border border-gray-100 rounded-xl shadow-sm p-8 hover:shadow-xl transition-all group hover:-translate-y-1">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="text-gold text-2xl font-black transform group-hover:rotate-12 transition-transform">📦</div>
                            <h3 className="font-bold text-lg uppercase tracking-tight text-[#0F172A]">
                                E-commerce Giant: Optimizing Supply Chain via RAKEZ
                            </h3>
                        </div>
                        <p className="text-gold font-black text-xl mb-2 tracking-tighter">
                            30% <span className="text-xs text-gray-500 uppercase tracking-widest ml-2 opacity-75">Operational Cost Reduction</span>
                        </p>
                        <p className="text-gray-500 text-sm leading-relaxed font-medium">
                            Reduced logistics overhead and unlocked seamless GCC distribution
                            channels.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white border border-gray-100 rounded-xl shadow-sm p-8 hover:shadow-xl transition-all group hover:-translate-y-1">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="text-gold text-2xl font-black transform group-hover:rotate-12 transition-transform">💰</div>
                            <h3 className="font-bold text-lg uppercase tracking-tight text-[#0F172A]">
                                FinTech Firm: Compliance & Capital in ADGM
                            </h3>
                        </div>
                        <p className="text-gold font-black text-xl mb-2 tracking-tighter">
                            $5M+ <span className="text-xs text-gray-500 uppercase tracking-widest ml-2 opacity-75">Capital Raised Post Setup</span>
                        </p>
                        <p className="text-gray-500 text-sm leading-relaxed font-medium">
                            Achieved regulatory approval and onboarded institutional investors
                            under ADGM framework.
                        </p>
                    </div>

                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 text-center bg-white border-t border-gray-100">
                <h2 className="text-3xl font-bold mb-4 uppercase tracking-tight text-[#0F172A]">
                    Ready to Be Our Next <span className="text-gold">Impact Tale</span>?
                </h2>
                <p className="text-gray-500 mb-8 max-w-xl mx-auto font-medium leading-relaxed">
                    Your global expansion story starts with a zero-obligation strategic consultation.
                </p>
                <button className="bg-gold hover:bg-gold-hover px-10 py-4 rounded-lg text-primary font-black transition-all shadow-lg shadow-gold/20 uppercase text-xs tracking-widest">
                    Confirm Your Expansion Call
                </button>
            </section>

        </div>
    );
};

export default ImpactTales;
