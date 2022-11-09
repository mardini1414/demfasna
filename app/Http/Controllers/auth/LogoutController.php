<?php

namespace App\Http\Controllers\auth;

use App\Http\Controllers\Controller;
use App\Http\Services\auth\LogoutService;
use Illuminate\Http\Request;

class LogoutController extends Controller
{
    private $logoutService;

    public function __construct()
    {
        $this->logoutService = new LogoutService();
    }

    public function destroy(Request $request)
    {
        $this->logoutService->destroy($request);
        return redirect('/login');
    }
}
