import { Link } from "react-router-dom";

const VideoGrid = () => {
  return (
    <section className="pt-12">
      <div className="grid grid-cols-12 gap-4 max-w-7xl mx-auto px-5 lg:px-0 min-h-[300px]">
        {/* Single video card - repeated for demonstration */}
        <div className="col-span-12 sm:col-span-6 md:col-span-3 duration-300 hover:scale-[1.03]">
          <div className="w-full flex flex-col">
            <div className="relative">
              <Link to="/video">
                <img
                  src="https://i.ytimg.com/vi/O02GFZrZg3E/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBdDE2neMfoVDxPDBWJVkTihm6r4Q"
                  className="w-full h-auto"
                  alt="Some video title"
                />
              </Link>
              <p className="absolute right-2 bottom-2 bg-gray-900 text-gray-100 text-xs px-1 py">
                12:10
              </p>
            </div>
            <div className="flex flex-row mt-2 gap-2">
              <Link to="#" className="shrink-0">
                <img
                  src="https://i.ibb.co/swg7qVX/322601239-1295619711229716-8901972936173054758-n.jpg"
                  className="rounded-full h-6 w-6"
                  alt="Redux Media Application"
                />
              </Link>
              <div className="flex flex-col">
                <Link to="/video">
                  <p className="text-slate-900 text-sm font-semibold">
                    Video title
                  </p>
                </Link>
                <Link
                  className="text-gray-400 text-xs mt-2 hover:text-gray-600"
                  href="#"
                >
                  Redux Media Application
                </Link>
                <p className="text-gray-400 text-xs mt-1">
                  200 views . May 3, 2022
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Repeat the above div for more video cards */}
        <div className="col-span-12 sm:col-span-6 md:col-span-3 duration-300 hover:scale-[1.03]">
          <div className="w-full flex flex-col">
            <div className="relative">
              <Link to="/video">
                <img
                  src="https://i.ytimg.com/vi/O02GFZrZg3E/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBdDE2neMfoVDxPDBWJVkTihm6r4Q"
                  className="w-full h-auto"
                  alt="Some video title"
                />
              </Link>
              <p className="absolute right-2 bottom-2 bg-gray-900 text-gray-100 text-xs px-1 py">
                12:10
              </p>
            </div>
            <div className="flex flex-row mt-2 gap-2">
              <Link to="#" className="shrink-0">
                <img
                  src="https://i.ibb.co/swg7qVX/322601239-1295619711229716-8901972936173054758-n.jpg"
                  className="rounded-full h-6 w-6"
                  alt="Redux Media Application"
                />
              </Link>
              <div className="flex flex-col">
                <Link to="/video">
                  <p className="text-slate-900 text-sm font-semibold">
                    Video title 2
                  </p>
                </Link>
                <Link
                  className="text-gray-400 text-xs mt-2 hover:text-gray-600"
                  href="#"
                >
                  Redux Media Application
                </Link>
                <p className="text-gray-400 text-xs mt-1">
                  250 views . Apr 15, 2022
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-12 sm:col-span-6 md:col-span-3 duration-300 hover:scale-[1.03]">
          <div className="w-full flex flex-col">
            <div className="relative">
              <Link to="/video">
                <img
                  src="https://i.ytimg.com/vi/O02GFZrZg3E/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBdDE2neMfoVDxPDBWJVkTihm6r4Q"
                  className="w-full h-auto"
                  alt="Some video title"
                />
              </Link>
              <p className="absolute right-2 bottom-2 bg-gray-900 text-gray-100 text-xs px-1 py">
                12:10
              </p>
            </div>
            <div className="flex flex-row mt-2 gap-2">
              <Link to="#" className="shrink-0">
                <img
                  src="https://i.ibb.co/swg7qVX/322601239-1295619711229716-8901972936173054758-n.jpg"
                  className="rounded-full h-6 w-6"
                  alt="Redux Media Application"
                />
              </Link>
              <div className="flex flex-col">
                <Link to="/video">
                  <p className="text-slate-900 text-sm font-semibold">
                    Video title 3
                  </p>
                </Link>
                <Link
                  className="text-gray-400 text-xs mt-2 hover:text-gray-600"
                  href="#"
                >
                  Redux Media Application
                </Link>
                <p className="text-gray-400 text-xs mt-1">
                  300 views . Mar 10, 2022
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-12 sm:col-span-6 md:col-span-3 duration-300 hover:scale-[1.03]">
          <div className="w-full flex flex-col">
            <div className="relative">
              <Link to="/video">
                <img
                  src="https://i.ytimg.com/vi/O02GFZrZg3E/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBdDE2neMfoVDxPDBWJVkTihm6r4Q"
                  className="w-full h-auto"
                  alt="Some video title"
                />
              </Link>
              <p className="absolute right-2 bottom-2 bg-gray-900 text-gray-100 text-xs px-1 py">
                12:10
              </p>
            </div>
            <div className="flex flex-row mt-2 gap-2">
              <Link to="#" className="shrink-0">
                <img
                  src="https://i.ibb.co/swg7qVX/322601239-1295619711229716-8901972936173054758-n.jpg"
                  className="rounded-full h-6 w-6"
                  alt="Redux Media Application"
                />
              </Link>
              <div className="flex flex-col">
                <Link to="/video">
                  <p className="text-slate-900 text-sm font-semibold">
                    Video title 4
                  </p>
                </Link>
                <Link
                  className="text-gray-400 text-xs mt-2 hover:text-gray-600"
                  href="#"
                >
                  Redux Media Application
                </Link>
                <p className="text-gray-400 text-xs mt-1">
                  400 views . Feb 1, 2022
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoGrid;
