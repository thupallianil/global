import React from 'react';

const Momentum = () => {
    const posts = [
        {
            date: 'March 15, 2024',
            title: 'Why Indian Startups Are Expanding to the UAE',
            desc: 'Discover the key reasons why UAE has become the preferred destination for Indian entrepreneurs looking to scale globally.',
            icon: (
                <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
            )
        },
        {
            date: 'March 10, 2024',
            title: 'How to Set Up Your Business in the UAE (Simple Guide)',
            desc: 'A step-by-step guide to establishing your business in the UAE with 100% ownership and 0% tax.',
            icon: (
                <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9-3-9m-9 9a9 9 0 019-9" />
                </svg>
            )
        },
        {
            date: 'March 5, 2024',
            title: 'Success Stories of Businesses Growing with ExpandME',
            desc: 'Real stories from entrepreneurs who transformed their businesses through global expansion.',
            icon: (
                <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
            )
        },
        {
            date: 'February 28, 2024',
            title: 'Top Business Sectors Thriving in the UAE (2025)',
            desc: 'Explore the most promising sectors for business growth in the UAE this year.',
            icon: (
                <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
            )
        },
        {
            date: 'February 20, 2024',
            title: 'ExpandME Events & Community',
            desc: 'Join our upcoming events and connect with fellow entrepreneurs on their expansion journey.',
            icon: (
                <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
            )
        }
    ];

    return (
        <div className="flex flex-col bg-white overflow-x-hidden">
            {/* Blog Hero */}
            <section className="px-4 pt-4">
                <div className="bg-[#0F172A] py-20 px-6 text-center text-white rounded-3xl border border-[#1E293B]">
                    <div className="max-w-4xl mx-auto">
                        <h1 className="text-4xl font-bold mb-4">ExpandME Blog</h1>
                        <p className="text-gray-400 text-lg">Insights, guides, and success stories to help you expand globally</p>
                    </div>
                </div>
            </section>

            {/* Blog Grid */}
            <section className="py-24 px-6 bg-white">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-center text-2xl font-bold text-[#0F172A] mb-16 border-b border-gray-100 pb-4">
                        Latest <span className="text-gold">Insights</span>
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {posts.map((post, i) => (
                            <div key={i} className="bg-white border border-gray-100 rounded-xl p-8 shadow-sm hover:shadow-md transition-all flex flex-col">
                                <div className="mb-4">{post.icon}</div>
                                <p className="text-gray-400 text-[10px] uppercase font-bold tracking-wider mb-2">{post.date}</p>
                                <h3 className="text-[#0F172A] text-lg font-bold mb-4 leading-tight">{post.title}</h3>
                                <p className="text-gray-500 text-xs leading-relaxed mb-8 flex-grow">{post.desc}</p>
                                <button className="w-full py-2.5 border border-gold text-gold text-[10px] font-bold uppercase tracking-widest rounded-md hover:bg-gold hover:text-white transition-all">
                                    Read More
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stay Updated section */}
            <section className="py-24 px-6 bg-[#FCF8F1]/30 text-center">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold text-[#0F172A] mb-4">Stay Updated</h2>
                    <p className="text-gray-500 text-sm mb-10 leading-relaxed max-w-xl mx-auto">
                        Subscribe to our newsletter and follow us on social media for **exclusive global expansion updates**.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                        <input
                            type="email"
                            placeholder="Your email address"
                            className="flex-grow bg-white border border-gray-200 px-6 py-3 rounded-md focus:outline-none focus:border-gold"
                        />
                        <button className="bg-gold text-[#0F172A] px-8 py-3 rounded-md font-bold text-xs uppercase hover:bg-gold-hover transition-all whitespace-nowrap">
                            Subscribe Now
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Momentum;
