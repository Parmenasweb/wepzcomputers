import Blog from "../../../models/Blog";
import dbConnect from "../../../lib/mongod";

export async function GET(req, res) {
  await dbConnect();

  const { category, sort } = req.query; // Get category and sort from query params

  const filter = category ? { category } : {};
  const sortOptions = sort === "latest" ? { createdAt: -1 } : { createdAt: 1 };

  if (req.method === "GET") {
    try {
      const blogs = await Blog.find(filter).sort(sortOptions);
      res.status(200).json({ success: true, blogs });
    } catch (error) {
      res.status(400).json({ success: false, error });
    }
  } else {
    res.status(405).json({ success: false, message: "Method not allowed" });
  }
}

export async function POST(req, res) {
  await dbConnect();

  if (req.method === "POST") {
    const { title, content, author } = req.body;

    if (!title || !content || !author) {
      return res
        .status(400)
        .json({ success: false, message: "All fields are required" });
    }

    try {
      const newBlog = new Blog({ title, content, author });
      await newBlog.save();
      res.status(201).json({ success: true, blog: newBlog });
    } catch (error) {
      res.status(400).json({ success: false, error });
    }
  } else {
    res.status(405).json({ success: false, message: "Method not allowed" });
  }
}
