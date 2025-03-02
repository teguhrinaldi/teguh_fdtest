import React from "react";
import { useForm } from "@inertiajs/react";

export default function Create() {
    const { data, setData, post, processing, errors, reset } = useForm({
        title: "",
        author: "",
        description: "",
        thumbnail: null,
        rating: 1, // Sesuai validasi min:1
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post("/books", {
            forceFormData: true, // Biar file ikut ter-handle
            onSuccess: () => reset(), // Reset form setelah sukses
        });
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6 text-center">
                Add New Book
            </h1>

            <form
                onSubmit={handleSubmit}
                encType="multipart/form-data"
                className="space-y-4"
            >
                {/* Title */}
                <div>
                    <label
                        htmlFor="title"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Title
                    </label>
                    <input
                        type="text"
                        id="title"
                        value={data.title}
                        onChange={(e) => setData("title", e.target.value)}
                        className="w-full px-4 py-2 border rounded-md focus:ring-indigo-500"
                    />
                    {errors.title && (
                        <p className="text-red-600">{errors.title}</p>
                    )}
                </div>

                {/* Author */}
                <div>
                    <label
                        htmlFor="author"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Author
                    </label>
                    <input
                        type="text"
                        id="author"
                        value={data.author}
                        onChange={(e) => setData("author", e.target.value)}
                        className="w-full px-4 py-2 border rounded-md focus:ring-indigo-500"
                    />
                    {errors.author && (
                        <p className="text-red-600">{errors.author}</p>
                    )}
                </div>

                {/* Description */}
                <div>
                    <label
                        htmlFor="description"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Description
                    </label>
                    <textarea
                        id="description"
                        value={data.description}
                        onChange={(e) => setData("description", e.target.value)}
                        className="w-full px-4 py-2 border rounded-md focus:ring-indigo-500"
                    />
                    {errors.description && (
                        <p className="text-red-600">{errors.description}</p>
                    )}
                </div>

                {/* Thumbnail */}
                <div>
                    <label
                        htmlFor="thumbnail"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Thumbnail
                    </label>
                    <input
                        type="file"
                        id="thumbnail"
                        onChange={(e) =>
                            setData("thumbnail", e.target.files[0])
                        }
                        className="w-full px-4 py-2 border rounded-md focus:ring-indigo-500"
                    />
                    {errors.thumbnail && (
                        <p className="text-red-600">{errors.thumbnail}</p>
                    )}
                </div>

                {/* Rating */}
                <div>
                    <label
                        htmlFor="rating"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Rating (1-5)
                    </label>
                    <input
                        type="number"
                        id="rating"
                        min="1"
                        max="5"
                        value={data.rating}
                        onChange={(e) => setData("rating", e.target.value)}
                        className="w-full px-4 py-2 border rounded-md focus:ring-indigo-500"
                    />
                    {errors.rating && (
                        <p className="text-red-600">{errors.rating}</p>
                    )}
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    disabled={processing}
                    className={`w-full px-4 py-2 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                        processing
                            ? "bg-gray-400 cursor-not-allowed"
                            : "bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500"
                    }`}
                >
                    {processing ? "Saving..." : "Add Book"}
                </button>
            </form>
        </div>
    );
}
