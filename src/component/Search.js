const Search = (props) => {
  const { handleSearchTerm } = props;

  return (
    <div>
      <h1>😎EmojiSearch😎</h1>
      <input
        type="text"
        name="searchBar"
        id="searchBar"
        placeholder="Tu cherches quel emoji ?"
        onChange={handleSearchTerm}
      />
    </div>
  );
};

export default Search;
