<?php

namespace App\Http\Controllers;

use App\Models\HasilPerhitungan;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
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

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'userName' => 'required|string|max:255',
            'kriteria' => 'required|array',
            'rumah' => 'required|array',
            'results' => 'required|array',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $hasilPerhitungan = new HasilPerhitungan();
        $hasilPerhitungan->user_name = $request->userName;
        $hasilPerhitungan->kriteria = json_encode($request->kriteria);
        $hasilPerhitungan->rumah = json_encode($request->rumah);
        $hasilPerhitungan->results = json_encode($request->results);
        $hasilPerhitungan->save();
    }
}
