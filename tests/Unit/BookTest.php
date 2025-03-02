<?php

namespace Tests\Unit;

use Tests\TestCase;
use App\Models\User;
use App\Models\Book;
use Illuminate\Foundation\Testing\RefreshDatabase;

class BookTest extends TestCase
{
    use RefreshDatabase;

    /** @test */
    public function it_can_create_a_book(): void
    {
        
        $user = User::factory()->create();

        $book = Book::create([
            'title' => 'Sample Book',
            'author' => 'John Doe',
            'thumbnail' => 'default.png',
            'rating' => 5,
            'user_id' => $user->id, 
        ]);

        $this->assertDatabaseHas('books', [
            'title' => 'Sample Book',
            'author' => 'John Doe',
            'user_id' => $user->id,
        ]);
    }
}
