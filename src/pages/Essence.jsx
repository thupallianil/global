import React from 'react';

const Essence = () => {
    return (
        <div className="flex flex-col bg-white overflow-x-hidden min-h-screen">
            {/* Essence Hero */}
            <section className="px-4 pt-4">
                <div className="bg-[#0F172A] py-24 px-6 text-white overflow-hidden relative rounded-3xl border border-[#1E293B]">
                    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
                        <div className="flex-1 z-10">
                            <p className="text-gold text-xs font-black uppercase tracking-[0.2em] mb-4">Scope & Purpose</p>
                            <h1 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">
                                The <span className="text-gold">Essence</span> of ExpandME
                            </h1>
                            <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-8 max-w-xl">
                                ExpandME is your **fast-track gateway to global markets**, dedicated to turning Indian innovation into internationally recognized brands.
                            </p>
                            <p className="text-gray-400 text-xs leading-relaxed mb-10 max-w-lg">
                                We provide complete end-to-end support for global expansion—including setting up companies with **100% ownership**, enjoying **0% tax advantages**, and ensuring fast company formation within just **48 hours**. Our expert assistance covers legal, strategic, and operational areas, enabling entrepreneurs to confidently enter new markets.
                            </p>
                            <button className="bg-gold text-[#0F172A] px-8 py-3 rounded-md font-extrabold text-[10px] uppercase hover:bg-gold-hover transition-all">
                                Explore Our Blueprint
                            </button>
                        </div>
                        <div className="flex-1 relative z-10">
                            <div className="bg-white p-6 rounded-2xl shadow-2xl max-w-md mx-auto transform hover:scale-105 transition-transform duration-500">
                                <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop" alt="The Essence" className="rounded-xl object-cover aspect-square" />
                                <div className="absolute -bottom-6 -right-6 bg-gold p-4 rounded-xl shadow-xl animate-bounce">
                                    <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="absolute top-0 right-0 w-1/3 h-full bg-gold/5 blur-[120px] -z-0"></div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-24 px-6 bg-white">
                <div className="max-w-6xl mx-auto text-center mb-16">
                    <h2 className="text-2xl font-bold text-[#0F172A]">Our Foundation: Mission & <span className="text-gold">Vision</span></h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    <div className="border border-gold/20 p-10 rounded-2xl shadow-sm hover:shadow-xl transition-all group bg-[#FCF8F1]/20">
                        <div className="mb-6 w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-white transition-all">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14H11V21L20 10H13Z" /></svg>
                        </div>
                        <h3 className="text-[#0F172A] text-xl font-bold mb-4">Our Mission: The Pivotal Partner</h3>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            To be the pivotal partner for ambitious Indian startups, dismantling barriers to global markets and establishing their international presence with speed, security, and unparalleled tax efficiency.
                        </p>
                    </div>
                    <div className="border border-gold/20 p-10 rounded-2xl shadow-sm hover:shadow-xl transition-all group bg-[#FCF8F1]/20">
                        <div className="mb-6 w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-white transition-all">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                        </div>
                        <h3 className="text-[#0F172A] text-xl font-bold mb-4">Our Vision: The Global Perception Shift</h3>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            To enable the next generation of Indian entrepreneurs to build internationally recognized, multi-million-dollar brands, fundamentally shifting the global perception of Indian innovation.
                        </p>
                    </div>
                </div>
            </section>

            {/* Philosophy */}
            <section className="py-24 px-6 bg-gray-50">
                <h2 className="text-2xl font-bold text-center text-gold mb-16 uppercase tracking-widest">Philosophy</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                    {[
                        { title: 'Speed & Agility', desc: 'Guaranteed company formation in 48 hours, operating with maximum efficiency.', icon: 'M13 10V3L4 14H11V21L20 10H13Z' },
                        { title: 'Integrity & Trust', desc: 'Ensuring 100% ownership and legal compliance with absolute transparency.', icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' },
                        { title: 'Global Vision', desc: 'Our focus is strictly international, targeting global markets for every brand.', icon: 'M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9-3-9m-9 9a9 9 0 019-9' },
                        { title: 'Zero-Risk Growth', desc: 'Leveraging tax advantages and expert support for sustainable scaling.', icon: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6' }
                    ].map((item, i) => (
                        <div key={i} className="bg-[#0F172A] text-white p-8 rounded-xl flex flex-col items-center text-center shadow-lg transform hover:-translate-y-2 transition-transform">
                            <svg className="w-8 h-8 text-gold mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                            </svg>
                            <h4 className="text-base font-bold mb-4">{item.title}</h4>
                            <p className="text-gray-400 text-xs leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Essence;
