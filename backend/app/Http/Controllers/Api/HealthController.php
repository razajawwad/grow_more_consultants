<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\JsonResponse;

class HealthController
{
    public function __invoke(): JsonResponse
    {
        return response()->json([
            'success' => true,
            'service' => 'grow-more-consultants-api',
            'status' => 'healthy',
            'timestamp' => now()->toISOString(),
        ]);
    }
}
