import { Link } from 'react-router-dom';

export default function Breadcrumb({ pagesPath }) {
  const breadCrumb = pagesPath.map((crumb, index) => {
    let crumbLink = '';
    crumbLink += `/${crumb.path}`;

    return (
      <li key={crumb.id}>
        <Link
          to={crumbLink}
          className={`breadcrumb__link ${
            index === pagesPath.length - 1 ? 'breadcrumb__link_is-active' : ''
          }`}
        >
          {crumb.label}
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
