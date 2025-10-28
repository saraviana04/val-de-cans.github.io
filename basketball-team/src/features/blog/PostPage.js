import React from "react";
import { useParams, Link } from "react-router-dom";
import posts from "./posts";

export default function PostPage() {
  const { id } = useParams();
  const post = posts.find((item) => item.id === Number(id));

  if (!post) {
    return (
      <div className="p-10 text-center text-red-500">
        Post não encontrado.
        <Link to="/blog" className="ml-2 text-blue-600 underline">
          Voltar ao Blog
        </Link>
      </div>
    );
  }

  const contentHtml = typeof post.full === "string" ? post.full : null;
  const fallbackText = post.content ?? post.excerpt ?? "";

  return (
    <div className="min-h-screen bg-calmgreen py-10 px-4">
      <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-96 object-cover"
        />

        <div className="p-6 md:p-10">
          <h1 className="text-3xl md:text-4xl font-extrabold text-green-800 mb-4">
            {post.title}
          </h1>

          {contentHtml ? (
            <div
              className="text-gray-100 text-sm leading-relaxed mb-8"
              dangerouslySetInnerHTML={{ __html: contentHtml }}
            />
          ) : (
            <p className="text-gray-800 text-lg leading-relaxed mb-8">
              {fallbackText}
            </p>
          )}

          <Link
            to="/blog"
            className="inline-block bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition duration-200 font-medium"
          >
            ← Voltar ao Blog
          </Link>
        </div>
      </div>
    </div>
  );
}
