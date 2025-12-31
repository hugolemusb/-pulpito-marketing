import React, { useState } from 'react';
import { BookOpen, PenTool, Search, Globe, Smartphone } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { EditableText } from './EditableText';

interface Feature {
    id: string;
    title: string;
    icon: LucideIcon;
    desc: string;
    image: string;
}

const FEATURES_DATA: Feature[] = [
    {
        id: 'ai',
        title: 'Asistente de IA',
        icon: BookOpen,
        desc: 'Tu compañero de investigación inteligente. Genera bosquejos exegéticos, obtén contextos históricos y análisis etimológicos en segundos, siempre con una base teológica conservadora y sólida.',
        image: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
    },
    {
        id: 'editor',
        title: 'Editor de Sermones',
        icon: PenTool,
        desc: 'Un editor diseñado específicamente para la predicación. Organiza tus notas, arrastra versículos bíblicos automáticamente y estructura tu mensaje en bloques claros para el púlpito.',
        image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
    },
    {
        id: 'library',
        title: 'Biblioteca Teológica',
        icon: Search,
        desc: 'Accede a más de 500 recursos clásicos: Comentarios de Matthew Henry, Jamieson-Fausset-Brown, diccionarios griegos y hebreos, todo integrado en tu flujo de trabajo.',
        image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
    },
    {
        id: 'multi',
        title: 'Multi-Idioma',
        icon: Globe,
        desc: 'Predica a las naciones. Traduce tus sermones instantáneamente a más de 25 idiomas con precisión teológica, manteniendo el tono y la intención pastoral.',
        image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
    },
    {
        id: 'mobile',
        title: 'Modo Púlpito',
        icon: Smartphone,
        desc: 'Lleva tu sermón al púlpito con confianza. El modo lectura optimiza el texto para tablets, con cronómetro integrado y cero distracciones.',
        image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
    },
];

export const Features: React.FC = () => {
    const [activeTab, setActiveTab] = useState(0);
    const activeFeature = FEATURES_DATA[activeTab];

    return (
        <section id="features" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <span className="text-ministry-gold font-bold tracking-wider uppercase text-sm bg-yellow-50 px-4 py-1 rounded-full border border-yellow-100">
                        Potencia tu Ministerio
                    </span>
                    <h2 className="mt-4 text-3xl md:text-5xl font-serif font-bold text-ministry-blue">
                        <EditableText section="features" field="mainTitle" defaultValue="Todo lo que necesitas para predicar" />
                    </h2>
                </div>

                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Tabs Navigation */}
                    <div className="lg:w-1/3 flex flex-col gap-2">
                        {FEATURES_DATA.map((feature, index) => (
                            <button
                                key={feature.id}
                                onClick={() => setActiveTab(index)}
                                className={`w-full text-left p-4 rounded-xl flex items-center gap-4 transition-all duration-300 group ${activeTab === index
                                    ? 'bg-ministry-blue text-white shadow-lg shadow-blue-900/20'
                                    : 'hover:bg-gray-50 text-gray-600'
                                    }`}
                            >
                                <div className={`p-2 rounded-lg transition-colors ${activeTab === index ? 'bg-white/10 text-ministry-gold' : 'bg-gray-100 text-gray-400 group-hover:text-ministry-blue'
                                    }`}>
                                    <feature.icon size={20} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-base">
                                        <EditableText section="features" field={`tab_${feature.id}_title`} defaultValue={feature.title} />
                                    </h3>
                                </div>
                            </button>
                        ))}
                    </div>

                    {/* Active Feature Display */}
                    <div className="lg:w-2/3">
                        <div className="bg-gray-50 rounded-2xl shadow-xl overflow-hidden border border-gray-100 h-full flex flex-col">
                            <div className="relative h-64 sm:h-80 overflow-hidden group">
                                <img
                                    src={activeFeature.image}
                                    alt={activeFeature.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent flex items-end p-8">
                                    <h3 className="text-3xl font-serif font-bold text-white">
                                        <EditableText section="features" field={`feature_${activeFeature.id}_title`} defaultValue={activeFeature.title} />
                                    </h3>
                                </div>
                            </div>
                            <div className="p-8 flex-1 flex flex-col justify-between">
                                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                                    <EditableText section="features" field={`feature_${activeFeature.id}_desc`} defaultValue={activeFeature.desc} type="textarea" />
                                </p>
                                <div>
                                    <a href="#signup" className="inline-flex items-center text-ministry-blue font-bold hover:text-ministry-gold transition-colors group">
                                        Descubrir más <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
