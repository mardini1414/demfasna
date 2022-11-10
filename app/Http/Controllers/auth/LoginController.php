<?php

namespace App\Http\Controllers\auth;

use App\Http\Controllers\Controller;
use App\Http\Services\auth\LoginService;
use Illuminate\Http\Request;

class LoginController extends Controller
{
    private $loginService;

    public function __construct()
    {
        $this->loginService = new LoginService();
    }

    public function index()
    {
        return inertia('auth/login/index');
    }

    public function store(Request $request)
    {
        $authenticated = $this->loginService->store($request);

        if ($authenticated) {
            return redirect('/dashboard')->with('message', 'You have successfully logged in');
        } else {
            return back()->with('message', 'Your email or password is wrong!');
        }
    }
}
