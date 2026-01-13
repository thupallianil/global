import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-primary text-white pt-20 pb-10 px-6 md:px-12 border-t border-gray-800">
            <div className="max-w-7xl mx-auto">
                {/* Main Headline */}
                <h2 className="text-2xl md:text-4xl font-bold text-center mb-16 uppercase tracking-wider">
                    TO SELL TO THE WORLD START <span className="text-gold">YOUR BUSINESS IN UAE</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    {/* Brand Info */}
                    <div className="col-span-1">
                        <h3 className="text-gold text-2xl font-bold mb-6">Expand<span className="text-white">ME</span></h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Your trusted partner for global business expansion from India to UAE and beyond.
                        </p>
                    </div>

                    {/* Quick Links 1 */}
                    <div className="col-span-1">
                        <h4 className="text-xl font-bold mb-6">Quick Links</h4>
                        <ul className="space-y-4 text-gray-400 text-sm">
                            <li><a href="#" className="hover:text-gold transition-colors">Work</a></li>
                            <li><a href="#" className="hover:text-gold transition-colors">Gallery</a></li>
                            <li><a href="#" className="hover:text-gold transition-colors">FAQ's</a></li>
                        </ul>
                    </div>

                    {/* Links 2 */}
                    <div className="col-span-1 mt-0 md:mt-12">
                        <ul className="space-y-4 text-gray-400 text-sm">
                            <li><a href="#" className="hover:text-gold transition-colors">Case Studies</a></li>
                            <li><a href="#" className="hover:text-gold transition-colors">Company</a></li>
                            <li><a href="#" className="hover:text-gold transition-colors">Contact Us</a></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="col-span-1">
                        <h4 className="text-xl font-bold mb-6">Contact</h4>
                        <div className="space-y-4 text-gray-400 text-sm">
                            <a href="mailto:maddukuriyamini@gmail.com" className="flex items-center gap-3 hover:text-gold transition-colors">
                                <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                maddukuriyamini@gmail.com
                            </a>
                            <a href="#" className="flex items-center gap-3 hover:text-gold transition-colors">
                                <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                Follow us on Instagram
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-sm">
                    <p>Copyright © 2020 ExpandME softland to middle east, All Rights Reserved.</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-white">Privacy Policy</a>
                        <a href="#" className="hover:text-white">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
