import React, { useState, useEffect } from 'react';
import { Menu, X, BookOpen, ChevronRight } from 'lucide-react';

export const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Inicio', href: '#home' },
        { name: 'Características', href: '#features' },
        { name: 'Precios', href: '#pricing' },
        { name: 'Testimonios', href: '#testimonials' },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-ministry-blue/95 backdrop-blur-md shadow-lg py-2' : 'bg-transparent py-4'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
                        <div className="bg-ministry-gold p-1.5 rounded-lg">
                            <BookOpen className="text-ministry-blue h-6 w-6" />
                        </div>
                        <span className={`font-serif font-bold text-xl tracking-wide ${scrolled ? 'text-white' : 'text-white'}`}>
                            Púlpito <span className="text-ministry-gold">Dinámico</span>
                        </span>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-gray-300 hover:text-white hover:scale-105 transition-all px-3 py-2 rounded-md text-sm font-medium"
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* CTA Button */}
                    <div className="hidden md:block">
                        <a href="#pricing" className="bg-ministry-gold hover:bg-ministry-goldLight text-ministry-blue font-bold py-2 px-6 rounded-full transition-all transform hover:-translate-y-0.5 shadow-lg flex items-center gap-2">
                            Prueba Gratis <ChevronRight size={16} />
                        </a>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white focus:outline-none"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-ministry-blue/95 backdrop-blur-xl border-t border-white/10 absolute w-full">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="text-gray-300 hover:text-white block px-3 py-4 rounded-md text-base font-medium border-b border-white/5"
                            >
                                {link.name}
                            </a>
                        ))}
                        <a
                            href="#pricing"
                            onClick={() => setIsOpen(false)}
                            className="w-full text-center mt-4 bg-ministry-gold text-ministry-blue font-bold py-3 px-6 rounded-lg block"
                        >
                            Comenzar Prueba Gratis
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
};
