"use client";
import Image from "next/image";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";

export default function Signup() {
  return (
    <>
      <section className="relative z-10 pt-28 lg:pt-36 xl:pt-40 pb-18 text-white">
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-b from-transparent to-[#0a0a0a] -z-10"></div>

        <div className="text-center px-4">
          <h1 className="font-extrabold text-4xl sm:text-5xl text-white mb-6">
            Sign up
          </h1>
          <ul className="flex items-center justify-center gap-2 font-medium">
            <li>
              <a href="/">Home</a>
            </li>
            <li>/ Sign up</li>
          </ul>
        </div>
      </section>

      {/* Signup Form Section */}
      <section className="pt-16 pb-16 lg:pb-24 xl:pb-32">
        <div className="max-w-[1170px] mx-auto px-4 sm:px-8 xl:px-0">
          <div className="rounded-3xl bg-white/5 backdrop-blur-sm shadow-lg">
            <div className="flex flex-col lg:flex-row">
              <div className="hidden lg:block lg:w-1/2 relative py-20 pl-14 pr-20">
                <div className="absolute top-0 right-0 w-[1px] h-full bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>
                <h2 className="text-white text-2xl sm:text-3xl font-bold max-w-[300px] mb-10">
                  Unlock the Power of Writing Tool
                </h2>

                <Image
                  src="/assets/sigin.svg"
                  alt="signin"
                  width={360}
                  height={360}
                  priority
                />
              </div>

              <div className="w-full lg:w-1/2 py-10 sm:py-20 px-8 sm:px-20">
                <form>
                  <button
                    type="button"
                    className="w-full flex items-center justify-center gap-3 p-3.5 font-medium text-white rounded-lg border border-white/20 hover:border-purple-500 transition"
                  >
                    <FcGoogle />
                    Sign in with Google
                  </button>

                  <button
                    type="button"
                    className="mt-4 w-full flex items-center justify-center gap-3 p-3.5 font-medium text-white rounded-lg border border-white/20 hover:border-purple-500 transition"
                  >
                    <FaApple />
                    Sign in with Apple
                  </button>

                  <span className="relative block font-medium text-sm text-center my-8">
                    <span className="absolute left-0 top-1/2 w-24 h-px bg-white/20"></span>
                    Or sign up with email
                    <span className="absolute right-0 top-1/2 w-24 h-px bg-white/20"></span>
                  </span>

                  {[
                    { placeholder: "Enter your name", type: "text" },
                    { placeholder: "Enter your email", type: "email" },
                    { placeholder: "Confirm password", type: "password" },
                  ].map((field, index) => (
                    <div key={index} className="mb-4 relative">
                      <input
                        type={field.type}
                        placeholder={field.placeholder}
                        className="w-full border border-white/20 bg-transparent rounded-lg pl-5 pr-4 py-3.5 font-medium focus:border-purple-500 outline-none"
                      />
                    </div>
                  ))}

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg py-3 px-7 text-white font-medium hover:opacity-85 transition"
                  >
                    Sign up with AI Tool
                  </button>

                  <p className="text-center text-white font-medium mt-6">
                    Already have an account?{" "}
                    <a href="/signin" className="text-purple-400">
                      Sign in Here
                    </a>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
