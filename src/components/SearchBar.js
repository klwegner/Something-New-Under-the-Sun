function SearchBar() {
  return (
    <form action="/" method="get">
      {/* what is s???? */}
      <input type="text" id="searchBar" placeholder="Search" name="s" />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchBar;
