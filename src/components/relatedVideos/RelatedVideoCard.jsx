import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRelatedVideos } from "../../features/relatedVideos/relatedVideosSlice";
import RelatedVideoItem from "./RelatedVideoItem";

const RelatedVideoCard = ({ currentVideoId, tags }) => {
  const dispatch = useDispatch();
  const { relatedVideos, isLoading, isError, error } = useSelector(
    (state) => state.relatedVideos
  );
  useEffect(() => {
    dispatch(fetchRelatedVideos({ tags, id: currentVideoId }));
  }, [dispatch, tags, currentVideoId]);

  let content = null;
  if (isLoading) {
    content = <div className="col-span-12">Loading ...</div>;
  }
  if (!isLoading && isError) {
    content = <div className="col-span-12">{error}</div>;
  }
  if (!isLoading && !isError && relatedVideos.length === 0) {
    content = <div className="col-span-12">"No videos found."</div>;
  }
  if (!isLoading && !isError && relatedVideos.length > 0) {
    content = relatedVideos.map((video) => (
      <RelatedVideoItem key={video.id} video={video} />
    ));
  }
  return <div className="w-full flex flex-col gap-2 mb-4">{content}</div>;
};

export default RelatedVideoCard;
