import { Button } from '@/components/ui/button';
import AppLayout from '@/Layouts/AppLayout';
import { router } from '@inertiajs/react';

export default function Home() {
    return (
        <AppLayout title={'Home'}>
            <div className={'h-dvh flex flex-col items-center justify-center gap-5 text-5xl font-extrabold'}>
                <div className={'before:w-[600px] before:h-[600px] before:bg-gradient-to-br before:from-black before:from-50% before:to-black before:to-50% before:absolute before:-z-10 before:rounded-full before:top-[50%] before:left-[50%] before:translate-x-[-50%] before:translate-y-[-50%] before:blur-[300px]'}>
                    <p>Selamat Datang di Website Sistem Penunjang Keputusan</p>
                    <p>Pembelian Rumah Menggunakan Metode <span className={'text-6xl bg-black/70 text-white rounded-full px-7'}>MORRA</span></p>
                </div>

                <Button onClick={() => router.get(route('hitung'))}>
                    Mulai Hitung
                </Button>
            </div>
        </AppLayout >
    );
}
