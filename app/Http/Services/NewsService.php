<?php

namespace App\Http\Services;

use App\Models\News;
use Illuminate\Support\Facades\Storage;

class NewsService
{
    public function getAll()
    {
        return News::orderBy('id', 'desc')->paginate();
    }

    public function store($request)
    {
        $validated = $request->validated();
        $validated['image'] = $request->file('image')->store('news-image');
        News::create($validated);
    }

    public function update($request)
    {
    }

    public function destroy($slug)
    {
        $news = News::where('slug', $slug)->first();
        Storage::delete($news['image']);
        News::where('slug', $slug)->delete();
    }
}
