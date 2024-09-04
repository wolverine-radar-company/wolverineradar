import Link from "next/link";

export default function CTA() {
    return (
        <div className="p-6 mb-20 bg-white text-wr_blue rounded-lg mt-8">
            <h2 className="text-4xl font-bold mb-4">See the world with new clarity. Try our products today.</h2>
            <p className="text-lg mb-4 text-black">Create an account to receive free product samples.</p>
            <div className="flex space-x-4 text-black">
                <Link href="/account/dashboard">
                    <span className="bg-wr_yellow font-bold p-3 rounded relative overflow-hidden group">
                        <span className="mr-4">Get Started</span>
                        <span className="absolute right-0 top-0 bottom-0 flex items-center pr-2 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                    </span>
                </Link>
                <Link href="/products">
                    <span className="bg-wr_yellow font-bold p-3 rounded relative overflow-hidden group">
                        <span className="mr-4">Products</span>
                        <span className="absolute right-0 top-0 bottom-0 flex items-center pr-2 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                    </span>
                </Link>
            </div>
        </div>
    );
}

// export default function CTA(){
//     return (
//         <div className="p-6 mb-20">

            {/* <div className="mx-auto">
                <div className={`rounded-3xl sm:shadow-2xl bg-white`}>
                    <div className="relative overflow-hidden pt-16">
                        <div className="flex flex-col lg:flex-row">
                            <div className="mx-auto lg:text-left">
                                <h2 className="text-4xl font-bold tracking-tight text-wr_blue">
                                    See the world with new clarity.
                                    <br />
                                    Try our products today.
                                </h2>
                                <p className="mt-6 text-xl leading-8 text-black">
                                    Create an account to receive free product samples.
                                </p>
                                <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start mb-8 text-black">
                                    <Link
                                        href="/account/dashboard"
                                        className="rounded-md bg-wr_yellow p-3 text-sm font-semibold shadow-sm text-black"
                                    >
                                        Get started
                                    </Link>
                                    <Link href="/products" className="text-sm font-semibold">
                                        Products <span aria-hidden="true">→</span>
                                    </Link>
                                </div>
                            </div>
                            <div className="hidden lg:block flex-grow h-80"></div>
                        </div>
                    </div>
                </div>
            </div> */}
//         </div>
//     );
// }
