import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from 'redux/filterSlice/filterSlice';
import { selectFilter } from 'redux/selector';

export function Filter() {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const onChangeFilter = e => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <input onChange={onChangeFilter} value={filter} type="text" name="filter" />
  );
}
