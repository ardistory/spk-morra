import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import AppLayout from '@/Layouts/AppLayout';
import { router } from '@inertiajs/react';
import { ReceiptText, Trash } from 'lucide-react';
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


export default function Arsip({ hasilPerhitungans, auth }) {
    return (
        <AppLayout title={'Arsip'} auth={auth.user}>
            <div className={'pt-16 grid grid-cols-1 md:grid-cols-4 gap-10 mt-10 relative before:w-96 before:h-96 before:absolute before:rounded-full before:bg-black before:left-[50%] before:top-[50%] before:translate-x-[-50%] before:translate-y-[-50%] before:blur-[200px] before:-z-10'}>
                {hasilPerhitungans.map((hasil, index) => (
                    <Card key={index} className={'shadow-lg'}>
                        <CardHeader>
                            <CardTitle>{hasil.user_name}</CardTitle>
                            <CardDescription>Hasil Perhitungan</CardDescription>
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
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </AppLayout>
    );
}