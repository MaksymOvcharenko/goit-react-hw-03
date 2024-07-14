const SearchBox = ({ changeFilter, filter }) => {
  const handleChange = (e) => {
    changeFilter(e.target.value);
  };
  return (
    <div>
      <input type="text" value={filter} onChange={handleChange} />
    </div>
  );
};

export default SearchBox;
