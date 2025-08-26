import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Person } from '../types';
import { PeopleLink } from './PeopleLink';

type Props = {
  people: Person[];
};

export const PeopleItem: React.FC<Props> = ({ people }) => {
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
              <Link to={`/people/${slug}`}>{name}</Link>
            </td>

            <td>{sex}</td>
            <td>{born}</td>
            <td>{died}</td>
            <td>{mother ? <PeopleLink parent={mother} /> : motherName}</td>
            <td>{father ? <PeopleLink parent={father} /> : fatherName}</td>
          </tr>
        );
      })}
    </tbody>
  );
};
