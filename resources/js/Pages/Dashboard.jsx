import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, usePage, Link } from "@inertiajs/react";
import { Inertia } from "@inertiajs/inertia";
import { useState } from "react";

export default function Dashboard({
    users = { data: [], links: [] },
    filters = {},
}) {
    const { auth } = usePage().props;

    const [search, setSearch] = useState(filters.search || "");
    const [verified, setVerified] = useState(filters.verified || "");

    const submit = (e) => {
        e.preventDefault();
        Inertia.get(route("dashboard"), { search, verified });
    };

    const formatDate = (dateString) => {
        if (!dateString) return "Unverified";
        const options = { day: "2-digit", month: "short", year: "numeric" };
        return new Date(dateString).toLocaleDateString("en-US", options);
    };

    return (
        <AuthenticatedLayout
            header={
                <div className="flex items-center space-x-6">
                    <h2 className="text-xl font-semibold leading-tight text-gray-800">
                        Dashboard
                    </h2>
                    <button
                        onClick={() => Inertia.visit("/books")}
                        className="text-blue-600 hover:underline text-sm"
                    >
                        Book List
                    </button>
                </div>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg p-6 text-gray-900">
                        You're logged in!
                        {auth.user.email_verified_at ? (
                            <p className="mt-4 text-green-600">
                                <i className="fas fa-check-circle"></i> Email
                                sudah terverifikasi
                            </p>
                        ) : (
                            <p className="mt-4 text-red-600">
                                <i className="fas fa-exclamation-triangle"></i>{" "}
                                Email belum terverifikasi
                            </p>
                        )}
                    </div>

                    {/* User List */}
                    <div className="mt-6 bg-white p-6 shadow-sm sm:rounded-lg">
                        <h3 className="text-lg font-bold mb-4">User List</h3>
                        <form
                            onSubmit={submit}
                            className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6"
                        >
                            <input
                                type="text"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                placeholder="Search user..."
                                className="border border-gray-300 p-2 rounded w-full focus:ring-2 focus:ring-blue-400 focus:outline-none"
                            />
                            <select
                                value={verified}
                                onChange={(e) => setVerified(e.target.value)}
                                className="border border-gray-300 p-2 rounded w-full focus:ring-2 focus:ring-blue-400 focus:outline-none"
                            >
                                <option value="">
                                    All Verification Status
                                </option>
                                <option value="true">Verified</option>
                                <option value="false">Unverified</option>
                            </select>
                            <button
                                type="submit"
                                className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded w-full"
                            >
                                Apply Filter
                            </button>
                        </form>

                        <table className="w-full border">
                            <thead>
                                <tr>
                                    <th className="border p-2">Name</th>
                                    <th className="border p-2">Email</th>
                                    <th className="border p-2">Verified At</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.data.map((user) => (
                                    <tr key={user.id}>
                                        <td className="border p-2">
                                            {user.name}
                                        </td>
                                        <td className="border p-2">
                                            {user.email}
                                        </td>
                                        <td className="border p-2">
                                            {formatDate(user.email_verified_at)}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        <div className="mt-4 flex justify-end space-x-2">
                            {users.links.map((link, index) => (
                                <a
                                    key={index}
                                    href={link.url || "#"}
                                    dangerouslySetInnerHTML={{
                                        __html: link.label,
                                    }}
                                    className={`px-3 py-1 border rounded ${
                                        link.active
                                            ? "bg-blue-500 text-white"
                                            : "text-gray-700"
                                    }`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
