"use client";

import Image from "next/image";

export default function Blogs() {
  const blogs = [
    {
      id: 1,
      img: "/assets/blogs/blog-01.png",
      categories: ["Design", "Engineering"],
      title: "Revolution in Content Creation and Communication",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipisc elit sed do eiusmod tempor incididunt ut labore et dolore magna oliumosd aliqua...",
      author: "Alex Demo",
      date: "25 Mar, 2025",
    },
    {
      id: 2,
      img: "/assets/blogs/blog-02.png",
      categories: ["Development", "Security"],
      title: "How AI Writing Tools Empower Writers to Speed up there Writing",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipisc elit sed do eiusmod tempor incididunt ut labore et dolore magna oliumosd aliqua...",
      author: "Hendary Jonson",
      date: "12 Feb, 2025",
    },
    {
      id: 3,
      img: "/assets/blogs/blog-03.png",
      categories: ["Products", "Blog and articles"],
      title: "Revolution in Content Creation and Communication",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipisc elit sed do eiusmod tempor incididunt ut labore et dolore magna oliumosd aliqua...",
      author: "Piter Mecraow",
      date: "10 Jan, 2025",
    },
  ];

  return (
    <section className="py-20 lg:py-25">
      <div className="max-w-[1170px] mx-auto px-4 sm:px-8 xl:px-0">
        {/* Section Title */}
        <div className="mb-16 text-center">
          <p className="text-sm sm:text-base text-gray-300 bg-gray-700 rounded-2xl py-2 px-4 tracking-wide inline-block">
            Read Our Latest Blogs
          </p>
          <h2 className="text-white my-4 text-2xl font-extrabold sm:text-4xl xl:text-5xl">
            Latest Blogs & News
          </h2>
          <p className="max-w-[714px] mx-auto font-medium text-gray-300">
            Our AI writing tool is designed to empower you with exceptional
            writing capabilities, making the writing process more efficient,
            accurate, and enjoyable.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7.5">
          {blogs.map((blog) => (
            <div key={blog.id} className="group">
              {/* Blog Image */}
              <div className="mb-6 overflow-hidden rounded-xl">
                <Image
                  src={blog.img}
                  alt={blog.title}
                  width={500}
                  height={300}
                  className="w-full transition-transform duration-500 ease-linear group-hover:scale-125"
                />
              </div>

              {/* Categories */}
              <div className="flex flex-wrap gap-2.5 items-center mb-4.5">
                {blog.categories.map((cat, idx) => (
                  <span
                    key={idx}
                    className="font-medium text-xs cursor-pointer py-[3px] px-2.5 rounded-full bg-white/7 border border-white/10 hover:text-white hover:border-white/25 transition duration-300"
                  >
                    {cat}
                  </span>
                ))}
              </div>

              {/* Title */}
              <h4>
                <a
                  href="/blog-single"
                  className="text-white font-semibold text-xl transition duration-300 ease-in hover:opacity-80"
                >
                  {blog.title}
                </a>
              </h4>

              {/* Excerpt */}
              <p className="font-medium mt-4 text-gray-300">{blog.excerpt}</p>

              {/* Author & Date */}
              <div className="flex items-center gap-4.5 flex-wrap mt-6">
                <div className="flex items-center gap-2 cursor-pointer transition duration-300 ease-in hover:text-white">
                  <svg
                    className="fill-current"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 8.75C7.65625 8.75 5.78125 6.90625 5.78125 4.65625C5.78125 2.40625 7.65625 0.5625 10 0.5625C12.3438 0.5625 14.2188 2.40625 14.2188 4.65625C14.2188 6.90625 12.3438 8.75 10 8.75ZM10 1.96875C8.4375 1.96875 7.1875 3.1875 7.1875 4.65625C7.1875 6.125 8.4375 7.34375 10 7.34375C11.5625 7.34375 12.8125 6.125 12.8125 4.65625C12.8125 3.1875 11.5625 1.96875 10 1.96875Z"
                      fill=""
                    />
                    <path
                      d="M16.5938 19.4688C16.2188 19.4688 15.875 19.1562 15.875 18.75V17.8438C15.875 14.5938 13.25 11.9688 10 11.9688C6.75 11.9688 4.125 14.5938 4.125 17.8438V18.75C4.125 19.125 3.8125 19.4688 3.40625 19.4688C3 19.4688 2.6875 19.1562 2.6875 18.75V17.8438C2.6875 13.8125 5.96875 10.5625 9.96875 10.5625C13.9688 10.5625 17.25 13.8437 17.25 17.8438V18.75C17.2813 19.125 16.9688 19.4688 16.5938 19.4688Z"
                      fill=""
                    />
                  </svg>
                  <span className="text-sm font-medium">{blog.author}</span>
                </div>
                <div className="flex items-center gap-2 cursor-pointer transition duration-300 ease-in hover:text-white">
                  <svg
                    className="fill-current"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M17.5 3.3125H15.875V2.625C15.875 2.25 15.5625 1.90625 15.1562 1.90625C14.75 1.90625 14.4375 2.21875 14.4375 2.625V3.3125H5.53125V2.625C5.53125 2.25 5.21875 1.90625 4.8125 1.90625C4.40625 1.90625 4.09375 2.21875 4.09375 2.625V3.3125H2.5C1.4375 3.3125 0.53125 4.1875 0.53125 5.28125V16.1563C0.53125 17.2188 1.40625 18.125 2.5 18.125H17.5C18.5625 18.125 19.4687 17.25 19.4687 16.1563V5.25C19.4687 4.1875 18.5625 3.3125 17.5 3.3125Z" />
                  </svg>
                  <span className="text-sm font-medium">{blog.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
