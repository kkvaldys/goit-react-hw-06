import { useId } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter, selectNameFilter } from "../../redux/filtersSlice";
import css from "./SearchBox.module.css";

function SearchBox() {
  const searchFieldId = useId();

  const { name } = useSelector(selectNameFilter);

  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch(changeFilter(event.target.value));
  };

  return (
    <>
      <label className={css.label} htmlFor={searchFieldId}>
        Find contacts by name
      </label>
      <input
        className={css.input}
        id={searchFieldId}
        type="text"
        value={name}
        onChange={handleChange}
      />
    </>
  );
}

export default SearchBox;
