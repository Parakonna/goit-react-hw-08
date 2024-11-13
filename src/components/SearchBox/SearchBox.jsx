import { useDispatch, useSelector } from 'react-redux';
import css from './SearchBox.module.css';

import { selectStatusFilter } from '../../redux/filters/selektors';
import { changeFilter } from '../../redux/filters/slice';

const SearchBox = () => {
  const selectNameFilter = useSelector(selectStatusFilter);
  const dispatch = useDispatch();

  return (
    <div className={css.searchBox}>
      Find contacts by name
      <input
        className={css.input}
        type="text"
        placeholder="Enter keyword to search"
        value={selectNameFilter}
        onChange={event => {
          const action = changeFilter(event.target.value);
          dispatch(action);
        }}
      />
    </div>
  );
};

export default SearchBox;
