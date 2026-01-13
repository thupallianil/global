import React from 'react';

const Blueprint = () => {
    return (
        <div className="animate-fadeIn">
            <section className="bg-[#0F172A] py-24 px-6 text-center text-white">
                <div className="max-w-4xl mx-auto flex flex-col items-center">
                    <div className="mb-6">
                        <svg className="w-10 h-10 text-gold" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M13 10V3L4 14H11V21L20 10H13Z" />
                        </svg>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
                        The ExpandME <span className="text-gold">Blueprint</span>
                    </h1>
                    <p className="text-gray-400 text-lg mb-10 max-w-3xl leading-relaxed">
                        Our systematic approach is built on three pillars: <span className="text-white font-bold">Vision</span>, <span className="text-white font-bold">Strategy</span>, and <span className="text-white font-bold">Execution</span>.
                    </p>
                </div>
            </section>

            <section className="py-24 px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <PillarCard
                            title="I. Vision: The Expansion Essence"
                            desc="Define your global why. We validate your market fit, regulatory alignment, and long-term vision."
                            icon="eye" color="blue"
                        />
                        <PillarCard
                            title="II. Strategy: The Expansion Blueprint"
                            desc="Develop the how. Step-by-step roadmap covering jurisdiction, legal, and financial modeling."
                            icon="map" color="red"
                        />
                        <PillarCard
                            title="III. Execution: The Footprint"
                            desc="Deploy the what. Immediate implementation of setup, banking, visas, and VAT registration."
                            icon="check" color="green"
                        />
                    </div>
                </div>
            </section>
        </div>
    );
};

const PillarCard = ({ title, desc, icon, color }) => (
    <div className="bg-white border border-gray-100 rounded-2xl p-10 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group translate-y-0 hover:-translate-y-2">
        <div className={`mb-8 w-14 h-14 bg-${color}-50/50 rounded-xl flex items-center justify-center text-${color}-500 group-hover:bg-${color}-500 group-hover:text-white transition-all`}>
            {icon === 'eye' && <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>}
            {icon === 'map' && <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A2 2 0 013 15.488V5.012a2 2 0 011.553-1.954L9 1l5.447 2.724A2 2 0 0116 5.676v10.312a2 2 0 01-1.553 1.954L9 20z" /></svg>}
            {icon === 'check' && <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>}
        </div>
        <h3 className="text-[#0F172A] text-xl font-bold mb-4">{title}</h3>
        <p className="text-gray-500 text-sm mb-8 leading-relaxed">{desc}</p>
        <a href="#" className="mt-auto text-gold text-xs font-black uppercase tracking-widest hover:text-gold-hover flex items-center gap-2">Explore Step <span>→</span></a>
    </div>
);

export default Blueprint;
