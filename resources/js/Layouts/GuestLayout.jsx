import ApplicationLogo from '@/components/ApplicationLogo';
import { Link } from '@inertiajs/react';
import HeadLayout from './HeadLayout';

export default function GuestLayout({ title, children }) {
    return (
        <>
            <HeadLayout title={title} />

            <div className={'w-full h-screen flex items-center justify-center'}>
                {children}
            </div>
        </>
    );
}
