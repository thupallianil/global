import React from "react";

const Spotlight = () => {
    return (
        <div className="bg-bg-base text-text-main transition-colors duration-500 min-h-screen">

            {/* Hero Section */}
            <section className="bg-primary py-20 text-center text-white transition-colors duration-500">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="text-3xl mb-4 text-accent">⚡</div>
                    <h1 className="text-4xl font-bold mb-4 uppercase tracking-tight">
                        In the <span className="text-accent underline decoration-accent/30 underline-offset-8">Spotlight</span>
                    </h1>
                    <p className="text-gray-200 mb-6 font-medium leading-relaxed">
                        See why leading media and industry experts recognize ExpandMe as the
                        definitive partner for zero-risk global expansion.
                    </p>
                    <button className="bg-accent hover:bg-accent-hover px-8 py-3 rounded-lg font-bold text-primary transition-all shadow-lg shadow-accent/10 uppercase text-sm">
                        Request a Media Kit
                    </button>
                </div>
            </section>

            {/* Featured In */}
            <section className="py-16 bg-bg-base transition-colors duration-500">
                <h3 className="text-center text-[10px] font-black text-text-muted/75 mb-8 tracking-[0.2em] uppercase">
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
                            className="px-6 py-2 border border-black/5 rounded-md text-[10px] font-black uppercase tracking-widest text-text-muted bg-bg-alt shadow-sm hover:border-accent/20 transition-all cursor-default"
                        >
                            {brand}
                        </span>
                    ))}
                </div>
            </section>

            {/* Articles Section */}
            <section className="py-20 bg-bg-alt transition-colors duration-500 border-y border-black/5">
                <h2 className="text-center text-2xl font-bold mb-12 uppercase tracking-wide">
                    <span className="text-accent underline decoration-accent/30 underline-offset-4">Featured Articles</span> & Press Releases
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">

                    {/* Card 1 */}
                    <div className="bg-bg-base border border-black/5 rounded-xl shadow-sm p-8 hover:shadow-xl transition-all group hover:-translate-y-1">
                        <p className="text-[10px] text-accent font-black mb-3 tracking-widest uppercase opacity-75">
                            THE ECONOMIC TIMES
                        </p>
                        <h3 className="font-bold mb-6 text-text-main text-lg leading-tight uppercase tracking-tighter">
                            How ExpandMe Is Decoupling Indian Startups from Domestic Red Tape
                        </h3>
                        <button className="text-[10px] text-accent font-black uppercase tracking-widest flex items-center gap-2 hover:gap-4 transition-all">
                            Read Full Article <span>→</span>
                        </button>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-bg-base border border-black/5 rounded-xl shadow-sm p-8 hover:shadow-xl transition-all group hover:-translate-y-1">
                        <p className="text-[10px] text-accent font-black mb-3 tracking-widest uppercase opacity-75">
                            GULF BUSINESS REVIEW
                        </p>
                        <h3 className="font-bold mb-6 text-text-main text-lg leading-tight uppercase tracking-tighter">
                            The 48-Hour UAE Setup: A Game-Changer for SME Expansion
                        </h3>
                        <button className="text-[10px] text-accent font-black uppercase tracking-widest flex items-center gap-2 hover:gap-4 transition-all">
                            Read Full Article <span>→</span>
                        </button>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-bg-base border border-black/5 rounded-xl shadow-sm p-8 hover:shadow-xl transition-all group hover:-translate-y-1">
                        <p className="text-[10px] text-accent font-black mb-3 tracking-widest uppercase opacity-75">
                            STARTUP INDIA MAGAZINE
                        </p>
                        <h3 className="font-bold mb-6 text-text-main text-lg leading-tight uppercase tracking-tighter">
                            Winning the Global Race: ExpandMe’s Blueprint for Compliance Success
                        </h3>
                        <button className="text-[10px] text-accent font-black uppercase tracking-widest flex items-center gap-2 hover:gap-4 transition-all">
                            Read Full Article <span>→</span>
                        </button>
                    </div>

                </div>
            </section>

            {/* Media CTA */}
            <section className="py-20 text-center bg-bg-base transition-colors duration-500">
                <h2 className="text-3xl font-bold mb-6 uppercase tracking-tight text-text-main">
                    Media Inquiries & Partnership Opportunities
                </h2>
                <p className="text-text-muted mb-8 max-w-xl mx-auto font-medium leading-relaxed">
                    Our team is available for expert commentary on UAE Free Zones, India
                    global expansion trends, and tax-efficient structures.
                </p>
                <button className="bg-accent hover:bg-accent-hover px-10 py-4 rounded-lg text-primary font-black transition-all shadow-lg shadow-accent/20 uppercase text-xs tracking-widest">
                    Contact Our Team
                </button>
            </section>
        </div>
    );
};

export default Spotlight;
