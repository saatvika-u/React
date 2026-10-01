import PropTypes from 'prop-types'
function Student(props){    //WE are passing a js Obj

    return(
        <div className="student">
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Enrolled: {props.isStudent ? "YES" : "NO"}</p>            
        </div>
    )

}
Student.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
}   //NOT SUPPORTED anymore...
export default Student