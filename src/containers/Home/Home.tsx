import React from 'react';
import {Repositories} from '../../types';
import Card from '../../components/Card/Card';

interface Props {
  repos: Repositories[];
}

const Home: React.FC<Props> = ({repos}) => {
  return (
    <>
      <div>
        <h4 className='text-2xl'>My repositories</h4>
        <div className="grid grid-cols-4 gap-2">
          {
            repos.map((repo) => (<Card key={repo.id} repo={repo}/>))
          }
        </div>
      </div>
    </>
  );
};

export default Home;