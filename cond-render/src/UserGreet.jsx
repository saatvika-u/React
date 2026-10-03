function UserGreet(props){

        if(props.isLoggedIn)
        {
            return(
                <h2 className="welcome-msg" >Welcome {props.username}</h2>
            );
        }
        else
        {
            return(
                <h2 className="login-prompt" >Please log in to continue!</h2>
            )
        }

}
export default UserGreet