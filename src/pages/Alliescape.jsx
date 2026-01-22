import React from "react";

const Alliescape = () => {
    return (
        <div className="bg-white text-[#0F172A] min-h-screen">

            {/* Header Section */}
            <section className="px-4 pt-4">
                <div className="bg-gray-50 py-20 text-center rounded-3xl border border-[#1E293B]">
                    <h1 className="text-4xl font-bold text-gold mb-4 uppercase tracking-tight">
                        Our Strategic Network (Alliescape)
                    </h1>
                    <p className="max-w-3xl mx-auto text-gray-500 text-lg font-medium leading-relaxed">
                        Expand & scale with our official allies and strategic partnerships to
                        guarantee your seamless entry into the UAE market.
                    </p>
                </div>
            </section>

            {/* Visionary Section */}
            <section className="py-20 flex flex-col items-center bg-white">
                <h2 className="text-2xl font-bold mb-10 uppercase tracking-wide">
                    The Visionaries Behind Your Success
                </h2>

                <div className="bg-gray-50 shadow-lg border border-gray-100 rounded-xl p-8 max-w-xl text-center group hover:shadow-xl transition-all">
                    <div className="flex justify-center mb-6">
                        <div className="w-20 h-20 rounded-full bg-gold/20 flex items-center justify-center border-2 border-gold/30 overflow-hidden transform group-hover:scale-110 transition-transform">
                            <span className="text-gold text-2xl font-black">SK</span>
                        </div>
                    </div>
                    <h3 className="text-xl font-bold text-gold uppercase tracking-tighter">
                        Sandeep Kumar Mathala
                    </h3>
                    <p className="text-sm text-gray-500 mb-4 font-bold opacity-75">
                        Founder & Chief Expansion Officer
                    </p>
                    <p className="text-gray-500 text-sm leading-relaxed">
                        Visionary leader with extensive experience in UAE business setup,
                        strategic consulting, and global market expansion.
                    </p>
                </div>
            </section>

            {/* Allies Grid Section */}
            <section className="py-20 bg-gray-50">
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
                            desc: "Dubai's leading international business district."
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
                            className="bg-white border border-gray-100 rounded-xl shadow-sm p-6 text-center hover:shadow-md transition group"
                        >
                            <div className="flex justify-center mb-4">
                                <div className="w-12 h-12 flex items-center justify-center bg-gold/10 rounded-full text-gold font-black transform group-hover:scale-110 transition-transform">
                                    ✓
                                </div>
                            </div>
                            <h3 className="font-bold text-[#0F172A] mb-2 uppercase tracking-tight">{item.title}</h3>
                            <p className="text-sm text-gray-500 mb-4 leading-relaxed">{item.desc}</p>
                            <button className="text-xs text-gold font-black uppercase tracking-widest">
                                ✓ Strategic Alliance
                            </button>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 text-center bg-white border-t border-gray-100">
                <h2 className="text-2xl font-bold text-[#0F172A] mb-4 uppercase tracking-tight">
                    Ready to Leverage Our Network?
                </h2>
                <p className="text-gray-500 mb-6 max-w-xl mx-auto font-medium leading-relaxed">
                    Don't navigate the complexity alone. Let our official alliances become
                    the foundation of your global business success.
                </p>
                <button className="bg-gold text-primary px-8 py-3 rounded-lg font-bold hover:bg-gold-hover transition-all shadow-lg shadow-gold/10 uppercase text-sm">
                    Connect With Us
                </button>
            </section>
        </div>
    );
};

export default Alliescape;
