const Button = ({ isFollowing, handleClick }) => {
  const text = isFollowing ? "Siguiendo" : "Seguir";

  const styles = isFollowing
    ? "group flex justify-center items-center border border-solid border-matisse-800 rounded-2xl px-4 py-1 text-white bg-matisse-400 trasition-all duration-500 ease-in-out hover:bg-matisse-800"
    : "flex justify-center items-center border border-solid border-matisse-800 rounded-2xl px-4 py-1 text-matisse-700 bg-white trasition-all duration-200 ease-in-out hover:bg-matisse-200";

  return (
    <button className={styles} onClick={handleClick}>
      {isFollowing ? (
        <>
          <span className="text-xs md:text-sm group-hover:hidden">{text}</span>
          <span className="group-hover:block hidden">Dejar de seguir</span>
        </>
      ) : (
        <span className="text-xs md:text-sm">{text}</span>
      )}
    </button>
  );
};

export default Button;
