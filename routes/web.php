<?php

use App\Http\Controllers\auth\LoginController;
use App\Http\Controllers\auth\LogoutController;
use App\Http\Controllers\dashboard\DashboardController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\NewsController;
use App\Http\Controllers\dashboard\NewsDashboardController;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', HomeController::class);
Route::get('/profile', ProfileController::class);
Route::get('/news', [NewsController::class, 'index']);
Route::get('/news/{slug}', [NewsController::class, 'show']);

Route::middleware('auth')->group(function () {
    Route::get('/dashboard', DashboardController::class);
    Route::get('/dashboard/news', [NewsDashboardController::class, 'index']);
    Route::post('/dashboard/news', [NewsDashboardController::class, 'store']);
    Route::get('/dashboard/news/create', [NewsDashboardController::class, 'create']);
    Route::get('/dashboard/news/{slug}', [NewsDashboardController::class, 'show']);
    Route::put('/dashboard/news/{slug}', [NewsDashboardController::class, 'update']);
    Route::delete('/dashboard/news/{slug}', [NewsDashboardController::class, 'destroy']);
    Route::post('/logout', [LogoutController::class, 'destroy']);
});

Route::middleware('guest')->group(function () {
    Route::get('/login', [LoginController::class, 'index']);
    Route::post('/login', [LoginController::class, 'store']);
});
