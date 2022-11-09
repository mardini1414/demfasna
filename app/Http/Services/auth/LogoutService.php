<?php

namespace App\Http\Services\auth;

use Illuminate\Support\Facades\Auth;

class LogoutService
{
    public function destroy($request)
    {
        Auth::logout();
        $request->session()->regenerateToken();
        $request->session()->invalidate();
    }
}
