let stars = ["⭐", "⭐ ⭐", "⭐ ⭐ ⭐", "⭐ ⭐ ⭐ ⭐", "⭐ ⭐ ⭐ ⭐ ⭐"];

function RateARecipe() {
  function GiveRating(){
    return <h3>{stars[prompt.rating -1]}
    </h3>;
  }
  return stars;
}



export default RateARecipe;

//conditional to render stars based on a number provided in App.js 
