<?php

$allowedOrigins = array_filter(array_map(
    'trim',
    explode(',', env('CLIENT_ORIGIN', 'http://127.0.0.1:5173'))
));

return [
    'paths' => ['api/*'],
    'allowed_methods' => ['GET', 'POST', 'OPTIONS'],
    'allowed_origins' => $allowedOrigins,
    'allowed_origins_patterns' => [],
    'allowed_headers' => ['Content-Type', 'Authorization', 'X-Requested-With', 'Accept'],
    'exposed_headers' => [],
    'max_age' => 0,
    'supports_credentials' => false,
];
