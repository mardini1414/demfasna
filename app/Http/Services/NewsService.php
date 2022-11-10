<?php

namespace App\Http\Services;

use App\Models\News;
use Illuminate\Support\Facades\Storage;

class NewsService
{
    public function getAll($perpage)
    {
        return News::orderBy('id', 'desc')->paginate($perpage);
    }

    public function store($request)
    {
        $validated = $request->validated();
        $validated['image'] = $request->file('image')->store('news-image');
        News::create($validated);
    }

    public function show($slug)
    {
        return News::where('slug', $slug)->first();
    }

    public function update($request, $slug)
    {
        $validated = $request->validated();

        if ($request->file('image')) {
            $validated['image'] = $request->file('image')->store('news-image');
            News::where('slug', $slug)->update($validated);
            Storage::delete($request->oldImage);
        } else {
            $validated['image'] = $request->oldImage;
            News::where('slug', $slug)->update($validated);
        }
    }

    public function destroy($slug)
    {
        $news = News::where('slug', $slug)->first();
        Storage::delete($news['image']);
        News::where('slug', $slug)->delete();
    }
}
