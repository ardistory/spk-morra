import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import AppLayout from '@/Layouts/AppLayout';
import { router } from '@inertiajs/react';
import { ReceiptText, Star, Trash } from 'lucide-react';
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { toast } from '@/hooks/use-toast';
import Background from '@/assets/img/Perumahan.jpg';

export default function Arsip({ hasilPerhitungans, auth }) {
    console.log(hasilPerhitungans);
    return (
        <AppLayout title={'Arsip'} auth={auth.user}>
            <img src={Background} className={'absolute top-0 left-0 -z-10 w-full h-full md:h-screen brightness-[.2] object-cover'} />
            <div className={'pt-16 grid grid-cols-1 md:grid-cols-4 gap-10 mt-10 relative'}>
                {hasilPerhitungans.map((hasil, index) => (
                    <Card key={index} className={'shadow-lg'}>
                        <CardHeader>
                            <div className={'flex items-center justify-between'}>
                                <div>
                                    <CardTitle>{hasil.user_name}</CardTitle>
                                    <CardDescription>Hasil Perhitungan</CardDescription>
                                </div>
                                <Star fill={hasil.is_favorite ? 'yellow' : 'white'} strokeWidth={1} className={'cursor-pointer'} onClick={() => {
                                    router.patch(route('arsip_patch', { uuid: hasil.uuid, favorite: !hasil.is_favorite }), { onSuccess: () => toast({ title: "Berhasil!", description: "Arsip ditambah ke favorit." }) });
                                }} />
                            </div>
                        </CardHeader>
                        <CardContent>
                            <Card className={'p-5'}>
                                <div className={'grid gap-2 items-center justify-center'}>
                                    {hasil.results && JSON.parse(hasil.results).map((result, resIndex) => (
                                        <div key={resIndex}>
                                            <p>{resIndex + 1}. {result.nama_rumah} ({result.score.toFixed(2)})</p>
                                            {resIndex < hasil.results.length - 1 && <Separator />}
                                        </div>
                                    ))}
                                </div>
                            </Card>
                        </CardContent>
                        <CardFooter className={'flex gap-2'}>
                            <Button onClick={() => router.visit(route('arsip_detail', { uuid: hasil.uuid }))}>
                                <ReceiptText /> Detail
                            </Button>
                            {auth.user && (
                                <AlertDialog>
                                    <AlertDialogTrigger>
                                        <Button variant={'destructive'}>
                                            <Trash /> Hapus
                                        </Button>
                                    </AlertDialogTrigger>
                                    <AlertDialogContent>
                                        <AlertDialogHeader>
                                            <AlertDialogTitle>Ingin hapus Arsip ini?</AlertDialogTitle>
                                            <AlertDialogDescription>
                                                Tindakan ini tidak dapat dibatalkan. Tindakan ini akan menghapus data Anda dari server.
                                            </AlertDialogDescription>
                                        </AlertDialogHeader>
                                        <AlertDialogFooter>
                                            <AlertDialogCancel>Batal</AlertDialogCancel>
                                            <AlertDialogAction onClick={() => router.delete(route('arsip_delete', { uuid: hasil.uuid }), { onSuccess: () => toast({ title: "Arsip dihapus!", description: "Berhasil hapus Arsip!" }) })}>
                                                Hapus
                                            </AlertDialogAction>
                                        </AlertDialogFooter>
                                    </AlertDialogContent>
                                </AlertDialog>
                            )}
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </AppLayout>
    );
}