/* eslint-disable no-unused-vars */
import { Link, useLocation } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import translit from '../../utils/Translit';

export default function Breadcrumb() {
  const location = useLocation();
  const crumbPath = location.pathname.split('/').filter((path) => path !== '');

  const breadCrumb = crumbPath.map((crumb, index) => {
    const uniqueId = uuidv4();
    let crumbLink = '';
    crumbLink += `/${crumb}`;

    return (
      <li key={uniqueId}>
        <Link
          to={crumbLink}
          className={`breadcrumb__link ${
            index === crumbPath.length - 1 ? 'breadcrumb__link_is-active' : ''
          }`}
        >
          {translit(crumb)}
        </Link>
      </li>
    );
  });

  return (
    <nav className="breadcrumb has-dot-separator" aria-label="breadcrumbs">
      <ul>{breadCrumb}</ul>
    </nav>
  );
}
