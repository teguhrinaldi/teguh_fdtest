// resources/js/Pages/Home.jsx
import React, { useState } from "react";
import { Link, usePage } from "@inertiajs/react";

export default function Home({
    users = { data: [], links: [] },
    filters = {},
}) {
    const [search, setSearch] = useState(filters.search || "");
    const [verified, setVerified] = useState(filters.verified || "");
    const handleSearchChange = (e) => {
        setSearch(e.target.value);
    };

    const handleVerifiedChange = (e) => {
        setVerified(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const params = new URLSearchParams({
            search: search,
            verified: verified,
        }).toString();
        window.location.href = `/?${params}`;
    };

    return (
        <div className="min-h-screen bg-gray-100">
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold mb-6 text-center">
                    User List
                </h1>

                {/* Search and Filter Form */}
                <form
                    onSubmit={handleSubmit}
                    className="mb-6 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4"
                >
                    <div className="w-full md:w-1/2">
                        <label
                            htmlFor="search"
                            className="block text-sm font-medium text-gray-700 mb-2"
                        >
                            Search by Name or Email
                        </label>
                        <input
                            type="text"
                            id="search"
                            name="search"
                            value={search}
                            onChange={handleSearchChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        />
                    </div>

                    <div className="w-full md:w-1/2">
                        <label
                            htmlFor="verified"
                            className="block text-sm font-medium text-gray-700 mb-2"
                        >
                            Filter by Email Verification Status
                        </label>
                        <select
                            id="verified"
                            name="verified"
                            value={verified}
                            onChange={handleVerifiedChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        >
                            <option value="">All</option>
                            <option value="true">Verified</option>
                            <option value="false">Not Verified</option>
                        </select>
                    </div>

                    <button
                        type="submit"
                        className="w-full md:w-auto px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Apply Filters
                    </button>
                </form>

                {/* User List */}
                <div className="bg-white p-6 shadow sm:rounded-lg">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                    Name
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                    Email
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                    Email Verified
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {users.data.map((user) => (
                                <tr key={user.id}>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        {user.name}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        {user.email}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        {user.email_verified_at ? "Yes" : "No"}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    {/* Pagination */}
                    <div className="mt-4 flex justify-center">
                        {users.links.map((link, index) => (
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

                {/* Add clickable buttons */}
                <div className="mt-6 flex justify-center space-x-4">
                    <Link
                        href="/dashboard"
                        className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Go to Dashboard
                    </Link>
                    <Link
                        href="/books"
                        className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Go to Books
                    </Link>
                </div>
            </div>
        </div>
    );
}
