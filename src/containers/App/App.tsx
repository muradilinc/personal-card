import {useEffect, useState} from 'react';
import Header from '../../components/Header/Header';
import {Route, Routes} from 'react-router-dom';
import Home from '../Home/Home';
import axios from 'axios';
import {GIR_URL} from '../../constanst/contanst';
import {Owner, Repositories} from '../../types';
import About from '../About/About';

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
      console.log(error);
    }
  };

  useEffect(() => {
    void fetchRepositories();
  }, []);

  console.log(repositories);
  return (
    <div>
      <Header/>
      <div className="container mx-auto">
        <Routes>
          <Route path='/' element={(<Home repos={repositories}/>)}/>
          <Route path='/about-me' element={(<About/>)}/>
          <Route path='*' element={(<h1>Not found page</h1>)}/>
        </Routes>
      </div>
    </div>
  );
};

export default App;