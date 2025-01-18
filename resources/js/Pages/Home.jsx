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
import { CirclePlay } from 'lucide-react';
import Background from '@/assets/img/Perumahan.jpg';
export default function Home() {
    const rules = [
        {
            rule: "Aturan satu"
        },
        {
            rule: "Aturan dua"
        },
        {
            rule: "Aturan tiga"
        },
        {
            rule: "Aturan empat"
        },
    ];

    return (
        <AppLayout title={'Home'}>
            <img src={Background} className={'absolute top-0 left-0 -z-10 w-full h-full md:h-screen brightness-[.3] object-cover'} />
            <div className={'mx-0 h-dvh flex flex-col items-center justify-center gap-5'}>
                <div className={'text-5xl font-extrabold'}>
                    <p className={'text-white'}>Selamat Datang di Website Perhitungan Rumah di Tangerang Selatan</p>
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
                            <iframe src="https://www.youtube.com/embed/Ns32mpkYmEo?si=6-LVuC_-OJ-Tysra" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </AppLayout >
    );
}
