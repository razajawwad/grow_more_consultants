<?php

use Illuminate\Support\Facades\Artisan;

Artisan::command('about:gmc', function (): void {
    $this->info('Grow More Consultants API');
});
