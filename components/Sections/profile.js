import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Profile({user, error, loading}){
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        if(user){
            setSuccess(true);
        }

    }, [user]);

    return (
        <div className={`${loading ? 'animate-pulse' : ''} p-8 rounded-lg overflow-hidden flex flex-col bg-wr_gray border border-accent`}>
            <div className="text-white bold text-3xl mb-6">
                My Profile:
            </div>
            <div className={`mx-auto w-full max-w-md p-6 rounded-lg shadow-lg text-white ${!success ? 'hidden' : ''}`}>
                <div className="flex flex-col items-center">
                    <div className="w-24 h-24 mb-4">
                        <Image src={user.picture} height={500} width={500} className="rounded-full" alt="Profile Picture" />
                    </div>
                    <h1 className="text-2xl font-semibold">{user.given_name} {user.family_name}</h1>
                    <h3 className="mt-2 text-lg text-wr_text">{user.email}</h3>
                    <Link href={"/api/auth/logout"}>
                        <button className="mt-6 px-4 py-2 bg-white text-black hover:bg-black hover:text-white rounded-lg">
                            Logout
                        </button>
                    </Link>
                </div>
            </div>
            <div className={`text-white text-sm ${success ? 'hidden' : ''}`}>
                {!loading && (success ? "" : "No Data")}
            </div>
            <div className={`text-white text-sm ${error ? '' : 'hidden'}`}>
                {!loading && ("Error loading user data")}
            </div>
        </div>
    );
}