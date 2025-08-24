import { useContext } from 'react';
import { ErrorContext } from './PeopleContext';

export const ErrorMessage = () => {
  const error = useContext(ErrorContext);

  return (
    <>
      <p data-cy="peopleLoadingError" className="has-text-danger">
        Something went wrong
      </p>

      <p data-cy="noPeopleMessage">{error}</p>
    </>
  );
};
