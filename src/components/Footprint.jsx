import React from 'react';

const Footprint = () => {
    return (
        <div className="animate-fadeIn">
            {/* Footprint Hero */}
            <section className="bg-[#0F172A] py-20 px-6 text-center text-white">
                <div className="max-w-4xl mx-auto">
                    <svg className="w-10 h-10 text-gold mx-auto mb-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" /></svg>
                    <h1 className="text-4xl font-bold mb-4">ExpandME Global <span className="text-gold">Footprint</span></h1>
                    <p className="text-gray-300 text-sm leading-relaxed max-w-2xl mx-auto font-medium">
                        We believe that growth has no boundaries. Our mission is to help Indian startups and businesses seamlessly expand into the UAE and the Middle East.
                    </p>
                </div>
            </section>

            {/* Content Sections */}
            <section className="py-24 px-6 bg-white">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-2xl font-bold text-[#0F172A] mb-10 border-b border-gray-100 pb-4">Why Indian Startups Are Expanding to the <span className="text-gold">UAE</span></h2>
                    <div className="space-y-4 mb-20">
                        <div className="flex items-center gap-3">
                            <svg className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                            <span className="text-gray-600 text-sm font-medium">Strategic location connecting Asia, Africa, and Europe.</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <svg className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                            <span className="text-gray-600 text-sm font-medium">World-class infrastructure and funding opportunities.</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <svg className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                            <span className="text-gray-600 text-sm font-medium">Business-friendly ecosystem with minimized red tape.</span>
                        </div>
                    </div>

                    <h2 className="text-2xl font-bold text-[#0F172A] mb-10 border-b border-gray-100 pb-4">How to Set Up Your Business in the UAE - A Simple <span className="text-gold">Guide</span></h2>
                    <div className="space-y-4 mb-20 text-gray-500 text-sm leading-relaxed">
                        <p>1. Select your business activity — From Fintech to E-commerce, healthcare, or creative industries.</p>
                        <p>2. Choose the right setup — Mainland or Free Zone, based on your goals.</p>
                        <p>3. Documentation & Approval — we handle the paperwork and compliance.</p>
                        <p>4. Corporate banking support — ensuring your business has global financial access.</p>
                        <p>5. Launch operations — start with 100% ownership in record time.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
                        <div>
                            <h2 className="text-xl font-bold text-gold mb-8">Success Stories: Businesses Growing with <span className="text-[#0F172A]">ExpandME</span></h2>
                            <div className="space-y-4 text-xs text-gray-500 leading-relaxed italic">
                                <p>"A Hyderabad tech startup tripled its client base in Dubai's digital ecosystem within a year."</p>
                                <p>"A Health-tech company scaled into Sharjah, tapping into GCC healthcare demand."</p>
                                <p>"An E-commerce business leveraged Ras Al Khaimah's logistics hub to deliver across GCC & Africa."</p>
                            </div>
                        </div>
                        <div>
                            <h2 className="text-xl font-bold text-gold mb-8">Top Business Sectors Thriving in the UAE <span className="text-[#0F172A]">(2025)</span></h2>
                            <div className="space-y-3">
                                {['Fintech & Digital Payments', 'E-commerce', 'Healthcare & Wellness', 'Technology & AI Startups', 'Creative Industries'].map((item, i) => (
                                    <div key={i} className="flex items-center gap-2 text-gray-600 text-[10px] font-bold uppercase">
                                        <div className="w-1.5 h-1.5 bg-gold rotate-45"></div>
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stay Connected */}
            <section className="py-20 px-6 bg-gray-50 text-center">
                <h2 className="text-2xl font-bold text-[#0F172A] mb-4">Stay Connected with ExpandME</h2>
                <p className="text-gray-500 text-xs mb-10 max-w-xl mx-auto leading-relaxed">
                    Business expansion isn't just about setting up a company—it's about building a future without limits. At ExpandME, we're here to guide, support, and celebrate your growth.
                </p>
                <button className="bg-gold text-[#0F172A] px-10 py-3 rounded-md font-bold text-[10px] uppercase hover:bg-gold-hover transition-all">
                    Join Our Newsletter
                </button>
            </section>
        </div>
    );
};

export default Footprint;
