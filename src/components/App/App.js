import AppHeader from "../AppHeader";
import PostAddForm from "../PostAddForm";
import PostList from "../PostList/PostList";
import PostStatusFilter from "../PostStatusFilter";
import SearchPanel from "../SearchPanel";
import "./App.css";

const App = () => {
  let data = [
    { label: "Going to office for work", important: true, id: "qw" },
    { label: "That is so Good Idea ...", important: true, id: "qe"},
    { label: "I have to read the book", important: true, id: "qa"},
  ];

  return (
    <div className="app">
      <AppHeader />
      <div className="search-panel d-flex">
        <SearchPanel />
        <PostStatusFilter />
      </div>
      <PostList posts={data} />
      <PostAddForm />
    </div>
  );
};

export default App;
