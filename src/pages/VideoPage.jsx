import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import RelatedVideoCard from "../components/relatedVideos/RelatedVideoCard";
import VideoDescription from "../components/relatedVideos/VideoDescripton";
import VideoPlayer from "../components/relatedVideos/VideoPlayer";
import { fetchVideo } from "../features/relatedVideos/relatedVideoSlice";

const VideoPage = () => {
  const dispatch = useDispatch();
  const { videoId } = useParams();
  const { isLoading, isError, error, video } = useSelector(
    (state) => state.video
  );
  console.log(video);
  const { id, link, title, tags } = video || {};
  useEffect(() => {
    dispatch(fetchVideo(videoId));
  }, [dispatch, videoId]);
  let content = null;
  if (isLoading) {
    content = <div className="col-span-12">Loading ...</div>;
  }
  if (!isLoading && isError) {
    content = <div className="col-span-12">{error}</div>;
  }
  if (!isLoading && !isError && !video?.id) {
    content = <div className="col-span-12">"No video found."</div>;
  }
  if (!isLoading && !isError && video?.id) {
    content = (
      <div className="grid grid-cols-3 gap-2 lg:gap-8">
        <div className="col-span-full w-full space-y-8 lg:col-span-2">
          <VideoPlayer title={title} link={link} />
          <VideoDescription video={video} />
        </div>

        <div className="col-span-full lg:col-auto max-h-[570px] overflow-y-auto">
          <RelatedVideoCard currentVideoId={id} tags={tags} />
        </div>
      </div>
    );
  }
  return (
    <>
      <section className="pt-6 pb-20">
        <div className="mx-auto max-w-7xl px-2 pb-20 min-h-[400px]">
          {content}
        </div>
      </section>
    </>
  );
};

export default VideoPage;
