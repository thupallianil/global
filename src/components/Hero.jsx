import React, { useState, useRef, useMemo } from 'react';
import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps';
import { geoMercator } from 'd3-geo';

const Hero = () => {
    const [verticalIndex, setVerticalIndex] = useState(0);
    const [testimonialIndex, setTestimonialIndex] = useState(0);

    const verticalRef = useRef(null);
    const testimonialRef = useRef(null);

    // Map Configuration
    const width = 800;
    const height = 450;

    // Create projection
    const projection = useMemo(() =>
        geoMercator()
            .scale(100)
            .center([0, 25]) // Center slightly north
            .translate([width / 2, height / 2]),
        []);

    // Locations
    const dubai = [55.2708, 25.2048];
    const destinations = [
        { name: "London", coordinates: [-0.1278, 51.5074] },
        { name: "NYC", coordinates: [-74.0060, 40.7128] },
        { name: "Singapore", coordinates: [103.8198, 1.3521] },
        { name: "Tokyo", coordinates: [139.6503, 35.6762] },
        { name: "Sydney", coordinates: [151.2093, -33.8688] },
        { name: "Mumbai", coordinates: [72.8777, 19.0760] },
        { name: "Hamburg", coordinates: [9.9937, 53.5511] },
        { name: "Johannesburg", coordinates: [28.0473, -26.2041] }
    ];

    // Calculate Curve Paths
    const generateCurve = (start, end) => {
        const [x0, y0] = projection(start);
        const [x1, y1] = projection(end);

        // Calculate curve height based on distance
        const distance = Math.sqrt(Math.pow(x1 - x0, 2) + Math.pow(y1 - y0, 2));
        const curveHeight = distance * 0.2; // Adjust curve intensity

        // Midpoint with offset
        const midX = (x0 + x1) / 2;
        const midY = (y0 + y1) / 2 - curveHeight;

        return `M${x0},${y0} Q${midX},${midY} ${x1},${y1}`;
    };

    const verticals = [
        {
            name: 'Umm Al Quwain',
            image: 'https://images.unsplash.com/photo-1580674285054-bed31e145f59?q=80&w=2070&auto=format&fit=crop',
            tags: ['Free Zone', 'Agriculture', 'Leisure', 'Light Industry']
        },
        {
            name: 'Dubai',
            image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070&auto=format&fit=crop',
            tags: ['Fintech', 'E-commerce', 'Healthtech', 'Tourism']
        },
        {
            name: 'Ras Al Khaimah',
            image: 'https://images.unsplash.com/photo-1541804246014-9989ca058448?q=80&w=2074&auto=format&fit=crop',
            tags: ['AgriTech', 'Wellness', 'Industry Growth']
        },
        {
            name: 'Sharjah',
            image: 'https://images.unsplash.com/photo-1528702748617-c64d4ef8ef99?q=80&w=2074&auto=format&fit=crop',
            tags: ['Education', 'Creative Arts', 'Healthcare', 'SaaS']
        },
        {
            name: 'Abu Dhabi',
            image: 'https://images.unsplash.com/photo-1512632578888-169bbbc64f33?q=80&w=2070&auto=format&fit=crop',
            tags: ['Oil & Gas', 'Real Estate', 'Logistics', 'Energy']
        },
        {
            name: 'Ajman',
            image: 'https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?q=80&w=2012&auto=format&fit=crop',
            tags: ['Trading', 'Manufacturing', 'Fashion']
        }
    ];

    const testimonials = [
        {
            name: 'RAMY JALLAD',
            title: 'CEO RAKEZ',
            quote: '"The Hyderabad event brought together 150+ business leaders, showcasing the incredible potential for Indian businesses to expand in the UAE."',
            avatar: 'https://randomuser.me/api/portraits/men/32.jpg'
        },
        {
            name: 'MOHAMMAD HASSEB',
            title: 'Manager RAKEZ Groups',
            quote: '"ExpandME has been instrumental in creating bridges between Indian entrepreneurs and global opportunities in the Middle East."',
            avatar: 'https://randomuser.me/api/portraits/men/46.jpg'
        },
        {
            name: 'Priya Sharma',
            title: 'Founder, InnovateSphere',
            quote: '"ExpandME provided invaluable guidance for our market entry. Their expertise made a complex process seem effortless. Truly exceptional service!"',
            avatar: 'https://randomuser.me/api/portraits/women/44.jpg'
        },
        {
            name: 'David Chen',
            title: 'Director, Global Ventures',
            quote: '"We\'ve seen significant growth since partnering with ExpandME. Their strategic insights and network are a game-changer for international expansion."',
            avatar: 'https://randomuser.me/api/portraits/men/52.jpg'
        },
        {
            name: 'Fatima Al-Mansoori',
            title: 'Investor, Desert Bloom Capital',
            quote: '"The team at ExpandME consistently identifies high-potential opportunities. Their commitment to client success is evident in every interaction."',
            avatar: 'https://randomuser.me/api/portraits/women/68.jpg'
        },
        {
            name: 'Carlos Rodriguez',
            title: 'CEO, Horizon Tech',
            quote: '"Navigating international regulations can be daunting, but ExpandME made it seamless. A trusted partner for any business looking to grow."',
            avatar: 'https://randomuser.me/api/portraits/men/75.jpg'
        }
    ];

    // Globe Data
    const N = 20;
    const arcsData = [
        { startLat: 25.2048, startLng: 55.2708, endLat: 51.5074, endLng: -0.1278, label: 'Dubai -> London' }, // Dubai to London
        { startLat: 25.2048, startLng: 55.2708, endLat: 40.7128, endLng: -74.0060, label: 'Dubai -> NYC' },   // Dubai to NYC
        { startLat: 25.2048, startLng: 55.2708, endLat: 1.3521, endLng: 103.8198, label: 'Dubai -> Singapore' }, // Dubai to Singapore
        { startLat: 25.2048, startLng: 55.2708, endLat: 35.6762, endLng: 139.6503, label: 'Dubai -> Tokyo' }, // Dubai to Tokyo
        { startLat: 25.2048, startLng: 55.2708, endLat: -33.8688, endLng: 151.2093, label: 'Dubai -> Sydney' }, // Dubai to Sydney
        { startLat: 25.2048, startLng: 55.2708, endLat: 19.0760, endLng: 72.8777, label: 'Dubai -> Mumbai' }, // Dubai to Mumbai
        { startLat: 25.2048, startLng: 55.2708, endLat: 55.7558, endLng: 37.6173, label: 'Dubai -> Moscow' }, // Dubai to Moscow
        { startLat: 25.2048, startLng: 55.2708, endLat: -26.2041, endLng: 28.0473, label: 'Dubai -> Johannesburg' } // Dubai to South Africa
    ];

    const handleScroll = (ref, setIndex, cardWidth) => {
        if (ref.current) {
            const scrollPosition = ref.current.scrollLeft;
            const newIndex = Math.round(scrollPosition / cardWidth);
            setIndex(newIndex);
        }
    };

    const scrollAction = (ref, direction, cardWidth) => {
        if (ref.current) {
            ref.current.scrollBy({ left: direction * cardWidth, behavior: 'smooth' });
        }
    };

    return (
        <div className="flex flex-col bg-white overflow-x-hidden">
            {/* Hero Banner Section - Wrapped in rounded container */}
            <section className="px-4 pt-4">
                <div className="relative h-[600px] flex flex-col justify-center items-center text-center px-6 overflow-hidden rounded-3xl border border-[#1E293B]">
                    <div className="absolute inset-0 z-0">
                        <img
                            src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070&auto=format&fit=crop"
                            alt="UAE Skyline"
                            className="w-full h-full object-cover rounded-3xl"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-[#1a2332]/60 via-[#2a3442]/70 to-[#1a2332]/80 rounded-3xl"></div>
                        <div className="absolute inset-0 opacity-30 pointer-events-none">
                            <div className="w-full h-full bg-[linear-gradient(to_right,#ffffff20_1px,transparent_1px),linear-gradient(to_bottom,#ffffff20_1px,transparent_1px)] bg-[size:60px_60px]"></div>
                        </div>
                    </div>

                    <div className="relative z-10 max-w-4xl mx-auto">
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
                            To Sell To The World, Start Your Shop In UAE
                        </h1>
                        <p className="text-base md:text-lg text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                            Your expansion journey — one milestone at a time. From Local to Global Execution.
                        </p>
                        <button className="bg-gold text-[#0F172A] px-8 py-3 rounded-md font-bold text-sm hover:bg-gold-hover transition-all transform hover:scale-105">
                            Expand with Us
                        </button>
                    </div>
                </div>
            </section>

            {/* Detached Feature Cards Section */}
            <section className="bg-white py-20 px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl mx-auto">
                    {[
                        { title: 'International Company Setup', desc: '100% ownership, 0% tax', icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4' },
                        { title: 'Support', desc: 'Start your business in 48 hours', icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' },
                        { title: 'Final Delivery', desc: 'Global brand visibility and media exposure', icon: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6' }
                    ].map((card, i) => (
                        <div key={i} className="bg-white p-10 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center hover:shadow-xl transition-all duration-300 group">
                            <div className="mb-8 w-16 h-16 bg-gold/10 rounded-2xl flex items-center justify-center group-hover:bg-gold transition-colors">
                                <svg className="w-8 h-8 text-gold group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={card.icon} />
                                </svg>
                            </div>
                            <h3 className="text-[#0F172A] text-xl font-bold mb-3 tracking-tight">{card.title}</h3>
                            <p className="text-gray-400 text-sm font-medium">{card.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Understand Your Business Section */}
            <section className="bg-[#FAF9F6] py-24 px-6 text-center md:text-left">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-20">
                    <div className="flex-1 relative order-2 md:order-1">
                        <div className="absolute -inset-4 bg-gold/20 blur-2xl rounded-3xl"></div>
                        <img
                            src="https://images.unsplash.com/photo-1544377193-33dcf4d68fb5?q=80&w=2070&auto=format&fit=crop"
                            alt="Business Discussion"
                            className="relative rounded-2xl shadow-xl w-full object-cover aspect-video md:aspect-square"
                        />
                    </div>
                    <div className="flex-1 order-1 md:order-2">
                        <h2 className="text-4xl font-extrabold text-[#0F172A] mb-8 leading-tight">
                            Let's Understand Your Business
                        </h2>
                        <p className="text-gray-600 text-base mb-10 leading-relaxed font-medium">
                            Your vision matters — and we're here to help bring it to life. Whether you're a
                            rising startup, a growing SME, or an established brand, ExpandME is ready to
                            understand your journey, your goals, and the challenges you face. Let's start
                            the conversation. Share your business with us, and discover how ExpandME
                            can turn your local ambition into global success.
                        </p>
                        <button className="bg-gold text-[#0F172A] px-10 py-3.5 rounded-md font-bold text-sm tracking-wide hover:bg-gold-hover transition-colors shadow-lg shadow-gold/20 uppercase">
                            Let's Talk
                        </button>
                    </div>
                </div>
            </section>

            {/* Expansion Across Verticals Carousel */}
            <section className="py-24 px-6 bg-white relative">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold text-[#0F172A] text-center mb-16 tracking-tight">
                        Expansion Across Verticals
                    </h2>
                    <div className="relative px-4 md:px-12">
                        <button onClick={() => scrollAction(verticalRef, -1, 344)} className="absolute left-0 md:left-4 top-1/2 -translate-y-1/2 z-10 p-2.5 text-blue-500 hover:scale-110 transition-all bg-white rounded-full shadow-lg border border-gray-100">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" /></svg>
                        </button>
                        <button onClick={() => scrollAction(verticalRef, 1, 344)} className="absolute right-0 md:right-4 top-1/2 -translate-y-1/2 z-10 p-2.5 text-blue-500 hover:scale-110 transition-all bg-white rounded-full shadow-lg border border-gray-100">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" /></svg>
                        </button>
                        <div
                            ref={verticalRef}
                            onScroll={() => handleScroll(verticalRef, setVerticalIndex, 344)}
                            className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory no-scrollbar pb-8"
                        >
                            {verticals.map((v, i) => (
                                <div key={i} className="min-w-[300px] md:min-w-[320px] snap-center bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
                                    <div className="relative h-48 overflow-hidden p-3 bg-gray-50">
                                        <img src={v.image} alt={v.name} className="w-full h-full object-cover rounded-xl" />
                                    </div>
                                    <div className="p-6 pt-2">
                                        <div className="flex items-center gap-2 mb-4">
                                            <svg className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" /></svg>
                                            <h4 className="text-xl font-bold text-[#0F172A]">{v.name}</h4>
                                        </div>
                                        <div className="flex flex-wrap gap-2">
                                            {v.tags.map((tag, idx) => (
                                                <span key={idx} className="bg-gray-50 text-gold px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border border-gold/10">{tag}</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="flex justify-center gap-2 mt-4">
                            {verticals.map((_, idx) => (
                                <div key={idx} className={`h-1.5 rounded-full transition-all duration-500 ${idx === verticalIndex ? 'w-6 bg-blue-500' : 'w-1.5 bg-gray-300'}`}></div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* NEW: What Our Partners Say Carousel */}
            <section className="py-24 px-6 bg-[#FCF8F1]/30">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold text-[#0F172A] text-center mb-16 tracking-tight">
                        What Our Partners Say
                    </h2>
                    <div className="relative px-4 md:px-12">
                        <button onClick={() => scrollAction(testimonialRef, -1, 384)} className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 text-blue-500 hover:scale-110 transition-all bg-white rounded-full shadow-lg border border-gray-100">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" /></svg>
                        </button>
                        <button onClick={() => scrollAction(testimonialRef, 1, 384)} className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 text-blue-500 hover:scale-110 transition-all bg-white rounded-full shadow-lg border border-gray-100">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" /></svg>
                        </button>
                        <div
                            ref={testimonialRef}
                            onScroll={() => handleScroll(testimonialRef, setTestimonialIndex, 384)}
                            className="flex gap-8 overflow-x-auto scroll-smooth snap-x snap-mandatory no-scrollbar pb-8"
                        >
                            {testimonials.map((t, i) => (
                                <div key={i} className="min-w-[320px] md:min-w-[360px] snap-center bg-white border border-gray-50 rounded-2xl p-8 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow">
                                    <div className="relative mb-6">
                                        <img src={t.avatar} alt={t.name} className="w-20 h-20 rounded-full border-4 border-gold/20 object-cover shadow-lg" />
                                        <div className="absolute -bottom-2 -right-2 bg-white rounded-full p-1 shadow-md">
                                            <svg className="w-6 h-6 text-gold" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017V14H17.017C15.3601 14 14.017 12.6569 14.017 11V7C14.017 5.34315 15.3601 4 17.017 4H20.017C21.6739 4 23.017 5.34315 23.017 7V11C23.017 12.3556 22.1818 13.5165 21.0024 13.9056L22.1287 19.3361C22.2541 19.9575 21.7821 20.5361 21.1448 20.5361H14.4791C14.1912 20.5361 13.9392 20.3582 13.8465 20.0863L13.517 19.123L13.1876 20.0863C13.0949 20.3582 12.8428 20.5361 12.555 20.5361H5.88931C5.25199 20.5361 4.77994 19.9575 4.90538 19.3361L6.0317 13.9056C4.85226 13.5165 4.01709 12.3556 4.01709 11V7C4.01709 5.34315 5.36024 4 7.01709 4H10.0171C11.6739 4 13.0171 5.34315 13.0171 7V11C13.0171 12.6569 11.6739 14 10.0171 14H8.01709V16H11.0171C12.1217 16 13.0171 16.8954 13.0171 18V21L14.017 21Z" /></svg>
                                        </div>
                                    </div>
                                    <svg className="w-10 h-10 text-gold/30 mb-4 opacity-50" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017V14H17.017C15.3601 14 14.017 12.6569 14.017 11V7C14.017 5.34315 15.3601 4 17.017 4H20.017C21.6739 4 23.017 5.34315 23.017 7V11C23.017 12.3556 22.1818 13.5165 21.0024 13.9056L22.1287 19.3361C22.2541 19.9575 21.7821 20.5361 21.1448 20.5361H14.4791C14.1912 20.5361 13.9392 20.3582 13.8465 20.0863L13.517 19.123L13.1876 20.0863C13.0949 20.3582 12.8428 20.5361 12.555 20.5361H5.88931C5.25199 20.5361 4.77994 19.9575 4.90538 19.3361L6.0317 13.9056C4.85226 13.5165 4.01709 12.3556 4.01709 11V7C4.01709 5.34315 5.36024 4 7.01709 4H10.0171C11.6739 4 13.0171 5.34315 13.0171 7V11C13.0171 12.6569 11.6739 14 10.0171 14H8.01709V16H11.0171C12.1217 16 13.0171 16.8954 13.0171 18V21L14.017 21Z" /></svg>
                                    <p className="text-gray-600 italic mb-6 leading-relaxed font-medium">
                                        {t.quote}
                                    </p>
                                    <h4 className="text-[#0F172A] font-bold text-lg uppercase tracking-wider">{t.name}</h4>
                                    <p className="text-gray-400 text-xs font-semibold">{t.title}</p>
                                </div>
                            ))}
                        </div>
                        <div className="flex justify-center gap-2 mt-4">
                            {testimonials.map((_, idx) => (
                                <div key={idx} className={`h-1.5 rounded-full transition-all duration-500 ${idx === testimonialIndex ? 'w-6 bg-blue-500' : 'w-1.5 bg-gray-300'}`}></div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Strategic Presence Section WITH FLAT TECH MAP */}
            <section className="bg-white py-24 px-6 text-center">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-extrabold text-[#0F172A] mb-8 tracking-tight">
                        Strategic Presence Across the UAE & Globe
                    </h2>
                    <p className="text-gray-500 text-base mb-12 max-w-2xl mx-auto">
                        Explore our global connections. Navigate the map to see how we bridge the UAE with key international markets.
                    </p>

                    <div className="relative w-full h-[500px] rounded-3xl overflow-hidden shadow-2xl bg-[#090A0F] border-4 border-[#1B2735]">
                        <ComposableMap projection={projection} width={width} height={height} style={{ width: "100%", height: "100%" }}>
                            {/* Dark Base Map */}
                            <Geographies geography="https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json">
                                {({ geographies }) =>
                                    geographies.map((geo) => (
                                        <Geography
                                            key={geo.rsmKey}
                                            geography={geo}
                                            fill="#1B2735"
                                            stroke="#2C3E50"
                                            strokeWidth={0.5}
                                            style={{
                                                default: { outline: "none" },
                                                hover: { fill: "#243447", outline: "none" },
                                                pressed: { outline: "none" }
                                            }}
                                        />
                                    ))
                                }
                            </Geographies>

                            {/* Animated Arcs */}
                            {destinations.map((dest, i) => (
                                <g key={i}>
                                    <path
                                        d={generateCurve(dubai, dest.coordinates)}
                                        fill="none"
                                        stroke="#D4AF37"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeDasharray="5,5"
                                        className="animate-flow"
                                        style={{ animationDelay: `${i * 0.5}s` }}
                                    />
                                    {/* Destination Marker */}
                                    <Marker coordinates={dest.coordinates}>
                                        <circle r={3} fill="#D4AF37" />
                                        <text
                                            textAnchor="middle"
                                            y={-10}
                                            style={{ fontFamily: "system-ui", fill: "#94a3b8", fontSize: "8px", fontWeight: "bold" }}
                                        >
                                            {dest.name}
                                        </text>
                                    </Marker>
                                </g>
                            ))}

                            {/* UAE Hub Marker */}
                            <Marker coordinates={dubai}>
                                <circle r={6} fill="#D4AF37" className="animate-ping opacity-75" />
                                <circle r={4} fill="#D4AF37" />
                                <text
                                    textAnchor="middle"
                                    y={-15}
                                    style={{ fontFamily: "system-ui", fill: "#D4AF37", fontSize: "10px", fontWeight: "900", textShadow: "0 0 5px black" }}
                                >
                                    UAE
                                </text>
                            </Marker>
                        </ComposableMap>

                        <div className="absolute top-6 right-6 bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/20 text-left">
                            <h4 className="text-gold font-bold text-sm mb-2">LIVE CONNECTIONS</h4>
                            <div className="flex flex-col gap-2">
                                <div className="flex items-center gap-2 text-xs text-white">
                                    <div className="w-2 h-2 rounded-full bg-gold animate-pulse"></div>
                                    <span>UAE Hub Active</span>
                                </div>
                                <div className="flex items-center gap-2 text-xs text-blue-300">
                                    <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                                    <span>Global Nodes</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <p className="mt-12 text-gray-500 text-sm font-medium leading-relaxed max-w-2xl mx-auto italic border-t border-gray-100 pt-8">
                        "We guide your business expansion to key economic zones in Dubai, Ras Al Khaimah, and Sharjah, ensuring optimal market reach."
                    </p>
                </div>
            </section>

            <style>{`
        @keyframes flow {
            to { stroke-dashoffset: -20; }
        }
        .animate-flow {
            animation: flow 1s linear infinite;
        }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
        </div>
    );
};

export default Hero;
