import { useState, useRef, useEffect } from "react";
import { ArrowDown, ArrowRight } from "../data/Icons";

export default function HeaderDropdown({ label, options }) {
  const [expand, setExpand] = useState(false);
  const ref = useRef(null);

  const toggleExpand = () => {
    setExpand(!expand);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setExpand(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={ref}>
      <button
        type="button"
        className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900"
        aria-expanded="false"
        onClick={toggleExpand}
      >
        {label}
        {expand ? <ArrowDown /> : <ArrowRight />}
      </button>
      <div
        className="absolute left-1/2 transform -translate-x-1/2 z-10 mt-3 w-screen max-w-md sm:max-w-lg md:max-w-xl lg:max-w-3xl overflow-hidden sm:rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5"
        hidden={!expand}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {options.map((option) => {
            return (
              <div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50">
                <div className="flex h-20 w-20 flex-none flex-col items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white text-gray-400 text-xs">
                  {option.language ? (
                    option.language.split(" ").map((line) => <p>{line}</p>)
                  ) : (
                    <ArrowRight />
                  )}
                </div>
                <div className="flex-auto">
                  <a
                    href={option.url}
                    className="block font-semibold text-gray-900"
                  >
                    {option.label}
                    <span className="absolute inset-0"></span>
                  </a>
                  <p className="mt-1 text-gray-600">{option.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
