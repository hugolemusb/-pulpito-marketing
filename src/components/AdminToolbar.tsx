import React from 'react';
import { useAuth } from '../context/AuthContext';
import { LogOut, LayoutDashboard } from 'lucide-react';

export const AdminToolbar: React.FC = () => {
    const { isAdmin, logout, user } = useAuth();

    if (!isAdmin) return null;

    return (
        <div className="fixed bottom-6 right-6 z-50 animate-slide-up">
            <div className="bg-ministry-blue text-white p-3 rounded-full shadow-2xl border-2 border-ministry-gold flex items-center gap-3 pr-6 group hover:scale-105 transition-transform">
                <div className="bg-ministry-gold text-ministry-blue p-2 rounded-full">
                    <LayoutDashboard size={20} />
                </div>
                <div className="flex flex-col">
                    <span className="font-bold text-sm">Modo Admin Activo</span>
                    <span className="text-[10px] text-gray-300 truncate max-w-[150px]">{user?.email}</span>
                </div>

                <div className="w-px h-8 bg-gray-600 mx-2"></div>

                <button
                    onClick={logout}
                    className="flex flex-col items-center hover:text-red-300 transition-colors"
                    title="Cerrar Sesión"
                >
                    <LogOut size={18} />
                    <span className="text-[9px] uppercase font-bold mt-0.5">Salir</span>
                </button>
            </div>
        </div>
    );
};
