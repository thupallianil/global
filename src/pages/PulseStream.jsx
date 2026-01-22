import React from "react";

const kpis = [
    {
        value: "99.8%",
        title: "Global Compliance Rate",
        desc: "Across all supported jurisdictions and expansions."
    },
    {
        value: "5.1 Days",
        title: "Average Setup Speed",
        desc: "From documentation to operational readiness."
    },
    {
        value: "100%",
        title: "Zero-Tax Structuring",
        desc: "For qualifying international expansion models."
    },
    {
        value: "15+",
        title: "Active Expansion Projects",
        desc: "Currently in execution across multiple regions."
    }
];

const activities = [
    "UAE Free Zone company incorporation completed for FinTech client in ADGM.",
    "Bank account successfully activated for Indian Pharma firm in Dubai.",
    "VAT registration completed for E-commerce brand in RAKEZ.",
    "Cross-border fund structure launched for renewable energy startup.",
    "Logistics entity onboarded under Dubai South Free Zone."
];

const PulseStream = () => {
    return (
        <div className="bg-white text-[#0F172A] min-h-screen">

            {/* Hero Section */}
            <section className="px-4 pt-4">
                <div className="bg-primary py-20 text-center text-white rounded-3xl border border-[#1E293B]">
                    <div className="max-w-4xl mx-auto px-6">
                        <div className="text-3xl mb-4">⚡</div>
                        <h1 className="text-4xl font-bold mb-4 uppercase tracking-tight">
                            <span className="text-gold">PulseStream</span> | Operational Metrics
                        </h1>
                        <p className="text-gray-200">
                            Transparency in motion. See the real-time operational metrics and
                            activity that drive our zero-risk, high-speed expansion process.
                        </p>
                    </div>
                </div>
            </section>

            {/* KPI Section */}
            <section className="py-20">
                <h2 className="text-center text-2xl font-semibold mb-12 uppercase tracking-wide">
                    Key Performance <span className="text-gold">Indicators</span> (KPIs)
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto px-6">
                    {kpis.map((kpi, index) => (
                        <div
                            key={index}
                            className="border border-gray-100 rounded-xl p-6 text-center shadow-sm hover:shadow-md transition bg-gray-50"
                        >
                            <h3 className="text-3xl font-bold text-gold mb-2">
                                {kpi.value}
                            </h3>
                            <p className="font-bold text-[#0F172A] mb-1">{kpi.title}</p>
                            <p className="text-sm text-gray-500">{kpi.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Activity + Global Reach */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-12">

                    {/* Activity Feed */}
                    <div className="lg:col-span-2">
                        <h3 className="text-xl font-bold mb-6 uppercase tracking-wide">
                            Recent <span className="text-gold">Activity Feed</span>
                        </h3>

                        <div className="space-y-4">
                            {activities.map((item, index) => (
                                <div
                                    key={index}
                                    className="border border-gray-100 rounded-lg p-4 bg-white text-sm text-gray-500 flex items-start gap-3 shadow-sm"
                                >
                                    <span className="text-gold mt-1">✔</span>
                                    {item}
                                </div>
                            ))}
                        </div>

                        <button className="mt-6 text-sm text-gold font-black uppercase tracking-widest hover:text-gold-hover transition-colors">
                            View Full Activity →
                        </button>
                    </div>

                    {/* Global Reach */}
                    <div>
                        <h3 className="text-xl font-bold mb-6 uppercase tracking-wide">
                            Our <span className="text-gold">Global Reach</span>
                        </h3>

                        <div className="border border-gray-100 rounded-xl p-6 bg-white shadow-sm text-center">
                            <div className="text-3xl mb-4">🌍</div>
                            <p className="text-sm text-gray-500 leading-relaxed">
                                Operational presence across key global expansion hubs including
                                UAE, UK, EU, and Southeast Asia — enabling founders to scale
                                with confidence and compliance.
                            </p>
                        </div>
                    </div>

                </div>
            </section>

            {/* Bottom CTA */}
            <section className="bg-primary py-20 text-center text-white">
                <h2 className="text-2xl font-bold mb-4 uppercase tracking-tight">
                    Make Your Business the <span className="text-gold">Next Data Point</span>
                </h2>
                <p className="text-gray-200 mb-6 max-w-xl mx-auto leading-relaxed">
                    Ready to enter the PulseStream? Let’s map your expansion journey with
                    speed, transparency, and compliance.
                </p>
                <button className="bg-gold hover:bg-gold-hover px-8 py-3 rounded-lg font-bold text-primary transition-all transform hover:scale-105 shadow-xl shadow-gold/10 uppercase text-sm">
                    Start My Expansion
                </button>
            </section>

        </div>
    );
};

export default PulseStream;
