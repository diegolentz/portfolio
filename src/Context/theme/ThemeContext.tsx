import { createContext, useContext, useEffect, useState } from 'react';
import type { ReactNode } from 'react';

interface ThemeContextType {
    isDark: boolean;
    toggleTheme: () => void;
}

interface ThemeProviderProps {
    children: ReactNode;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
    const [isDark, setIsDark] = useState<boolean>(() => {
        // Verificar si hay un valor en sessionStorage, si no, establecer modo oscuro por defecto
        const savedTheme = sessionStorage.getItem('dark');
        return savedTheme ? JSON.parse(savedTheme) : true;
    });

    useEffect(() => {
        // Guardar el estado en sessionStorage cada vez que cambie
        sessionStorage.setItem('dark', JSON.stringify(isDark));
        
        // Agregar o quitar la clase del tema al body

        if (isDark) {
            document.body.classList.add('dark-theme');
            document.body.classList.remove('light-theme');
        } else {
            document.body.classList.add('light-theme');
            document.body.classList.remove('dark-theme');
        }
    }, [isDark]);

    const toggleTheme = () => {
        setIsDark(prevTheme => !prevTheme);
    };

    return (
        <ThemeContext.Provider value={{ isDark, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = (): ThemeContextType => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme debe ser usado dentro de un ThemeProvider');
    }
    return context;
};
