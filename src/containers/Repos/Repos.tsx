import React from 'react';
import Card from '../../components/Card/Card';
import {Repositories} from '../../types';

interface Props {
  repos: Repositories[];
}

const Repos: React.FC<Props> = ({repos}) => {
  return (
    <div className="mt-5">
      <h4 className="text-2xl">My repositories</h4>
      <div className="grid grid-cols-4 gap-2 mt-3">
        {
          repos.map((repo) => (<Card key={repo.id} repo={repo}/>))
        }
      </div>
    </div>
  );
};

export default Repos;