<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Address;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class InquiryReceived extends Mailable
{
    use Queueable;
    use SerializesModels;

    /**
     * @param array<string, string|null> $inquiry
     */
    public function __construct(public array $inquiry)
    {
    }

    public function envelope(): Envelope
    {
        $replyTo = [];

        if (! empty($this->inquiry['email'])) {
            $replyTo[] = new Address($this->inquiry['email'], $this->inquiry['fullName']);
        }

        return new Envelope(
            replyTo: $replyTo,
            subject: 'New inquiry from '.$this->inquiry['fullName'],
        );
    }

    public function content(): Content
    {
        return new Content(
            view: 'emails.inquiry-received',
        );
    }
}
