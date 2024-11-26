import React from 'react'

function Hero() {
  return (
    <header className="bg-white dark:bg-gray-900">
      <div className="lg:flex">
        <div className="flex items-center justify-center w-full px-6 py-8 lg:h-[32rem] lg:w-1/2">
          <div className="max-w-xl">
            <h2 className="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl">
            Footstep Power: Harnessing Energy from Every Step <span className="text-blue-600 dark:text-blue-400"></span>
            </h2>
            <p className="mt-4 text-sm text-gray-500 dark:text-gray-400 lg:text-base">
            Imagine a world where your footsteps generate power, fueling your devices and reducing our reliance on fossil fuels. With piezoelectric sensors, this vision is becoming a reality.
            </p>
            <div className="flex flex-col mt-6 space-y-3 lg:space-y-0 lg:flex-row">
              <a
                href="/lm"
                className="block px-5 py-2 text-sm font-medium tracking-wider text-center text-white transition-colors duration-300 transform bg-gray-900 rounded-md hover:bg-gray-700"
              >
                Learn More
              </a>
             
            </div>
          </div>
        </div>

        <div className="w-full h-64 lg:w-1/2 lg:h-auto">
          <div
            className="w-full h-full bg-cover"
            style={{
              backgroundImage:
                'url(https://cdn.gamma.app/ezc47zrdpbz81cu/generated-images/O3zVL45rgGtGhur7IpxbF.jpg)',
            }}
          >
            <div className="w-full h-full bg-black opacity-25"></div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Hero