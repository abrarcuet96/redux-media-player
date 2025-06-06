import { Link } from "react-router-dom";

const RelatedVideoCard = () => {
  return (
    <div className="w-full flex flex-row gap-2 mb-4">
      <div className="relative w-[168px] h-[94px] flex-none duration-300 hover:scale-[1.03]">
        <Link to="/video">
          <img
            src="https://i.ytimg.com/vi/O02GFZrZg3E/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBdDE2neMfoVDxPDBWJVkTihm6r4Q"
            className="object-cover w-full h-full"
            alt="Some video title"
          />
        </Link>
        <p className="absolute right-2 bottom-2 bg-gray-900 text-gray-100 text-xs px-1 py">
          12:10
        </p>
      </div>

      <div className="flex flex-col w-full">
        <Link to="/video">
          <p className="text-slate-900 text-sm font-semibold">
            Some video title
          </p>
        </Link>
        <Link
          className="text-gray-400 text-xs mt-2 hover:text-gray-600"
          href="#"
        >
          Redux Media Application
        </Link>
        <p className="text-gray-400 text-xs mt-1">100K views . 23 Oct 2022</p>
      </div>
    </div>
  );
};

export default RelatedVideoCard;
