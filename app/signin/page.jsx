import Image from "next/image";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";

export default function Signin() {
  return (
    <>
      <section className="relative z-10 pt-32 lg:pt-36 xl:pt-40 pb-20">
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-b from-transparent to-[#0B0A14] -z-10" />

        <div className="text-center px-4">
          <h1 className="font-extrabold text-4xl sm:text-5xl text-white mb-6">
            Sign in
          </h1>
          <ul className="flex items-center justify-center gap-2 text-white/80">
            <li className="font-medium">
              <Link href="/">Home</Link>
            </li>
            <li className="font-medium">/ Sign in</li>
          </ul>
        </div>
      </section>

      {/* Form Section */}
      <section className="pt-20 pb-20 lg:pb-28 xl:pb-32">
        <div className="max-w-[1170px] mx-auto px-4 sm:px-8 xl:px-0">
          <div className="rounded-3xl bg-white/5 backdrop-blur-md">
            <div className="flex flex-col lg:flex-row">
              <div className="hidden lg:block w-1/2 relative py-20 pl-16 pr-20">
                <div className="absolute top-0 right-0 w-[1px] h-full bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>

                <h2 className="max-w-[300px] font-bold text-white text-3xl mb-10 leading-snug">
                  Unlock the Power of Writing Tool
                </h2>

                <Image
                  src="/assets/sigin.svg"
                  alt="signin"
                  width={430}
                  height={400}
                  className="select-none"
                />
              </div>

              <div className="w-full lg:w-1/2 py-10 sm:py-20 pl-8 sm:pl-20 pr-8 sm:pr-20">
                <form>
                  <button className="w-full flex items-center justify-center gap-3 p-3.5 font-medium text-white rounded-lg border border-white/20 hover:border-purple-500 transition">
                    <FcGoogle />
                    Sign in with Google
                  </button>

                  <button className="mt-4 w-full flex items-center justify-center gap-3 p-3.5 font-medium text-white rounded-lg border border-white/20 hover:border-purple-500 transition">
                    <FaApple />
                    Sign in with Apple
                  </button>

                  <span className="relative block font-medium text-sm text-center my-8 text-white/70">
                    <span className="block absolute left-0 top-1/2 h-[1px] w-24 bg-white/20"></span>
                    <span className="block absolute right-0 top-1/2 h-[1px] w-24 bg-white/20"></span>
                    Or sign in with email
                  </span>

                  <div className="mb-4 relative">
                    <span className="absolute top-1/2 -translate-y-1/2 left-6">
                      <EmailIcon />
                    </span>
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full border border-white/20 bg-transparent rounded-lg focus:border-purple-500 pl-14 pr-4 py-3.5 font-medium outline-none"
                    />
                  </div>

                  <div className="mb-5 relative">
                    <span className="absolute top-1/2 -translate-y-1/2 left-6">
                      <LockIcon />
                    </span>
                    <input
                      type="password"
                      placeholder="Password"
                      className="w-full border border-white/20 bg-transparent rounded-lg focus:border-purple-500 pl-14 pr-4 py-3.5 font-medium outline-none"
                    />
                  </div>

                  <div className="flex items-center justify-between mb-8 text-white">
                    <label className="flex items-center gap-2 text-sm font-medium cursor-pointer select-none">
                      <input type="checkbox" className="accent-purple-600" />
                      Remember me
                    </label>

                    <Link href="#" className="text-purple-400 text-sm">
                      Forgot Password?
                    </Link>
                  </div>

                  <button
                    type="submit"
                    className="hero-button-gradient flex justify-center w-full rounded-lg py-3 px-7 text-white font-medium hover:opacity-80 transition"
                  >
                    Sign in with AI Tool
                  </button>

                  <p className="text-center font-medium text-white mt-5">
                    Don't have an account?{" "}
                    <Link href="/signup" className="text-purple-400">
                      Sign Up for Free
                    </Link>
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

/* -------------------- SVG ICONS -------------------- */
const GoogleIcon = () => (
  <svg width="23" height="22" viewBox="0 0 23 22" fill="none">
    {/* SVG PATHS SAME AS ORIGINAL */}
    <path
      d="M22.5001 11.2438C22.5134 10.4876 22.4338 9.73256 22.2629 8.995H11.7246V13.0771H17.9105C17.7933 13.7929..."
      fill="#4285F4"
    />
  </svg>
);

const AppleIcon = () => (
  <svg width="22" height="22" fill="none" viewBox="0 0 22 22">
    <path d="M19.12 7.661C18.99 7.756..." fill="white" />
  </svg>
);

const EmailIcon = () => (
  <svg width="16" height="12" fill="none" viewBox="0 0 16 12">
    <path d="M14 0.4H2C1.15..." fill="#918EA0" />
  </svg>
);

const LockIcon = () => (
  <svg width="16" height="16" fill="none" viewBox="0 0 16 16">
    <path d="M14.07 1.925C13.12..." fill="#918EA0" />
  </svg>
);
