import React from 'react';
import {useNavigate} from 'react-router-dom';
import './index.css';
import {useGetUserQuery} from './App/Apis/GithubApi.js';

const App = () => {
  const navigate = useNavigate();
  const {data, isError, isLoading} = useGetUserQuery("eliekh05");
  if (isError) {
    return <div className="text-red-500 font-bold underline">There is an Error! Wrong username!</div>
  }
  if (isLoading) {
    return <div className="text-blue-500 font-bold underline">Loading...</div>
  }
  return (
    <div>
      <p className="text-blue-400 underline">Tailwindcss</p>
      {data?.name}
    </div>
  )
}

export default App
