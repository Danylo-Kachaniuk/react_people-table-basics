import { useContext } from 'react';
import { PeopleContext } from './PeopleContext';
import { Link, NavLink, useParams } from 'react-router-dom';

export const PeopleItem = () => {
  const people = useContext(PeopleContext);
  const currentSlug = useParams();

  return (
    <tbody>
      {people.map(person => {
        const motherName = person.motherName ? person.motherName : '-';
        const fatherName = person.fatherName ? person.fatherName : '-';

        const { name, slug, sex, born, died, mother, father } = person;

        return (
          <tr
            data-cy="person"
            key={slug}
            className={
              currentSlug.peopleId === slug ? 'has-background-warning' : ''
            }
          >
            <td>
              <NavLink to={`/people/${slug}`}>{name}</NavLink>
            </td>

            <td>{sex}</td>
            <td>{born}</td>
            <td>{died}</td>
            <td>
              {mother ? (
                <Link className="has-text-danger" to={`/people/${mother.slug}`}>
                  {motherName}
                </Link>
              ) : (
                motherName
              )}
            </td>
            <td>
              {father ? (
                <Link to={`/people/${father.slug}`}>{fatherName}</Link>
              ) : (
                fatherName
              )}
            </td>
          </tr>
        );
      })}
    </tbody>
  );
};
