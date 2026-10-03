import List from './List.jsx'

function App(){

    const fruits = [{id: 1, name: "apple", cal: 95},
                    {id: 2, name: "pineapple", cal: 45},
                    {id: 3, name: "orange", cal:105}];

    const veggie = [{id: 1, name: "apple", cal: 95},
                    {id: 2, name: "pineapple", cal: 45},
                    {id: 3, name: "orange", cal:105}];

  return(
    <>
    <List items={fruits} category="Fruits"/>
     <List items={veggie} category="Vegetables"/>
    </>
    
  );
}

export default App
