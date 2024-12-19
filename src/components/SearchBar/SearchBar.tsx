import React, { useState } from "react";
import { toast } from "react-toastify";
import s from "./SearchBar.module.css";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (query.trim() === "") {
      toast.warn("Please enter a search term.");
      return;
    }
    onSearch(query);
    setQuery("");
  };

  return (
    <header className={s.SearchBar}>
      <form className={s.SearchForm} onSubmit={handleSubmit}>
        <input
          type="text"
          className={s.SearchInput}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search images and photos"
        />
        <button type="submit" className={s.SearchButton}>
          Search
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
