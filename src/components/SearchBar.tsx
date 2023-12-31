export default function SearchBar() {
  return (
    <form
      className="hidden md:block shrink-0"
      onSubmit={(e) => e.preventDefault()}
    >
      <label
        htmlFor="default-search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only"
      >
        Search
      </label>
      <div className="relative">
        <div className="absolute z-3 inset-y-0 left-0 flex items-center pl-3">
          <button type="submit">
            <svg
              className="w-3 h-3 text-gray-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
            <span className="sr-only">Submit</span>
          </button>
        </div>
        <input
          type="search"
          id="default-search"
          className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-transparent focus:ring-gray-500 focus:border-gray-500"
          placeholder="Search"
          required
        />
      </div>
    </form>
  );
}
