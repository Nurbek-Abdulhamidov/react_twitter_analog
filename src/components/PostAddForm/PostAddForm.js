import "./PostAddForm.css"

const PostAddForm = () => {
  return (
    <form className="bottom-panel d-flex align-items-center">
      <input
        type="text"
        placeholder="What are you thinking about ?"
        className="form-control"
      />
      <button type="submit" className="btn btn-outline-secondary" >
        Add Post
      </button>
    </form>
  );
};

export default PostAddForm;
