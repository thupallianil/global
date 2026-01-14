import React from 'react';

const Scope = () => {
    return (
        <div className="flex flex-col bg-white overflow-x-hidden">
            {/* Scope Hero Section */}
            <section className="px-4 pt-4">
                <div className="bg-[#0F172A] py-24 px-6 text-center text-white relative rounded-3xl border border-[#1E293B]">
                    <div className="max-w-4xl mx-auto flex flex-col items-center">
                        <div className="mb-6">
                            <svg className="w-10 h-10 text-gold" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M13 10V3L4 14H11V21L20 10H13Z" />
                            </svg>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
                            The Full Scope of <span className="text-white font-black">**ExpandME**</span>
                        </h1>
                        <p className="text-gray-400 text-lg mb-10 max-w-3xl leading-relaxed">
                            Our systematic approach is built on three pillars: <span className="text-white font-bold">**Vision**</span>, <span className="text-white font-bold">**Strategy**</span>, and <span className="text-white font-bold">**Execution**</span>. We cover every step from conceptual alignment to operational launch.
                        </p>
                        <button className="bg-gold text-[#0F172A] px-8 py-3 rounded-md font-bold text-sm tracking-wide hover:bg-gold-hover transition-all uppercase">
                            Start Your Scope Assessment
                        </button>
                    </div>
                </div>
            </section>

            {/* 3-Pillar System Section */}
            <section className="py-24 px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold text-[#0F172A] text-center mb-16 tracking-tight">
                        The ExpandME <span className="text-[#0F172A] font-black">**3-Pillar System**</span>
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Pillar 1 */}
                        <div className="bg-white border border-gray-100 rounded-2xl p-10 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group translate-y-0 hover:-translate-y-2">
                            <div className="mb-8 w-14 h-14 bg-blue-50/50 rounded-xl flex items-center justify-center text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-all">
                                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                </svg>
                            </div>
                            <h3 className="text-[#0F172A] text-xl font-bold mb-4">I. Vision: The Expansion Essence</h3>
                            <p className="text-gray-500 text-sm mb-8 leading-relaxed">
                                Define your global why. We validate your market fit, regulatory alignment, and long-term vision for sustainable success.
                            </p>
                            <a href="#" className="mt-auto text-gold text-xs font-black uppercase tracking-widest hover:text-gold-hover flex items-center gap-2">
                                Explore Vision <span>→</span>
                            </a>
                        </div>

                        {/* Pillar 2 */}
                        <div className="bg-white border border-gray-100 rounded-2xl p-10 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group translate-y-0 hover:-translate-y-2">
                            <div className="mb-8 w-14 h-14 bg-red-50/50 rounded-xl flex items-center justify-center text-red-500 group-hover:bg-red-500 group-hover:text-white transition-all">
                                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A2 2 0 013 15.488V5.012a2 2 0 011.553-1.954L9 1l5.447 2.724A2 2 0 0116 5.676v10.312a2 2 0 01-1.553 1.954L9 20z" />
                                </svg>
                            </div>
                            <h3 className="text-[#0F172A] text-xl font-bold mb-4">II. Strategy: The Expansion Blueprint</h3>
                            <p className="text-gray-500 text-sm mb-8 leading-relaxed">
                                Develop the how. This is the step-by-step roadmap covering jurisdiction selection, legal structures, and financial modeling.
                            </p>
                            <a href="#" className="mt-auto text-gold text-xs font-black uppercase tracking-widest hover:text-gold-hover flex items-center gap-2">
                                View the Blueprint <span>→</span>
                            </a>
                        </div>

                        {/* Pillar 3 */}
                        <div className="bg-white border border-gray-100 rounded-2xl p-10 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group translate-y-0 hover:-translate-y-2">
                            <div className="mb-8 w-14 h-14 bg-green-50/50 rounded-xl flex items-center justify-center text-green-500 group-hover:bg-green-500 group-hover:text-white transition-all">
                                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <h3 className="text-[#0F172A] text-xl font-bold mb-4">III. Execution: The Footprint</h3>
                            <p className="text-gray-500 text-sm mb-8 leading-relaxed">
                                Deploy the what. Immediate, guaranteed implementation of company setup, banking, visas, and VAT registration, targeting a 48-hour launch.
                            </p>
                            <a href="#" className="mt-auto text-gold text-xs font-black uppercase tracking-widest hover:text-gold-hover flex items-center gap-2">
                                View Execution Steps <span>→</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Success Guarantees Section */}
            <section className="py-24 px-6 bg-gray-50">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-3xl font-bold text-[#0F172A] text-center mb-16 tracking-tight">
                        Why Our Scope <span className="text-[#0F172A] font-black">**Guarantees Success**</span>
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
                        {/* Feature 1 */}
                        <div className="flex gap-4">
                            <div className="bg-gold/10 p-2 rounded-lg h-fit">
                                <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <div>
                                <h4 className="text-[#0F172A] font-bold mb-2">100% Tax Compliance</h4>
                                <p className="text-gray-500 text-xs leading-relaxed">
                                    We only recommend structures that are legally validated to ensure 0% corporate tax benefits are secure and future-proof.
                                </p>
                            </div>
                        </div>

                        {/* Feature 2 */}
                        <div className="flex gap-4">
                            <div className="bg-gold/10 p-2 rounded-lg h-fit">
                                <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <div>
                                <h4 className="text-[#0F172A] font-bold mb-2">End-to-End Handholding</h4>
                                <p className="text-gray-500 text-xs leading-relaxed">
                                    Our scope includes everything, from initial feasibility studies (Analysis) to final VAT registration (Post-Launch).
                                </p>
                            </div>
                        </div>

                        {/* Feature 3 */}
                        <div className="flex gap-4">
                            <div className="bg-gold/10 p-2 rounded-lg h-fit">
                                <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14H11V21L20 10H13Z" />
                                </svg>
                            </div>
                            <div>
                                <h4 className="text-[#0F172A] font-bold mb-2">Guaranteed Speed</h4>
                                <p className="text-gray-500 text-xs leading-relaxed">
                                    Our process leverages officially licensed channels for rapid setup, committing to a 48-hour launch for prepared executive teams.
                                </p>
                            </div>
                        </div>

                        {/* Feature 4 */}
                        <div className="flex gap-4">
                            <div className="bg-gold/10 p-2 rounded-lg h-fit">
                                <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9-3-9m-9 9a9 9 0 019-9" />
                                </svg>
                            </div>
                            <div>
                                <h4 className="text-[#0F172A] font-bold mb-2">Global Scalability</h4>
                                <p className="text-gray-500 text-xs leading-relaxed">
                                    The strategy is designed not just for UAE entry, but for seamless scalability to global markets like KSA, UK, and Singapore.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Scope CTA Section */}
            <section className="py-24 px-6 bg-white text-center border-t border-gray-100">
                <div className="max-w-4xl mx-auto flex flex-col items-center">
                    <h2 className="text-3xl font-bold text-[#0F172A] mb-6">
                        Ready to Define Your Expansion <span className="text-[#0F172A] font-black">**Scope**</span>?
                    </h2>
                    <p className="text-gray-500 text-sm mb-10 max-w-2xl leading-relaxed font-medium">
                        Book a complimentary 15-minute consultation to map your requirements against our three core service pillars.
                    </p>
                    <button className="bg-gold text-[#0F172A] px-10 py-3 rounded-md font-bold text-xs hover:bg-gold-hover transition-all uppercase shadow-lg shadow-gold/20">
                        Book My Consultation
                    </button>
                </div>
            </section>
        </div>
    );
};

export default Scope;
