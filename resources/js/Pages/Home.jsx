import { Button } from '@/components/ui/button';
import AppLayout from '@/Layouts/AppLayout';
import { router } from '@inertiajs/react';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import Background from '@/assets/img/Perumahan.jpg';
export default function Home({ auth }) {
    return (
        <AppLayout title={'Home'} auth={auth.user}>
            <img src={Background} className={'absolute top-0 left-0 -z-10 w-full h-full md:h-screen brightness-[.3] object-cover'} />
            <div className={'mx-0 h-dvh flex flex-col items-center md:justify-center gap-5'}>
                <div className={'text-4xl md:text-8xl text-center font-extrabold mt-32 md:mt-0 mb-20 md:mb-0'}>
                    <p className={'text-white'}>Selamat Datang di Website <span className={'bg-white text-black px-6 rounded-full'}>Perhitungan Rumah</span> di Tangerang Selatan</p>
                </div>
                <Button className={'bg-blue-500'} onClick={() => router.get(route('hitung'))}>
                    Mulai Hitung
                </Button>
                <div>
                    <Card>
                        <CardHeader>
                            <CardTitle>Video Tutorial</CardTitle>
                            <CardDescription>Silahkan pahami aturan perhitungan</CardDescription>
                        </CardHeader>
                        <CardContent className={'flex items-center justify-center'}>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/Ibv4i1v5rfg?si=JaDmMV-3GWopfb1r" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullCcreen></iframe>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </AppLayout >
    );
}
