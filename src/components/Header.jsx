import React from 'react';

const Header = ({ onNavigate, currentPage }) => {
    const navItems = [
        {
            name: 'Scope',
            id: 'scope',
            subs: ['Essence', 'Crew', 'Blueprint', 'Footprint']
        },
        {
            name: 'Synergy',
            id: 'synergy',
            subs: ['Alliescape', 'Impact Tales', 'CoCreate', 'Echoes']
        },
        {
            name: 'Momentum',
            id: 'momentum',
            subs: ['Chronos', 'Spotlight', 'Wavelength', 'PulseStream']
        }
    ];

    const isSubActive = (id, subs) => {
        return currentPage === id || subs.some(sub => sub.toLowerCase() === currentPage);
    };

    return (
        <header className="bg-[#0F172A] py-3 px-4 md:px-10 flex items-center justify-between sticky top-0 z-50 border-b border-gray-800">
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => onNavigate('home')}>
                {/* Logo Section */}
                <div className="flex items-center gap-1">
                    <div className="relative w-8 h-8 flex items-center justify-center">
                        <div className="absolute inset-0 bg-gold rotate-45 rounded-sm"></div>
                        <svg className="relative w-5 h-5 text-[#0F172A] -rotate-12" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M7 11h2v10H7zm4-6h2v16h-2zm4 9h2v7h-2zm4-12h2v19h-2z" />
                        </svg>
                    </div>
                    <div className="flex flex-col leading-none">
                        <span className="text-white text-xl font-bold tracking-tight">Expand<span className="text-gold">ME</span></span>
                        <span className="text-[8px] text-gray-400 uppercase tracking-widest">Softland to Middle East</span>
                    </div>
                </div>
            </div>

            <nav className="hidden lg:flex items-center gap-6">
                <button
                    className={`px-4 py-1.5 rounded-md font-bold text-xs uppercase transition-all ${currentPage === 'home' ? 'bg-gold text-primary' : 'text-gray-400 hover:text-white'}`}
                    onClick={() => onNavigate('home')}
                >
                    Origin
                </button>

                {navItems.map((item) => (
                    <div key={item.id} className="relative group flex items-center h-full">
                        <div
                            onClick={() => onNavigate(item.id)}
                            className={`flex items-center gap-1 cursor-pointer transition-all text-sm font-bold px-4 py-2 rounded-lg ${isSubActive(item.id, item.subs) ? 'bg-orange-500 text-white' : 'text-white hover:bg-orange-500/10'}`}
                        >
                            <span>{item.name}</span>
                            <svg className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                            </svg>
                        </div>

                        {/* Dropdown Menu */}
                        <div className="absolute top-[calc(100%+5px)] left-0 w-48 bg-white border border-gray-100 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 py-2 transform group-hover:translate-y-0 translate-y-2">
                            {item.subs.map((subItem) => (
                                <div
                                    key={subItem}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        onNavigate(subItem.toLowerCase());
                                    }}
                                    className="px-6 py-3 text-[13px] font-bold text-gray-600 hover:text-orange-500 hover:bg-orange-50 cursor-pointer transition-all"
                                >
                                    {subItem}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </nav>

            <div>
                <button
                    onClick={() => onNavigate('expansion request')}
                    className="bg-gold text-primary px-5 py-2 rounded-md font-bold text-xs uppercase hover:bg-gold-hover transition-colors"
                >
                    Expansion Request
                </button>
            </div>

            {/* Mobile Toggle */}
            <div className="lg:hidden text-white">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
            </div>
        </header>
    );
};

export default Header;
