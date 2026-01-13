import React from 'react';

const Crew = () => {
    return (
        <div className="animate-fadeIn">
            {/* Crew Hero */}
            <section className="bg-[#0F172A] py-20 px-6 text-center text-white">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl font-bold mb-6 tracking-tight">ExpandME: Who We Are?</h1>
                    <p className="text-gray-300 text-sm leading-relaxed max-w-2xl mx-auto font-medium">
                        ExpandME helps Indian startups expand globally through company setup, 0% Tax, 100% ownership, and setup within 48 hours. We provide full support — legal, operational, and strategic.
                    </p>
                </div>
            </section>

            {/* Meet the Crew */}
            <section className="py-24 px-6 bg-white">
                <div className="max-w-6xl mx-auto text-center mb-20">
                    <h2 className="text-2xl font-bold text-[#0F172A]">Meet Our Expert <span className="text-gold">Crew</span></h2>
                </div>

                {/* National Core Team */}
                <div className="max-w-5xl mx-auto mb-20">
                    <div className="flex items-center gap-2 mb-10 border-b border-gray-100 pb-2">
                        <div className="w-2 h-2 bg-gold rounded-full"></div>
                        <h3 className="text-gold text-[10px] font-black uppercase tracking-widest">National Core Team</h3>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                        {[
                            { name: 'Gowthami Madduluru', role: 'Founder, T-Consult', avatar: 'https://i.pravatar.cc/150?u=gowthami' },
                            { name: 'Bhagya', role: 'Director', avatar: 'https://i.pravatar.cc/150?u=bhagya' },
                            { name: 'Yamini', role: 'Personal Secretary', avatar: 'https://i.pravatar.cc/150?u=yamini' }
                        ].map((member, i) => (
                            <div key={i} className="bg-white border border-gray-100 rounded-xl p-8 text-center shadow-sm hover:shadow-md transition-shadow">
                                <img src={member.avatar} className="w-20 h-20 rounded-full mx-auto mb-6 border-2 border-gold/20" alt={member.name} />
                                <h4 className="text-[#0F172A] font-bold text-base mb-1">{member.name}</h4>
                                <p className="text-gray-400 text-[10px] font-bold uppercase">{member.role}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* International Expansion Team */}
                <div className="max-w-5xl mx-auto mb-24">
                    <div className="flex items-center gap-2 mb-10 border-b border-gray-100 pb-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <h3 className="text-blue-500 text-[10px] font-black uppercase tracking-widest">International Expansion Team</h3>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                        {[
                            { name: 'Nathan', role: 'Country Manager - UAE', avatar: 'https://i.pravatar.cc/150?u=nathan' },
                            { name: 'Priya Sharma', role: 'Legal Advisor - UK', avatar: 'https://i.pravatar.cc/150?u=priya' },
                            { name: 'David Lee', role: 'Operations Head - Singapore', avatar: 'https://i.pravatar.cc/150?u=david' }
                        ].map((member, i) => (
                            <div key={i} className="bg-white border border-gray-100 rounded-xl p-8 text-center shadow-sm hover:shadow-md transition-shadow">
                                <img src={member.avatar} className="w-20 h-20 rounded-full mx-auto mb-6 border-2 border-blue-500/20" alt={member.name} />
                                <h4 className="text-[#0F172A] font-bold text-base mb-1">{member.name}</h4>
                                <p className="text-gray-400 text-[10px] font-bold uppercase">{member.role}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Stats */}
                <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 py-16 border-t border-gray-100">
                    {[
                        { label: 'Satisfied Clients', value: '150+' },
                        { label: 'Expert Team', value: '20+' },
                        { label: 'Active Projects', value: '50+' },
                        { label: 'Award Winning', value: '10+' }
                    ].map((stat, i) => (
                        <div key={i} className="text-center">
                            <h4 className="text-gold text-4xl font-black mb-2">{stat.value}</h4>
                            <p className="text-gray-400 text-[10px] font-extrabold uppercase tracking-widest">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Crew;
