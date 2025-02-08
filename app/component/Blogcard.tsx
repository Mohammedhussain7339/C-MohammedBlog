// components/BlogCard.tsx
import Link from 'next/link';

interface BlogCardProps {
  post: {
    title: string;
    description: string;
    slug: string;
    date: string;
    author: string;
    imageUrl: string;
  };
}

const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  return (
    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
      <img
        src={post.imageUrl}
        alt={post.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
          {post.title}
        </h3>
        <p className="mt-2 text-gray-600 dark:text-gray-300">{post.description}</p>
        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
          By {post.author} | {post.date}
        </p>
        <Link
          href={`/blog/${post.slug}`}
          className="mt-4 inline-block text-white bg-blue-600 hover:bg-blue-700 rounded-md px-4 py-2"
        >
          Read more &rarr;
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
