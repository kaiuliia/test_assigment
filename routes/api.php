<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('posts', [Api\BlogPostsController::class, 'index']);
Route::post('posts', [Api\BlogPostsController::class, 'store']);
Route::get('posts/{post}', [Api\BlogPostsController::class, 'show']);
Route::put('posts/{post}', [Api\BlogPostsController::class, 'update']);
Route::delete('posts/{post}', [Api\BlogPostsController::class, 'destroy']);

