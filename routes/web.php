<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\BookController;

// Authenticated & Verified Routes
Route::middleware(['auth', 'verified'])->group(function () {

    // Dashboard Route (Controller-based)
    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');

    // Users Resource
    Route::resource('users', UserController::class);

    // Books Resource
    Route::resource('books', BookController::class);

    // Profile Management
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

});

require __DIR__.'/auth.php';
