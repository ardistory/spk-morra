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
Route::delete('/arsip/{uuid}', [HitungController::class, 'delete'])->name('arsip_delete');
Route::get('/arsip/{uuid}', [HitungController::class, 'detail'])->name('arsip_detail');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::get('/dashboard', function () {
        Inertia::render('Admin/Dashboard');
    })->name('dashboard');
});

require __DIR__ . '/auth.php';
