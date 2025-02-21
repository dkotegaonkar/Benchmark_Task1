import { useLocation } from "react-router-dom";

const useQuery = () => new URLSearchParams(useLocation().search);

const SearchPage = () => {
  const location = useLocation();
  const query = useQuery();
  const term = query.get("term");
  return (
    <>
      <h2>
        Search Page - {term} {JSON.stringify(location)}
      </h2>
    </>
  );
};

export default SearchPage;
