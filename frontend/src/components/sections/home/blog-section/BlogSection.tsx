"use client";
import { motion } from 'framer-motion';
import Link from 'next/link';
import { blogPosts } from '@/data/blogData';
import BlogCard from './BlogCard';

const BlogSection = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mobile-container">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 sm:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="mobile-title font-bold text-gray-900 mobile-text-center md:text-left">
              Derniers articles
            </h2>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-gray-600 mobile-text-center md:text-left">
              Conseils, astuces et actualités pour les entraîneurs
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-4 md:mt-0 flex justify-center md:justify-start"
          >
            <Link
              href="/blog"
              className="inline-flex items-center justify-center px-5 sm:px-6 py-2 sm:py-3 border border-transparent text-sm sm:text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90 button-transition focus-ring"
            >
              Voir tous les articles
              <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1  lg:grid-cols-3 gap-6 sm:gap-8">
          {blogPosts.map((post, index) => (
            <BlogCard key={post.id} post={post} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
