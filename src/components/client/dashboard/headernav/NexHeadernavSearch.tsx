const NEXHeaderSearch = () => {
  return (
    <div className="header-search-container">
      <input
        type="search"
        name="search"
        className="search-field"
        placeholder="What would you like to eat?.."
      />
      <button className="search-btn">
        <i className="bx bx-search-alt-2 bx-sm"></i>
      </button>
    </div>
  )
}
export default NEXHeaderSearch
