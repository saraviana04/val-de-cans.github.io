import React from "react";
import { Link } from "react-router-dom";
import posts from "./posts";

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-calmgreen py-10 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center text-green-800">
        Últimas Notícias
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {posts.map((post) => {
          const isRodada3 = post.id === 4;
          return (
            <Link
              to={`/blog/${post.id}`}
              key={post.id}
              className="relative group block"
            >
              <div className="relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-64 object-cover rounded shadow-lg transition-opacity group-hover:opacity-80"
                />

                <div className="absolute top-2 left-2 bg-red-600 text-white px-2 py-1 rounded text-xs">
                  💬 {post.comments ?? 0}
                </div>

                {isRodada3 && post.logos?.length ? (
                  <div className="absolute inset-0 flex items-center justify-center gap-6 pointer-events-none">
                    {post.logos.map((logo, index) => (
                      <img
                        key={logo}
                        src={logo}
                        alt={`Logo time ${index + 1}`}
                        className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-white p-1 shadow-lg object-contain"
                        onError={(event) => {
                          event.currentTarget.style.display = "none";
                        }}
                      />
                    ))}
                  </div>
                ) : null}

                <h2 className="absolute bottom-2 left-2 right-2 text-white font-bold text-lg bg-black/60 px-2 py-1 rounded">
                  {post.title}
                </h2>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
