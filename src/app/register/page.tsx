"use client";

import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const RegisterPage = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [isEmail, setIsEmail] = useState<boolean | null>(null);
    const [isPassword, setIsPassword] = useState<boolean | null>(null);
    const [userCreated, setUserCreated] = useState<boolean>(false);
    const [creatingUser, setCreatingUser] = useState<boolean>(false);
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

    const handlePasswordOnBlur = () => {
        if (password.length < 6) {
            setIsPassword(false);
        } else {
            if (!isPassword) {
                setIsPassword(true);
            }
        }
    }

    const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setCreatingUser(true);
        setError(false);
        setUserCreated(false);
        const response = await fetch('api/register', {
            method: "POST",
            body: JSON.stringify({ email, password }),
            headers: { "Content-Type": "application/json" }
        })
        if (response.ok) {
            setUserCreated(true);
        } else {
            setError(true);
        }
        setCreatingUser(false);
    }

    return (
        <section className="mt-8">
            <h1 className="text-center text-4xl text-primary mb-4 font-semibold">Register</h1>
            {userCreated && (
                <div className="text-center my-4">
                    Registered Successfully. <br />
                    Now you can <Link className="underline" href={'/login'}>login &raquo;</Link>
                </div>
            )}
            {error && (
                <div className="text-center my-4">
                    Something wrong occured. <br />
                    Please try again.
                </div>
            )}
            <form className="block text-center mx-auto max-w-sm" onSubmit={(e) => handleFormSubmit(e)}>
                <input
                    type="email"
                    placeholder="email"
                    value={email}
                    disabled={creatingUser}
                    onChange={(e) => setEmail(e.target.value)}
                    onBlur={() => handleEmailOnblur()}
                />
                <span className="text-start block text-primary text-[12px]" style={{ display: isEmail !== null && !isEmail ? "" : "none" }}>
                    Invalid Email
                </span>
                <input
                    type="password"
                    placeholder="password"
                    value={password}
                    disabled={creatingUser}
                    onChange={(e) => setPassword(e.target.value)}
                    onBlur={() => handlePasswordOnBlur()}
                />
                <span className="text-start block text-primary text-[12px] mb-2" style={{ display: isPassword !== null && !isPassword ? "" : "none" }}>
                    Invalid Password: Password must contain at least 6 characters
                </span>
                <button type="submit" disabled={creatingUser} className="hover:bg-red-400 transition-all">Register</button>
                <div className="my-4">
                    or login with providers
                </div>
                <button onClick={() => signIn("google", { callbackUrl: "/" })} className="flex justify-center gap-4 hover:bg-gray-100 transition-all">
                    <Image src={"/google.png"} alt="" width={24} height={24} />
                    <span>Login with google</span>
                </button>
                <div className="text-center text-gray-500 my-4 border-t pt-4">
                    Already have an account? <Link className="underline hover:text-gray-800" href={"/login"}>Login here &raquo;</Link>
                </div>
            </form>
            <div>
            </div>
        </section>
    );
}

export default RegisterPage;