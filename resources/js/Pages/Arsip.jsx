import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import AppLayout from '@/Layouts/AppLayout';
import { CirclePlus, Play } from 'lucide-react';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
export default function Arsip() {
    return (
        <AppLayout title={'Arsip'}>
            <div className={'flex flex-col gap-10 items-center p-10 justify-center before:w-96 before:h-96 before:absolute before:rounded-full before:bg-black before:left-[50%] before:top-[50%] before:translate-x-[-50%] before:translate-y-[-50%] before:blur-[200px] before:-z-10'}>
                <Card className={'shadow-lg'}>
                    <CardHeader>
                        <CardTitle>SADDAM</CardTitle>
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
                    <CardFooter>
                        <Dialog>
                            <DialogTrigger asChild>
                                <Button>
                                    Detail
                                </Button>
                            </DialogTrigger>
                            <DialogContent>
                                <DialogHeader>
                                    <DialogTitle>detail disini</DialogTitle>
                                    <DialogDescription>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, consequuntur? Quam quaerat quos, repudiandae aut doloribus aliquid illum eaque facilis impedit eum magni ea voluptas. Alias ex exercitationem quos perspiciatis, iusto quasi, quam ullam excepturi recusandae dolor, nisi vitae nulla!
                                    </DialogDescription>
                                </DialogHeader>
                            </DialogContent>
                        </Dialog>
                    </CardFooter>
                </Card>
                <Card className={'shadow-lg'}>
                    <CardHeader>
                        <CardTitle>SADDAM</CardTitle>
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
                    <CardFooter>
                        <Button>
                            Detail
                        </Button>
                    </CardFooter>
                </Card>
            </div>
        </AppLayout>
    );
}
