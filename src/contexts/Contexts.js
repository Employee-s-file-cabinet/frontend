import { useMemo } from 'react';
import { CurrentUserContext } from './CurrentUserContext';
import { GeneralContext } from './GeneralContext';

export default function Contexts({
  children,
  currentUser,
  setCurrentUser,
  isLoggedIn,
  setIsLoggedIn,
  isFetching,
  setIsFetching,
}) {
  return (
    <CurrentUserContext.Provider
      value={useMemo(
        () => ({
          currentUser,
          setCurrentUser,
        }),
        // eslint-disable-next-line
        [currentUser, setCurrentUser]
      )}
    >
      <GeneralContext.Provider
        value={useMemo(
          () => ({
            isLoggedIn,
            setIsLoggedIn,
            isFetching,
            setIsFetching,
          }),
          // eslint-disable-next-line
          [setIsLoggedIn, isLoggedIn, isFetching, setIsFetching]
        )}
      >
        {children}
      </GeneralContext.Provider>
    </CurrentUserContext.Provider>
  );
}
