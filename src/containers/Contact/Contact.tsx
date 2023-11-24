import {Link} from 'react-router-dom';

const Contact = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div
        className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 dark:bg-gray-800 dark:border-gray-700">
        <h5 className="mb-3 text-base font-semibold text-gray-900 md:text-xl dark:text-white">
          Connect me
        </h5>
        <p className="text-sm font-normal text-gray-500 dark:text-gray-400">Text me!</p>
        <ul className="my-4 space-y-3">
          <li>
            <Link target='_blank' to='https://t.me/muradil_dev'
               className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
              <svg className="h-8" id="Livello_1" data-name="Livello 1" xmlns="http://www.w3.org/2000/svg"
                   viewBox="0 0 240 240">
                <defs>
                  <linearGradient id="linear-gradient" x1="120" y1="240" x2="120" gradientUnits="userSpaceOnUse">
                    <stop offset="0" stop-color="#1d93d2"/>
                    <stop offset="1" stop-color="#38b0e3"/>
                  </linearGradient>
                </defs>
                <title>Telegram_logo</title>
                <circle cx="120" cy="120" r="120" fill="url(#linear-gradient)"/>
                <path
                  d="M81.229,128.772l14.237,39.406s1.78,3.687,3.686,3.687,30.255-29.492,30.255-29.492l31.525-60.89L81.737,118.6Z"
                  fill="#c8daea"/>
                <path d="M100.106,138.878l-2.733,29.046s-1.144,8.9,7.754,0,17.415-15.763,17.415-15.763" fill="#a9c6d8"/>
                <path
                  d="M81.486,130.178,52.2,120.636s-3.5-1.42-2.373-4.64c.232-.664.7-1.229,2.1-2.2,6.489-4.523,120.106-45.36,120.106-45.36s3.208-1.081,5.1-.362a2.766,2.766,0,0,1,1.885,2.055,9.357,9.357,0,0,1,.254,2.585c-.009.752-.1,1.449-.169,2.542-.692,11.165-21.4,94.493-21.4,94.493s-1.239,4.876-5.678,5.043A8.13,8.13,0,0,1,146.1,172.5c-8.711-7.493-38.819-27.727-45.472-32.177a1.27,1.27,0,0,1-.546-.9c-.093-.469.417-1.05.417-1.05s52.426-46.6,53.821-51.492c.108-.379-.3-.566-.848-.4-3.482,1.281-63.844,39.4-70.506,43.607A3.21,3.21,0,0,1,81.486,130.178Z"
                  fill="#fff"/>
              </svg>
              <span className="flex-1 ms-3 whitespace-nowrap">Telegram</span>
              <span
                className="inline-flex items-center justify-center px-2 py-0.5 ms-3 text-xs font-medium text-gray-500 bg-gray-200 rounded dark:bg-gray-700 dark:text-gray-400">Popular</span>
            </Link>
          </li>
          <li>
            <Link target='_blank' to="mailto:muradil.koychubekob@gmail.com"
               className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
              <svg className="h-6" xmlns="http://www.w3.org/2000/svg" viewBox="52 42 88 66">
                <path fill="#4285f4" d="M58 108h14V74L52 59v43c0 3.32 2.69 6 6 6"/>
                <path fill="#34a853" d="M120 108h14c3.32 0 6-2.69 6-6V59l-20 15"/>
                <path fill="#fbbc04" d="M120 48v26l20-15v-8c0-7.42-8.47-11.65-14.4-7.2"/>
                <path fill="#ea4335" d="M72 74V48l24 18 24-18v26L96 92"/>
                <path fill="#c5221f" d="M52 51v8l20 15V48l-5.6-4.2c-5.94-4.45-14.4-.22-14.4 7.2"/>
              </svg>
              <span className="flex-1 ms-3 whitespace-nowrap">Gmail</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;