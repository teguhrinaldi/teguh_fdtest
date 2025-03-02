<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Inertia\Inertia;

class DashboardController extends Controller
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
            if ($verified === 'true') {
                $users->whereNotNull('email_verified_at');
            } elseif ($verified === 'false') {
                $users->whereNull('email_verified_at');
            }
        }

        return Inertia::render('Dashboard', [
            'users' => $users->paginate(10)->withQueryString(),
            'filters' => [
                'search' => $search,
                'verified' => $verified,
            ],
        ]);
    }
}
