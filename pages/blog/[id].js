import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import blogPostsData from '../blog/blogPosts.current.json';
import { useEffect, useState } from 'react';

export default function BlogDetails() {
    const router = useRouter();
    const [blog, setBlog] = useState(blogPostsData.find((post) => post.id === parseInt(router.query.id)))
    const [latestID, setLatestID] = useState(blogPostsData[0].id);
    const [latestName, setLatestName] = useState(blogPostsData[0].title);


    useEffect(() => {
        setBlog(blogPostsData.find((post) => post.id === parseInt(router.query.id)));
    },[router])

    useEffect(() => {
        setTimeout(() => {
            window.scrollTo(0, 100);
        }, 10); // Delay of 100 milliseconds
    }, []);

    return !blog ? (
        <div>
            <div className="sticky -top-1 bg-black p-5 z-10 h-32">
                <div className="flex flex-row items-center">
                    <div className="flex-1 mt-4">
                        <div className="flex items-center">
                            <h1 className="text-4xl text-white"><Link href={"/blog"} className='underline'>Blog</Link> / <span className='text-2xl text-wr_text'>Not Found</span></h1>
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <section className='p-5'>
                <div>
                    <h2 className="text-3xl font-bold sm:text-4xl text-white">Post not Found!</h2>
                </div>

                <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-0 mb-20">
                    <div className="relative h-64 overflow-hidden sm:h-80 lg:h-full">
                    <Image
                        alt="Radar Image"
                        src={`${process.env.NEXT_PUBLIC_CDN_LINK}/images/blogs/notFound.jpg`}
                        className="absolute inset-0 object-cover scale-100"
                        width={510}
                        height={510}
                        loading="lazy"
                    />
                    <div className="absolute bottom-0 left-0 p-3">
                        <p className="text-wr_text text-[8px] bg-gray-800 bg-opacity-70 rounded-tr-lg">
                        Contains modified Copernicus Sentinel data 2023
                        </p>
                    </div>
                    </div>

                    <div className="lg:py-0 mb-20">
                    <article className="space-y-4 text-wr_text mb-20">
                        <p className="text-sm sm:text-base">{"Oops! It seems like the blog post you were looking for isn't here. But don't worry, there are plenty of other exciting posts to explore on our site."}</p>
                        <p className="text-sm sm:text-base">{"In the meantime, why not check out our latest article, "}
                            <Link href={`/blog/${latestID}`} className="px-1 text-txt">
                                {latestName}.
                            </Link>
                        </p>
                        <p className="text-sm sm:text-base">{"If you have any questions or need assistance, feel free to contact us. Happy reading!"}</p>
                    </article>
                    </div>
                </div>
            </section>
        </div>
    ) : (
        <div>
            <div className="sticky -top-1 bg-black p-5 z-10 h-32">
                <div className="flex flex-row items-center">
                    <div className="flex-1 mt-4">
                        <div className="flex items-center">
                            <h1 className="text-4xl text-white"><Link href={"/blog"} className='underline'>Blog</Link> / <span className='text-2xl text-wr_text'>{blog.title}</span></h1>
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <section className='p-5'>
                <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-0 mb-20">
                    <div className="relative h-64 overflow-hidden sm:h-80 lg:h-full">
                    <Image
                        alt="Radar Image"
                        src={`${process.env.NEXT_PUBLIC_CDN_LINK}${blog.imgSrc}`}
                        className="absolute inset-0 object-cover scale-100"
                        width={510}
                        height={510}
                        loading="lazy"
                    />
                    <div className="absolute bottom-0 left-0 p-3">
                        <p className="text-wr_text text-[8px] bg-gray-800 bg-opacity-70 rounded-tr-lg">
                        Contains modified Copernicus Sentinel data 2023
                        </p>
                    </div>
                    </div>
                    <div className="lg:py-0">
                    <article className="space-y-4 text-wr_text">
                        <p className="text-sm sm:text-base">{blog.content}</p>
                    </article>
                    </div>
                </div>
            </section>
        </div>
    );
};
