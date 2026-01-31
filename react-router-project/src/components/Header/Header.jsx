import { Link, NavLink } from "react-router";
import HeaderField from "./HeaderField";

export default function Header() {
    return (
        // 1. HEADER WRAPPER
        // 'sticky top-0': Keeps the header stuck to the top of the screen when you scroll.
        // 'z-50': High Z-Index ensures the header sits ON TOP of all other content (like the hero image).
        // 'shadow': Adds a subtle shadow to separate header from page content.
        <header className="sticky top-0 z-50 bg-white shadow">
            
            {/* 2. NAV CONTAINER */}
            {/* 'max-w-7xl mx-auto': Matches your Hero section width perfectly. */}
            {/* 'px-4 sm:px-6': Standard responsive padding. */}
            <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
                
                {/* SECTION A: LOGO (Left) */}
                <Link to="/" className="flex items-center">
                    <img
                        src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
                        className="h-10 mr-3 sm:h-12" // 'h-10' on mobile, 'h-12' on larger screens
                        alt="Logo"
                    />
                </Link>

                {/* SECTION B: NAVIGATION LINKS (Center) */}
                {/* 'hidden lg:flex': Crucial! Hides these text links on mobile, shows them on desktop (Large screens). */}
                {/* 'gap-8': Adds clean space between Home, About, etc. */}
                <div className="hidden lg:flex items-center gap-8 font-medium"> 

                    <HeaderField to="/" label="Home" />
                    <HeaderField to="/about" label="About" />
                    <HeaderField to="/contact" label="Contact" />
                    <HeaderField to="/github" label="Github" />
                    
                </div>

                {/* SECTION C: ACTION BUTTONS (Right) */}
                {/* 'flex items-center gap-4': Groups Login and Get Started with spacing. */}
                <div className="flex items-center gap-4">
                    
                    {/* Secondary Button (Log in) */}
                    <Link
                        to="#"
                        className="text-gray-800 hover:text-orange-700 font-medium text-sm px-4 py-2 transition"
                    >
                        Log in
                    </Link>

                    {/* Primary Button (Get Started) */}
                    {/* 'focus:ring': Accessibility ring we learned about earlier. */}
                    <Link
                        to="#"
                        className="bg-orange-700 hover:bg-orange-800 text-white font-medium rounded-lg text-sm px-5 py-2.5 transition focus:outline-none focus:ring-2 focus:ring-orange-300 focus:ring-offset-2"
                    >
                        Get started
                    </Link>
                </div>
            </nav>
        </header>
    );
}