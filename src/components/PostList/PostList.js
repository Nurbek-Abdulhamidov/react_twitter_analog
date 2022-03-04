import PostListItem from "../PostListItem/PostListItem";
import "./PostList.css";

const PostList = ({ posts, onDelete }) => {
  const elements = posts.map((item) => {
    const { id, ...itemProps } = item;
    return (
      <li key={id} className="list-group-item">
        <PostListItem {...itemProps} onDelete={() => onDelete(id)} />
      </li>
    );
  });
  return <ul className="app-list list-group">{elements}</ul>;
};

export default PostList;
