"use client";

export default function NewsletterSection() {
  return (
    <section className="pt-[4.375rem] sm:pt-[5.625rem] xl:pt-[6.875rem] pb-11">
      <div className="max-w-[1170px] mx-auto px-4 sm:px-8 xl:px-0">
        <div className="flex flex-wrap items-center justify-between gap-10">
          {/* Left Content */}
          <div className="max-w-[352px] w-full">
            <h3 className="font-semibold text-heading-5 text-white mb-2">
              News &amp; Update
            </h3>
            <p className="font-medium">
              Keep up to date with everything about our tool
            </p>
          </div>

          {/* Newsletter Form */}
          <div className="max-w-[534px] w-full">
            <form>
              <div className="flex items-center gap-4">
                <div className="max-w-[395px] w-full">
                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Enter your Email"
                    className="rounded-lg border border-white/12 bg-white/5 focus:border-purple-500 w-full py-3 px-6 outline-none text-white placeholder-white/60"
                  />
                </div>
                <button
                  type="submit"
                  className="relative rounded-lg text-white text-sm flex items-center gap-1.5 py-3.5 px-7 border border-transparent bg-gradient-to-r from-purple-500 to-pink-500 shadow-button hover:from-pink-500 hover:to-purple-500 hover:shadow-none transition duration-300"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
