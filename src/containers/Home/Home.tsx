import React from 'react';
import {Link} from 'react-router-dom';
import {CONTACT_PAGE} from '../../constanst/contanst';
import {GithubLogo, TelegramLogo} from '@phosphor-icons/react';

const Home: React.FC = () => {
  return (
    <div className={`flex items-center bg-[length:600px_500px] bg-[url(/src/assets/space-astronaut.png)] bg-right bg-no-repeat h-screen text-white`}>
      <div className="max-w-[700px]">
        <h1 className="text-[45px] font-bold">Hi i'm Muradil Koychubekob</h1>
        <h3 className="text-[32px] font-bold text-[#00abf0]">Frontend Developer</h3>
        <p className="text-[16px] mt-[20px] mb-[40px]">React, TypeScript, JavaScript, Tailwind CSS</p>
        <div className="w-[345px] h-[50px] flex">
          <Link
            className="w-[150px] overflow-hidden hover:text-[#00abf0] before:transition before:duration-500 relative z-[1] hover:before:w-full before:bg-[#081b29] before:absolute before:w-0 before:z-[-1] before:h-full justify-center items-center inline-flex text-[19px] text-[#081b29] font-semibold h-full bg-[#00abf0] border-[2px] border-[#00abf0] rounded-[8px]"
            to={CONTACT_PAGE}>Let's Talk</Link>
        </div>
      </div>
      <div className="absolute flex justify-between w-[100px] bottom-[40px]">
        <Link className="inline-flex overflow-hidden hover:text-[#081b29] before:transition before:duration-500 relative z-[1] hover:before:w-full before:bg-[#00abf0] before:absolute before:w-0 before:z-[-1] before:h-full justify-center items-center w-[40px] h-[40px] border-[2px] border-[#00abf0] bg-transparent rounded-[50%]" to='https://github.com/muradilinc' target='_blank'><GithubLogo size={32} /></Link>
        <Link className="inline-flex overflow-hidden hover:text-[#081b29] before:transition before:duration-500 relative z-[1] hover:before:w-full before:bg-[#00abf0] before:absolute before:w-0 before:z-[-1] before:h-full justify-center items-center w-[40px] h-[40px] border-[2px] border-[#00abf0] bg-transparent rounded-[50%]" to='https://t.me/muradil_dev' target='_blank'><TelegramLogo size={32} /></Link>
      </div>
    </div>
  );
};

export default Home;