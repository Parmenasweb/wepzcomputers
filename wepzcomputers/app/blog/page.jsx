"use client";

import BlogCard from "./components/BlogCard";

const blogs = [
  {
    id: 1,
    title: "How to upgrade your PC",
    imageUrl: "/images/pc-upgrade.webp",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    date: "Mar 16, 2024",
    datetime: "2024-03-16",
    category: "Tech",
    author: {
      name: "Wepz Computers",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    id: 2,
    title: "Boost your conversion rate",
    imageUrl: "/images/pc-upgrade.webp",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: "Marketing",
    author: {
      name: "Wepz Computers",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    id: 3,
    title: "Boost your conversion rate",
    imageUrl: "/images/pc-upgrade.webp",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: "Marketing",
    author: {
      name: "Wepz Computers",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  // More posts...
];

// export default function Example() {
//   return (
//     <div className="bg-white py-24 sm:py-32">
//       <div className="mx-auto max-w-7xl px-6 lg:px-8">
//         <div className="mx-auto max-w-2xl lg:mx-0">
//           <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
//             From the blog
//           </h2>
//           <p className="mt-2 text-lg leading-8 text-gray-600">
//             Learn how to grow your business with our expert advice.
//           </p>
//         </div>
//         <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
//           {posts.map((post) => (
//             <BlogCard key={post.id} post={post} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

import { useEffect, useState } from "react";

const BlogsPage = () => {
  // const [blogs, setBlogs] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    content: [{ type: "paragraph", children: [{ text: "" }] }], // Initialize content for Slate
    author: "",
    category: "",
  });
  const [filter, setFilter] = useState("");
  const [sort, setSort] = useState("latest");

  // useEffect(() => {
  //   const fetchBlogs = async () => {
  //     const res = await fetch(`/api/get-blogs?category=${filter}&sort=${sort}`);
  //     const data = await res.json();
  //     setBlogs(data.blogs);
  //   };

  //   fetchBlogs();
  // }, [filter, sort]); // Re-fetch when filter or sort changes

  const authenticateAdmin = () => {
    const password = prompt("Enter Admin Password:");
    if (password === process.env.NEXT_PUBLIC_ADMIN_PASSWORD) {
      setIsAdmin(true);
    } else {
      alert("Unauthorized Access!");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/submit-blog", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    if (res.ok) {
      alert("Blog submitted successfully!");
      setFormData({ title: "", content: "", author: "", category: "" });
      fetchBlogs(); // Re-fetch blogs to include new one
    } else {
      alert("Error submitting blog.");
    }
  };

  const handleChange = (e) => {
    if (e.target) {
      // For regular input fields
      setFormData({ ...formData, [e.target.name]: e.target.value });
    } else {
      // For Slate editor
      setFormData({ ...formData, content: e });
    }
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const handleSortChange = (e) => {
    setSort(e.target.value);
  };

  return (
    <div className="max-w-4xl mx-auto p-8">
      <div className="mx-auto max-w-2xl lg:mx-0">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          From the blog
        </h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">
          Learn how to grow your business with our expert advice.
        </p>
      </div>

      <div className="mb-4">
        <select
          onChange={handleFilterChange}
          className="p-2 border border-gray-300 rounded"
        >
          <option value="">All Categories</option>
          <option value="tech">Tech</option>
          <option value="lifestyle">Lifestyle</option>
          <option value="business">Business</option>
          {/* Add more categories as needed */}
        </select>
        <select
          onChange={handleSortChange}
          className="p-2 border border-gray-300 rounded ml-2"
        >
          <option value="latest">Newest</option>
          <option value="oldest">Oldest</option>
        </select>
      </div>

      {blogs.length > 0 ? (
        blogs.map((blog) => {
          return <BlogCard key={blog.id} blog={blog} />;
        })
      ) : (
        <p>No blogs available yet.</p>
      )}

      {!isAdmin && (
        <button
          onClick={authenticateAdmin}
          className="p-2 mt-4 bg-blue-600 text-white rounded"
        >
          Admin Login
        </button>
      )}

      {isAdmin && (
        <div>
          <h2 className="text-xl font-bold mb-4">Submit a New Blog Post</h2>
          <form onSubmit={handleSubmit} className="mb-8">
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Blog Title"
              className="mb-4 p-2 w-full border border-gray-300 rounded"
              required
            />
            <BlogEditor
              initialValue={formData.content}
              onChange={(newContent) =>
                setFormData((prev) => ({ ...prev, content: newContent }))
              }
            />
            <input
              type="text"
              name="author"
              value={formData.author}
              onChange={handleChange}
              placeholder="Author Name"
              className="mb-4 p-2 w-full border border-gray-300 rounded"
              required
            />
            <input
              type="text"
              name="category"
              value={formData.category}
              onChange={handleChange}
              placeholder="Category"
              className="mb-4 p-2 w-full border border-gray-300 rounded"
              required
            />
            <button
              type="submit"
              className="p-2 bg-green-600 text-white rounded"
            >
              Submit Blog
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default BlogsPage;
