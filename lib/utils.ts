import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export function formatCurrency(amount: number, currency: 'MRU' | 'UM' = 'MRU') {
    if (currency === 'UM') {
        return new Intl.NumberFormat('ar-MR', {
            style: 'currency',
            currency: 'MRO', // Old currency code often used for display or just custom formatting
        }).format(amount).replace('MRO', 'أوقية');
    }
    return new Intl.NumberFormat('ar-MR', {
        style: 'currency',
        currency: 'MRU',
    }).format(amount);
}
