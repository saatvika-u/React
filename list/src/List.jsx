function List(props){

const itemList = props.items;
const cat=props.category;
    // const fruits = [{id: 1, name: "apple", cal: 95},
    //                 {id: 2, name: "pineapple", cal: 45},
    //                 {id: 3, name: "orange", cal:105}];    
    //AlphaB         
    // fruits.sort((a, b) => a.name.localeCompare(b.name));
    //REVERSE
    // fruits.sort((a,b) => b.name.localeCompare(a.name));

    //By Cal
    // fruits.sort((a,b) => a.cal - b.cal);
    //By Cal DEsc
    // fruits.sort((a,b) => b.cal - a.cal);


    // Filter for cal under 100
    // const lowCalFruits = fruits.filter( fruit => fruit.cal < 100);

    // const listItems = fruits.map(fruit => <li key={fruit.id}>
    //                                         {fruit.name}: &nbsp;
    //                                         <b>{fruit.cal}</b></li>);
    // const listItems = lowCalFruits.map(fruit => <li key={fruit.id}>
    //                                             {fruit.name}: &nbsp;
    //                                             <b>{fruit.cal}</b></li>);
       const listItems = itemList.map(fruit => <li key={fruit.id}>
                                                {fruit.name}: &nbsp;
                                                <b>{fruit.cal}</b></li>);
    
   
   
    return(<><h3>{cat}</h3><ol>{listItems}</ol></>);
}
export default List
