import React, { useState } from 'react';

const Header = ({ onNavigate, currentPage }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [currentTheme, setCurrentTheme] = useState('gold');

    const themes = [
        { name: 'gold', color: '#D4AF37', label: 'Luxe Gold' },
        { name: 'midnight', color: '#1E40AF', label: 'Midnight Blue' },
        { name: 'emerald', color: '#059669', label: 'Emerald' },
        { name: 'ruby', color: '#DC2626', label: 'Ruby Red' },
    ];

    const navItems = [
        {
            label: 'Scope',
            page: 'scope',
            items: [
                { label: 'Essence', page: 'essence' },
                { label: 'Crew', page: 'crew' },
                { label: 'Blueprint', page: 'blueprint' },
                { label: 'Footprint', page: 'footprint' },
            ]
        },
        {
            label: 'Synergy',
            page: 'synergy',
            items: [
                { label: 'Alliescape', page: 'alliescape' },
                { label: 'Impact Tales', page: 'impact tales' },
                { label: 'CoCreate', page: 'cocreate' },
                { label: 'Echoes', page: 'echoes' },
            ]
        },
        {
            label: 'Momentum',
            page: 'momentum',
            items: [
                { label: 'Chronos', page: 'chronos' },
                { label: 'Spotlight', page: 'spotlight' },
                { label: 'Wavelength', page: 'wavelength' },
                { label: 'PulseStream', page: 'pulsestream' },
            ]
        },
    ];

    const handleThemeChange = (themeName) => {
        setCurrentTheme(themeName);
        document.documentElement.setAttribute('data-theme', themeName);
    };

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <header className="bg-[#0F172A] text-white sticky top-0 z-50 shadow-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo Area */}
                    <div className="flex items-center gap-6">
                        {/* ExpandME Logo */}
                        <div
                            className="flex items-center gap-2 cursor-pointer group"
                            onClick={() => onNavigate('home')}
                        >
                            <div className="w-8 h-8 bg-gold rounded-full flex items-center justify-center">
                                <span className="text-[#0F172A] font-black text-sm">E</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-gold font-bold text-lg tracking-tight group-hover:text-gold-hover transition-colors">
                                    ExpandME
                                </span>
                                <span className="text-[8px] text-gray-400 uppercase tracking-widest -mt-1">
                                    SCOTLAND TO MIDDLE EAST
                                </span>
                            </div>
                        </div>

                        {/* ORIGIN Button (Separate from Logo) */}
                        <button
                            onClick={() => onNavigate('home')}
                            className={`hidden lg:block bg-gold text-[#0F172A] px-4 py-1.5 rounded-md font-bold text-xs uppercase tracking-wider hover:bg-gold-hover transition-all
                                ${currentPage === 'home' ? 'ring-2 ring-white ring-offset-1 ring-offset-[#0F172A]' : ''}`}
                        >
                            ORIGIN
                        </button>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center gap-1">
                        {navItems.map((item, index) => (
                            <div key={index} className="relative group">
                                <button
                                    onClick={() => onNavigate(item.page)}
                                    className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-md transition-all flex items-center gap-1
                                    ${currentPage === item.page ? 'text-gold bg-white/5' : 'text-gray-300 hover:text-white hover:bg-white/10'}`}
                                >
                                    {item.label}
                                    <svg className="w-3 h-3 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>

                                {/* Dropdown */}
                                <div className="absolute top-full left-0 mt-1 w-48 bg-[#1E293B] rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-white/10">
                                    <div className="py-2">
                                        {item.items.map((subItem, subIndex) => (
                                            <button
                                                key={subIndex}
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    onNavigate(subItem.page);
                                                }}
                                                className={`w-full text-left px-4 py-2 text-xs font-medium transition-colors
                                                    ${currentPage === subItem.page ? 'text-gold bg-white/5' : 'text-gray-300 hover:text-white hover:bg-white/5'}`}
                                            >
                                                {subItem.label}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </nav>

                    {/* Right Side: Theme Switcher + CTA */}
                    <div className="hidden lg:flex items-center gap-4">
                        {/* Theme Switcher */}
                        <div className="flex items-center gap-2 px-3 py-1.5 bg-white/5 rounded-full border border-white/10">
                            {themes.map((theme) => (
                                <button
                                    key={theme.name}
                                    onClick={() => handleThemeChange(theme.name)}
                                    className={`w-5 h-5 rounded-full transition-all hover:scale-110 ${currentTheme === theme.name ? 'ring-2 ring-white ring-offset-1 ring-offset-[#0F172A]' : ''
                                        }`}
                                    style={{ backgroundColor: theme.color }}
                                    title={theme.label}
                                />
                            ))}
                        </div>

                        {/* CTA Button */}
                        <button
                            onClick={() => onNavigate('expansion request')}
                            className="bg-transparent border-2 border-gold text-gold px-5 py-2 rounded-md font-bold text-xs uppercase tracking-wider hover:bg-gold hover:text-[#0F172A] transition-all"
                        >
                            Expansion Request
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={toggleMenu}
                        className="lg:hidden p-2 text-white hover:bg-white/10 rounded-md transition-colors"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {isMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="lg:hidden bg-[#1E293B] border-t border-white/10">
                    <div className="px-4 py-4 space-y-4">
                        {/* Mobile ORIGIN */}
                        <button
                            onClick={() => {
                                onNavigate('home');
                                setIsMenuOpen(false);
                            }}
                            className="w-full bg-gold text-[#0F172A] py-3 rounded-md font-bold text-xs uppercase tracking-wider hover:bg-gold-hover transition-all"
                        >
                            ORIGIN
                        </button>

                        {/* Mobile Theme Switcher */}
                        <div className="flex items-center gap-3 pb-4 border-b border-white/10">
                            <span className="text-gray-400 text-xs uppercase tracking-wider">Theme:</span>
                            <div className="flex gap-2">
                                {themes.map((theme) => (
                                    <button
                                        key={theme.name}
                                        onClick={() => handleThemeChange(theme.name)}
                                        className={`w-6 h-6 rounded-full transition-all ${currentTheme === theme.name ? 'ring-2 ring-white' : ''
                                            }`}
                                        style={{ backgroundColor: theme.color }}
                                        title={theme.label}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Mobile Nav Items */}
                        {navItems.map((item, index) => (
                            <div key={index} className="space-y-2">
                                <button
                                    onClick={() => {
                                        onNavigate(item.page);
                                        setIsMenuOpen(false);
                                    }}
                                    className="text-gold text-xs font-bold uppercase tracking-wider w-full text-left"
                                >
                                    {item.label}
                                </button>
                                <div className="space-y-1 pl-4 border-l border-white/10">
                                    {item.items.map((subItem, subIndex) => (
                                        <button
                                            key={subIndex}
                                            onClick={() => {
                                                onNavigate(subItem.page);
                                                setIsMenuOpen(false);
                                            }}
                                            className={`block w-full text-left py-2 text-sm transition-colors
                                                ${currentPage === subItem.page ? 'text-gold' : 'text-gray-300 hover:text-white'}`}
                                        >
                                            {subItem.label}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        ))}

                        {/* Mobile CTA */}
                        <button
                            onClick={() => {
                                onNavigate('expansion request');
                                setIsMenuOpen(false);
                            }}
                            className="w-full bg-transparent border border-gold text-gold py-3 rounded-md font-bold text-xs uppercase tracking-wider hover:bg-gold hover:text-[#0F172A] transition-all"
                        >
                            Expansion Request
                        </button>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
