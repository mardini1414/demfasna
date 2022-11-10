<?php

namespace App\Http\Controllers;

use App\Http\Services\NewsService;

class NewsController extends Controller
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

    public function index()
    {
        $data = $this->newsService->getAll(6);
        return inertia('news/index', $data);
    }

    public function show($slug)
    {
        $data = $this->newsService->show($slug);
        return inertia('news/detail', compact('data'));
    }
}
