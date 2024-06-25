import React from 'react';
function Content() {
  return (
    <div className="mx-5 my-16">
      <div className="container mx-auto">
        <div className="grid grid-cols-3 grid-rows-2 items-center gap-3">
          {/* Left Column */}
          <div className="col-span-1">
            <h2 className="font-bold text-xl md:text-3xl mb-2">Brainstorming</h2>
            <p className="text-sm md:text-base text-gray-700 me-5">
              Unleash creative ideas and build on them with the help of sticky notes,
              images, mind maps, videos, drawing capabilities — the list goes on..
            </p>
            <a href="#" className="text-pink-500 text-sm mt-2 inline-block">Baca Selengkapnya →</a>
          </div>

          {/* Right Column */}
          <div className="row-span-2 col-span-2 mt-4 md:mt-0">
            <img src="Brainstorm.png" alt="Brainstorming session" className="w-full rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  );
}
;
export default Content;
