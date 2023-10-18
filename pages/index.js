import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import styles from '/styles/home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
  <main className={`bg-ghostwhite ${styles['no-scrollbar']}`}>
   <div className="h-[90vh] w-screen bg-cover bg-center relative" style={{ backgroundImage: `url('/images/MEBDABS_vd.jpg')` }}>
    <div className="mx-auto max-w-3xl py-28 sm:py-44 lg:py-52 p-6">
      <div className="text-center">
        <div className="text-left h-full">
          <h1 className="text-4xl font-bold tracking-tight text-secondary sm:text-6xl text-txt mb-0">
            Wolverine Radar
          </h1>

          <p className="text-lg leading-8 py-6 text-white_txt">
            See the World with New Clarity.
          </p>
          <div className="mt-4 py-8 flex items-center justify-center gap-x-6 bg-primary_white">
            <Link
              href="/products"
              className=" text-black rounded-md bg-secondary px-3.5 py-2.5 text-sm font-semibold shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Get started
            </Link>
            <Link href='#radar' className="text-sm font-semibold leading-6 text-white_txt">
              Learn more <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>


  <div className="flex justify-center items-center text-black bg-ghostwhite p-6">
    <div className="text-center text-4xl font-bold tracking-tight">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 inline-block">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
      </svg>
    </div>
  </div>

  <div className={`py-12 sm:py-16 text-white_txt `} >
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto max-w-2xl lg:text-center">
        <p className="text-3xl font-bold tracking-tight sm:text-4xl text-logo_blue">
          Empowering Decision Makers
        </p>
        <p className="mt-6 text-lg leading-8 text-black">
        Radar satellites are a unique tool to equip decision makers with better and more timely 
        information.  Wolverine Radar is committed to lowering the cost of these insights through 
        a suite of off-the-shelf system modeling, tasking and processing tools to help satellite 
        builders get to orbit faster and derive more value from fixed assets once they get there.
        </p>
        <Image src={"/images/MEBDABS_vd.jpg"} width={608} height={300} className='mx-auto mt-10' />
      </div>
    </div>
  </div>

  <div className={`py-12 sm:py-16 text-white_txt `} >
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto max-w-2xl lg:text-center">
        <p className="text-3xl font-bold tracking-tight sm:text-4xl text-logo_blue">
          Creating New Toolsets
        </p>
        <p className="mt-6 text-lg leading-8 text-black">
        Whether it is a new mesh reflector design, new phase
        array configuration, or modernized software defined radio,
        our highly-optimized tools enable newspace startups to
        focus on their innovative market edge while maximizing their runway.
        </p>
        <Image src={"/images/satellite.jpeg"} width={608} height={300} className='mx-auto mt-10' />
      </div>
    </div>
  </div>

  <div className={`py-12 sm:py-16 text-white_txt `} >
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto max-w-2xl lg:text-center">
        <p className="text-3xl font-bold tracking-tight sm:text-4xl text-logo_blue">
          Our Proccess
        </p>
        <p className="mt-6 text-lg leading-8 text-black">
        Our foundational Crosshatch python CPU/GPU processing architecture ensures that 
        developers can spend more time modeling their technology and less time waiting for 
        jobs to complete.  Crosshatch serves as computational backbone of our tasking software, 
        our processing software, and all of our information extraction analytics.
        </p>
        <Image src={"/images/earth.png"} width={664} height={350} className='mx-auto mt-10' />
      </div>
    </div>
  </div>

  <div className={`py-12 sm:py-16 text-white_txt `} >
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto max-w-2xl lg:text-center">
        <p className="text-3xl font-bold tracking-tight sm:text-4xl text-logo_blue">
          Analytics
        </p>
        <p className="mt-6 text-lg leading-8 text-black">
        Our constellation design capabilities are designed to model real-world customer-driven 
        analytics scenarios with active distribution pathways on our analytics website radarography.com.  
        System design parameters can be adjusted to real-world revenue models to ensure that business owners 
        and investors can understand the design trades they are making before commencing the manufacturing 
        process.
        </p>
        <Image src={"/images/satellite.jpeg"} width={608} height={300} className='mx-auto mt-10' />
        <p className='mt-5 text-left text-black'>Whether your organization is planning its first satellite or trying to maintain a fleet of a dozen vehicles, reach out at info@wolverineradar.com to let us help create value for all current and future on-orbit assets.</p>
      </div>
    </div>
  </div>


    {/* <div className='relative isolate text-primary_white overflow-hidden bg-ghostwhite py-24 sm:py-32 p-6'>








      <p>Radar satellites are a unique tool to equip decision makers with better and more timely information.  Wolverine Radar is committed to lowering the cost of these insights through a suite of off-the-shelf system modeling, tasking and processing tools to help satellite builders get to orbit faster and derive more value from fixed assets once they get there.</p>
      <p>Our foundational Crosshatch python CPU/GPU processing architecture ensures that developers can spend more time modeling their technology and less time waiting for jobs to complete.  Crosshatch serves as computational backbone of our tasking software, our processing software, and all of our information extraction analytics.</p>
      <p>Our constellation design capabilities are designed to model real-world customer-driven analytics scenarios with active distribution pathways on our analytics website radarography.com.  System design parameters can be adjusted to real-world revenue models to ensure that business owners and investors can understand the design trades they are making before commencing the manufacturing process.</p>
      <p>Whether your organization is planning its first satellite or trying to maintain a fleet of a dozen vehicles, reach out at info@wolverineradar.com to let us help create value for all current and future on-orbit assets.</p>
    </div> */}


  </main>
  )
}
