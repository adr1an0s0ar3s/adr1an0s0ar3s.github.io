export default function App() {

  const goNextPage = () => {
    document.body.style.overflow = "hidden";
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  }; 

  return (
    <div className="bg-gradient-to-r from-black to-stone-800">
      <div className="flex h-screen items-center">
        <div className="w-max">
          <h1 className="ml-32 text-9xl font-pixel text-white animate-typing overflow-hidden whitespace-nowrap border-r-2 border-r-white pr-5">
            echo "Hello Friend"
          </h1>
        </div>
        <button className="text-white absolute left-1/2 bottom-5 animate-bounce hover:text-stone-500" onClick={goNextPage}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-12 h-12">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
          </svg>
        </button>
      </div>
      <div className="flex h-screen items-center">
        <h1 className="ml-32 text-9xl font-pixel text-white animate-typing overflow-hidden whitespace-nowrap border-r-2 border-r-white pr-5">
          Here's my info... # TODO
        </h1>
        <button className="text-white absolute left-1/2 top-5 animate-bounce hover:text-stone-500" onClick={goNextPage}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75" />
          </svg>
        </button>
      </div>
    </div>
  );
}
