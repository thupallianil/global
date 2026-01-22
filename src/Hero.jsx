import React, { useState, useRef, useMemo, useEffect } from "react";
import Globe from "react-globe.gl";

const Hero = () => {
    const [verticalPage, setVerticalPage] = useState(0);
    const [testimonialIndex, setTestimonialIndex] = useState(0);

    const verticalRef = useRef(null);
    const testimonialRef = useRef(null);

    // ✅ FALLBACK IMAGE (only if image fails)
    const FALLBACK_IMAGE =
        "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070&auto=format&fit=crop";

    // ============================================================
    // ✅ GLOBE CONFIG
    // ============================================================
    const globeRef = useRef();

    const hub = { name: "UAE", lat: 25.2048, lng: 55.2708 };

    const destinations = [
        { name: "London", lat: 51.5074, lng: -0.1278 },
        { name: "New York", lat: 40.7128, lng: -74.006 },
        { name: "Singapore", lat: 1.3521, lng: 103.8198 },
        { name: "Tokyo", lat: 35.6762, lng: 139.6503 },
        { name: "Sydney", lat: -33.8688, lng: 151.2093 },
        { name: "Mumbai", lat: 19.076, lng: 72.8777 },
        { name: "Hamburg", lat: 53.5511, lng: 9.9937 },
        { name: "Johannesburg", lat: -26.2041, lng: 28.0473 },
    ];

    const arcsData = useMemo(() => {
        return destinations.map((d, i) => ({
            startLat: hub.lat,
            startLng: hub.lng,
            endLat: d.lat,
            endLng: d.lng,
            label: `UAE → ${d.name}`,
            color: ["rgba(41,182,246,0.95)", "rgba(41,182,246,0.05)"],
            arcAltitude: 0.25 + (i % 3) * 0.06,
        }));
    }, []);

    const pointsData = useMemo(() => {
        return [
            {
                lat: hub.lat,
                lng: hub.lng,
                size: 0.35,
                color: "#29B6F6",
                name: "UAE",
            },
        ];
    }, []);

    useEffect(() => {
        if (!globeRef.current) return;

        const t = setTimeout(() => {
            globeRef.current.pointOfView({ lat: 25, lng: 40, altitude: 2.35 }, 1200);

            const controls = globeRef.current.controls();
            controls.autoRotate = true;
            controls.autoRotateSpeed = 1.0;
            controls.enableZoom = false;
            controls.enablePan = false;
        }, 350);

        return () => clearTimeout(t);
    }, []);

    // ============================================================
    // ✅ VERTICAL CARDS (9 CARDS ✅)
    // ============================================================
    const verticals = [
        {
            name: "Umm Al Quwain",
            image:
                "https://images.unsplash.com/photo-1580674285054-bed31e145f59?q=80&w=2070&auto=format&fit=crop",
            tags: ["Free Zone", "Agriculture", "Leisure", "Light Industry"],
        },
        {
            name: "Dubai",
            image:
                "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070&auto=format&fit=crop",
            tags: ["Fintech", "E-commerce", "Healthtech", "Tourism"],
        },
        {
            name: "Ras Al Khaimah",
            image:
                "https://images.unsplash.com/photo-1541804246014-9989ca058448?q=80&w=2074&auto=format&fit=crop",
            tags: ["AgriTech", "Wellness", "Industry Growth"],
        },
        {
            name: "Sharjah",
            image:
                "https://images.unsplash.com/photo-1528702748617-c64d4ef8ef99?q=80&w=2074&auto=format&fit=crop",
            tags: ["Education", "Creative Arts", "Healthcare", "SaaS"],
        },
        {
            name: "Abu Dhabi",
            image:
                "https://images.unsplash.com/photo-1512632578888-169bbbc64f33?q=80&w=2070&auto=format&fit=crop",
            tags: ["Oil & Gas", "Real Estate", "Logistics", "Energy"],
        },
        {
            name: "Ajman",
            image:
                "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?q=80&w=2012&auto=format&fit=crop",
            tags: ["Trading", "Manufacturing", "Fashion"],
        },

        // ✅ extra 3 cards (to make 9)
        {
            name: "Fujairah",
            image:
                "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=2070&auto=format&fit=crop",
            tags: ["Ports", "Logistics", "Tourism", "Exports"],
        },
        {
            name: "Al Ain",
            image:
                "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2070&auto=format&fit=crop",
            tags: ["Agriculture", "Education", "Healthcare", "SMEs"],
        },
        {
            name: "Khor Fakkan",
            image:
                "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=2070&auto=format&fit=crop",
            tags: ["Shipping", "Trade", "Industrial Growth"],
        },
    ];

    // ============================================================
    // ✅ TESTIMONIALS
    // ============================================================
    const testimonials = [
        {
            name: "RAMY JALLAD",
            title: "CEO RAKEZ",
            quote:
                '"The Hyderabad event brought together 150+ business leaders, showcasing the incredible potential for Indian businesses to expand in the UAE."',
            avatar: "https://randomuser.me/api/portraits/men/32.jpg",
        },
        {
            name: "MOHAMMAD HASSEB",
            title: "Manager RAKEZ Groups",
            quote:
                '"ExpandME has been instrumental in creating bridges between Indian entrepreneurs and global opportunities in the Middle East."',
            avatar: "https://randomuser.me/api/portraits/men/46.jpg",
        },
        {
            name: "Priya Sharma",
            title: "Founder, InnovateSphere",
            quote:
                '"ExpandME provided invaluable guidance for our market entry. Their expertise made a complex process seem effortless. Truly exceptional service!"',
            avatar: "https://randomuser.me/api/portraits/women/44.jpg",
        },
        {
            name: "David Chen",
            title: "Director, Global Ventures",
            quote:
                "\"We've seen significant growth since partnering with ExpandME. Their strategic insights and network are a game-changer for international expansion.\"",
            avatar: "https://randomuser.me/api/portraits/men/52.jpg",
        },
        {
            name: "Fatima Al-Mansoori",
            title: "Investor, Desert Bloom Capital",
            quote:
                '"The team at ExpandME consistently identifies high-potential opportunities. Their commitment to client success is evident in every interaction."',
            avatar: "https://randomuser.me/api/portraits/women/68.jpg",
        },
        {
            name: "Carlos Rodriguez",
            title: "CEO, Horizon Tech",
            quote:
                '"Navigating international regulations can be daunting, but ExpandME made it seamless. A trusted partner for any business looking to grow."',
            avatar: "https://randomuser.me/api/portraits/men/75.jpg",
        },
    ];

    // ============================================================
    // ✅ SLIDER FIX (PAGE BASED DOTS + AUTO MOVE ✅)
    // ============================================================
    const getGap = () => {
        if (!verticalRef.current) return 0;
        const style = window.getComputedStyle(verticalRef.current);
        return parseFloat(style.gap || style.columnGap || 0);
    };

    const getCardWidth = () => {
        if (!verticalRef.current) return 320;
        const firstCard = verticalRef.current.querySelector("[data-vertical-card]");
        if (!firstCard) return 320;
        return firstCard.offsetWidth + getGap();
    };

    const getVisibleCards = () => {
        if (!verticalRef.current) return 1;
        const cardWidth = getCardWidth();
        const containerWidth = verticalRef.current.offsetWidth;
        return Math.max(1, Math.round(containerWidth / cardWidth));
    };

    const getTotalPages = () => {
        const visible = getVisibleCards();
        return Math.max(1, verticals.length - visible + 1);
    };

    const handleVerticalScroll = () => {
        if (!verticalRef.current) return;
        const cardWidth = getCardWidth();
        const page = Math.round(verticalRef.current.scrollLeft / cardWidth);
        setVerticalPage(page);
    };

    const scrollVertical = (direction) => {
        if (!verticalRef.current) return;
        const cardWidth = getCardWidth();
        verticalRef.current.scrollBy({
            left: direction * cardWidth,
            behavior: "smooth",
        });
    };

    // ✅ AUTO MOVE SLIDER
    useEffect(() => {
        const interval = setInterval(() => {
            if (!verticalRef.current) return;

            const totalPages = getTotalPages();
            const cardWidth = getCardWidth();
            const nextPage = verticalPage + 1;

            if (nextPage >= totalPages) {
                verticalRef.current.scrollTo({ left: 0, behavior: "smooth" });
                setVerticalPage(0);
            } else {
                verticalRef.current.scrollTo({
                    left: nextPage * cardWidth,
                    behavior: "smooth",
                });
                setVerticalPage(nextPage);
            }
        }, 3000);

        return () => clearInterval(interval);
    }, [verticalPage]);

    // ============================================================
    // ✅ TESTIMONIAL DOTS
    // ============================================================
    const handleTestimonialScroll = () => {
        if (!testimonialRef.current) return;
        const cardWidth = 384;
        const index = Math.round(testimonialRef.current.scrollLeft / cardWidth);
        setTestimonialIndex(index);
    };

    // ============================================================
    // ✅ UI
    // ============================================================
    return (
        <div className="flex flex-col bg-white overflow-x-hidden">
            {/* HERO */}
            <section className="px-4 pt-4">
                <div className="relative h-[600px] flex flex-col justify-center items-center text-center px-6 overflow-hidden rounded-3xl border border-[#1E293B]">
                    <div className="absolute inset-0 z-0">
                        <img
                            src={FALLBACK_IMAGE}
                            alt="UAE Skyline"
                            className="w-full h-full object-cover rounded-3xl"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-[#1a2332]/60 via-[#2a3442]/70 to-[#1a2332]/80 rounded-3xl"></div>
                    </div>

                    <div className="relative z-10 max-w-4xl mx-auto">
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
                            To Sell To The World, Start Your Shop In UAE
                        </h1>
                        <p className="text-base md:text-lg text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                            Your expansion journey — one milestone at a time. From Local to
                            Global Execution.
                        </p>
                        <button className="bg-gold text-[#0F172A] px-8 py-3 rounded-md font-bold text-sm hover:bg-gold-hover transition-all transform hover:scale-105">
                            Expand with Us
                        </button>
                    </div>
                </div>
            </section>

            {/* ✅ VERTICALS */}
            <section className="py-24 px-6 bg-white relative">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold text-[#0F172A] text-center mb-16 tracking-tight">
                        Expansion Across Verticals
                    </h2>

                    <div className="relative px-4 md:px-12">
                        {/* LEFT */}
                        <button
                            onClick={() => scrollVertical(-1)}
                            className="absolute left-0 md:left-4 top-1/2 -translate-y-1/2 z-10 p-2.5 text-blue-500 hover:scale-110 transition-all bg-white rounded-full shadow-lg border border-gray-100"
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={3}
                                    d="M15 19l-7-7 7-7"
                                />
                            </svg>
                        </button>

                        {/* RIGHT */}
                        <button
                            onClick={() => scrollVertical(1)}
                            className="absolute right-0 md:right-4 top-1/2 -translate-y-1/2 z-10 p-2.5 text-blue-500 hover:scale-110 transition-all bg-white rounded-full shadow-lg border border-gray-100"
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={3}
                                    d="M9 5l7 7-7 7"
                                />
                            </svg>
                        </button>

                        {/* SLIDER */}
                        <div
                            ref={verticalRef}
                            onScroll={handleVerticalScroll}
                            className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory no-scrollbar pb-8"
                        >
                            {verticals.map((v, i) => (
                                <div
                                    key={i}
                                    data-vertical-card
                                    className="min-w-[300px] md:min-w-[320px] snap-center bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
                                >
                                    <div className="relative h-48 overflow-hidden p-3 bg-gray-100">
                                        <img
                                            src={v.image}
                                            alt={v.name}
                                            loading="lazy"
                                            className="w-full h-full object-cover rounded-xl"
                                            onError={(e) => {
                                                e.currentTarget.src = FALLBACK_IMAGE;
                                            }}
                                        />
                                    </div>

                                    <div className="p-6 pt-2">
                                        <h4 className="text-xl font-bold text-[#0F172A] mb-4">
                                            {v.name}
                                        </h4>

                                        <div className="flex flex-wrap gap-2">
                                            {v.tags.map((tag, idx) => (
                                                <span
                                                    key={idx}
                                                    className="bg-gray-50 text-gold px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border border-gold/10"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* ✅ DOTS FIXED */}
                        <div className="flex justify-center gap-2 mt-4">
                            {Array.from({ length: getTotalPages() }).map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => {
                                        if (!verticalRef.current) return;
                                        const cardWidth = getCardWidth();

                                        verticalRef.current.scrollTo({
                                            left: idx * cardWidth,
                                            behavior: "smooth",
                                        });
                                        setVerticalPage(idx);
                                    }}
                                    className={`h-1.5 rounded-full transition-all duration-500 ${idx === verticalPage
                                        ? "w-6 bg-blue-500"
                                        : "w-1.5 bg-gray-300"
                                        }`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ✅ TESTIMONIALS */}
            <section className="py-24 px-6 bg-[#FCF8F1]/30">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold text-[#0F172A] text-center mb-16 tracking-tight">
                        What Our Partners Say
                    </h2>

                    <div className="relative px-4 md:px-12">
                        <div
                            ref={testimonialRef}
                            onScroll={handleTestimonialScroll}
                            className="flex gap-8 overflow-x-auto scroll-smooth snap-x snap-mandatory no-scrollbar pb-8"
                        >
                            {testimonials.map((t, i) => (
                                <div
                                    key={i}
                                    className="min-w-[320px] md:min-w-[360px] snap-center bg-white border border-gray-50 rounded-2xl p-8 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow"
                                >
                                    <img
                                        src={t.avatar}
                                        alt={t.name}
                                        className="w-20 h-20 rounded-full border-4 border-gold/20 object-cover shadow-lg mb-5"
                                    />
                                    <p className="text-gray-600 italic mb-6 leading-relaxed font-medium">
                                        {t.quote}
                                    </p>
                                    <h4 className="text-[#0F172A] font-bold text-lg uppercase tracking-wider">
                                        {t.name}
                                    </h4>
                                    <p className="text-gray-400 text-xs font-semibold">{t.title}</p>
                                </div>
                            ))}
                        </div>

                        <div className="flex justify-center gap-2 mt-4">
                            {testimonials.map((_, idx) => (
                                <div
                                    key={idx}
                                    className={`h-1.5 rounded-full transition-all duration-500 ${idx === testimonialIndex
                                        ? "w-6 bg-blue-500"
                                        : "w-1.5 bg-gray-300"
                                        }`}
                                ></div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ✅ GLOBE */}
            <section className="bg-[#FBF7EF] py-16 px-6 text-center">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-[#0F172A] mb-8 tracking-tight">
                        Strategic Presence Across the UAE
                    </h2>

                    <div className="relative w-full max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-xl bg-black border border-[#E5E7EB]">
                        <div className="relative w-full h-[360px] md:h-[420px] flex items-center justify-center">
                            <div className="absolute inset-0 starfield"></div>

                            <div className="relative w-full h-full flex items-center justify-center">
                                <Globe
                                    ref={globeRef}
                                    width={900}
                                    height={420}
                                    backgroundColor="rgba(0,0,0,0)"
                                    animateIn={true}
                                    globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
                                    bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                                    arcsData={arcsData}
                                    arcColor={(d) => d.color}
                                    arcAltitude={(d) => d.arcAltitude}
                                    arcStroke={0.6}
                                    arcDashLength={0.65}
                                    arcDashGap={3.2}
                                    arcDashAnimateTime={2000}
                                    arcsTransitionDuration={1200}
                                    pointsData={pointsData}
                                    pointAltitude={0.02}
                                    pointRadius={(p) => p.size}
                                    pointColor={(p) => p.color}
                                />
                            </div>

                            <div className="absolute inset-0 pointer-events-none glow-overlay"></div>
                        </div>
                    </div>

                    <p className="mt-8 text-gray-600 text-sm md:text-base max-w-3xl mx-auto leading-relaxed">
                        We guide your business expansion to key economic zones in Dubai, Ras
                        Al Khaimah, and Sharjah, ensuring optimal market reach.
                    </p>
                </div>

                <style>{`
          .no-scrollbar::-webkit-scrollbar { display: none; }
          .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }

          .starfield {
            background:
              radial-gradient(circle at 50% 50%, rgba(255,255,255,0.06), rgba(0,0,0,0) 60%),
              url("https://www.transparenttextures.com/patterns/stardust.png");
            opacity: 0.9;
            animation: starsMove 14s linear infinite;
          }

          @keyframes starsMove {
            from { background-position: 0 0; }
            to { background-position: 600px 300px; }
          }

          .glow-overlay {
            background: radial-gradient(circle at center, rgba(41,182,246,0.12), rgba(0,0,0,0) 55%);
          }
        `}</style>
            </section>
        </div>
    );
};

export default Hero;
