<?php

namespace App\Http\Controllers\dashboard;

use App\Http\Controllers\Controller;
use App\Http\Services\NewsService;
use App\Http\Requests\AddNewsRequest;
use App\Http\Requests\EditNewsRequest;
use App\Models\News;

class NewsDashboardController extends Controller
{
    private $newsService;

    public function __construct()
    {
        $this->newsService = new NewsService();
    }

    public function index()
    {
        $data = $this->newsService->getAll(10);
        return inertia('dashboard/news/index', $data);
    }

    public function store(AddNewsRequest $request)
    {
        $this->newsService->store($request);
        return redirect('/dashboard/news')->with('message', 'news successfully added');
    }

    public function create()
    {
        return inertia('dashboard/news/addNews');
    }

    public function show($slug)
    {
        $news = $this->newsService->show($slug);
        return inertia('dashboard/news/EditNews', compact('news'));
    }

    public function update(EditNewsRequest $request, $slug)
    {
        $this->newsService->update($request, $slug);
        return redirect('/dashboard/news')->with('message', 'news successfully edited');
    }

    public function destroy($slug)
    {
        $this->newsService->destroy($slug);
        return redirect('/dashboard/news')->with('message', 'news successfully deleted');
    }
}
