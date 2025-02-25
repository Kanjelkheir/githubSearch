import React from 'react';

const profile = ({avatar, login, name, bio, date, followers, following, repos}) => {
    return (
        <div className="p-[1rem] rounded-lg shadow-md shadow-slate-300  h-fit flex flex-row w-fit gap-x-3">
            <img src={avatar} alt={`${login} avatar`} className="size-12 rounded-full overflow-hidden" />
            <div className="flex flex-col gap-y-5">
                <div className="flex flex-col flex-wrap">
                    <h2 className="font-bold underline text-black dark:text-white">{name}</h2>
                    <p className="font-light text-blue-400 text-sm">@{login}</p>
                    <p className="font-medium text-sm text-gray-400">Bio: {bio}</p>
                </div>
                <p className="text-gray-">Joined GitHub at {date}</p>
                <div className="flex flex-col justify-between">
                    <div className="flex flex-row justify-between">
                        <p className="font-light text-black dark:text-white">Followers</p>
                        <p className="font-light text-black dark:text-white">Following</p>
                        <p className="font-light text-black dark:text-white">Repos</p>
                    </div>
                    <div className="flex flex-row justify-between">
                        <p className="font-bold text-black dark:text-white">{followers}</p>
                        <p className="font-bold text-black dark:text-white">{following}</p>
                        <p className="font-bold text-black dark:text-white">{repos}</p>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default profile;