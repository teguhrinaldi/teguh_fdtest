import React, { useState, useEffect } from "react";
import { useForm, usePage, router } from "@inertiajs/react";

export default function Edit({ book }) {
    const { flash } = usePage().props;

    const { data, setData, processing, errors } = useForm({
        title: book.title,
        author: book.author,
        description: book.description,
        thumbnail: null,
        rating: book.rating,
    });

    const [preview, setPreview] = useState(book.thumbnail_url);

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("title", data.title);
        formData.append("author", data.author);
        formData.append("description", data.description);
        formData.append("rating", data.rating);
        if (data.thumbnail) {
            formData.append("thumbnail", data.thumbnail);
        }

        router.post(`/books/${book.id}`, formData, {
            onSuccess: () => {
                router.visit("/dashboard", {
                    replace: true,
                    only: ["books", "flash"],
                });
            },
        });
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setData("thumbnail", file);

        if (file) {
            setPreview(URL.createObjectURL(file));
        }
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6 text-center">Edit Book</h1>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700">
                        Title
                    </label>
                    <input
                        type="text"
                        value={data.title}
                        onChange={(e) => setData("title", e.target.value)}
                        className="w-full px-4 py-2 border rounded-md"
                    />
                    {errors.title && (
                        <p className="text-red-600">{errors.title}</p>
                    )}
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">
                        Author
                    </label>
                    <input
                        type="text"
                        value={data.author}
                        onChange={(e) => setData("author", e.target.value)}
                        className="w-full px-4 py-2 border rounded-md"
                    />
                    {errors.author && (
                        <p className="text-red-600">{errors.author}</p>
                    )}
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">
                        Description
                    </label>
                    <textarea
                        value={data.description}
                        onChange={(e) => setData("description", e.target.value)}
                        className="w-full px-4 py-2 border rounded-md"
                    />
                    {errors.description && (
                        <p className="text-red-600">{errors.description}</p>
                    )}
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">
                        Thumbnail
                    </label>
                    {preview && (
                        <img
                            src={preview}
                            alt="Thumbnail Preview"
                            className="h-32 mb-2 object-cover"
                        />
                    )}
                    <input
                        type="file"
                        onChange={handleFileChange}
                        className="w-full px-4 py-2 border rounded-md"
                    />
                    {errors.thumbnail && (
                        <p className="text-red-600">{errors.thumbnail}</p>
                    )}
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">
                        Rating (1-5)
                    </label>
                    <input
                        type="number"
                        min="1"
                        max="5"
                        value={data.rating}
                        onChange={(e) => setData("rating", e.target.value)}
                        className="w-full px-4 py-2 border rounded-md"
                    />
                    {errors.rating && (
                        <p className="text-red-600">{errors.rating}</p>
                    )}
                </div>

                <button
                    type="submit"
                    disabled={processing}
                    className="w-full px-4 py-2 bg-indigo-600 text-white rounded-md"
                >
                    {processing ? "Updating..." : "Update Book"}
                </button>
            </form>
        </div>
    );
}
