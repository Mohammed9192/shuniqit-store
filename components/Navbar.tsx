import Link from "next/link";
import { ShoppingCart, User, Search, Menu } from "lucide-react";

export default function Navbar() {
    return (
        <nav className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
            <div className="container flex h-16 items-center justify-between px-4 md:px-8">
                <div className="flex items-center gap-4">
                    <Link href="/" className="flex items-center space-x-2 rtl:space-x-reverse">
                        <span className="text-xl font-bold text-primary">متجر شنقيط</span>
                    </Link>
                </div>

                <div className="hidden md:flex flex-1 items-center justify-center px-8">
                    <div className="relative w-full max-w-md">
                        <Search className="absolute right-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                        <input
                            type="search"
                            placeholder="بحث عن منتجات..."
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 pr-9"
                        />
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <Link href="/cart" className="relative btn btn-ghost btn-circle">
                        <ShoppingCart className="h-6 w-6" />
                        <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-secondary text-[10px] text-white">
                            0
                        </span>
                    </Link>
                    <Link href="/auth/login" className="btn btn-ghost btn-circle">
                        <User className="h-6 w-6" />
                    </Link>
                    <button className="md:hidden">
                        <Menu className="h-6 w-6" />
                    </button>
                </div>
            </div>
        </nav>
    );
}
