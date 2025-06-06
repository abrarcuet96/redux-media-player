import RelatedVideoCard from "../components/videos/RelatedVideoCard";
import VideoDescription from "../components/videos/VideoDescripton";
import VideoPlayer from "../components/videos/VideoPlayer";

const VideoPage = () => {
  return (
    <>
      <section className="pt-6 pb-20">
        <div className="mx-auto max-w-7xl px-2 pb-20 min-h-[400px]">
          <div className="grid grid-cols-3 gap-2 lg:gap-8">
            <div className="col-span-full w-full space-y-8 lg:col-span-2">
              <VideoPlayer />
              <VideoDescription />
            </div>

            <div className="col-span-full lg:col-auto max-h-[570px] overflow-y-auto">
              <RelatedVideoCard />
              <RelatedVideoCard />
              <RelatedVideoCard />
              <RelatedVideoCard />
              <RelatedVideoCard />
              <RelatedVideoCard />
              <RelatedVideoCard />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default VideoPage;
