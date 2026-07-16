@php
    $email = $inquiry['email'] ?: null;
    $phone = $inquiry['phone'];
@endphp

<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Website Inquiry</title>
</head>
<body style="margin: 0; background: #f4f7f6; color: #111827; font-family: Arial, Helvetica, sans-serif;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background: #f4f7f6; padding: 28px 12px;">
        <tr>
            <td align="center">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width: 680px; overflow: hidden; border-radius: 18px; background: #ffffff; border: 1px solid #dbe7e4; box-shadow: 0 18px 45px rgba(15, 118, 110, 0.12);">
                    <tr>
                        <td style="background: linear-gradient(135deg, #0f766e 0%, #134e4a 100%); padding: 30px 32px;">
                            <p style="margin: 0 0 10px; color: #fde68a; font-size: 12px; font-weight: 700; letter-spacing: 0.18em; text-transform: uppercase;">
                                Grow More Consultants
                            </p>
                            <h1 style="margin: 0; color: #ffffff; font-size: 28px; line-height: 1.25; font-weight: 800;">
                                New Website Inquiry
                            </h1>
                            <p style="margin: 12px 0 0; color: #d1fae5; font-size: 15px; line-height: 1.7;">
                                A new student inquiry has been submitted from the website contact form.
                            </p>
                        </td>
                    </tr>

                    <tr>
                        <td style="padding: 30px 32px 8px;">
                            <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                                <tr>
                                    <td style="padding: 0 0 14px;">
                                        <p style="margin: 0; color: #64748b; font-size: 12px; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase;">
                                            Student Details
                                        </p>
                                    </td>
                                </tr>
                            </table>

                            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse: separate; border-spacing: 0 10px;">
                                <tr>
                                    <td style="width: 42%; padding: 14px 16px; border-radius: 12px 0 0 12px; background: #f8fafc; color: #475569; font-size: 13px; font-weight: 700;">
                                        Full name
                                    </td>
                                    <td style="padding: 14px 16px; border-radius: 0 12px 12px 0; background: #f8fafc; color: #0f172a; font-size: 15px; font-weight: 700;">
                                        {{ $inquiry['fullName'] }}
                                    </td>
                                </tr>
                                <tr>
                                    <td style="width: 42%; padding: 14px 16px; border-radius: 12px 0 0 12px; background: #f8fafc; color: #475569; font-size: 13px; font-weight: 700;">
                                        Phone
                                    </td>
                                    <td style="padding: 14px 16px; border-radius: 0 12px 12px 0; background: #f8fafc; color: #0f172a; font-size: 15px; font-weight: 700;">
                                        <a href="tel:{{ preg_replace('/\s+/', '', $phone) }}" style="color: #0f766e; text-decoration: none;">{{ $phone }}</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td style="width: 42%; padding: 14px 16px; border-radius: 12px 0 0 12px; background: #f8fafc; color: #475569; font-size: 13px; font-weight: 700;">
                                        Email
                                    </td>
                                    <td style="padding: 14px 16px; border-radius: 0 12px 12px 0; background: #f8fafc; color: #0f172a; font-size: 15px; font-weight: 700;">
                                        @if ($email)
                                            <a href="mailto:{{ $email }}" style="color: #0f766e; text-decoration: none;">{{ $email }}</a>
                                        @else
                                            Not provided
                                        @endif
                                    </td>
                                </tr>
                                <tr>
                                    <td style="width: 42%; padding: 14px 16px; border-radius: 12px 0 0 12px; background: #f8fafc; color: #475569; font-size: 13px; font-weight: 700;">
                                        Interested country
                                    </td>
                                    <td style="padding: 14px 16px; border-radius: 0 12px 12px 0; background: #f8fafc; color: #0f172a; font-size: 15px; font-weight: 700;">
                                        {{ $inquiry['interestedCountry'] ?: 'Not provided' }}
                                    </td>
                                </tr>
                                <tr>
                                    <td style="width: 42%; padding: 14px 16px; border-radius: 12px 0 0 12px; background: #f8fafc; color: #475569; font-size: 13px; font-weight: 700;">
                                        Last qualification
                                    </td>
                                    <td style="padding: 14px 16px; border-radius: 0 12px 12px 0; background: #f8fafc; color: #0f172a; font-size: 15px; font-weight: 700;">
                                        {{ $inquiry['lastQualification'] ?: 'Not provided' }}
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>

                    <tr>
                        <td style="padding: 12px 32px 30px;">
                            <p style="margin: 0 0 12px; color: #64748b; font-size: 12px; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase;">
                                Message
                            </p>
                            <div style="border-left: 4px solid #0f766e; border-radius: 12px; background: #ecfdf5; padding: 18px 20px; color: #0f172a; font-size: 15px; line-height: 1.8;">
                                {!! nl2br(e($inquiry['message'])) !!}
                            </div>
                        </td>
                    </tr>

                    <tr>
                        <td style="padding: 0 32px 32px;">
                            <table role="presentation" cellpadding="0" cellspacing="0">
                                <tr>
                                    <td style="padding: 0 10px 10px 0;">
                                        <a href="tel:{{ preg_replace('/\s+/', '', $phone) }}" style="display: inline-block; border-radius: 10px; background: #0f766e; color: #ffffff; font-size: 14px; font-weight: 700; padding: 12px 18px; text-decoration: none;">
                                            Call Student
                                        </a>
                                    </td>
                                    @if ($email)
                                        <td style="padding: 0 0 10px;">
                                            <a href="mailto:{{ $email }}" style="display: inline-block; border-radius: 10px; background: #f6c453; color: #172033; font-size: 14px; font-weight: 700; padding: 12px 18px; text-decoration: none;">
                                                Reply by Email
                                            </a>
                                        </td>
                                    @endif
                                </tr>
                            </table>
                        </td>
                    </tr>

                    <tr>
                        <td style="background: #f8fafc; border-top: 1px solid #e2e8f0; padding: 18px 32px;">
                            <p style="margin: 0; color: #64748b; font-size: 12px; line-height: 1.7;">
                                This inquiry was generated automatically from the Grow More Consultants website.
                            </p>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>
</html>
