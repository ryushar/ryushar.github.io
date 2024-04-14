import Link from "next/link";
import { useMemo } from "react";

import { getBlogPosts } from "utilities/blog";
import { formatDate } from "utilities/common";

export const metadata = {
  title: "Blog",
  description:
    "Read my thoughts on my work and software development in general.",
};

export default function BlogPage() {
  const allBlogs = getBlogPosts();

  const sortedBlogs = useMemo(() => {
    return [...allBlogs].sort((a, b) => {
      const dateA = new Date(a.metadata.publishedAt);
      const dateB = new Date(b.metadata.publishedAt);
      return dateA > dateB ? -1 : 1;
    });
  }, [allBlogs]);

  return (
    <section>
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">
        read my blog
      </h1>
      {sortedBlogs.map((post) => (
        <Link
          key={post.slug}
          className="flex flex-col space-y-1 mb-4"
          href={`/blog/${post.slug}`}
        >
          <div className="w-full flex flex-col">
            <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
              {post.metadata.title}
            </p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              {formatDate(post.metadata.publishedAt)}
            </p>
          </div>
        </Link>
      ))}
    </section>
  );
}
