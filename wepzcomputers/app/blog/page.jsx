"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, User } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

// Placeholder data for blog posts
const blogPosts = [
  {
    id: 1,
    title: "10 Tips to Extend Your Laptop's Battery Life",
    excerpt:
      "Learn how to maximize your laptop's battery performance with these simple tricks.",
    date: "2023-10-15",
    author: "John Doe",
    category: "Tips & Tricks",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 2,
    title: "Common Causes of Laptop Overheating",
    excerpt:
      "Discover why your laptop might be running hot and how to cool it down.",
    date: "2023-10-10",
    author: "Jane Smith",
    category: "Troubleshooting",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 3,
    title: "The Future of Laptop Technology: What to Expect",
    excerpt:
      "Explore upcoming trends and innovations in laptop design and functionality.",
    date: "2023-10-05",
    author: "Bob Johnson",
    category: "Industry News",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 4,
    title: "How to Choose the Right Laptop for Your Needs",
    excerpt:
      "A comprehensive guide to selecting the perfect laptop based on your requirements.",
    date: "2023-09-30",
    author: "Alice Brown",
    category: "Buying Guide",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 5,
    title: "DIY Laptop Upgrades: RAM and SSD",
    excerpt:
      "Step-by-step instructions for upgrading your laptop's memory and storage.",
    date: "2023-09-25",
    author: "Charlie Wilson",
    category: "DIY Repairs",
    image: "/placeholder.svg?height=200&width=300",
  },
];

const categories = ["All", ...new Set(blogPosts.map((post) => post.category))];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const router = useRouter();

  const filteredPosts =
    selectedCategory === "All"
      ? blogPosts
      : blogPosts.filter((post) => post.category === selectedCategory);

  const handlePostClick = (postId) => {
    router.push(`/blog/${postId}`);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">
        Laptop Repair Blog
      </h1>

      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {categories.map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? "default" : "outline"}
            onClick={() => setSelectedCategory(category)}
            className="mb-2"
          >
            {category}
          </Button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPosts.map((post) => (
          <Card
            key={post.id}
            className="flex flex-col cursor-pointer transition-transform duration-200 hover:scale-105"
            onClick={() => handlePostClick(post.id)}
          >
            <div className="relative w-full pt-[56.25%]">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover rounded-t-lg"
              />
            </div>
            <CardHeader>
              <CardTitle className="line-clamp-2">{post.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground line-clamp-3">
                {post.excerpt}
              </p>
            </CardContent>
            <CardFooter className="flex justify-between mt-auto">
              <div className="flex items-center text-sm text-muted-foreground">
                <Calendar className="mr-1 h-4 w-4" />
                {post.date}
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <User className="mr-1 h-4 w-4" />
                {post.author}
              </div>
            </CardFooter>
            <CardFooter>
              <Badge>{post.category}</Badge>
            </CardFooter>
          </Card>
        ))}
      </div>

      {filteredPosts.length === 0 && (
        <p className="text-center mt-4 text-muted-foreground">
          No blog posts found in this category.
        </p>
      )}
    </div>
  );
}

// "use client";

// import Link from "next/link";
// import { getAllPosts } from "@/lib/contentLayer"; // Adjust the import based on your structure

// export default function BlogPage() {
//   const posts = getAllPosts(); // Fetch all posts

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-4xl font-bold mb-4">Blog Posts</h1>
//       <ul>
//         {posts.map((post) => (
//           <li key={post.slug} className="mb-4">
//             <Link href={`/blog/${post.slug}`}>
//               <a className="text-blue-600 hover:underline">{post.title}</a>
//             </Link>
//             <div className="text-muted-foreground">{post.date}</div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }
