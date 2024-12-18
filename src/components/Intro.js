import React from 'react';

function Intro() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="container px-6 py-10 mx-auto">
        <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">
          Our Executive Team
        </h1>

        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-4">
          <div className="flex flex-col items-center p-8 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-blue-600 dark:border-gray-700 dark:hover:border-transparent">
            <h1 className="mt-4 text-2xl font-bold text-gray-700 capitalize dark:text-white group-hover:text-white">
              Mahi Vats
            </h1>
            <p className="mt-2 text-gray-500 font-bold dark:text-gray-300 group-hover:text-gray-300">
              102108112
            </p>
          </div>

          <div className="flex flex-col items-center p-8 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-blue-600 dark:border-gray-700 dark:hover:border-transparent">
            <h1 className="mt-4 text-2xl font-bold text-gray-700 capitalize dark:text-white group-hover:text-white">
              Jasminder Saini
            </h1>
            <p className="mt-2 text-gray-500 font-bold dark:text-gray-300 group-hover:text-gray-300">
              102108124
            </p>
          </div>

          <div className="flex flex-col items-center p-8 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-blue-600 dark:border-gray-700 dark:hover:border-transparent">
            <h1 className="mt-4 text-2xl font-bold text-gray-700 capitalize dark:text-white group-hover:text-white">
              Ali Hamza
            </h1>
            <p className="mt-2 text-gray-500 font-bold dark:text-gray-300 group-hover:text-gray-300">
              102108171
            </p>
          </div>

          <div className="flex flex-col items-center p-8 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-blue-600 dark:border-gray-700 dark:hover:border-transparent">
            <h1 className="mt-4 text-2xl font-bold text-gray-700 capitalize dark:text-white group-hover:text-white">
              Aayan Zaidi
            </h1>
            <p className="mt-2 text-gray-500 font-bold dark:text-gray-300 group-hover:text-gray-300">
              102108172
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Intro;
