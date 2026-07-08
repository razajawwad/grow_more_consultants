<div style="font-family: Arial, sans-serif; color: #111827; line-height: 1.6;">
    <h2 style="color: #0f766e;">New Website Inquiry</h2>
    <p><strong>Full name:</strong> {{ $inquiry['fullName'] }}</p>
    <p><strong>Phone:</strong> {{ $inquiry['phone'] }}</p>
    <p><strong>Email:</strong> {{ $inquiry['email'] ?: 'Not provided' }}</p>
    <p><strong>Interested country:</strong> {{ $inquiry['interestedCountry'] ?: 'Not provided' }}</p>
    <p><strong>Last qualification:</strong> {{ $inquiry['lastQualification'] ?: 'Not provided' }}</p>
    <p><strong>Message:</strong></p>
    <p>{!! nl2br(e($inquiry['message'])) !!}</p>
</div>
