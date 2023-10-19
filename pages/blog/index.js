// pages/blog/index.js

import Link from 'next/link';
import Image from 'next/image'
import { useState } from 'react'; // Import useState
import * as React from 'react'

import blogPostsData from '../blog/blogPosts.current.json'; // Import your blog posts data

  
  export default function Blog() {
    const [blogPosts, setBlogPosts] = useState(blogPostsData); // Use your blog posts data
    return (
            <div className="bg-black py-6 sm:py-8 mt-20">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-logo_blue">From the blog</h2>
                </div>
                
                <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3 text-white_txt">
                    {blogPosts.map((blog) => (
                        <React.Fragment key={blog.id}>
                        <Link href={`/blog/${blog.id}`}>
                        <article className="flex max-w-xl flex-col items-start justify-between">
                            <div className="flex items-center gap-x-4 text-xs">
                                {blog.date}
                            </div>
                            <div className="group relative">
                            <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                                <span className="absolute inset-0" />
                                {blog.title}
                            </h3>
                            <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{blog.content}</p>
                            </div>
                        </article>
                        </Link>
                        </React.Fragment>
                    ))}
                </div>
                </div>
            </div>
    )
  }
  