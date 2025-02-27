// filepath: /home/bilal/Desktop/search/src/App.js
import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css';
import { useGetUserQuery } from './App/Apis/GithubApi.js';
import {ReactComponent as SearchIcon} from './assets/magnifying-glass.svg';
import Profile from './components/profile.jsx';

const App = () => {
  const [input, setInput] = useState("");
  const [username, setUsername] = useState('');
  const [deleted, setDeleted] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    setDeleted(false);
    if (localStorage.getItem('username') === "") {
      setUsername("bilal-algorithms");
      localStorage.setItem("username", "bilal-algorithms");
    } else {
      setUsername(localStorage.getItem("username"));
    }
  }, []);
  const handleDelete = () => {
    localStorage.setItem("username", '');
    setDeleted(true);
    setUsername(null);
  }
  if (localStorage.getItem("username") === null) {
    if (deleted) {
      setDeleted(false);
    } else {
      localStorage.setItem("username", "bilal-algorithms");
    }
  }
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-dark-bg">
      <div className="w-full ml-[85%] mt-4">
        <p className="text-black dark:text-white font-bold text-lg">Developer: <a target="_blank" rel="noreferrer" className="border-b-2 dark:border-b-blue-500 border-b-black hover:text- hover:border-b-4 duration-200 hover:border-b-blue-500" href="https://github.com/bilal-algorithms">Bilal Kanjelkheir</a></p>
      </div>
      <div className="flex flex-col mt-28 w-full px-48 h-full flex-wrap">
        <div className="w-[90%] mx-auto flex items-center justify-center mb-40">
          <p className="font-bold text-6xl dark:text-white">
            Find More About Your <span className="font-bold text-6xl bg-gradient-to-r from-gradient-start to-gradient-end bg-clip-text text-transparent">Developer</span> on Github...
          </p>
        </div>
      </div>
      <div className="flex flex-row shadow-md shadow-slate-300 h-12 w-[25%] mx-auto rounded-xl">
        <input 
        type="text"
        placeholder="Search for a Developer..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        // add event listener for enter key
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            localStorage.setItem("username", input);
            setUsername(input);
          }
        }}
        className="w-full h-full outline-none border-none pl-2 rounded-xl dark:bg-transparent dark:text-blue-400 text-blue-400"
        />
        <button onClick={() => setUsername(input)} className="px-4 hover:bg-slate-300 rounded-md duration-200 dark:hover:bg-slate-700">
          <SearchIcon className="w-5 h-5" />
        </button>
      </div>
        <div className="relative top-10 mx-4 flex flex-col-reverse">
          <Profile username={username ? username : localStorage.getItem("username")} onDelete={handleDelete} deleted={deleted} input={username} />
        </div>
      
    </div>
  )
}
export default App;