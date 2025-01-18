import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import AppLayout from '@/Layouts/AppLayout';

function KriteriaForm({ kriteria }) {
    return (
        <Card className={'shadow-lg'}>
            <CardHeader>
                <CardTitle>Kriteria</CardTitle>
                <CardDescription>Detail data kriteria</CardDescription>
            </CardHeader>
            <CardContent>
                {JSON.parse(kriteria).map((k, index) => (
                    <div key={index} className="grid grid-cols-3 w-full items-center gap-4 mb-4">
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor={`kriteria-${index}`}>Kriteria</Label>
                            <Input
                                id={`kriteria-${index}`}
                                placeholder="Kriteria"
                                defaultValue={k.nama_kriteria}
                                readOnly={true}
                            />
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor={`bobot-${index}`}>Bobot</Label>
                            <Input
                                id={`bobot-${index}`}
                                placeholder="Bobot"
                                type="number"
                                defaultValue={k.bobot}
                                readOnly={true}
                            />
                        </div>
                        <div className={'flex items-center justify-start gap-4'}>
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor={`jenis-${index}`}>Cost/Benefit</Label>
                                <Input
                                    id={`jenis-${index}`}
                                    defaultValue={k.jenis}
                                    readOnly={true}
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </CardContent>
        </Card>
    );
}

function RumahForm({ kriteria, rumah }) {
    return (
        <Card className={'shadow-lg'}>
            <CardHeader>
                <CardTitle>Data Rumah</CardTitle>
                <CardDescription>Detail data rumah</CardDescription>
            </CardHeader>
            <CardContent>
                {JSON.parse(rumah).map((r, rumahIndex) => (
                    <div key={rumahIndex} className="grid grid-cols-1 w-full gap-4">
                        <div className="grid grid-cols-7 items-center gap-4">
                            <div className="col-span-2 flex flex-col space-y-1.5">
                                <Label htmlFor={`nama_rumah-${rumahIndex}`}>Nama Rumah</Label>
                                <Input
                                    id={`nama_rumah-${rumahIndex}`}
                                    placeholder="Nama Rumah"
                                    defaultValue={r.nama_rumah}
                                    readOnly={true}
                                />
                            </div>
                            {JSON.parse(kriteria).map((k, kriteriaIndex) => (
                                <div key={kriteriaIndex} className="flex flex-col space-y-1.5">
                                    <Label htmlFor={`kriteria-${kriteriaIndex + 1}-${rumahIndex}`}>{k.nama_kriteria || `Kriteria ${kriteriaIndex + 1}`}</Label>
                                    <Input
                                        id={`kriteria-${kriteriaIndex + 1}-${rumahIndex}`}
                                        placeholder={`Kriteria ${kriteriaIndex + 1}`}
                                        type="number"
                                        defaultValue={r[`kriteria${kriteriaIndex + 1}`]}
                                        readOnly={true}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </CardContent>
        </Card>
    );
}

function Hasil({ results }) {
    return (
        <Card className={'shadow-lg'}>
            <CardHeader>
                <CardTitle>Hasil Perhitungan</CardTitle>
                <CardDescription>Hasil perhitungan SPK</CardDescription>
            </CardHeader>
            <CardContent>
                {results && results.length > 0 ? (
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead>
                                <tr>
                                    <th className="py-2 px-4 font-semibold border-b">Peringkat</th>
                                    <th className="py-2 px-4 font-semibold border-b">Nama Rumah</th>
                                    <th className="py-2 px-4 font-semibold border-b">Score</th>
                                </tr>
                            </thead>
                            <tbody>
                                {JSON.parse(results).map((result, index) => (
                                    <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : ""}>
                                        <td className="py-2 px-4 border-b">{index + 1}</td>
                                        <td className="py-2 px-4 border-b">{result.nama_rumah}</td>
                                        <td className="py-2 px-4 border-b">{result.score.toFixed(2)}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                ) : (
                    <p>Tidak ada hasil perhitungan.</p>
                )}
            </CardContent>
        </Card>
    );
}

export default function ArsipDetail({ details, auth }) {
    return (
        <AppLayout title={'Arsip Detail'} auth={auth.user}>
            <div className={'pt-16 p-4 container mx-auto'}>
                <div className={'mb-4'}>
                    <Label htmlFor="userName">Nama Pengguna</Label>
                    <Input
                        id="userName"
                        placeholder="Masukkan Nama Pengguna"
                        defaultValue={details[0].user_name}
                        readOnly={true}
                    />
                </div>
                <div className={'mb-8'}>
                    <KriteriaForm kriteria={details[0].kriteria} />
                </div>
                <div className={'mb-8'}>
                    <RumahForm kriteria={details[0].kriteria} rumah={details[0].rumah} />
                </div>
                <div>
                    <Hasil results={details[0].results} />
                </div>
            </div>
        </AppLayout>
    );
}