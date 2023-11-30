import { useMemo } from 'react';
import { CurrentUserContext } from './CurrentUserContext';
import { GeneralContext } from './GeneralContext';

export default function Contexts ({
  children,
  currentUser,
  isLoggedIn
})  {
  return (
    <CurrentUserContext.Provider value={currentUser}>
      <GeneralContext.Provider
        value={useMemo(() => ({
          currentUser,
          isLoggedIn,
        }),[
          currentUser,
          isLoggedIn,
        ])}
      >
      {children}
      </GeneralContext.Provider>
    </CurrentUserContext.Provider>
  )
}
