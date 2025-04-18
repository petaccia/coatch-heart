"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { BlogPost } from '@/data/blogData';

interface BlogCardProps {
  post: BlogPost;
  index: number;
}

const BlogCard = ({ post, index }: BlogCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-xl shadow-md overflow-hidden h-full flex flex-col"
    >
      <div className="relative h-48">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
        />
        <div className="absolute top-4 left-4 bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full">
          {post.category}
        </div>
      </div>
      <div className="p-6 flex-grow">
        <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
          {post.title}
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-3">
          {post.excerpt}
        </p>
      </div>
      <div className="px-6 pb-6 flex items-center justify-between">
        <div className="flex items-center">
          <div className="relative w-8 h-8 rounded-full overflow-hidden mr-3">
            <Image
              src={post.authorImage}
              alt={post.author}
              fill
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-900">{post.author}</p>
            <p className="text-xs text-gray-500">{post.date}</p>
          </div>
        </div>
        <Link
          href={`/blog/${post.slug}`}
          className="text-primary font-medium text-sm hover:underline"
        >
          Lire plus
        </Link>
      </div>
    </motion.div>
  );
};

export default BlogCard;
