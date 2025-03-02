import React from "react";
import { Link } from "@inertiajs/react";

export default function Index({ books }) {
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold text-center">Book List</h1>

                {/* Back to Dashboard Button */}
                <Link
                    href="/dashboard"
                    className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                >
                    Back to Dashboard
                </Link>
            </div>

            {/* Add new book button */}
            <Link
                href="/books/create"
                className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
                Add New Book
            </Link>

            {/* Book List */}
            <div className="mt-6">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Title
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Author
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Thumbnail
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Rating
                            </th>
                            <th className="relative px-6 py-3">
                                <span className="sr-only">Actions</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {books.data.map((book) => (
                            <tr key={book.id}>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    {book.title}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    {book.author}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    {book.thumbnail && (
                                        <img
                                            src={`/storage/app/private/thumbnails/${book.thumbnail}`}
                                            alt={book.title}
                                            className="w-16 h-16 object-cover"
                                        />
                                    )}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    {[...Array(book.rating)].map((_, index) => (
                                        <i
                                            key={index}
                                            className="fas fa-star text-yellow-500"
                                        ></i>
                                    ))}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                    <Link
                                        href={`/books/${book.id}/edit`}
                                        className="text-indigo-600 hover:text-indigo-900 mr-2"
                                    >
                                        Edit
                                    </Link>
                                    <Link
                                        href={`/books/${book.id}`}
                                        method="delete"
                                        as="button"
                                        className="text-red-600 hover:text-red-900"
                                    >
                                        Delete
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {/* Pagination */}
                <div className="mt-6 flex flex-col items-center space-y-2">
                    {/* Page Info */}
                    <div className="text-sm text-gray-600">
                        Page {books.current_page} of {books.last_page}
                    </div>

                    {/* Navigation Buttons */}
                    <div className="flex space-x-2">
                        {/* Previous Button */}
                        {books.prev_page_url ? (
                            <Link
                                href={books.prev_page_url}
                                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300"
                            >
                                Previous
                            </Link>
                        ) : (
                            <span className="px-4 py-2 bg-gray-100 text-gray-400 rounded-md cursor-not-allowed">
                                Previous
                            </span>
                        )}

                        {/* Next Button */}
                        {books.next_page_url ? (
                            <Link
                                href={books.next_page_url}
                                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300"
                            >
                                Next
                            </Link>
                        ) : (
                            <span className="px-4 py-2 bg-gray-100 text-gray-400 rounded-md cursor-not-allowed">
                                Next
                            </span>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
