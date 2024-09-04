import React from "react";

export default function CardSellingPoint({title, icon, description}){
    return (
        <div className="card-point relative group overflow-hidden rounded-xl bg-wr_gray transition-all duration-300 hover:scale-[1.02] hover:shadow-lg p-6">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white dark:to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="p-6 space-y-4">
            {React.cloneElement(icon, { className: "h-16 w-16 text-white dark:text-white" })}
            <h3 className="text-2xl font-bold text-white">{title}</h3>
            <p className="text-wr_text dark:text-wr_text text-lg">
                {description}
            </p>
            </div>
      </div>
    );
}