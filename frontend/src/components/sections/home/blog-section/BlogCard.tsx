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
      className="bg-white rounded-lg sm:rounded-xl shadow-sm sm:shadow-md overflow-hidden h-full flex flex-col hover-shadow"
    >
      <div className="relative w-full h-96 sm:h-[32rem] md:[48rem] lg:h-72">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
        />
        <div className="absolute top-3 sm:top-4 left-3 sm:left-4 bg-primary text-white text-xs font-semibold px-2 sm:px-3 py-1 rounded-full hover-scale-sm">
          {post.category}
        </div>
      </div>
      <div className="p-4 sm:p-6 flex-grow">
        <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-2 line-clamp-2">
          {post.title}
        </h3>
        <p className="!text-sm  md:text-base text-gray-600 mb-3 sm:mb-4 line-clamp-2 sm:line-clamp-3">
          {post.excerpt}
        </p>
      </div>
      <div className="px-4 sm:px-6 pb-4 sm:pb-6 flex items-center justify-between">
        <div className="flex items-center">
          <div className="relative w-6 h-6 sm:w-8 sm:h-8 rounded-full overflow-hidden mr-2 sm:mr-3 hover-scale-sm">
            <Image
              src={post.authorImage}
              alt={post.author}
              fill
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-xs sm:text-sm font-medium text-gray-900">{post.author}</p>
            <p className="text-xs text-gray-500 hidden sm:block">{post.date}</p>
          </div>
        </div>
        <Link
          href={`/blog/${post.slug}`}
          className="text-primary font-medium text-xs sm:text-sm hover:underline hover-scale-sm"
        >
          Lire plus
        </Link>
      </div>
    </motion.div>
  );
};

export default BlogCard;
