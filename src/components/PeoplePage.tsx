import { useContext } from 'react';
import { ErrorMessage } from './ErrorMessage';
import { Loader } from './Loader';
import { PeopleList } from './PeopleList';
import { ErrorContext, LoaderContext } from './PeopleContext';

export const PeoplePage = () => {
  const loader = useContext(LoaderContext);
  const error = useContext(ErrorContext);

  return (
    <>
      <h1 className="title">People Page</h1>

      <div className="block">
        <div className="box table-container">
          {error && <ErrorMessage />}

          {loader ? <Loader /> : <PeopleList />}
        </div>
      </div>
    </>
  );
};
