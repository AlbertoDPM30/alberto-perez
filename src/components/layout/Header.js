export default function Header({ tags = {} }) {
  return (
    <>
      <header className={`h-[5rem] flex items-center fixed`}>
        <div className="absolute z-90 h-[5rem] inset-0 bg-gradient-to-b from-indigo-800/20 to-purple-600/10 backdrop-filter backdrop-blur-lg"></div>
        <nav className="relative z-100">
          <ul className="w-screen text-xl font-semibold flex flex-row flex-nowrap justify-evenly items-center animate-top-fade">
            {Object.values(tags).map(({ item, url }) => (
              <li key={item}>
                <a
                  className="text-neutral-100 text-shadow-md text-shadow-neutral-700/30 transition-all ease-in-out duration-500 hover:text-indigo-300"
                  href={`${url}`}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  );
}
