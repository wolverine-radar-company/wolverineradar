import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="p-4 bg-black sm:p-6 border-t border-t-wr_gray mb-12">
            <div className="mx-auto">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0 -ml-2">
                        <Link href="/" className="flex items-center">
                            <Image src="/logo.png" height={30} width={30} className="mr-3" alt="Wolverine Radar Logo" />
                            <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">Wolverine Radar</span>
                        </Link>
                        <p className='text-wr_text text-xs mt-1'>&copy; {currentYear} <a className='underline' href='https://wolverineradar.com'>Wolverine Radar Company.</a> All Rights Reserved.</p>
                    </div>
                    <div className="grid grid-cols-2 gap-6 sm:gap-4 sm:grid-cols-3">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold uppercase text-white">Home</h2>
                            <ul className="text-wr_text">
                                {/* <li className="mb-4">
                                    <Link href="/products" className="hover:underline">Products</Link>
                                </li> */}
                                <li>
                                    <Link href="/blog" className="hover:underline">Blog</Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold uppercase text-white">Account</h2>
                            <ul className="text-wr_text">
                                <li className="mb-4">
                                    <Link href="/api/auth/login" className="hover:underline">Sign Up</Link>
                                </li>
                                <li>
                                    <Link href="/account/dashboard" className="hover:underline">Dashboard</Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold uppercase text-white">Legal</h2>
                            <ul className="text-wr_text">
                                <li className="mb-4">
                                    <Link href="/legal/privacy-policy" className="hover:underline">Privacy Policy</Link>
                                </li>
                                <li>
                                    <Link href="/legal/terms-and-conditions" className="hover:underline">Terms &amp; Conditions</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}