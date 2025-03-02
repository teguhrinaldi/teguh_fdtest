<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class UserController extends Controller
{
    public function index(Request $request)
    {
        $search = $request->input('search');
        $verified = $request->input('verified');

        $users = User::query();

        if ($search) {
            $users->where(function ($query) use ($search) {
                $query->where('name', 'like', "%{$search}%")
                      ->orWhere('email', 'like', "%{$search}%");
            });
        }

        if ($verified !== null) {
            $users->whereNotNull('email_verified_at', $verified === 'true');
        }

        return Inertia::render('Home', [
            'users' => $users->paginate(10)->withQueryString(),
            'filters' => [
                'search' => $search,
                'verified' => $verified,
            ],
        ]);
    }
}
