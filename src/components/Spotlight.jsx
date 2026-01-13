import React from "react";

const Spotlight = () => {
    return (
        <div className="bg-white text-[#0F172A] min-h-screen">

            {/* Hero Section */}
            <section className="bg-primary py-20 text-center text-white">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="text-3xl mb-4 text-gold">⚡</div>
                    <h1 className="text-4xl font-bold mb-4 uppercase tracking-tight">
                        In the <span className="text-gold underline decoration-gold/30 underline-offset-8">Spotlight</span>
                    </h1>
                    <p className="text-gray-200 mb-6 font-medium leading-relaxed">
                        See why leading media and industry experts recognize ExpandMe as the
                        definitive partner for zero-risk global expansion.
                    </p>
                    <button className="bg-gold hover:bg-gold-hover px-8 py-3 rounded-lg font-bold text-primary transition-all shadow-lg shadow-gold/10 uppercase text-sm">
                        Request a Media Kit
                    </button>
                </div>
            </section>

            {/* Featured In */}
            <section className="py-16 bg-white">
                <h3 className="text-center text-[10px] font-black text-gray-400 mb-8 tracking-[0.2em] uppercase">
                    AS FEATURED IN
                </h3>
                <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto px-6">
                    {[
                        "Forbes",
                        "Bloomberg",
                        "Economic Times",
                        "Moneycontrol",
                        "Gulf News",
                        "Times of India"
                    ].map((brand, index) => (
                        <span
                            key={index}
                            className="px-6 py-2 border border-gray-100 rounded-md text-[10px] font-black uppercase tracking-widest text-gray-500 bg-gray-50 shadow-sm hover:border-gold/20 transition-all cursor-default"
                        >
                            {brand}
                        </span>
                    ))}
                </div>
            </section>

            {/* Articles Section */}
            <section className="py-20 bg-gray-50 border-y border-gray-100">
                <h2 className="text-center text-2xl font-bold mb-12 uppercase tracking-wide">
                    <span className="text-gold underline decoration-gold/30 underline-offset-4">Featured Articles</span> & Press Releases
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">

                    {/* Card 1 */}
                    <div className="bg-white border border-gray-100 rounded-xl shadow-sm p-8 hover:shadow-xl transition-all group hover:-translate-y-1">
                        <p className="text-[10px] text-gold font-black mb-3 tracking-widest uppercase opacity-75">
                            THE ECONOMIC TIMES
                        </p>
                        <h3 className="font-bold mb-6 text-[#0F172A] text-lg leading-tight uppercase tracking-tighter">
                            How ExpandMe Is Decoupling Indian Startups from Domestic Red Tape
                        </h3>
                        <button className="text-[10px] text-gold font-black uppercase tracking-widest flex items-center gap-2 hover:gap-4 transition-all">
                            Read Full Article <span>→</span>
                        </button>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white border border-gray-100 rounded-xl shadow-sm p-8 hover:shadow-xl transition-all group hover:-translate-y-1">
                        <p className="text-[10px] text-gold font-black mb-3 tracking-widest uppercase opacity-75">
                            GULF BUSINESS REVIEW
                        </p>
                        <h3 className="font-bold mb-6 text-[#0F172A] text-lg leading-tight uppercase tracking-tighter">
                            The 48-Hour UAE Setup: A Game-Changer for SME Expansion
                        </h3>
                        <button className="text-[10px] text-gold font-black uppercase tracking-widest flex items-center gap-2 hover:gap-4 transition-all">
                            Read Full Article <span>→</span>
                        </button>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white border border-gray-100 rounded-xl shadow-sm p-8 hover:shadow-xl transition-all group hover:-translate-y-1">
                        <p className="text-[10px] text-gold font-black mb-3 tracking-widest uppercase opacity-75">
                            STARTUP INDIA MAGAZINE
                        </p>
                        <h3 className="font-bold mb-6 text-[#0F172A] text-lg leading-tight uppercase tracking-tighter">
                            Winning the Global Race: ExpandMe’s Blueprint for Compliance Success
                        </h3>
                        <button className="text-[10px] text-gold font-black uppercase tracking-widest flex items-center gap-2 hover:gap-4 transition-all">
                            Read Full Article <span>→</span>
                        </button>
                    </div>

                </div>
            </section>

            {/* Media CTA */}
            <section className="py-20 text-center bg-white border-t border-gray-100">
                <h2 className="text-3xl font-bold mb-6 uppercase tracking-tight text-[#0F172A]">
                    Media Inquiries & Partnership Opportunities
                </h2>
                <p className="text-gray-500 mb-8 max-w-xl mx-auto font-medium leading-relaxed">
                    Our team is available for expert commentary on UAE Free Zones, India
                    global expansion trends, and tax-efficient structures.
                </p>
                <button className="bg-gold hover:bg-gold-hover px-10 py-4 rounded-lg text-primary font-black transition-all shadow-lg shadow-gold/20 uppercase text-xs tracking-widest">
                    Contact Our Team
                </button>
            </section>
        </div>
    );
};

export default Spotlight;
