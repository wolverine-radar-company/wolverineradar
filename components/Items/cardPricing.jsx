import { FaCheck } from "react-icons/fa";

export default function CardPricing({name, fee, revenue_share, accounts, trial_credits, support}){
    return(
    <div className="border-2 border-wr_text rounded-md p-4">
        {/* <h2 className="text-xl font-bold text-white">$10/month</h2> */}
        <h3 className="text-lg font-semibold text-white mt-2">{name}</h3>
        <ul className="mt-4">
          <li className="flex justify-between text-wr_text mt-2">
            Fee
            <div>{fee}</div>
          </li>
          <li className="flex justify-between text-wr_text mt-2">
            Revenue Share
            <div>{revenue_share}</div>
          </li>
          <li className="flex justify-between text-wr_text mt-2">
            Accounts
            <div>{accounts}</div>
          </li>
          <li className="flex justify-between text-wr_text mt-2">
            Trial Credits
            <div>{trial_credits}</div>
          </li>
          <li className="flex justify-between text-wr_text mt-2">
            Support
            <FaCheck />
          </li>
        </ul>
    </div>
    );
}