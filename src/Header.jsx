import React, { useState } from "react";

const Header = ({ onNavigate = () => { }, currentPage = "" }) => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const navItems = [
    { label: "Origin", page: "home" },
    {
      label: "Scope",
      page: "scope",
      dropdown: [
        { label: "Essence", page: "essence" },
        { label: "Crew", page: "crew" },
        { label: "Blueprint", page: "blueprint" },
        { label: "Footprint", page: "footprint" },
      ],
    },
    {
      label: "Synergy",
      page: "synergy",
      dropdown: [
        { label: "Alliescape", page: "alliescape" },
        { label: "Impact Tales", page: "impact tales" },
        { label: "CoCreate", page: "cocreate" },
        { label: "Echoes", page: "echoes" },
      ],
    },
    {
      label: "Momentum",
      page: "momentum",
      dropdown: [
        { label: "Chronos", page: "chronos" },
        { label: "Spotlight", page: "spotlight" },
        { label: "Wavelength", page: "wavelength" },
        { label: "PulseStream", page: "pulsestream" },
      ],
    },
  ];

  // ✅ If user is inside dropdown page, parent menu should also be active
  const isActive = (item) => {
    if (currentPage === item.page) return true;
    if (item.dropdown?.some((d) => d.page === currentPage)) return true;
    return false;
  };

  const btnStyle = (active) =>
    active
      ? "bg-[#F6C21C] text-[#0B1220] px-4 py-1.5 rounded-md font-bold text-[12px] shadow-sm"
      : "text-gray-200 hover:text-white px-2 py-1.5 rounded-md text-[12px] font-semibold";

  return (
    <header className="w-full bg-[#0B1220] text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-14 flex items-center justify-between">
          {/* LOGO */}
          <div
            onClick={() => onNavigate("home")}
            className="flex items-center gap-2 cursor-pointer select-none"
          >
            <span className="text-white font-extrabold text-lg leading-none">
              Expand<span className="text-[#F6C21C]">ME</span>
            </span>
          </div>

          {/* MENU */}
          <nav className="flex items-center gap-4 text-[12px]">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.dropdown && setOpenDropdown(item.label)}
                onMouseLeave={() => item.dropdown && setOpenDropdown(null)}
              >
                {/* ✅ All buttons now dynamic active */}
                <button
                  onClick={() => onNavigate(item.page)}
                  className={`${btnStyle(isActive(item))} flex items-center gap-1 transition`}
                >
                  {item.label}
                  {item.dropdown && (
                    <span
                      className={`text-[10px] ${isActive(item) ? "text-[#0B1220]" : "text-gray-400"
                        }`}
                    >
                      ▼
                    </span>
                  )}
                </button>

                {/* Dropdown */}
                {item.dropdown && openDropdown === item.label && (
                  <div className="absolute top-full left-0 mt-1 w-48 bg-[#101B2E] border border-white/10 rounded-md shadow-xl overflow-hidden z-50">
                    {item.dropdown.map((sub) => (
                      <button
                        key={sub.page}
                        onClick={() => onNavigate(sub.page)}
                        className={`w-full text-left px-3 py-1.5 text-[12px] transition
                          ${currentPage === sub.page
                            ? "bg-white/10 text-[#F6C21C]"
                            : "text-gray-200 hover:bg-white/10 hover:text-white"
                          }`}
                      >
                        {sub.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Expansion Request fixed Yellow */}
            <button
              onClick={() => onNavigate("expansion request")}
              className="bg-[#F6C21C] text-[#0B1220] px-4 py-1.5 rounded-md text-[12px] font-bold shadow-sm hover:brightness-95 transition"
            >
              Expansion Request
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
