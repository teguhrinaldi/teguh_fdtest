<?php

namespace Tests\Feature;

use Tests\TestCase;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;

class BookManagementTest extends TestCase
{
    use RefreshDatabase;

    /** @test */
    public function an_authenticated_user_can_create_a_book()
    {
        $user = User::factory()->create();

        $response = $this->actingAs($user)->post('/books', [
            'title' => 'New Book',
            'author' => 'Jane Doe',
            'thumbnail' => 'default.png',
            'rating' => 4,
        ]);

        $response->assertRedirect();
        $this->assertDatabaseHas('books', [
            'title' => 'New Book',
            'author' => 'Jane Doe',
        ]);
    }
}
