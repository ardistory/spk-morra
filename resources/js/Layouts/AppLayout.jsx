import { Link, router } from '@inertiajs/react';
import HeadLayout from './HeadLayout';
import { Button } from '@/components/ui/button';
import { Calculator, House, Package2 } from 'lucide-react';

export default function AppLayout({ children, title }) {
    const menus = [
        {
            title: 'Home',
            route: 'home',
            icon: <House />,
        },
        {
            title: 'Hitung',
            route: 'hitung',
            icon: <Calculator />,
        },
        {
            title: 'Arsip',
            route: 'arsip',
            icon: <Package2 />,
        },
    ];

    return (
        <>
            <HeadLayout title={title} />

            <nav className={'w-full h-14 flex items-center z-10 bg-white'}>
                <div className={'container mx-auto p-3 flex gap-2 justify-center'}>
                    {menus.map(menu => (
                        <Button variant={'outline'} onClick={() => router.get(route(menu.route))}>
                            {menu.icon}{menu.title}
                        </Button>
                    ))}
                </div>
            </nav>

            <div className={'container mx-auto px-3'}>
                {children}
            </div>
        </>
    );
}