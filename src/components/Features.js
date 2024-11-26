import React from 'react';

const Features = () => {
    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="container px-6 py-10 mx-auto">
                <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
                    explore our <br /> awesome <span className="text-blue-500">Components</span>
                </h1>

                <iframe
                    className="min-w-full mt-12 h-64 md:h-[450px] rounded-xl overflow-hidden"
                    src="https://player.vimeo.com/video/1033499942?h=7b5168c061&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                    frameBorder="0"
                    allow="autoplay; fullscreen"
                    allowFullScreen
                ></iframe>

                <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2">
                    <div className="p-6 border rounded-xl border-r-gray-200 dark:border-gray-700">
                        <div className="md:flex md:items-start md:-mx-4">
                            <div className="mt-4 md:mx-4 md:mt-0">
                                <h1 className="text-xl font-medium text-gray-700 capitalize dark:text-white">
                                    PZT: Lead Zirconate Titanate
                                </h1>
                                <p className="mt-3 text-gray-500 dark:text-gray-300">
                                    High Piezoelectric Coefficient: PZT has a high piezoelectric coefficient, allowing it to generate significant electrical charges under mechanical stress.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="p-6 border rounded-xl border-r-gray-200 dark:border-gray-700">
                        <div className="md:flex md:items-start md:-mx-4">
                            <div className="mt-4 md:mx-4 md:mt-0">
                                <h1 className="text-xl font-medium text-gray-700 capitalize dark:text-white">
                                    LEAD ACID BATTERY
                                </h1>
                                <p className="mt-3 text-gray-500 dark:text-gray-300">
                                    High Energy Density: Lead-acid batteries can store a significant amount of energy, making them suitable for piezoelectric applications where small, continuous energy is generated.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="p-6 border rounded-xl border-r-gray-200 dark:border-gray-700">
                        <div className="md:flex md:items-start md:-mx-4">
                            <div className="mt-4 md:mx-4 md:mt-0">
                                <h1 className="text-xl font-medium text-gray-700 capitalize dark:text-white">
                                    ELECTROLYTIC CAPACITOR
                                </h1>
                                <p className="mt-3 text-gray-500 dark:text-gray-300">
                                    The Alcon Electronics capacitor, priced at Rs 255, is versatile and reliable. It handles a wide range of voltages and capacitances, and functions reliably in extreme temperatures.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="p-6 border rounded-xl border-r-gray-200 dark:border-gray-700">
                        <div className="md:flex md:items-start md:-mx-4">
                            <div className="mt-4 md:mx-4 md:mt-0">
                                <h1 className="text-xl font-medium text-gray-700 capitalize dark:text-white">
                                    Arduino microcontroller
                                </h1>
                                <p className="mt-3 text-gray-500 dark:text-gray-300">
                                    The Arduino microcontroller, priced at Rs 475, is compact and versatile. It operates at 5V, adheres to ISO 27001, and is powered by the ATmega328P.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;
