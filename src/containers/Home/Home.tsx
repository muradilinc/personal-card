import React from 'react';
import {Repositories} from '../../types';
import Card from '../../components/Card/Card';

interface Props {
  repos: Repositories[];
}

const Home: React.FC<Props> = ({repos}) => {
  const filteredRepos = (name: string, task: string = 'name') => {
    return repos.filter(repo => {
      if (name.length !== 0) {
        return repo.name.includes(name);
      } else {
        if (!repo.name.includes('simple')) {
          return repo[task as keyof Repositories];
        }
      }
    });
  };

  const layoutRepos = filteredRepos('simple');
  const bestRepos = filteredRepos('', 'homepage');

  return (
    <>
      <div>
        <h3 className="text-2xl">My works HTML/CSS(SASS)</h3>
        <div className="grid grid-cols-3 mt-3">
          {
            layoutRepos.map((repo) => <Card key={repo.id} repo={repo}/>)
          }
        </div>
      </div>
      <div>
        <h3 className="text-2xl">My best works (React)</h3>
        <div className="grid grid-cols-3 mt-3 gap-y-2">
          {
            bestRepos.map(repo => <Card key={repo.id} repo={repo}/>)
          }
        </div>
      </div>
    </>
  );
};

export default Home;