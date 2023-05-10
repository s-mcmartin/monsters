import { ChangeEvent } from "react";

type SearchBoxProps = {
  className: string;
  placeholder?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

const SearchBox = ({ className, placeholder, onChange }: SearchBoxProps) => {
  return (
    <input
      className={`search-box ${className}`}
      placeholder={placeholder}
      type="search"
      onChange={onChange}
    />
  );
};

export default SearchBox;
