export const PRICING_PLANS = [
    {
        id: 'free',
        name: 'Básico',
        price: 0,
        description: 'Para estudiantes y líderes que inician.',
        features: [
            '1 Traducción incluida',
            '10 Consultas de IA/mes',
            'Generador básico de bosquejos',
            'Almacenamiento: 15 sermones',
            'Sincronización en 1 dispositivo'
        ],
        cta: 'Comenzar Gratis',
        popular: false
    },
    {
        id: 'starter',
        name: 'Nivel 1',
        price: 9.99, // Updated from 8.99
        description: 'Para predicadores regulares.',
        features: [
            '50 Consultas de IA/mes',
            '5 Traducciones',
            'Bosquejos avanzados',
            'Almacenamiento: 50 sermones',
            'Sincronización en 2 dispositivos'
        ],
        cta: 'Prueba Gratis (7 Días)',
        popular: false
    },
    {
        id: 'pro',
        name: 'Nivel 2',
        price: 14.99,
        description: 'La opción favorita de pastores.',
        features: [
            'IA Ilimitada (Consultas)',
            'Traducciones Ilimitadas',
            'Modo Teleprompter',
            'Modo Offline',
            'Análisis de predicación',
            'Exportar a PDF/Word'
        ],
        cta: 'Prueba Gratis (7 Días)',
        popular: true
    },
    {
        id: 'expert',
        name: 'Nivel 3',
        price: 19.99,
        description: 'Para equipos y estudiosos profundos.',
        features: [
            'Todo lo del Nivel 2',
            'IA Modelo GPT-4 (Premium)',
            'Biblioteca Teológica (500+ libros)',
            'Griego y Hebreo',
            'Generador de Podcast',
            'Soporte Prioritario',
            'Hasta 5 usuarios (equipo)'
        ],
        cta: 'Prueba Gratis (7 Días)',
        popular: false
    }
];
