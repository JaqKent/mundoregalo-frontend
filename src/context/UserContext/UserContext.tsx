import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useMemo,
  useState,
} from 'react';

const initialState: {
  isLoggedIn: boolean;
  setIsLoggedIn: Dispatch<SetStateAction<boolean>>;
} = {
  isLoggedIn: false,
  setIsLoggedIn: () => {},
};

const UserContext = createContext(initialState);

interface Props {
  children: ReactNode;
}

export function UserProvider({ children }: Props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const value = useMemo(
    () => ({
      isLoggedIn,
      setIsLoggedIn,
    }),
    [isLoggedIn]
  );

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export default UserContext;
