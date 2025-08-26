import { Link } from 'react-router-dom';
import { Person } from '../types';
import React from 'react';

type Props = {
  parent: Person;
};

export const PeopleLink: React.FC<Props> = ({ parent }) => {
  return (
    <Link
      to={`/people/${parent.slug}`}
      className={parent.sex === 'f' ? 'has-text-danger' : ''}
    >
      {parent.name}
    </Link>
  );
};
