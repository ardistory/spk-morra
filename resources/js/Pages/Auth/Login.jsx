import InputError from '@/components/InputError';
import PrimaryButton from '@/components/PrimaryButton';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import GuestLayout from '@/Layouts/GuestLayout';
import { cn } from '@/lib/utils';
import { Link, useForm } from '@inertiajs/react';
import { Loader } from 'lucide-react';

export default function Login({ status }) {
    const { toast } = useToast();

    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('login'), {
            onFinish: () => reset('password'),
            onError: () => {
                toast({
                    title: "Gagal!",
                    description: "Silahkan cek kembali email dan password",
                    variant: 'destructive',
                });
            },
        });
    };

    return (
        <GuestLayout title={'Login'}>
            <form onSubmit={submit}>
                <Card>
                    <CardHeader>
                        <CardTitle>
                            Login
                        </CardTitle>
                        <CardDescription>
                            Silahkan masukan email dan password
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        {status && (
                            <div className="mb-4 text-sm font-medium text-green-600">
                                {status}
                            </div>
                        )}

                        <div>
                            <div className="grid w-full max-w-sm items-center gap-1.5">
                                <Label htmlFor="email">Email</Label>
                                <Input value={data.email} onChange={(e) => setData('email', e.target.value)} type="email" id="email" placeholder="Email" />
                            </div>
                            <InputError message={errors.email} className="mt-2" />
                        </div>

                        <div className="mt-4">
                            <div className="grid w-full max-w-sm items-center gap-1.5">
                                <Label htmlFor="password">Password</Label>
                                <Input value={data.password} onChange={(e) => setData('password', e.target.value)} type="password" id="password" placeholder="Password" />
                            </div>
                            <InputError message={errors.password} className="mt-2" />
                        </div>

                        <div className="mt-4 block">
                            <div className="flex items-center space-x-2">
                                <Checkbox onCheckedChange={(value) => setData('remember', value)} id="terms" />
                                <label htmlFor="terms" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                    Remember me
                                </label>
                            </div>
                        </div>
                    </CardContent>
                    <CardFooter>
                        <div className="flex items-center justify-end gap-2">
                            <Button disabled={processing}>
                                <Loader className={cn('hidden animate-spin', { 'flex': processing })} />Login
                            </Button>
                        </div>
                    </CardFooter>
                </Card>
            </form>
        </GuestLayout >
    );
}
