import React from 'react';

const Synergy = () => {
    const services = [
        {
            title: 'International Setup',
            desc: 'Complete company formation with 100% ownership and 0% corporate tax.',
            icon: (
                <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
            )
        },
        {
            title: 'Market Entry Strategy',
            desc: 'Tailored strategies for successful market penetration in UAE and beyond.',
            icon: (
                <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
            )
        },
        {
            title: 'Compliance & Certifications',
            desc: 'Full legal and regulatory compliance support.',
            icon: (
                <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
            )
        },
        {
            title: 'Access to Global Investors',
            desc: 'Connect with international investors and funding opportunities.',
            icon: (
                <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            )
        },
        {
            title: 'Global Brand Visibility',
            desc: 'Media exposure and brand positioning in international markets.',
            icon: (
                <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9-3-9m-9 9a9 9 0 019-9" />
                </svg>
            )
        }
    ];

    return (
        <div className="flex flex-col bg-white overflow-x-hidden">
            {/* Synergy Hero */}
            <section className="bg-[#0F172A] py-20 px-6 text-center text-white">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl font-bold mb-4">Our Services — What We Offer</h1>
                    <p className="text-gray-400 text-lg">Comprehensive solutions for your global business expansion</p>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-24 px-6 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, i) => (
                            <div key={i} className="bg-white border border-gray-100 rounded-xl p-8 shadow-sm hover:shadow-lg transition-all text-center flex flex-col items-center">
                                <div className="mb-6">{service.icon}</div>
                                <h3 className="text-[#0F172A] text-xl font-bold mb-3">{service.title}</h3>
                                <p className="text-gray-500 text-sm leading-relaxed">{service.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Section */}
            <section className="py-24 px-6 bg-gray-50">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-3xl font-bold text-[#0F172A] text-center mb-16">Why Choose ExpandME</h2>
                    <p className="text-gray-500 text-center mb-12 max-w-2xl mx-auto">ExpandME is your gateway to global success — not just setup, but **strategy**.</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                        {[
                            '100% ownership with 0% corporate tax',
                            'End-to-end documentation support',
                            'Setup completed within 48 hours',
                            'Expert guidance at every step',
                            'Access to global networks',
                            'Compliance and legal support'
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-3">
                                <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="text-gray-600 text-sm font-medium">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA section */}
            <section className="py-24 px-6 bg-white text-center">
                <h2 className="text-3xl font-bold text-[#0F172A] mb-4">From Local to Global, We Grow With You</h2>
                <p className="text-gray-500 mb-10">Ready to take your business to the next level?</p>
                <button className="bg-gold text-[#0F172A] px-10 py-3 rounded-md font-bold text-xs uppercase hover:bg-gold-hover transition-all shadow-lg shadow-gold/20">
                    Let's Start
                </button>
            </section>
        </div>
    );
};

export default Synergy;
