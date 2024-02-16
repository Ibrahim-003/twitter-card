import { useState } from "react";
import Button from "./Button.jsx";

export const TwitterCard = ({ profile }) => {
  const { avatarURL, avatarAlt, fullName, account, isFollowing } = profile;
  const [isFollow, setIsFollow] = useState(isFollowing);

  const handleFollow = () => {
    setIsFollow(!isFollow);
  };

  return (
    <article className="bg-white rounded-2xl px-3 py-2 flex items-center justify-between gap-4 border-2 border-matisse-900 md:gap-8 md:px-4 md:py-3 ">
      <header className="flex gap-2 items-center">
        <img
          src={avatarURL}
          alt={avatarAlt}
          className="w-10 md:w-12 rounded-full"
        />
        <div className="flex flex-col">
          <strong className="text-xs md:text-sm">{fullName}</strong>
          <span className="text-xs md:text-sm">{account}</span>
        </div>
      </header>
      <aside>
        <Button isFollowing={isFollow} handleClick={handleFollow} />
      </aside>
    </article>
  );
};
