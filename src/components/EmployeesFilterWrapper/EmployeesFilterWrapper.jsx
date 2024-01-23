import { useParams } from 'react-router-dom';
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage';

// Надо подумать почему при проверке страницы на валидность линка по номеру странички
// происходит перезагрузка странички и нужна ли такая проверка...
export const EmployeesFilterWrapper = ({
  children,
  // lastPage
}) => {
  const {
    filterTeg,
    // pageNumber
  } = useParams();
  // const currentPage = Number.parseInt(pageNumber, 10);

  // const validNumbersOfPage = Array(lastPage)
  //   .fill(null)
  //   .map((_, index) => index + 1);

  const validFilterTegValues = [
    'alphabet',
    'departments',
    'structures',
    'full-structures',
  ];

  const isValid = validFilterTegValues.includes(filterTeg);
  // &&
  // validNumbersOfPage.includes(currentPage);
  return isValid ? children : <NotFoundPage />;
};
