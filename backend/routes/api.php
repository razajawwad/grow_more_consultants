<?php

use App\Http\Controllers\Api\HealthController;
use App\Http\Controllers\Api\InquiryController;
use Illuminate\Support\Facades\Route;

Route::prefix('v1')->group(function (): void {
    Route::get('/health', HealthController::class);
    Route::post('/inquiries', [InquiryController::class, 'store']);
});
