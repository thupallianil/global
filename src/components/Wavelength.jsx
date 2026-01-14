import React from "react";

const insights = [
  {
    tag: "COMPLIANCE",
    title: "Understanding the UAE’s Corporate Tax Landscape (0% vs 9%)",
    desc: "A deep dive into how businesses remain compliant and tax-efficient under UAE regulations.",
    date: "Oct 02, 2024"
  },
  {
    tag: "STRATEGY",
    title: "The Strategic Advantage of RAKEZ for Indian E-commerce",
    desc: "Why RAKEZ is becoming the preferred gateway for cross-border expansion.",
    date: "Sep 25, 2024"
  },
  {
    tag: "PROCESS",
    title: "48-Hour Setup: Fact vs Fiction in Dubai Company Formation",
    desc: "Breaking down what’s realistically possible in fast-track business setups.",
    date: "Sep 18, 2024"
  },
  {
    tag: "RISK",
    title: "Mitigating Risk: The Importance of a Vetted Alliescape",
    desc: "Our guide to choosing banking, legal, and governance partners wisely.",
    date: "Sep 10, 2024"
  }
];

const Wavelength = () => {
  return (
    <div className="bg-white text-[#0F172A]">

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#0B1E33] to-[#122C47] py-20 text-center text-white rounded-b-xl">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-3xl mb-4">〰️</div>
          <h1 className="text-4xl font-bold mb-4">
            On the <span className="text-orange-400">Wavelength</span>
          </h1>
          <p className="text-gray-300 mb-6">
            Zero-risk expansion starts with expert knowledge. Stay current with our
            thought leadership on global compliance, strategy, and market trends.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <button className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-lg font-semibold text-white transition">
              Subscribe to Newsletter
            </button>
            <button className="bg-white text-[#0F172A] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
              View Press Mentions
            </button>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-4 gap-12">

          {/* Insights */}
          <div className="lg:col-span-3">
            <h2 className="text-2xl font-semibold mb-8">
              Latest <span className="text-orange-500">Insights</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {insights.map((item, index) => (
                <div
                  key={index}
                  className="border rounded-xl p-6 shadow-sm hover:shadow-md transition bg-white"
                >
                  <span className="text-xs text-orange-500 font-semibold">
                    {item.tag}
                  </span>
                  <h3 className="font-semibold mt-2 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600 mb-4">{item.desc}</p>
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>{item.date}</span>
                    <button className="text-orange-500 font-medium">
                      Read Article →
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-10">
              <button className="border border-orange-500 text-orange-500 px-6 py-2 rounded-lg hover:bg-orange-50 transition">
                Load More Articles
              </button>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">

            {/* Search */}
            <div className="border rounded-xl p-4">
              <h4 className="font-semibold mb-2">Search Insights</h4>
              <input
                type="text"
                placeholder="Search topics..."
                className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none"
              />
            </div>

            {/* Categories */}
            <div className="border rounded-xl p-4">
              <h4 className="font-semibold mb-2">Top Categories</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>✔ Compliance</li>
                <li>✔ Market Entry</li>
                <li>✔ Strategy</li>
                <li>✔ Case Studies</li>
              </ul>
            </div>

            {/* CTA */}
            <div className="bg-orange-500 text-white rounded-xl p-6 text-center">
              <div className="text-2xl mb-2">⚡</div>
              <h4 className="font-semibold mb-2">
                Need Direct Advice?
              </h4>
              <p className="text-sm mb-4">
                Get personalized insights tailored to your expansion goals.
              </p>
              <button className="bg-white text-orange-500 px-4 py-2 rounded-lg font-semibold">
                Get a Consultation
              </button>
            </div>

          </aside>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-gray-50 text-center">
        <h2 className="text-2xl font-semibold mb-4">
          Never Miss an Update
        </h2>
        <p className="text-gray-600 mb-6">
          Get the latest zero-risk insights and compliance news delivered straight to your inbox.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <input
            type="email"
            placeholder="Enter your email address"
            className="border rounded-lg px-4 py-3 w-64 focus:outline-none"
          />
          <button className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-lg text-white font-semibold transition">
            Subscribe
          </button>
        </div>
      </section>

    </div>
  );
};

export default Wavelength;
