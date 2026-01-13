import React from "react";

const Alliescape = () => {
    return (
        <div className="bg-bg-base text-text-main transition-colors duration-500 min-h-screen">

            {/* Header Section */}
            <section className="bg-bg-alt py-20 text-center transition-colors duration-500">
                <h1 className="text-4xl font-bold text-accent mb-4 uppercase tracking-tight">
                    Our Strategic Network (Alliescape)
                </h1>
                <p className="max-w-3xl mx-auto text-text-muted text-lg font-medium leading-relaxed">
                    Expand & scale with our official allies and strategic partnerships to
                    guarantee your seamless entry into the UAE market.
                </p>
            </section>

            {/* Visionary Section */}
            <section className="py-20 flex flex-col items-center bg-bg-base transition-colors duration-500">
                <h2 className="text-2xl font-bold mb-10 uppercase tracking-wide">
                    The Visionaries Behind Your Success
                </h2>

                <div className="bg-bg-alt shadow-lg border border-black/5 rounded-xl p-8 max-w-xl text-center group hover:shadow-xl transition-all">
                    <div className="flex justify-center mb-6">
                        <div className="w-20 h-20 rounded-full bg-accent/20 flex items-center justify-center border-2 border-accent/30 overflow-hidden transform group-hover:scale-110 transition-transform">
                            <span className="text-accent text-2xl font-black">SK</span>
                        </div>
                    </div>
                    <h3 className="text-xl font-bold text-accent uppercase tracking-tighter">
                        Sandeep Kumar Mathala
                    </h3>
                    <p className="text-sm text-text-muted mb-4 font-bold opacity-75">
                        Founder & Chief Expansion Officer
                    </p>
                    <p className="text-text-muted text-sm leading-relaxed">
                        Visionary leader with extensive experience in UAE business setup,
                        strategic consulting, and global market expansion.
                    </p>
                </div>
            </section>

            {/* Allies Grid Section */}
            <section className="py-20 bg-bg-alt transition-colors duration-500">
                <h2 className="text-2xl font-bold text-center mb-12 uppercase tracking-wide">
                    Official Government & Strategic Allies
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">

                    {[
                        {
                            title: "RAKEZ",
                            desc: "Official partner for business licensing and free zone setup."
                        },
                        {
                            title: "DMCC",
                            desc: "Dubai’s leading international business district."
                        },
                        {
                            title: "Abu Dhabi Global Market (ADGM)",
                            desc: "World-class financial free zone and business hub."
                        },
                        {
                            title: "Banking Partners",
                            desc: "Corporate banking solutions with top UAE banks."
                        },
                        {
                            title: "Legal & Compliance Firms",
                            desc: "Ensuring regulatory compliance and legal security."
                        },
                        {
                            title: "Logistics & Audit Network",
                            desc: "End-to-end logistics, audit, and operational support."
                        }
                    ].map((item, index) => (
                        <div
                            key={index}
                            className="bg-bg-base border border-black/5 rounded-xl shadow-sm p-6 text-center hover:shadow-md transition group"
                        >
                            <div className="flex justify-center mb-4">
                                <div className="w-12 h-12 flex items-center justify-center bg-accent/10 rounded-full text-accent font-black transform group-hover:scale-110 transition-transform">
                                    ✓
                                </div>
                            </div>
                            <h3 className="font-bold text-text-main mb-2 uppercase tracking-tight">{item.title}</h3>
                            <p className="text-sm text-text-muted mb-4 leading-relaxed">{item.desc}</p>
                            <button className="text-xs text-accent font-black uppercase tracking-widest">
                                ✓ Strategic Alliance
                            </button>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 text-center bg-bg-base transition-colors duration-500 border-t border-black/5">
                <h2 className="text-2xl font-bold text-text-main mb-4 uppercase tracking-tight">
                    Ready to Leverage Our Network?
                </h2>
                <p className="text-text-muted mb-6 max-w-xl mx-auto font-medium leading-relaxed">
                    Don’t navigate the complexity alone. Let our official alliances become
                    the foundation of your global business success.
                </p>
                <button className="bg-accent text-primary px-8 py-3 rounded-lg font-bold hover:bg-accent-hover transition-all shadow-lg shadow-accent/10 uppercase text-sm">
                    Connect With Us
                </button>
            </section>
        </div>
    );
};

export default Alliescape;
