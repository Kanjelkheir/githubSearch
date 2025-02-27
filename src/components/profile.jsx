import React from 'react';
import { useGetUserQuery } from '../App/Apis/GithubApi.js';

const Profile = ({username, onDelete, deleted, input}) => {
    const {data, isError, isLoading} = useGetUserQuery(username);
    if (username == null) {
        return null;
    }
    if (isError && !deleted) {
        return <p className="font-bold underline text-red-500">There is an error! Please change the username!</p>
    }
    if (isError && deleted) {
        return null;
    } else if (isError) {
        return <p className="font-bold underline text-red-500">There is an error! Please change the username</p>
    }
    if (isLoading) {
        return <p className="text-yellow-400 font-semibold">Loading...</p>
    }
    const stringDate = data?.created_at;
    const date = new Date(stringDate);
    const formattedDate = date.toLocaleString('en-US', {month: 'long', day: 'numeric', year: 'numeric'});
    
    return (
        <div>
            <div className="p-[1rem] rounded-lg shadow-md shadow-slate-300  h-fit flex flex-row w-fit gap-x-3 group">
            <img src={data?.avatar_url} alt={`${data?.login} avatar`} className="size-12 rounded-full overflow-hidden" />
            <div className="flex flex-col gap-y-5">
                <div className="flex flex-col flex-wrap">
                    <a target="_blank" rel="noreferrer" className="w-fit" href={`https://github.com/${data?.login}`}><h2 className="font-bold underline text-black dark:text-white">{data?.name}</h2></a>
                    <p className="font-light text-blue-400 text-sm">@{data?.login}</p>
                    <p className="font-medium text-sm text-gray-400">Bio: {data?.bio}</p>
                </div>
                <p className="text-black dark:text-gray-600">Joined GitHub at {formattedDate}</p>
                <div className="flex flex-col justify-between">
                    <div className="flex flex-row justify-between">
                        <p className="font-light text-black dark:text-white">Followers</p>
                        <p className="font-light text-black dark:text-white">Following</p>
                        <p className="font-light text-black dark:text-white">Repos</p>
                    </div>
                    <div className="flex flex-row justify-between">
                        <p className="font-bold text-black dark:text-white">{data?.followers}</p>
                        <p className="font-bold text-black dark:text-white">{data?.following}</p>
                        <p className="font-bold text-black dark:text-white">{data?.public_repos}</p>
                    </div>
                </div>
            </div>
            <button onClick={onDelete} className="relative  bg-red-500 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200">Delete</button>
        </div>
        {localStorage.getItem("username") === "bilal-algorithms" ? null : (
            <button 
                onClick={() => {localStorage.setItem("username", input); console.log(username)}} 
                className="absolute top-52 text-blue-400 mt-2 hover:underline cursor-pointer w-fit"
            >
                Save search
            </button>
        )}
        </div>
        
    )
}

export default Profile;