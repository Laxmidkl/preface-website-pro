import React from 'react'

const AboutPageView = () => {
  return (
  <section className="py-20">
      {/* Heading */}
      <div className="text-center max-w-2xl mx-auto px-4">
        <h1 className="text-2xl md:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-gray-500 to-gray-500">
          About Our Apps
        </h1>
        <p className="text-gray-600 text-sm mt-4">
          Preface Technology Pvt. Ltd. builds digital solutions that streamline operations and improve efficiency for schools, campuses, water supply systems, and cooperatives.
        </p>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center gap-12 mt-16 px-4 md:px-0">
        {/* Image */}
        <div className="md:w-1/2">
          <img
            className="w-full rounded-xl shadow-xl hover:scale-105 transition-transform duration-500"
            src="https://images.unsplash.com/photo-1555212697-194d092e3b8f?q=80&w=830&h=844&auto=format&fit=crop"
            alt="Our App Features"
          />
        </div>

        {/* Features */}
        <div className="md:w-1/2 flex flex-col gap-3">
          <h2 className="text-3xl font-semibold text-gray-800">Our Latest Features</h2>
          <p className="text-gray-500 text-sm">
            Ship beautiful frontends without the overhead — customizable, scalable, and developer-friendly UI components.
          </p>

          <div className="flex flex-col gap-2 mt-4">
            {/* Feature 1 */}
            <div className="flex items-center gap-4 p-4 bg-white rounded-xl cursor-pointer border border-gray-200 hover:-translate-y-1 transition-all duration-300">
              <div className="p-3 bg-indigo-50 border border-indigo-200 rounded-full flex-shrink-0">
                <img
                  src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/aboutSection/flashEmoji.png"
                  alt="Performance" className='h-8'
                />
              </div>
              <div className='flex flex-col justify-start items-start'>
                <h3 className="text-base font-medium text-gray-700">Lightning-Fast Performance</h3>
                <p className="text-sm text-gray-500">Minimal load times and fully optimized for speed across all devices.</p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex items-center gap-4 p-4 bg-white rounded-xl cursor-pointer border border-gray-200 hover:-translate-y-1 transition-all duration-300">
              <div className="p-3 bg-indigo-50 border border-indigo-200 rounded-full flex-shrink-0">
                <img
                  src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/aboutSection/colorsEmoji.png"
                  alt="Design" className='h-8'
                />
              </div>
              <div className='flex flex-col justify-start items-start'>
                <h3 className="text-base font-medium text-gray-700">Beautifully Designed Components</h3>
                <p className="text-sm text-gray-500">Pixel-perfect, modern UI components ready for any project.</p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex items-center gap-4 p-4 bg-white rounded-xl cursor-pointer border border-gray-200 hover:-translate-y-1 transition-all duration-300">
              <div className="p-3 bg-indigo-50 border border-indigo-200 rounded-full flex-shrink-0">
                <img
                  src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/aboutSection/puzzelEmoji.png"
                  alt="Integration" className='h-8'
                />
              </div>
              <div className='flex flex-col justify-start items-start'>
                <h3 className="text-base font-medium text-gray-700">Plug-and-Play Integration</h3>
                <p className="text-sm text-gray-500">Simple setup with React, Next.js, and Tailwind CSS — start instantly.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}

export default AboutPageView