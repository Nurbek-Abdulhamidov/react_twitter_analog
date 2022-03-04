import "./PostAddForm.css"

const PostAddForm = ({onAdd}) => {


  return (
    <div className="bottom-panel d-flex align-items-center">
      <input
        type="text"
        placeholder="What are you thinking about ?"
        className="form-control"
      />
      <button onClick={() => onAdd("Hellloooo")} type="submit" className="btn btn-outline-secondary" >
        Add Post
      </button>
    </div>
  );
};

export default PostAddForm;
