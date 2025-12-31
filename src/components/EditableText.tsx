import React, { useState, useEffect } from 'react';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { db } from '../lib/firebase';
import { useAuth } from '../context/AuthContext';
import { Pencil } from 'lucide-react';
import { clsx } from 'clsx';

interface EditableTextProps {
    section: string;
    field: string; // Document ID and Field combined logic for simplicity: 'sectionName.fieldName'
    defaultValue: string;
    className?: string; // For applying tailwind classes
    type?: 'text' | 'textarea';
}

export const EditableText: React.FC<EditableTextProps> = ({
    section,
    field,
    defaultValue,
    className,
    type = 'text'
}) => {
    const { isAdmin } = useAuth();
    const [content, setContent] = useState(defaultValue);
    const [isEditing, setIsEditing] = useState(false);
    const [loading, setLoading] = useState(true);

    // Load content from Firestore on mount
    useEffect(() => {
        const fetchData = async () => {
            try {
                const docRef = doc(db, 'content', section);
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                    const data = docSnap.data();
                    if (data && data[field]) {
                        setContent(data[field]);
                    } else {
                        // Use default if field doesn't exist
                    }
                }
            } catch (error) {
                console.error("Error fetching content:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [section, field]);

    const handleSave = async () => {
        try {
            const docRef = doc(db, 'content', section);
            // Merge: true is critical to not overwrite other fields in the same section
            await setDoc(docRef, { [field]: content }, { merge: true });
            setIsEditing(false);
        } catch (error) {
            console.error("Error saving content:", error);
            alert("Error al guardar cambios. Revise su conexión.");
        }
    };

    if (loading) {
        return <span className={clsx("animate-pulse bg-gray-200 text-transparent rounded", className)}>{defaultValue}</span>;
    }

    // Admin View: Click to Edit
    if (isAdmin) {
        if (isEditing) {
            return (
                <div className="relative inline-block w-full">
                    {type === 'textarea' ? (
                        <textarea
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            onBlur={handleSave}
                            autoFocus
                            className={clsx("w-full p-2 border-2 border-ministry-gold rounded bg-white text-gray-900 shadow-md outline-none", className)}
                            rows={4}
                        />
                    ) : (
                        <input
                            type="text"
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            onBlur={handleSave}
                            onKeyDown={(e) => { if (e.key === 'Enter') handleSave() }}
                            autoFocus
                            className={clsx("w-full p-1 border-b-2 border-ministry-gold bg-white text-gray-900 outline-none", className)}
                        />
                    )}
                    <div className="absolute top-0 right-0 -mt-6 bg-ministry-gold text-white text-xs px-2 py-1 rounded shadow">
                        Editando... (Enter/Click fuera para guardar)
                    </div>
                </div>
            );
        }

        return (
            <span
                onClick={() => setIsEditing(true)}
                className={clsx("relative cursor-pointer hover:bg-yellow-100 hover:ring-2 hover:ring-ministry-gold rounded transition-all px-1 -mx-1 group", className)}
                title="Clic para editar"
            >
                {content || <span className="text-gray-400 italic font-mono">[Vacio]</span>}
                <Pencil className="hidden group-hover:inline-block absolute -top-4 -right-4 bg-white text-ministry-blue p-1 rounded-full shadow-sm w-5 h-5" />
            </span>
        );
    }

    // Visitor View: Plain Text
    return <span className={className}>{content}</span>;
}
