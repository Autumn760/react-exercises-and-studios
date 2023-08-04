export default function HobbyLinks(){
    let pageTitleHobby = "My Hobby's"
    let hobbyLinks = ["https://en.wikipedia.org/wiki/Sewing","https://www.gardendesign.com/how-to/"]

    return(
        <div>
         <h3>{pageTitleHobby}</h3>

        <a href = {hobbyLinks[0]}>Sewing</a>
        <br></br>
        <a href = {hobbyLinks[1]}>Gardening</a>
        </div>  
    );
}