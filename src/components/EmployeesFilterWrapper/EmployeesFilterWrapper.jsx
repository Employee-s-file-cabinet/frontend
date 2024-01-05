import { useParams } from 'react-router-dom';
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage';

export const EmployeesFilterWrapper = ({ children, lastPage }) => {
  const { filterTeg, pageNumber } = useParams();
  const validNumbersOfPage = Array(lastPage)
    .fill(null)
    .map((_, index) => index + 1);
  const validFilterTegValues = [
    'alphabet',
    'departments',
    'structures',
    'full-structures',
  ];
  const isValid =
    validFilterTegValues.includes(filterTeg) &&
    validNumbersOfPage.includes(Number(pageNumber));
  return isValid ? children : <NotFoundPage />;
};
