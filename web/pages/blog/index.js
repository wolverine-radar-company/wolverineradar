import { useState } from 'react';
import blogPostsData from './blogPosts.current.json';
import BlogPost from '@/components/Items/blogPost';

  
  export default function Blog() {
    const [blogPosts, setBlogPosts] = useState(blogPostsData); // Use your blog posts data
    return (
        <div>
            <div className="sticky -top-1 bg-black p-5 z-10 h-32">
                <div className="flex flex-row items-center">
                    <div className="flex-1 mt-4">
                        <div className="flex items-center">
                            <h1 className="text-4xl text-white">Blog</h1>
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <div className="flex justify-center p-5 pt-10 mb-6">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {blogPosts.map((blog) => (
                        <div key={blog.id}>
                            <BlogPost
                                date={blog.date}
                                title={blog.title}
                                content={blog.content}
                                id={blog.id}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
  }
  