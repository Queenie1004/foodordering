import useHTTP from "../hooks/useHTTP.js";
import MealItems from "./MealItems.jsx";
import Error from "./UI/Error.jsx";

const requestConfig = {};

export default function Meals() {
  const {
    data: loadMeals,
    isLoading,
    error,
  } = useHTTP("http://localhost:3000/meals", requestConfig , []);

  if(isLoading){
    return <p className="center">Fetching meals...</p>;
  }

  if(error){
   return <Error title='Failed to fetch meals' message={error} />;
  }

  return (
    <ul id="meals">
      {loadMeals.map((meal) => (
        <MealItems key={meal.id} meal={meal} />
      ))}
    </ul>
  );
}
