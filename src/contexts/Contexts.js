import { useMemo } from 'react';
import { CurrentUserContext } from './CurrentUserContext';
import { GeneralContext } from './GeneralContext';

export default function Contexts({
  children,
  currentUser,
  isLoggedIn,
  setIsLoggedIn,
}) {
  return (
    <CurrentUserContext.Provider value={currentUser}>
      <GeneralContext.Provider
        value={useMemo(
          () => ({
            currentUser,
            isLoggedIn,
            setIsLoggedIn,
          }),
          // eslint-disable-next-line
          [currentUser, isLoggedIn]
        )}
      >
        {children}
      </GeneralContext.Provider>
    </CurrentUserContext.Provider>
  );
}
