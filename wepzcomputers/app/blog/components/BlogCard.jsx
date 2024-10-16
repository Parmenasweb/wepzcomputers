"use client";

import Image from "next/image";

export default function BlogCard(blog) {
  return (
    <article className="flex max-w-xl flex-col items-start justify-between">
      <a href={`/blog/${blog.id}`}>
        <Image
          height={500}
          width={500}
          src={blog.imageUrl} // Assuming post.imageUrl contains the URL of the image
          alt={blog.title}
          className="w-full h-48 object-cover rounded-lg mb-4"
        />
        <div className="flex items-center gap-x-4 text-xs">
          <time dateTime={blog.datetime} className="text-gray-500">
            {blog.date}
          </time>
          <span className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
            {blog.category}
          </span>
        </div>
        <div className="group relative">
          <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
            {blog.title}
          </h3>
          <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
            {blog.description}
          </p>
        </div>
      </a>
      <div className="relative mt-8 flex items-center gap-x-4">
        <Image
          height={500}
          width={500}
          alt=""
          src="/images/pc-upgrade.webp"
          className="h-10 w-10 rounded-full bg-gray-50"
        />
        <div className="text-sm leading-6">
          <p className="font-semibold text-gray-900">
            <a href="/contact">
              <span className="absolute inset-0" />
              {blog.author}
            </a>
          </p>
          <p className="text-gray-600">Wepz Computers</p>
        </div>
      </div>
    </article>
  );
}
