import { useLoaderData } from "react-router-dom";
import axios from "axios";
import CocktailList from "../components/CocktailList.jsx";
import SearchForm from "../components/SearchForm.jsx";
import { useQuery } from "@tanstack/react-query";
const cocktailSearchUrl =
  "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";


  const cocktailQuery = (SearchTerm) =>{
    return ({
      queryKey : ['searchCocktails', SearchTerm || 'all'],
      queryFn : async () => {
        const response = await axios(`${cocktailSearchUrl}${SearchTerm}`);
        return response.data.drinks;
      }
    })
  }
export const loader = (queryClient) =>async ({request}) => {
  const url = new URL(request.url);
  const SearchTerm = url.searchParams.get("search") || "all";
  
  await queryClient.ensureQueryData(cocktailQuery(SearchTerm));
  return {SearchTerm};
};

const Landing = () => {
  const {SearchTerm} = useLoaderData();
  const {data: drinks} = useQuery(cocktailQuery(SearchTerm));
  return (
    <>
      <SearchForm SearchTerm={SearchTerm} />
      <CocktailList drinks={drinks} />
    </>
  );
};

export default Landing;
