import React from "react";

const CoCreate = () => {
    return (
        <div className="bg-white text-[#0F172A] min-h-screen">

            {/* Hero Section */}
            <section className="bg-primary py-20 text-center text-white">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="text-2xl mb-4 text-gold">⚡</div>
                    <h1 className="text-4xl font-bold mb-4 uppercase tracking-tight">
                        The Global Strategy <span className="text-gold underline decoration-gold/30 underline-offset-8">Co-creation Lab</span>
                    </h1>
                    <p className="text-gray-200 mb-6 font-medium leading-relaxed">
                        A focused, expert-led workshop that transforms your global
                        expansion idea into a clear, execution-ready strategy — in a
                        single day.
                    </p>
                    <button className="bg-gold text-primary font-bold px-8 py-3 rounded-lg hover:bg-gold-hover transition-all shadow-lg shadow-gold/10 uppercase text-sm">
                        Book Your Strategy Session
                    </button>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-20 bg-white">
                <h2 className="text-center text-2xl font-bold mb-12 uppercase tracking-wide">
                    Our Four-Step <span className="text-gold">Co-creation Process</span>
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto px-6">
                    {[
                        {
                            title: "Discovery & Ideation",
                            desc: "Clarify your vision, goals, and global expansion objectives.",
                            step: "Step 1"
                        },
                        {
                            title: "Market Validation & Selection",
                            desc: "Identify the most viable markets and legal frameworks.",
                            step: "Step 2"
                        },
                        {
                            title: "Blueprint Development",
                            desc: "Design your company structure, compliance, and operations.",
                            step: "Step 3"
                        },
                        {
                            title: "Accelerated Implementation",
                            desc: "Prepare an execution-ready roadmap with timelines.",
                            step: "Step 4"
                        }
                    ].map((item, index) => (
                        <div
                            key={index}
                            className="border border-gray-100 rounded-xl p-8 text-center shadow-sm hover:shadow-xl transition-all bg-gray-50 group hover:-translate-y-1"
                        >
                            <div className="text-gold font-black mb-4 text-[10px] uppercase tracking-widest">{item.step}</div>
                            <h3 className="font-bold mb-3 text-[#0F172A] uppercase tracking-tight">{item.title}</h3>
                            <p className="text-xs text-gray-500 leading-relaxed font-medium">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Guaranteed Outcomes */}
            <section className="py-20 bg-gray-50 border-y border-gray-100">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 px-6 items-center">

                    {/* Text */}
                    <div>
                        <h2 className="text-2xl font-bold mb-6 uppercase tracking-tight">
                            Guaranteed <span className="text-gold underline decoration-gold/30 underline-offset-4">Outcomes</span>
                        </h2>
                        <p className="text-gray-500 mb-8 font-medium leading-relaxed">
                            The Co-Creation Lab is not just a meeting — it’s a strategy
                            accelerator delivering tangible results.
                        </p>

                        <ul className="space-y-4 text-xs font-bold uppercase tracking-wide text-[#0F172A]">
                            <li className="flex items-center gap-3"><span className="text-gold">✔</span> Team alignment around one clear global roadmap</li>
                            <li className="flex items-center gap-3"><span className="text-gold">✔</span> De-risked expansion timeline</li>
                            <li className="flex items-center gap-3"><span className="text-gold">✔</span> Direct access to free zones & regulators</li>
                            <li className="flex items-center gap-3"><span className="text-gold">✔</span> Optimized structure for cost & compliance efficiency</li>
                        </ul>
                    </div>

                    {/* Visual Placeholder */}
                    <div className="bg-white border-2 border-dashed border-gold/20 rounded-xl h-64 flex items-center justify-center text-gray-400 font-black uppercase tracking-widest text-[10px] shadow-inner">
                        Strategy Visual Placeholder
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 text-center bg-white">
                <h2 className="text-3xl font-bold mb-6 uppercase tracking-tight text-[#0F172A]">
                    Ready to Build Your Winning Strategy?
                </h2>
                <p className="text-gray-500 mb-8 max-w-xl mx-auto font-medium leading-relaxed">
                    This premium service is reserved for founders serious about global growth.
                </p>
                <button className="bg-gold hover:bg-gold-hover px-10 py-4 rounded-lg text-primary font-black transition-all shadow-lg shadow-gold/20 uppercase text-xs tracking-widest">
                    Request Strategy Access
                </button>
            </section>
        </div>
    );
};

export default CoCreate;
