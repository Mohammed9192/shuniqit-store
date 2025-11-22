import Image from "next/image";
import Link from "next/link";
import { formatCurrency } from "@/lib/utils";

interface ProductCardProps {
    id: string;
    name: string;
    price: number;
    image: string;
    category: string;
}

export default function ProductCard({ id, name, price, image, category }: ProductCardProps) {
    return (
        <Link href={`/products/${id}`} className="group block overflow-hidden rounded-lg border bg-white shadow-sm transition-all hover:shadow-md">
            <div className="relative aspect-square w-full overflow-hidden bg-gray-100">
                <Image
                    src={image}
                    alt={name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
            </div>
            <div className="p-4">
                <p className="text-xs text-muted-foreground">{category}</p>
                <h3 className="mt-1 text-lg font-medium text-gray-900">{name}</h3>
                <div className="mt-2 flex items-center justify-between">
                    <p className="font-bold text-primary">{formatCurrency(price)}</p>
                    <p className="text-sm text-muted-foreground">{formatCurrency(price * 10, 'UM')}</p>
                </div>
            </div>
        </Link>
    );
}
