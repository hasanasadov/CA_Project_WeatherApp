import { useState } from "react";

const SearchBar = ({
    setSearch,
}: {
    search: string;
    setSearch: (value: string) => void;
}) => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSearch(searchParam);
    };

    const [searchParam, setSearchParam] = useState("london");
    return (
        <div>
            <form className="flex gap-2" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Search for a city"
                    className="rounded-md p-2 bg-opacity-50 bg-white outline-none "
                    value={searchParam}
                    onChange={(e) => setSearchParam(e.target.value)}
                />
                <button className="bg-orange-300 text-white p-2 rounded-md">
                    Search
                </button>
            </form>
        </div>
    );
};

export default SearchBar;
