import { CondominiosProvider } from './components/context/CondominiosContext';
import Routes from './routes';
import { GlobalStyle } from './styles/global';

function App() {
  return (
    <CondominiosProvider>
      <GlobalStyle/>
      <Routes />

    </CondominiosProvider>
  )

  ;
}

export default App;
