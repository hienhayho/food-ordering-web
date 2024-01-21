"use client"

import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";


const LoginPage = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [isEmail, setIsEmail] = useState<boolean | null>(null);
    const [loginInProgress, setloginInProgress] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);

    const handleEmailOnblur = () => {
        if (!email.endsWith("@gmail.com" || email === "@gmail.com")) {
            setIsEmail(false);
        } else {
            if (!isEmail) {
                setIsEmail(true);
            }
        }
    }


    const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setloginInProgress(true);
        setError(false);

        await signIn("credentials", { email, password });


        setloginInProgress(false);
    }


    return (
        <section className="mt-8">
            <h1 className="text-center text-primary text-4xl mb-4 font-semibold">
                Login
            </h1>
            <form className="block mx-auto max-w-sm" onSubmit={handleFormSubmit}>
                <input
                    type="email"
                    placeholder="email"
                    value={email}
                    disabled={loginInProgress}
                    onChange={(e) => setEmail(e.target.value)}
                    onBlur={() => handleEmailOnblur()}
                />
                <input
                    type="password"
                    placeholder="password"
                    value={password}
                    disabled={loginInProgress}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit" disabled={loginInProgress} className="hover:bg-red-400 transition-all">
                    Login
                </button>
                <div className="my-4 text-center">
                    or login with providers
                </div>
                <button className="flex justify-center gap-4 hover:bg-gray-100 transition-all">
                    <Image src={"/google.png"} alt="" width={24} height={24} />
                    <span>Login with google</span>
                </button>
                <div className="text-center text-gray-500 my-4 border-t pt-4">
                    Don't have an account?{" "}
                    <Link className="underline hover:text-gray-800" href={"/register"}>
                        Register here &raquo;
                    </Link>
                </div>
            </form>
        </section>
    );
}

export default LoginPage;