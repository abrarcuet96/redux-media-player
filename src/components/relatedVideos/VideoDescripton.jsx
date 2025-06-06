import { BiDislike, BiLike } from "react-icons/bi"; // Using BiLike and BiDislike from react-icons

const VideoDescription = ({ video }) => {
  const { title, date, likes, unlikes, description } = video;
  return (
    <div>
      <h1 className="text-lg font-semibold tracking-tight text-slate-800">
        {title}
      </h1>
      <div className="pb-4 flex items-center space-between border-b">
        <h2 className="text-sm leading-[1.7142857] text-slate-600 w-full">
          Uploaded on {date}
        </h2>
        <div className="flex gap-10 w-48">
          <div className="flex gap-1">
            <div className="shrink-0">
              <BiLike className="w-5 h-5 block text-slate-600" />
            </div>
            <div className="text-sm leading-[1.7142857] text-slate-600">
              {likes}
            </div>
          </div>
          <div className="flex gap-1">
            <div className="shrink-0">
              <BiDislike className="w-5 h-5 block text-slate-600" />
            </div>
            <div className="text-sm leading-[1.7142857] text-slate-600">
              {unlikes}
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4 text-sm text-[#334155] dark:text-slate-400">
        {description}
      </div>
    </div>
  );
};

export default VideoDescription;
