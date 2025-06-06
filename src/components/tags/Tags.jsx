import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTags } from "../../features/tags/tagsSlice";
import TagItem from "./TagItem";

const Tags = () => {
  const dispatch = useDispatch();
  const { tags } = useSelector((state) => state.tags);
  useEffect(() => {
    dispatch(fetchTags());
  }, [dispatch]);

  let content = tags.map((tag) => <TagItem key={tag.id} tag={tag} />);

  return tags.length > 0 ? (
    <section>
      <div className="max-w-7xl mx-auto px-5 py-6 lg:px-0 flex gap-2 border-b overflow-y-auto">
        {content}
      </div>
    </section>
  ) : null;
};

export default Tags;
