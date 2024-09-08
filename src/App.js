import logo from './logo.svg';
import './App.css';
import ComponenteBase from './components/useEffect/ComponenteBase';
import ClenUpEffect from './components/useEffect/ClenUpEffect';

import 'bootstrap/dist/css/bootstrap.css';
import FetchData from './components/useEffect/FetchData';

function App() {
  return (
    <>
      <section className='container m-auto text-center'>

        <ComponenteBase />
        <ClenUpEffect />
        <FetchData/>
      </section>
    </>

  );
}

export default App;
