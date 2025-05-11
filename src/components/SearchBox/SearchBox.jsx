import { useDispatch, useSelector } from "react-redux";
import s from "./SearchBox.module.css"
import { selectNameFilter } from "../../redux/filters/selectors";
import { changeFilter } from "../../redux/filters/slice";


export const SearchBox = () => {
  const filter = useSelector(selectNameFilter)
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };
  return (
    <div>
      <label className={s.search}>
        <span>  Find contacts by name:</span>
        <input type="text" value={filter} onChange={handleChange} />
      </label>
    </div>
  )
}

export default SearchBox;
