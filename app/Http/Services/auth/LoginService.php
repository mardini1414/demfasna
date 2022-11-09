<?php

namespace App\Http\Services\auth;

use Illuminate\Support\Facades\Auth;

class LoginService
{
    public function store($request)
    {
        if (Auth::attempt(['email' => $request->email, 'password' => $request->password], $request->remember)) {
            return true;
        } else {
            return false;
        }
    }
}
