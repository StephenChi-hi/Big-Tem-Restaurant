"use client";

import React, { useState, useEffect } from "react";
import { db } from "@/lib/firebase"; // Firestore setup
import { collection, getDocs } from "firebase/firestore";
import { useParams } from "next/navigation";
import BlogCard from "../../../../components/Blog/BlogCard";
import Head from "next/head";
import { format } from "date-fns";

interface BlogValues {
  id: string;
  title: string;
  description: string;
  blogImageURL1: string;
  createdAt: string;
  seconds: any;
}

const BlogOverview: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [blog, setBlog] = useState<BlogValues | null>(null);
  const { slug } = useParams();
  const [blogs, setBlogs] = useState<BlogValues[]>([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "blogs"));
        const blogsData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as BlogValues[];

        const currentBlog = blogsData.find((b) => b.id === slug);
        setBlog(currentBlog || null);

        // Filter out the current blog
        setBlogs(blogsData.filter((b) => b.id !== slug));
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, [slug]);

  const processText = (text: string) => {
    return text
      .replace(/\*\*(.*?)\*\*/g, "<b>$1</b>")
      .replace(/__(.*?)__/g, "<i>$1</i>")
      .replace(
        /### (.*?)(\n|$)/g,
        '<h3 class="text-xl font-bold pt-6 pb-2">$1</h3>'
      )
      .replace(
        /## (.*?)(\n|$)/g,
        '<h2 class="text-2xl font-bold pt-8 pb-2">$1</h2>'
      )
      .replace(/- (.*?)(\n|$)/g, '<li class="pb-4 pt-1">$1</li>')
      .replace(
        /(\d+)\. (.*?)(\n|$)/g,
        '<p class="pb-4 pt-1" value="$1">$1.  $2</p>'
      )
      .replace(
        /\[(.*?)\]\((.*?)\)/g,
        '<a href="$2" target="_blank" class="text-primary font-medium">$1</a>'
      );
  };

  if (loading) return <p>Loading...</p>;
  if (!blog) return <p>Blog not found.</p>;

  return (
    <div className="container1 mt-[60px] px-4 py-8 min-h-screen">
      <Head>
        {/* Dynamically set metadata based on product data */}
        <title>{blog?.title} - Lala Healthy Foods</title>
        <meta
          name={blog?.title}
          content={blog?.description || "blog description"}
        />
        <meta property="og:title" content={blog?.title} />
        <meta property="og:description" content={blog?.description} />
        <meta property="og:image" content={blog?.blogImageURL1} />
        <meta name="twitter:title" content={blog?.title} />
        <meta name="twitter:description" content={blog?.description} />
        <meta name="twitter:image" content={blog?.blogImageURL1} />
      </Head>
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
        {/* Blog Details */}
        <div className="sm:col-span-3">
          <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
          <p className="text-gray-500 mb-2">
            {blog.createdAt &&
              // @ts-ignore
              format(new Date(blog.createdAt.seconds * 1000), "do, MMMM yyyy")}
          </p>{" "}
          <div className="h-[300px] w-full my-4 flex border">
            <img
              src={blog.blogImageURL1}
              alt="Blog Cover"
              className="w-full h-full object-cover"
            />
          </div>
          <div
            className="prose"
            dangerouslySetInnerHTML={{ __html: processText(blog.description) }}
          ></div>
        </div>

        {/* Related Blogs */}
        <div>
          {blogs.length > 0
            ? blogs.map((blog) => (
                <BlogCard
                  key={blog.id}
                  title={blog.title}
                  description={blog.description}
                  image={blog.blogImageURL1}
                  link={`/blog/${blog.id}`}
                />
              ))
            : Array(4)
                .fill(null)
                .map((_, index) => (
                  <div
                    key={index}
                    className="h-[300px] w-full bg-gray-200 rounded-md mb-4 animate-pulse"
                  ></div>
                ))}
        </div>
      </div>
    </div>
  );
};

export default BlogOverview;
