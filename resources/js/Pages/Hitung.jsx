import AppLayout from '@/Layouts/AppLayout';
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Separator } from '@/components/ui/separator';
import { Calculator, CirclePlus, Play } from 'lucide-react';

export default function Hitung() {
    return (
        <AppLayout title={'Hitung'}>
            <div className={'h-dvh flex flex-col items-center justify-center relative before:w-96 before:h-96 before:absolute before:rounded-full before:bg-black before:left-[50%] before:top-[50%] before:translate-x-[-50%] before:translate-y-[-50%] before:blur-[200px] before:-z-10'}>
                <Card className={'absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] shadow-lg'}>
                    <CardHeader>
                        <CardTitle>Kriteria</CardTitle>
                        <CardDescription>silahkan input kriteria</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form>
                            <div className="grid grid-cols-3 w-full items-center gap-4">
                                <div className="flex flex-col space-y-1.5">
                                    <Label htmlFor="kriteria">Kriteria</Label>
                                    <Input id="kriteria" placeholder="Kriteria" />
                                </div>
                                <div className="flex flex-col space-y-1.5">
                                    <Label htmlFor="bobot">Bobot</Label>
                                    <Input id="bobot" placeholder="Bobot" />
                                </div>
                                <div className="flex flex-col space-y-1.5">
                                    <Label htmlFor="costOrBenevit">Cost/Benevit</Label>
                                    <Select>
                                        <SelectTrigger id="costOrBenevit">
                                            <SelectValue placeholder="Cost/Benevit" />
                                        </SelectTrigger>
                                        <SelectContent position="popper">
                                            <SelectItem value="cost">Cost</SelectItem>
                                            <SelectItem value="benevit">Benevit</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>
                        </form>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                        <Button>
                            <CirclePlus />Tambah Kriteria
                        </Button>
                        <Button>
                            <Play />Mulai
                        </Button>
                    </CardFooter>
                </Card>
            </div>
            <div className={'h-dvh flex flex-col items-center justify-center relative before:w-96 before:h-96 before:absolute before:rounded-full before:bg-black before:left-[50%] before:top-[50%] before:translate-x-[-50%] before:translate-y-[-50%] before:blur-[200px] before:-z-10'}>
                <Card className={'absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] shadow-lg'}>
                    <CardHeader>
                        <CardTitle>Data</CardTitle>
                        <CardDescription>silahkan input data</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form>
                            <div className="grid grid-cols-7 w-full items-center gap-4">
                                <div className="col-span-2 flex flex-col space-y-1.5">
                                    <Label htmlFor="nama_rumah">Nama Rumah</Label>
                                    <Input id="nama_rumah" placeholder="Nama Rumah" />
                                </div>
                                <div className="flex flex-col space-y-1.5">
                                    <Label htmlFor="kriteria_1">Kriteria 1</Label>
                                    <Input id="kriteria_1" placeholder="Kriteria 1" />
                                </div>
                                <div className="flex flex-col space-y-1.5">
                                    <Label htmlFor="kriteria_2">Kriteria 2</Label>
                                    <Input id="kriteria_2" placeholder="Kriteria 2" />
                                </div>
                                <div className="flex flex-col space-y-1.5">
                                    <Label htmlFor="kriteria_3">Kriteria 3</Label>
                                    <Input id="kriteria_3" placeholder="Kriteria 3" />
                                </div>
                                <div className="flex flex-col space-y-1.5">
                                    <Label htmlFor="kriteria_4">Kriteria 4</Label>
                                    <Input id="kriteria_4" placeholder="Kriteria 4" />
                                </div>
                                <div className="flex flex-col space-y-1.5">
                                    <Label htmlFor="kriteria_5">Kriteria 5</Label>
                                    <Input id="kriteria_5" placeholder="Kriteria 5" />
                                </div>
                            </div>
                        </form>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                        <Button>
                            <CirclePlus />Tambah Data
                        </Button>
                        <Button>
                            <Calculator />Hitung
                        </Button>
                    </CardFooter>
                </Card>
            </div>
            <div className={'h-dvh flex flex-col items-center justify-center relative before:w-96 before:h-96 before:absolute before:rounded-full before:bg-black before:left-[50%] before:top-[50%] before:translate-x-[-50%] before:translate-y-[-50%] before:blur-[200px] before:-z-10'}>
                <Card className={'absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] shadow-lg'}>
                    <CardHeader>
                        <CardTitle>Hasil</CardTitle>
                        <CardDescription>hasil yang di dapat</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Card className={'p-5'}>
                            <div className={'grid gap-2 items-center justify-center'}>
                                <p>Terbaik 1 : ini adalah terbaik ke-1</p>
                                <Separator />
                                <p>Terbaik 2 : ini adalah terbaik ke-2</p>
                                <Separator />
                                <p>Terbaik 3 : ini adalah terbaik ke-3</p>
                                <Separator />
                                <p>Terbaik 4 : ini adalah terbaik ke-4</p>
                                <Separator />
                                <p>Terbaik 5 : ini adalah terbaik ke-5</p>
                                <Separator />
                                <p>Terbaik 6 : ini adalah terbaik ke-6</p>
                                <Separator />
                            </div>
                        </Card>
                    </CardContent>
                </Card>
            </div>
        </AppLayout>
    );
}
