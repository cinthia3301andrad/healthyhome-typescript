import { useEffect } from 'react';
import { createContext, ReactNode, useState } from 'react';
import api from '../../services';
import { headers, isAuthenticated, userToken } from '../../services/storage';

interface CondominiosContextData {
  listCondos: Array<string>;
  getCondos: () => Promise<void>;
  session: boolean;

}

export const CondominiosContext = createContext<CondominiosContextData>({} as CondominiosContextData);

interface CondominiosProviderProps {
  children: ReactNode;
}
export function CondominiosProvider({children}: CondominiosProviderProps) {
  const [listCondos, setListCondos] = useState([]);
  const [session ] = useState(isAuthenticated());
  const [, setLoading] = useState(true);

  useEffect(()=> {
    getCondos();
    console.log('QUNATAS');
  }, []);

  async function getCondos() {
    await api.get('/administrators/condos', {headers}).then(response => {
      setListCondos(response.data);

      setLoading(false);
    }).catch(error => {
      console.log(error, 'erro ao listar condominios');
    });
  }

  return (
    <CondominiosContext.Provider value={{listCondos, getCondos, session}}>
      {children}
    </CondominiosContext.Provider>
  );

}

