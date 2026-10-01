// import styles from './Button.module.css'

function Button(){

    //JAVASCRIPT OBJ for inline css
    const styles ={
        backgroundColor: "rgb(16, 219, 152)",
        color:" rgb(243, 242, 246)",
        padding: "15px",
        cursor: "pointer",
        fontSize: "1.3em",
        border: "none",
    }

    return(
//inline css try karte
        <button style={styles}>Click me</button> 
    );
}
export default Button