import myPic from './assets/spidey.png'

function Card(){
    return(
        <div className="card">
            <img  className="cardImage" src={myPic} alt="profile pic" ></img>   
            {/* inline karna hai toh width='200px' height='200px' */}
            <h2>7vika</h2>
            <p>Hello there!</p>
        </div>
    );
}

export default Card