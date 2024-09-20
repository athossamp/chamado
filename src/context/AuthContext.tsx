import { ReactNode, createContext, useContext, useEffect, useState } from "react"

type AuthProviderProps = {
  children?: ReactNode
}
type AuthContextType = {
  authenticated: boolean;
  setAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AuthContext = createContext<AuthContextType>({
  authenticated: false,
  setAuthenticated: () => {}
});

export const AuthProvider = ({children}: AuthProviderProps) => {
  const [authenticated, setAuthenticated] = useState<boolean>(() => {

    const storedAuth = localStorage.getItem("authenticated");
    return storedAuth ? JSON.parse(storedAuth) : false;
  });
  useEffect(() => {
    localStorage.setItem("authenticated", JSON.stringify(authenticated))
  }, [authenticated])

  return (
    <AuthContext.Provider value={{authenticated, setAuthenticated}}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)