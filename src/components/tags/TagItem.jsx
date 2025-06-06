import { Link } from "react-router-dom";

const TagItem = ({ tag }) => {
  const { id, title } = tag;
  return (
    <Link
      to={`tags/${id}`}
      className="bg-blue-600 text-white px-4 py-1 rounded-full cursor-pointer"
    >
      {title}
    </Link>
  );
};

export default TagItem;
