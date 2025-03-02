import React, { useState } from "react";
import { Link, usePage } from "@inertiajs/react";

export default function LandingPage({ books, filters }) {
    const [author, setAuthor] = useState(filters.author || "");
    const [dateUploaded, setDateUploaded] = useState(
        filters.date_uploaded || ""
    );
    const [rating, setRating] = useState(filters.rating || "");

    const handleAuthorChange = (e) => {
        setAuthor(e.target.value);
    };

    const handleDateUploadedChange = (e) => {
        setDateUploaded(e.target.value);
    };

    const handleRatingChange = (e) => {
        setRating(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const params = new URLSearchParams({
            author: author,
            date_uploaded: dateUploaded,
            rating: rating,
        }).toString();
        window.location.href = `/?${params}`;
    };

    return (
        <div className="container mx-auto px-4 py-8">
            {/* Navbar */}
            <nav className="flex justify-between items-center mb-6">
                <Link href="/" className="text-2xl font-bold">
                    Landing Page
                </Link>
                <div>
                    <Link href="/dashboard" className="mr-4">
                        Dashboard
                    </Link>
                    <Link href="/users" className="mr-4">
                        User List
                    </Link>
                    <Link href="/books" className="mr-4">
                        Books
                    </Link>
                </div>
            </nav>

            {/* Filter Form */}
            <form
                onSubmit={handleSubmit}
                className="mb-6 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4"
            >
                <div className="w-full md:w-1/3">
                    <label
                        htmlFor="author"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Author
                    </label>
                    <input
                        type="text"
                        id="author"
                        name="author"
                        value={author}
                        onChange={handleAuthorChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    />
                </div>

                <div className="w-full md:w-1/3">
                    <label
                        htmlFor="date_uploaded"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Date Uploaded
                    </label>
                    <input
                        type="date"
                        id="date_uploaded"
                        name="date_uploaded"
                        value={dateUploaded}
                        onChange={handleDateUploadedChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    />
                </div>

                <div className="w-full md:w-1/3">
                    <label
                        htmlFor="rating"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Rating
                    </label>
                    <select
                        id="rating"
                        name="rating"
                        value={rating}
                        onChange={handleRatingChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    >
                        <option value="">All</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>

                <button
                    type="submit"
                    className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    Apply Filters
                </button>
            </form>

            {/* Book List */}
            <div className="bg-white p-6 shadow sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                                Title
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                                Author
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                                Thumbnail
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                                Rating
                            </th>
                            <th scope="col" className="relative px-6 py-3">
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
                                            src={`storage/app/private/thumbnails/${book.thumbnail}`}
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
                            </tr>
                        ))}
                    </tbody>
                </table>

                {/* Pagination */}
                <div className="mt-4 flex justify-center">
                    {books.links.map((link, index) => (
                        <Link
                            key={index}
                            href={link.url}
                            className={`px-4 py-2 text-sm font-medium ${
                                link.active
                                    ? "bg-indigo-500 text-white"
                                    : "bg-white text-gray-700"
                            } rounded`}
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
