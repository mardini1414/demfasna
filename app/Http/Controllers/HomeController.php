<?php

namespace App\Http\Controllers;

use App\Http\Services\NewsService;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */

    private $newsService;

    public function __construct()
    {
        $this->newsService = new NewsService();
    }

    public function __invoke()
    {
        $data = $this->newsService->getAll(5);
        return inertia('home/index', $data);
    }
}
