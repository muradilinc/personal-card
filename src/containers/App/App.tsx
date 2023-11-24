import {useEffect, useState} from 'react';
import {Route, Routes} from 'react-router-dom';
import axios from 'axios';
import {ABOUT_PAGE, CONTACT_PAGE, GIR_URL, HOME_PAGE, NOT_FOUND_PAGE, REPOS_PAGE} from '../../constanst/contanst';
import {Owner, Repositories} from '../../types';
import Header from '../../components/Header/Header';
import Home from '../Home/Home';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Portfolio from '../Portfolio/Portfolio';

const App = () => {
  const [repositories, setRepositories] = useState<Repositories[]>([]);

  const fetchRepositories = async () => {
    try {
      const response = await axios.get(GIR_URL);
      const repositories = await Promise.all(response.data.items.map(async (item: Owner) =>{
        const responseRepo = await axios.get(item.repos_url);
        return responseRepo.data;
      }));
      setRepositories(repositories[0]);
    } catch (error) {
      alert('Error! ' + error);
    }
  };

  useEffect(() => {
    void fetchRepositories();
  }, []);

  return (
    <div>
      <Header/>
      <div className="container mx-auto">
        <Routes>
          <Route path={HOME_PAGE} element={(<Home/>)}/>
          <Route path={REPOS_PAGE} element={(<Portfolio repos={repositories}/>)}/>
          <Route path={ABOUT_PAGE} element={(<About/>)}/>
          <Route path={CONTACT_PAGE} element={(<Contact/>)}/>
          <Route path={NOT_FOUND_PAGE} element={(<h1>Not found page</h1>)}/>
        </Routes>
      </div>
    </div>
  );
};

export default App;