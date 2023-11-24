import React from 'react';
import {Link} from 'react-router-dom';
import {Repositories} from '../../types';
import {parseDate} from '../../utils/dateParser';

interface Props {
  repo: Repositories;
}

const Card: React.FC<Props> = ({repo}) => {
  return (
    <div className="max-w-sm flex flex-col p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <Link to={repo.html_url}>
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{repo.name}</h5>
      </Link>
      <div className="flex-grow">
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{repo.description}</p>
        <p>Language: {repo.language}</p>
        <p>Created: {parseDate(repo.created_at)}</p>
        <p>Owner: <strong>{repo.owner.login}</strong></p>
      </div>
      <div className="flex mt-3 justify-between">
        <Link target='_blank' to={repo.html_url} className="inline-flex bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Read more
          <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
          </svg>
        </Link>
        {
          repo.homepage ?
            <Link target='_blank' to={repo.homepage} className="inline-flex bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 items-center px-3 py-2 text-sm font-medium text-center text-gray-900 bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Demo
            </Link>
            :
            null
        }
      </div>
    </div>
  );
};

export default Card;