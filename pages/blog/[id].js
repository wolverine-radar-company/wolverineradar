import Image from 'next/image'
import { useRouter } from 'next/router';
import blogPostsData from '../blog/blogPosts.current.json'; // Import your blog posts data
import Link from 'next/link';

const BlogDetails = ({blog, notFound}) => {

  if (notFound)  {
    return (
        <div className="p-3 mt-20 bg-black">
            <section className="p-3">
            <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8  border-4 rounded-lg">
                <div className="max-w-3xl">
                <h2 className="text-3xl font-bold sm:text-4xl text-txt">
                    Post not found!
                </h2>
                </div>

                <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
                <div className="relative h-64 overflow-hidden sm:h-80 lg:h-full">
                    <Image
                    alt="Radar Image"
                    src="/images/San_fran.png"
                    className="absolute inset-0 h-full w-full object-cover scale-100"
                    width={410}
                    height={410}
                    loading="lazy"
                    />
                </div>

                <div className="lg:py-0">
                    <article className="space-y-4 text-white_txt">
                    <br/>
                    <p>
                        Oops! It seems like the blog post you were looking for isn&apos;t here. But don&apos;t worry, there are plenty of other exciting posts to explore on our site.
                    </p>
                    <br/>
                    <p>
                        In the meantime, why not check out our latest article about
                        <Link href="/blog/1" className="px-1 text-txt">
                        Radarography?
                        </Link>
                    </p>
                    <br/>
                    <p>
                        If you have any questions or need assistance, feel free to contact us. Happy reading!
                    </p>
                    <br/>
                    </article>
                </div>
                </div>
            </div>
            </section>
            <br></br>
        </div>
    );
  }
  
  return (
    <div className="p-3 mt-20 bg-black">
        <br/>
        <section className="p-3">
  <div className="mx-auto max-w-screen-xl px-8 py-16 sm:px-6 sm:py-12 lg:px-8 border border-gray-200 text-white_txt rounded-lg">
    <div className="max-w-3xl">
      <h2 className="text-3xl font-bold sm:text-4xl text-logo_blue">
        {blog.title}
      </h2>
    </div>

    <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-0">
      <div className="relative h-64 overflow-hidden sm:h-80 lg:h-full">
        <Image
          alt="Radar Image"
          src={blog.imgSrc}
          className="absolute inset-0 object-cover scale-100"
          width={510}
          height={510}
          loading="lazy"
        />
        <div className="absolute bottom-0 left-0 p-3">
          <p className="text-white_txt text-[8px] bg-gray-800 bg-opacity-70 rounded-tr-lg">
            Contains modified Copernicus Sentinel data 2023
          </p>
        </div>
      </div>

      <div className="lg:py-0">
        <article className="space-y-4 text-white_txt">
            <p className='text-sm sm:text-base'>{blog.content}</p>
        </article>
      </div>
    </div>
  </div>
</section>

            <br></br>
    </div>
  );
};

export async function getStaticProps(context) {
  const { query } = context;
  const { id } = query;
  const blog = blogPostsData.find((post) => post.id === parseInt(id));

  if (!blog) {
    return {
      props: {
        notFound: true
      }
    };
  }
  return {
    props: {
      blog,
    },
  };
}






export default BlogDetails;
