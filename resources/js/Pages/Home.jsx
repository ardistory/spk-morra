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
            <div className={'h-dvh flex flex-col items-center justify-center gap-5'}>
                <div className={'text-5xl font-extrabold before:w-[600px] before:h-[600px] before:bg-gradient-to-br before:from-black before:from-50% before:to-black before:to-50% before:absolute before:-z-10 before:rounded-full before:top-[50%] before:left-[50%] before:translate-x-[-50%] before:translate-y-[-50%] before:blur-[300px]'}>
                    <p>Selamat Datang di Website Sistem Penunjang Keputusan</p>
                    <p>Pembelian Rumah Menggunakan Metode <span className={'text-6xl bg-black/70 text-white rounded-full px-7'}>MORRA</span></p>
                </div>

                <Button onClick={() => router.get(route('hitung'))}>
                    Mulai Hitung
                </Button>
                <div>
                    <Card>
                        <CardHeader>
                            <CardTitle>Aturan Perhitungan</CardTitle>
                            <CardDescription>Silahkan pahami aturan perhitungan</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <form>
                                <div className="grid w-full items-center gap-4">
                                    <div>
                                        {rules.map(rule => (
                                            <div key={rule.rule} className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0">
                                                <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
                                                <div className="space-y-1">
                                                    <p className="text-sm font-medium leading-none">
                                                        {rule.rule}
                                                    </p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </form>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </AppLayout >
    );
}
