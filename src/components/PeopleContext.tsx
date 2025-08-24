import React, { useEffect, useState } from 'react';
import { Person } from '../types';
import { ErrorMassege } from '../types/ErrorMessage';
import { getPeople } from '../api';

export const PeopleContext = React.createContext<Person[]>([]);
export const ErrorContext = React.createContext<ErrorMassege | null>(null);
export const LoaderContext = React.createContext(false);

type Props = {
  children: React.ReactNode;
};

export const PeopleProvider: React.FC<Props> = ({ children }) => {
  const [people, setPeople] = useState<Person[]>([]);
  const [error, setError] = useState<ErrorMassege | null>(null);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    setLoader(true);
    setError(null);

    getPeople()
      .then(setPeople)
      .catch(() => setError(ErrorMassege.NoPeople))
      .finally(() => {
        setPeople(currentPeople =>
          currentPeople.map(currentPerson => {
            const mother = currentPeople.find(
              person => person.name === currentPerson.motherName,
            );
            const father = currentPeople.find(
              person => person.name === currentPerson.fatherName,
            );

            if (mother && father) {
              return { ...currentPerson, mother, father };
            }

            if (mother) {
              return { ...currentPerson, mother };
            }

            if (father) {
              return { ...currentPerson, father };
            }

            return { ...currentPerson };
          }),
        );

        setLoader(false);
      });
  }, []);

  return (
    <LoaderContext.Provider value={loader}>
      <ErrorContext.Provider value={error}>
        <PeopleContext.Provider value={people}>
          {children}
        </PeopleContext.Provider>
      </ErrorContext.Provider>
    </LoaderContext.Provider>
  );
};
