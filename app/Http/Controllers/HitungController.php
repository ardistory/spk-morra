<?php

namespace App\Http\Controllers;

use App\Models\HasilPerhitungan;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HitungController extends Controller
{
    public function index()
    {
        $hasilPerhitungans = HasilPerhitungan::orderBy('is_favorite', 'desc')->get();
        return Inertia::render('Arsip', [
            'hasilPerhitungans' => $hasilPerhitungans
        ]);
    }

    public function patch($uuid, $favorite)
    {
        $updated = HasilPerhitungan::query()->where('uuid', '=', $uuid)->update([
            'is_favorite' => $this->stringToBoolean($favorite)
        ]);
        ($updated > 0) ? response(status: 200) : response(status: 500);
    }

    public function delete($uuid)
    {
        $deletedRows = HasilPerhitungan::query()->where('uuid', '=', $uuid)->delete();
        ($deletedRows > 0) ? response(status: 200) : response(status: 404);
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

    private function stringToBoolean($string)
    {
        return filter_var($string, FILTER_VALIDATE_BOOLEAN, FILTER_NULL_ON_FAILURE);
    }
}
