import CardPricing from "../Items/cardPricing";

export default function Pricing(){
    return(
        <div id='pricing-tagline' className='flex flex-col text-center items-center mx-auto justify-center mb-20'>
        <h1 className='mt-10 uppercase text-3xl sm:text-5xl font-bold text-white'>Pricing</h1>
        <p className='text-wr_text text-2xl mt-4'>Customizable Plans for Your Unique Needs</p>
        
        <div className="mt-10 w-full max-w-4xl">
            <h1 className="text-white text-xl font-extrabold text-left mb-4">Crosshatch</h1>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {/* Starter Plan */}
            <CardPricing name={"Dev"} fee={"$15k"} revenue_share={"10%"} accounts={1} trial_credits={10} />
            {/* Beginner Plan */}
            <CardPricing name={"Ops"} fee={"$50k"} revenue_share={"None"} accounts={5} trial_credits={50} />
            {/* Pro Plan */}
            <CardPricing name={"Code Port"} fee={"$10k/2,000 lines of code"} revenue_share={"None"} accounts={10} trial_credits={100} />
          </div>
        </div>
      </div>
    );
}