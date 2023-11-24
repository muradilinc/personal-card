import React from 'react';
import {Repositories} from '../../types';
import Card from '../../components/Card/Card';

interface Props {
  repos: Repositories[];
}

const Portfolio: React.FC<Props> = ({repos}) => {
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
      <div className="text-white">
        <h3 className="text-2xl">My works HTML/CSS(SASS)</h3>
        <div className="grid grid-cols-3 mt-3">
          {
            layoutRepos.map((repo) => <Card key={repo.id} repo={repo}/>)
          }
        </div>
      </div>
      <div>
        <h3 className="text-2xl text-white mt-5">My best works (React)</h3>
        <div className="grid grid-cols-3 mt-3 gap-y-2">
          {
            bestRepos.map(repo => <Card key={repo.id} repo={repo}/>)
          }
        </div>
      </div>
      <div className="mt-5 text-white">
        <h4 className="text-2xl">My repositories</h4>
        <div className="grid grid-cols-4 gap-2 mt-3">
          {
            repos.map((repo) => (<Card key={repo.id} repo={repo}/>))
          }
        </div>
      </div>
    </>
  );
};

export default Portfolio;