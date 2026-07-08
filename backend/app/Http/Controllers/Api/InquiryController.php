<?php

namespace App\Http\Controllers\Api;

use App\Mail\InquiryReceived;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class InquiryController
{
    public function store(Request $request): JsonResponse
    {
        $inquiry = $request->validate([
            'fullName' => ['required', 'string', 'min:2', 'max:80'],
            'phone' => ['required', 'string', 'min:7', 'max:20'],
            'email' => ['nullable', 'email', 'max:120'],
            'interestedCountry' => ['nullable', 'string', 'min:2', 'max:80'],
            'lastQualification' => ['nullable', 'string', 'min:2', 'max:80'],
            'message' => ['required', 'string', 'min:10', 'max:1000'],
        ]);

        Mail::to(config('mail.inquiry_to'))->send(new InquiryReceived($inquiry));

        return response()->json([
            'success' => true,
            'message' => 'Inquiry sent successfully.',
        ], 201);
    }
}
