import React from 'react';
import { PlayCircle, Star, Users, Globe, ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
    return (
        <section id="home" className="relative bg-ministry-blue overflow-hidden pt-24 pb-20 lg:pt-32 lg:pb-32 min-h-screen flex items-center">
            {/* Background Effects */}
            <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-ministry-gold rounded-full blur-[128px] opacity-20 animate-pulse"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-blue-500 rounded-full blur-[128px] opacity-20"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    {/* Left Content */}
                    <div className="text-center lg:text-left animate-fade-in">
                        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-ministry-gold/30 rounded-full px-4 py-1.5 mb-8">
                            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                            <span className="text-ministry-goldLight text-xs font-bold uppercase tracking-wider">
                                Nueva Versión Disponible
                            </span>
                        </div>

                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight mb-6">
                            Tu Asistente Bíblico <br />
                            <span className="text-gold-gradient">Inteligente y Profundo</span>
                        </h1>

                        <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0 font-light leading-relaxed">
                            Púlpito Dinámico combina inteligencia artificial avanzada con teología sana para ayudarte a investigar, exégesis y crear bosquejos impactantes en minutos, no en horas.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <a href="#pricing" className="bg-ministry-gold hover:bg-ministry-goldLight text-ministry-blue text-lg font-bold px-8 py-4 rounded-xl shadow-lg shadow-ministry-gold/20 transition-all transform hover:-translate-y-1 hover:scale-105 flex items-center justify-center gap-2">
                                Ver Planes y Precios <ArrowRight size={20} />
                            </a>
                            <button className="flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 text-white border border-white/20 px-8 py-4 rounded-xl backdrop-blur-sm transition-all">
                                <PlayCircle size={24} />
                                <span>Ver Demo en Video</span>
                            </button>
                        </div>

                        <div className="mt-10 pt-8 border-t border-white/10 flex flex-wrap justify-center lg:justify-start gap-x-8 gap-y-4 text-sm text-gray-400">
                            <div className="flex items-center gap-2">
                                <Star size={16} className="text-ministry-gold fill-current" />
                                <span className="font-medium text-gray-300">4.9/5 Calificación</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Users size={16} className="text-ministry-gold" />
                                <span className="font-medium text-gray-300">2,500+ Pastores</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Globe size={16} className="text-ministry-gold" />
                                <span className="font-medium text-gray-300">23 Países</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Image (3D Mockup) */}
                    <div className="relative mt-12 lg:mt-0 perspective-1000 animate-slide-up" style={{ animationDelay: '0.2s' }}>
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-ministry-gold/20 transform rotate-y-12 rotate-x-6 hover:rotate-0 transition-all duration-700 ease-out bg-ministry-dark group">
                            {/* Header of Browser Window */}
                            <div className="bg-gray-800 p-3 flex items-center gap-2 border-b border-gray-700">
                                <div className="flex gap-1.5">
                                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                </div>
                                <div className="bg-gray-900 text-gray-500 text-xs px-3 py-1.5 rounded-md flex-1 text-center font-mono">app.pulpitodinamico.com</div>
                            </div>

                            {/* Content Mockup */}
                            <div className="relative aspect-[4/3] bg-gray-900/50">
                                {/* This would be a real screenshot in prod, using a stylized placeholder for now */}
                                <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 p-6 flex flex-col">
                                    <div className="flex gap-4 h-full">
                                        {/* Sidebar */}
                                        <div className="w-16 bg-gray-800/50 rounded-lg h-full border border-white/5"></div>
                                        {/* Main Area */}
                                        <div className="flex-1 space-y-4">
                                            <div className="h-8 bg-gray-700/50 rounded w-1/3"></div>
                                            <div className="h-32 bg-gray-700/30 rounded w-full border border-white/5 p-4 space-y-2">
                                                <div className="h-2 bg-gray-600/50 rounded w-full"></div>
                                                <div className="h-2 bg-gray-600/50 rounded w-5/6"></div>
                                                <div className="h-2 bg-gray-600/50 rounded w-4/6"></div>
                                            </div>
                                            <div className="flex gap-4">
                                                <div className="h-24 bg-ministry-blue/20 rounded-lg flex-1 border border-ministry-blue/30 flex items-center justify-center flex-col gap-2">
                                                    <div className="w-8 h-8 rounded-full bg-ministry-blue/50"></div>
                                                    <div className="h-2 bg-ministry-blue/40 w-12 rounded"></div>
                                                </div>
                                                <div className="h-24 bg-gray-700/30 rounded-lg flex-1"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Floating Overlay Card */}
                                <div className="absolute bottom-8 right-8 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl shadow-2xl max-w-xs animate-float">
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white">✓</div>
                                        <div>
                                            <p className="text-white font-bold text-sm">Exégesis Compleata</p>
                                            <p className="text-xs text-green-300">Generada en 4.2s</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Decorative element behind */}
                        <div className="absolute -z-10 top-10 -right-10 w-64 h-64 bg-ministry-blue rounded-full filter blur-3xl opacity-40"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};
