import { FaSearch } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

export default function Header() {
  const { currentUser } = useSelector((state) => state.user);

  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set('searchTerm', searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const searchTermFromUrl = urlParams.get('searchTerm');
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }
  }, []);

  return (
    <header className='bg-gradient-to-r from-green-500 to-lightgreen-800 shadow-md rounded-b-full'>
      <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
        <Link to='/'>
          <h1 className='font-bold text-sm sm:text-xl flex flex-wrap '>
            <span className='text-black-100'>Rent</span>
            <span className='text-white-300'>ify</span>
          </h1>
        </Link>
        <form onSubmit={handleSubmit} className='ml-4 flex items-center'>
          <input
            type='text'
            placeholder='Search...'
            className='bg-slate-100 text-gray-800 focus:outline-none py-2 px-4 rounded-md'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button
            type='submit'
            className='ml-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md py-2 px-4 focus:outline-none'
          >
            <FaSearch />
          </button>
        </form>

        <ul className='flex gap-4'>
          <Link to='/' className='text-black '>
            <li className='hidden sm:inline rounded-md border border-transparent '>Home</li>
          </Link>
          <Link to='/about' className='text-black '>
            <li className='hidden sm:inline rounded-md border border-transparent '>About</li>
          </Link>
          <Link to='/profile'>
            {currentUser ? (
              <img
                className='rounded-full h-7 w-7 object-cover'
                src={currentUser.avatar}
                alt='profile'
              />
            ) : (
              <li className='text-white hover:text-blue-200 rounded-md border border-transparent hover:border-blue-200'>Sign in</li>
            )}
          </Link>
        </ul>
      </div>
    </header>
  );
}
