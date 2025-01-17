<?php

use App\Http\Controllers\HitungController;
use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Home');
})->name('home');

Route::get('/hitung', function () {
    return Inertia::render('Hitung');
})->name('hitung');

Route::post('/hitung', [HitungController::class, 'store'])->name('hitung');

Route::get('/arsip', [HitungController::class, 'index'])->name('arsip');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
