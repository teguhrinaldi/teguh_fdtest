<?php

// app/Http/Controllers/LandingPageController.php
namespace App\Http\Controllers;

use App\Models\Book;
use Illuminate\Http\Request;

class LandingPageController extends Controller
{
    public function __invoke(Request $request)
    {
        $query = Book::query();

        // Filter by author
        if ($request->has('author')) {
            $query->where('author', 'like', '%' . $request->input('author') . '%');
        }

        // Filter by date uploaded
        if ($request->has('date_uploaded')) {
            $query->whereDate('created_at', $request->input('date_uploaded'));
        }

        // Filter by rating
        if ($request->has('rating')) {
            $query->where('rating', $request->input('rating'));
        }

        $books = $query->latest()->paginate(10);

        return inertia('LandingPage', [
            'books' => $books,
            'filters' => [
                'author' => $request->input('author'),
                'date_uploaded' => $request->input('date_uploaded'),
                'rating' => $request->input('rating'),
            ],
        ]);
    }
}