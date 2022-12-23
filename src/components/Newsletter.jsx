import React from "react";

const Newsletter = () => {
  return (
    <>
      <section className="py-20 px-5 bg-gradient-to-r from-indigo-600 to-slate-800 dark:to-slate-600">
        <div className="max-w-4xl mx-auto grid grid-cols-1 gap-8 text-center md:text-left md:grid-cols-2 md:gap-16 md:place-items-center">
          <article>
            <h2 className="text-slate-100 text-3xl capitalize lg:text-4xl mb-4">
              Sign Up to the newsletter
            </h2>
            <p className="text-slate-100">
              Receive the latest updates. No spam, unsubscribe anytime!
            </p>
          </article>

          <article>
            <form>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                required
                className="w-full py-2 px-4 rounded shadow mb-4 bg-transparent border border-slate-200 placeholder-slate-100 text-slate-300 tracking-wide"
              />
              <button
                type="submit"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
                className="inline-block px-4 py-3 bg-white text-slate-500 font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full md:w-auto"
              >
                Subscribe
              </button>
            </form>
          </article>
        </div>
      </section>
    </>
  );
};

export default Newsletter;
