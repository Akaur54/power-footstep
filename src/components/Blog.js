import React from 'react';

function Blog() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="container px-6 py-10 mx-auto">
        <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
          From the blog
        </h1>

        <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2">
          <div className="lg:flex">
            <img
              className="object-cover w-full h-56 rounded-lg lg:w-64"
              src="https://images.unsplash.com/photo-1485075792961-9ea033ad04fc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI2fHx8ZW58MHx8fHx8"
              alt=""
            />
            <div className="flex flex-col justify-between py-6 lg:mx-6">
              <a
                href="/Blog1"
                className="text-xl font-semibold text-gray-800 hover:underline dark:text-white"
              >
                Step into a Greener Future with PIEZOPACE: Powering Cities One Footstep at a Time
              </a>
              <span className="text-sm text-gray-500 dark:text-gray-300">
                On: 20 October 2019
              </span>
            </div>
          </div>

          {/* Repeat similar blocks for other blog entries */}
          <div className="lg:flex">
            <img
              className="object-cover w-full h-56 rounded-lg lg:w-64"
              src="https://plus.unsplash.com/premium_photo-1721480098490-ca3849dbf583?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fHBvd2VyfGVufDB8fDB8fHww"
              alt=""
            />
            <div className="flex flex-col justify-between py-6 lg:mx-6">
              <a
                href="/Blog2"
                className="text-xl font-semibold text-gray-800 hover:underline dark:text-white"
              >
                Transforming Footsteps into Energy: A Sustainable Revolution with PIEZOPACE
              </a>
              <span className="text-sm text-gray-500 dark:text-gray-300">
                On: 20 October 2019
              </span>
            </div>
          </div>

          {/* Add more entries as needed */}
        </div>
      </div>
    </section>
  );
}

export default Blog;
