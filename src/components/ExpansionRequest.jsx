import React from 'react';

const ExpansionRequest = () => {
    return (
        <div className="flex flex-col bg-white overflow-x-hidden">
            {/* Contact Hero */}
            <section className="bg-[#0F172A] py-20 px-6 text-center text-white">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl font-bold mb-4">Contact Us — Tell Us About Your Project</h1>
                    <p className="text-gray-400 text-lg">Ready to expand globally? Let's discuss your vision</p>
                </div>
            </section>

            {/* Contact Info Grid */}
            <section className="py-24 px-6 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                        {/* Phone */}
                        <div className="bg-white border border-gray-100 rounded-xl p-10 shadow-sm hover:shadow-md transition-all text-center flex flex-col items-center">
                            <div className="mb-6">
                                <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                            </div>
                            <h3 className="text-[#0F172A] text-lg font-bold mb-2">Phone</h3>
                            <p className="text-gray-500 text-sm font-medium">+91 85190 77573</p>
                        </div>

                        {/* Email */}
                        <div className="bg-white border border-gray-100 rounded-xl p-10 shadow-sm hover:shadow-md transition-all text-center flex flex-col items-center">
                            <div className="mb-6">
                                <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <h3 className="text-[#0F172A] text-lg font-bold mb-2">Email</h3>
                            <p className="text-gray-500 text-sm font-medium">maddulurugoythami@gmail.com</p>
                        </div>

                        {/* WhatsApp */}
                        <div className="bg-white border border-gray-100 rounded-xl p-10 shadow-sm hover:shadow-md transition-all text-center flex flex-col items-center">
                            <div className="mb-6">
                                <svg className="w-8 h-8 text-gold" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.407 3.481 2.239 2.24 3.477 5.226 3.475 8.408-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884 0 2.225.569 3.891 1.745 5.861l-.999 3.65 3.743-.98zm11.387-5.464c-.307-.154-1.817-.897-2.098-.998-.281-.102-.486-.154-.689.155-.204.307-.787.997-.965 1.201-.177.205-.355.23-.663.077-.307-.154-1.3-.48-2.473-1.527-.913-.815-1.53-1.82-1.708-2.128-.179-.308-.019-.475.135-.628.139-.138.307-.359.461-.538.154-.179.204-.308.307-.513.102-.204.051-.385-.026-.538-.077-.154-.689-1.662-.942-2.277-.247-.6-.5-.516-.689-.527-.179-.008-.384-.01-.589-.01-.205 0-.538.077-.82.385-.281.307-1.074 1.051-1.074 2.564 0 1.513 1.102 2.974 1.256 3.179.154.205 2.17 3.313 5.258 4.643.734.316 1.307.505 1.754.646.737.234 1.407.201 1.937.122.593-.088 1.817-.743 2.073-1.462.256-.718.256-1.334.179-1.461-.076-.128-.282-.205-.589-.359z" />
                                </svg>
                            </div>
                            <h3 className="text-[#0F172A] text-lg font-bold mb-2">WhatsApp</h3>
                            <p className="text-gray-500 text-sm font-medium">Chat on WhatsApp</p>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="max-w-2xl mx-auto bg-white border border-gray-50 rounded-2xl p-10 shadow-lg text-center">
                        <h2 className="text-2xl font-bold text-[#0F172A] mb-8">Send Us a Message</h2>
                        <div className="space-y-6 text-left">
                            <div>
                                <label className="block text-gray-500 text-xs font-bold mb-2 uppercase tracking-wide">Name</label>
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="w-full bg-gray-50 border border-gray-100 px-6 py-3 rounded-md focus:outline-none focus:border-gold transition-all"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-500 text-xs font-bold mb-2 uppercase tracking-wide">Email</label>
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    className="w-full bg-gray-50 border border-gray-100 px-6 py-3 rounded-md focus:outline-none focus:border-gold transition-all"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-500 text-xs font-bold mb-2 uppercase tracking-wide">Message / Project Description</label>
                                <textarea
                                    rows="5"
                                    placeholder="How can we help you?"
                                    className="w-full bg-gray-50 border border-gray-100 px-6 py-3 rounded-md focus:outline-none focus:border-gold transition-all resize-none"
                                ></textarea>
                            </div>
                            <button className="w-full bg-gold text-[#0F172A] py-4 rounded-md font-bold text-xs uppercase hover:bg-gold-hover transition-all shadow-lg shadow-gold/20">
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ExpansionRequest;
