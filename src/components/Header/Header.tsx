import {NavLink} from 'react-router-dom';
import {ABOUT_PAGE, CONTACT_PAGE, HOME_PAGE, REPOS_PAGE} from '../../constanst/contanst';

const Header = () => {
  return (
    <div className="bg-inherit text-white p-4">
      <div className="container mx-auto grid items-center grid-cols-3 gap-2">
        <div className="col-span-1">
          <h1 className="text-[25px]">
            <NavLink to='/'>Muradil inc</NavLink>
          </h1>
        </div>
        <div className="col-span-2 font-normal text-[18px]">
          <ul className="flex justify-end">
            <li className="mr-3"><NavLink className="nav-link" to={HOME_PAGE}>Home</NavLink></li>
            <li className="mr-3"><NavLink className="nav-link" to={REPOS_PAGE}>Repositories</NavLink></li>
            <li className="mr-3"><NavLink className="nav-link" to={ABOUT_PAGE}>About me</NavLink></li>
            <li><NavLink className="nav-link" to={CONTACT_PAGE}>Contact me</NavLink></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;