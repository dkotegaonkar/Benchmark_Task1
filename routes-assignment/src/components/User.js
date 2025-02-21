import { useParams, useSearchParams } from "react-router-dom";
import { useState } from "react";

const User = () => {
  const { userid } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const [inputValue, setInputValue] = useState("");

  const handleSearch = () => {
    setSearchParams({ query: inputValue });
  };

  return (
    <div>
      <h2>User - {userid}</h2>
      <input
        type="text"
        placeholder="Enter query"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <p>Search Query: {searchParams.get("query")}</p>
    </div>
  );
};

export default User;
