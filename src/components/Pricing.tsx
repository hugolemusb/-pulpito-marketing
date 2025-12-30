import React, { useState } from 'react';
import { Check, AlertCircle } from 'lucide-react';
import { PRICING_PLANS } from '../constants';

export const Pricing: React.FC = () => {
    const [isAnnual, setIsAnnual] = useState(false);

    // Helper to calculate pricing display
    const getPrice = (basePrice: number) => {
        if (basePrice === 0) return 0;
        if (isAnnual) {
            // Annual price = (Monthly * 11) / 12 to show "monthly equivalent" 
            // OR explicitly show the discount. 
            // User said: "Annual value is monthly * 11 (1 month free)".
            // Let's show the monthly equivalent cost if paid annually.
            // Total Annual Cost = basePrice * 11.
            // Monthly breakdown = (basePrice * 11) / 12.
            return ((basePrice * 11) / 12).toFixed(2);
        }
        return basePrice;
    };

    const getAnnualTotal = (basePrice: number) => {
        return (basePrice * 11).toFixed(2);
    };

    return (
        <section id="pricing" className="py-24 bg-gray-50 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-serif font-bold text-ministry-blue mb-6">
                        Invierte en tu Ministerio
                    </h2>
                    <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
                        Herramientas profesionales al precio de un café. Elige el plan que mejor se adapte a tu iglesia.
                    </p>

                    <div className="flex justify-center items-center gap-4">
                        <span className={`font-medium text-sm ${!isAnnual ? 'text-ministry-blue font-bold' : 'text-gray-500'}`}>
                            Mensual
                        </span>
                        <button
                            onClick={() => setIsAnnual(!isAnnual)}
                            className="relative w-16 h-8 bg-ministry-blue rounded-full p-1 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ministry-blue"
                        >
                            <div className={`w-6 h-6 bg-ministry-gold rounded-full shadow-md transform transition-transform duration-300 ${isAnnual ? 'translate-x-8' : ''}`}></div>
                        </button>
                        <span className={`font-medium text-sm ${isAnnual ? 'text-ministry-blue font-bold' : 'text-gray-500'}`}>
                            Anual <span className="bg-green-100 text-green-700 text-xs px-2 py-0.5 rounded-full ml-1">1 Mes Gratis</span>
                        </span>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
                    {PRICING_PLANS.map((plan) => (
                        <div
                            key={plan.id}
                            className={`bg-white rounded-2xl transition-all duration-300 relative flex flex-col h-full
                ${plan.popular
                                    ? 'shadow-2xl border-2 border-ministry-gold scale-105 z-10'
                                    : 'shadow-lg border border-gray-100 hover:shadow-xl'
                                }`}
                        >
                            {plan.popular && (
                                <div className="absolute top-0 inset-x-0 transform -translate-y-1/2 flex justify-center">
                                    <span className="bg-ministry-gold text-ministry-blue text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider shadow-sm">
                                        Más Popular
                                    </span>
                                </div>
                            )}

                            <div className="p-6 lg:p-8 flex-1">
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                                <p className="text-gray-500 text-sm mb-6 min-h-[40px]">{plan.description}</p>

                                <div className="flex items-baseline mb-2">
                                    <span className="text-4xl font-bold text-gray-900">${getPrice(plan.price)}</span>
                                    <span className="text-gray-500 ml-1 text-sm">/ mes</span>
                                </div>

                                {isAnnual && plan.price > 0 && (
                                    <p className="text-xs text-green-600 font-semibold mb-6">
                                        Facturado ${getAnnualTotal(plan.price)} anual
                                    </p>
                                )}

                                {/* Spacer if not annual to align buttons */}
                                {(!isAnnual || plan.price === 0) && <div className="h-6 mb-4"></div>}

                                <a
                                    href="#signup"
                                    className={`block w-full py-3 px-4 text-center rounded-lg font-bold transition-colors mb-8
                    ${plan.popular
                                            ? 'bg-ministry-gold hover:bg-ministry-goldLight text-ministry-blue shadow-md'
                                            : 'bg-white border-2 border-ministry-blue text-ministry-blue hover:bg-ministry-blue hover:text-white'
                                        }`}
                                >
                                    {plan.cta}
                                </a>

                                <ul className="space-y-4">
                                    {plan.features.map((feature, i) => (
                                        <li key={i} className="flex items-start">
                                            <Check className={`h-5 w-5 mr-3 flex-shrink-0 ${plan.popular ? 'text-ministry-gold' : 'text-blue-500'}`} />
                                            <span className="text-gray-600 text-sm leading-tight">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Legal Disclaimer */}
                <div className="mt-12 max-w-3xl mx-auto text-center bg-blue-50 p-4 rounded-xl border border-blue-100">
                    <div className="flex items-start justify-center gap-2 text-gray-500 text-xs">
                        <AlertCircle size={14} className="mt-0.5" />
                        <p>
                            <strong>Información de Pago:</strong> Los precios se muestran en Dólares Estadounidenses (USD).
                            Dependiendo de su país de residencia, pueden aplicarse impuestos locales (como IVA) o tasas de conversión bancaria adicionales al momento del pago.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
