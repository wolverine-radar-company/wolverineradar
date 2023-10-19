import Image from 'next/image'
import styles from './footer.module.css'
import Link from 'next/link'

function Footer() {
    return (
        <footer className={`py-8 sm:py-12 text-white_txt bg-black`}>
            <div className="mx-auto max-w-2xl px-4 py-4 sm:px-6 lg:px-8">
                <div className="flex justify-center text-teal-600">
                <Image
                    src="/White_Icon_Transparent.PNG"
                    width={30}
                    height={35}
                    alt="Logo"
                />
                </div>

                <p className="mx-auto mt-6 text-center leading-relaxed">
                &copy; Wolverine Radar Company. All rights reserved.
                </p>

                <ul className="mt-4 flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">
                <li>
                <Link href="/about" className="transition hover:text-gray-700/75">
                    About
                </Link>
                </li>

                <li>
                <Link href="/blog" className="transition hover:text-gray-700/75">
                    Blog
                </Link>
                </li>
                </ul>
            </div>
            </footer>
    )
}

export default Footer;