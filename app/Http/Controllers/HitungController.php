<?php

namespace App\Http\Controllers;

use App\Models\HasilPerhitungan;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HitungController extends Controller
{
    public function index()
    {
        $hasilPerhitungans = HasilPerhitungan::orderBy('created_at', 'desc')->get();
        return Inertia::render('Arsip', [
            'hasilPerhitungans' => $hasilPerhitungans
        ]);
    }

    public function detail($uuid)
    {
        $details = HasilPerhitungan::query()->where('uuid', '=', $uuid)->get();
        return Inertia::render('ArsipDetail', [
            'details' => $details
        ]);
    }

    public function store(Request $request)
    {

        $requestValidated = $request->validate([
            'uuid' => 'required|uuid',
            'userName' => 'required|string|max:255',
            'kriteria' => 'required|array',
            'rumah' => 'required|array',
            'results' => 'required|array',
        ]);

        $hasilPerhitungan = new HasilPerhitungan();
        $hasilPerhitungan->uuid = $requestValidated['uuid'];
        $hasilPerhitungan->user_name = $requestValidated['userName'];
        $hasilPerhitungan->kriteria = json_encode($requestValidated['kriteria']);
        $hasilPerhitungan->rumah = json_encode($requestValidated['rumah']);
        $hasilPerhitungan->results = json_encode($requestValidated['results']);
        $hasilPerhitungan->save();
    }
}
