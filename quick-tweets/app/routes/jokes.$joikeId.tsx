import { useLocation } from "@remix-run/react";

const JokeIDRoute = () => {
  const loc = useLocation();
  const pathArray = loc.pathname.split("/");
  const jokeID = pathArray[pathArray.length - 1]; 
  
  return (
    <div>
      <p>Here's your hilarious joke: {jokeID}</p>
      <p>
        Why don't you find hippopotamuses hiding in trees?
        They're really good at it.
      </p>
    </div>
  );
};

export default JokeIDRoute;
