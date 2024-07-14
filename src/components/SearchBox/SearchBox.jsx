import s from "./SearchBox.module.css";
const SearchBox = ({ changeFilter, filter }) => {
  const handleChange = (e) => {
    changeFilter(e.target.value);
  };
  return (
    <div className={s.form}>
      <p>Find contact by name:</p>
      <input type="text" value={filter} onChange={handleChange} />
    </div>
  );
};

export default SearchBox;
