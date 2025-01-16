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
import { useForm } from '@inertiajs/react';
import { Calculator, CirclePlus, Play } from 'lucide-react';
import { useState } from 'react';

// Komponen Form Kriteria
function KriteriaForm({ kriteria, setKriteria }) {
    const handleKriteriaChange = (index, field, value) => {
        const updatedKriteria = [...kriteria];
        updatedKriteria[index][field] = value;
        setKriteria(updatedKriteria);
    };

    const handleAddKriteria = () => {
        setKriteria([...kriteria, { nama_kriteria: "", bobot: 0, jenis: "benefit" }]);
    };

    return (
        <Card className={'shadow-lg'}>
            <CardHeader>
                <CardTitle>Kriteria</CardTitle>
                <CardDescription>Silahkan input kriteria</CardDescription>
            </CardHeader>
            <CardContent>
                {kriteria.map((k, index) => (
                    <div key={index} className="grid grid-cols-3 w-full items-center gap-4 mb-4">
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor={`kriteria-${index}`}>Kriteria</Label>
                            <Input
                                id={`kriteria-${index}`}
                                placeholder="Kriteria"
                                value={k.nama_kriteria}
                                onChange={(e) => handleKriteriaChange(index, 'nama_kriteria', e.target.value)}
                            />
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor={`bobot-${index}`}>Bobot</Label>
                            <Input
                                id={`bobot-${index}`}
                                placeholder="Bobot"
                                type="number"
                                value={k.bobot}
                                onChange={(e) => handleKriteriaChange(index, 'bobot', parseFloat(e.target.value))}
                            />
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor={`jenis-${index}`}>Cost/Benefit</Label>
                            <Select onValueChange={(value) => handleKriteriaChange(index, 'jenis', value)}>
                                <SelectTrigger id={`jenis-${index}`}>
                                    <SelectValue placeholder="Cost/Benefit" value={k.jenis} />
                                </SelectTrigger>
                                <SelectContent position="popper">
                                    <SelectItem value="cost">Cost</SelectItem>
                                    <SelectItem value="benefit">Benefit</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                ))}
            </CardContent>
            <CardFooter className="flex justify-end">
                <Button onClick={handleAddKriteria}>
                    <CirclePlus />Tambah Kriteria
                </Button>
            </CardFooter>
        </Card>
    );
}

// Komponen Form Data Rumah
function RumahForm({ kriteria, rumah, setRumah }) {
    const handleRumahChange = (index, field, value) => {
        const updatedRumah = [...rumah];
        updatedRumah[index][field] = value;
        setRumah(updatedRumah);
    };

    const handleAddRumah = () => {
        const newRumah = { nama_rumah: "" };
        kriteria.forEach((_, i) => {
            newRumah[`kriteria${i + 1}`] = 0;
        });
        setRumah([...rumah, newRumah]);
    };

    return (
        <Card className={'shadow-lg'}>
            <CardHeader>
                <CardTitle>Data Rumah</CardTitle>
                <CardDescription>Silahkan input data rumah</CardDescription>
            </CardHeader>
            <CardContent>
                {rumah.map((r, rumahIndex) => (
                    <div key={rumahIndex} className="grid grid-cols-1 w-full gap-4">
                        <div className="grid grid-cols-7 items-center gap-4">
                            <div className="col-span-2 flex flex-col space-y-1.5">
                                <Label htmlFor={`nama_rumah-${rumahIndex}`}>Nama Rumah</Label>
                                <Input
                                    id={`nama_rumah-${rumahIndex}`}
                                    placeholder="Nama Rumah"
                                    value={r.nama_rumah}
                                    onChange={(e) => handleRumahChange(rumahIndex, 'nama_rumah', e.target.value)}
                                />
                            </div>
                            {kriteria.map((k, kriteriaIndex) => (
                                <div key={kriteriaIndex} className="flex flex-col space-y-1.5">
                                    <Label htmlFor={`kriteria-${kriteriaIndex + 1}-${rumahIndex}`}>{k.nama_kriteria || `Kriteria ${kriteriaIndex + 1}`}</Label>
                                    <Input
                                        id={`kriteria-${kriteriaIndex + 1}-${rumahIndex}`}
                                        placeholder={`Kriteria ${kriteriaIndex + 1}`}
                                        type="number"
                                        value={r[`kriteria${kriteriaIndex + 1}`]}
                                        onChange={(e) => handleRumahChange(rumahIndex, `kriteria${kriteriaIndex + 1}`, parseFloat(e.target.value))}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </CardContent>
            <CardFooter className="flex justify-end">
                <Button onClick={handleAddRumah}>
                    <CirclePlus />Tambah Data Rumah
                </Button>
            </CardFooter>
        </Card>
    );
}

// Komponen Hasil Perhitungan
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
                                {results.map((result, index) => (
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

export default function Hitung() {
    const { data, setData, post, processing, errors } = useForm({
        kriteria: [],
        rumah: [],
        results: [],
    });
    const [kriteria, setKriteria] = useState(data.kriteria);
    const [rumah, setRumah] = useState(data.rumah);
    const [results, setResults] = useState(data.results);

    const hitung = () => {
        if (!kriteria.length || !rumah.length) {
            alert("Kriteria dan data rumah harus diisi!");
            return;
        }

        const totalBobot = kriteria.reduce((sum, k) => sum + parseFloat(k.bobot), 0);
        const normalizedWeights = kriteria.map(k => k.bobot / totalBobot);

        const normalizedData = rumah.map(r => {
            const normalized = { nama_rumah: r.nama_rumah, score: 0 };
            kriteria.forEach((k, i) => {
                const value = parseFloat(r[`kriteria${i + 1}`]);
                if (k.jenis === "benefit") {
                    const maxValue = Math.max(...rumah.map(r => parseFloat(r[`kriteria${i + 1}`])));
                    normalized[`kriteria${i + 1}`] = value / maxValue;
                } else {
                    const minValue = Math.min(...rumah.map(r => parseFloat(r[`kriteria${i + 1}`])));
                    normalized[`kriteria${i + 1}`] = minValue / value;
                }
            });
            return normalized;
        });

        const finalResults = normalizedData.map((n, ri) => {
            let score = 0;
            kriteria.forEach((_, ki) => {
                score += n[`kriteria${ki + 1}`] * normalizedWeights[ki];
            });
            return { nama_rumah: n.nama_rumah, score };
        });

        finalResults.sort((a, b) => b.score - a.score);
        setResults(finalResults);
    };

    return (
        <AppLayout title={'Hitung'}>
            <div className={'p-4 container mx-auto'}>
                <div className={'mb-8'}>
                    <KriteriaForm kriteria={kriteria} setKriteria={setKriteria} />
                </div>
                <div className={'mb-8'}>
                    <RumahForm kriteria={kriteria} rumah={rumah} setRumah={setRumah} />
                </div>
                <div className={'mb-8 flex justify-center'}>
                    <Button onClick={hitung}>
                        <Calculator />Hitung
                    </Button>
                </div>
                <div>
                    <Hasil results={results} />
                </div>
            </div>
        </AppLayout>
    );
}