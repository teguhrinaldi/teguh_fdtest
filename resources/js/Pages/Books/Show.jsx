// resources/js/Pages/Books/Show.jsx
import React from "react";

export default function Show({ book }) {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6 text-center">
                {book.title}
            </h1>

            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                <div className="w-full md:w-1/3">
                    {book.thumbnail && (
                        <img
                            src={book.thumbnail}
                            alt={book.title}
                            className="w-full h-64 object-cover rounded-lg"
                        />
                    )}
                </div>

                <div className="w-full md:w-2/3">
                    <p className="text-lg font-semibold mb-2">
                        Author: {book.author}
                    </p>
                    <p className="text-lg font-semibold mb-2">
                        Rating: {book.rating}
                    </p>
                    <p className="text-lg mb-4">{book.description}</p>
                </div>
            </div>
        </div>
    );
}
