import { createContext, useContext, useState } from "react";
import "./useToast.css";
export type ToastOptions = 'success' | 'error' | 'info' | 'warning';

type ToastType = {
    openToast: (message: string, option: ToastOptions) => void;
};

type ToastState = {
    message: string;
    type: ToastOptions;
    isopenToast: boolean;
};

const ToastContext = createContext<ToastType>({
    openToast: () => {},
});

export const useToast = () => useContext(ToastContext);

export const ToastProvider = ({ children }: { children: React.ReactNode }) => {
    const [toast, setToast] = useState<ToastState>({
        message: '',
        type: 'info',
        isopenToast: false
    });

    const openToast = (message: string, option: ToastOptions) => {
        setToast({ message, type: option, isopenToast: true });
        setTimeout(() => setToast(prev => ({ ...prev, isopenToast: false })), 1500);
    };

  
    return (
        <ToastContext.Provider value={{ openToast }}>
            {toast.isopenToast && (
                <div className={`toast toast-${toast.type}`}>
                    <div className="toast-content">
                        <p className="toastMsj">{toast.message}</p>
                    </div>
                </div>
            )}
            {children}
        </ToastContext.Provider>
    );
};

