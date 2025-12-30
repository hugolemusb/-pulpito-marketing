import React from 'react';
import { BookOpen, Facebook, Instagram, Twitter, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
    return (
        <footer className="bg-ministry-dark text-gray-400 py-12 border-t border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">

                    <div className="col-span-1 md:col-span-1">
                        <div className="flex items-center gap-2 mb-4">
                            <BookOpen className="text-ministry-gold h-6 w-6" />
                            <span className="font-serif font-bold text-xl text-white">
                                Púlpito <span className="text-ministry-gold">Dinámico</span>
                            </span>
                        </div>
                        <p className="text-sm leading-relaxed mb-4">
                            Herramientas avanzadas para pastores y líderes que buscan profundidad bíblica y excelencia en la predicación.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="text-gray-400 hover:text-ministry-gold transition-colors"><Facebook size={20} /></a>
                            <a href="#" className="text-gray-400 hover:text-ministry-gold transition-colors"><Instagram size={20} /></a>
                            <a href="#" className="text-gray-400 hover:text-ministry-gold transition-colors"><Twitter size={20} /></a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Producto</h4>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#features" className="hover:text-ministry-gold transition-colors">Características</a></li>
                            <li><a href="#pricing" className="hover:text-ministry-gold transition-colors">Planes y Precios</a></li>
                            <li><a href="#" className="hover:text-ministry-gold transition-colors">Actualizaciones</a></li>
                            <li><a href="#" className="hover:text-ministry-gold transition-colors">Guía de Uso</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Legal</h4>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="hover:text-ministry-gold transition-colors">Términos de Servicio</a></li>
                            <li><a href="#" className="hover:text-ministry-gold transition-colors">Política de Privacidad</a></li>
                            <li><a href="#" className="hover:text-ministry-gold transition-colors">Aviso de Impuestos</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Contacto</h4>
                        <ul className="space-y-2 text-sm">
                            <li className="flex items-center gap-2"><Mail size={16} /> soporte@pulpitodinamico.com</li>
                            <li>Lun - Vie, 9am - 6pm</li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs">
                    <p>&copy; {new Date().getFullYear()} Púlpito Dinámico. Todos los derechos reservados.</p>
                    <p className="mt-2 md:mt-0">Diseñado para la gloria de Dios.</p>
                </div>
            </div>
        </footer>
    );
};
