import Substitute from "./utils";
import FilteredList from "./list";



const sampleItems = [
  { id: 1, name: "Apple" ,isVisible :true },
  { id: 2, name: "Banana" , isVisible :false },
  { id: 3, name: "Cherry" , isVisible:true },
];



function Item ({name , isRegistered}){
  return (
    <li className="item">
      {name} {isRegistered && '✅'} {!isRegistered && '❌'}
    </li>
  )
}

export default function StudentList(){
  return (
    <section>
      <h1>Student list</h1>
      <ul>
        <Item
          isRegistered={true}
          name="x"
         />

         <Item 
         isRegistered={false}
         name="John"
         />

         <Item
         isRegistered={true}
         name="elsa"
         />
      </ul>

      <Substitute/>
      <FilteredList items = {sampleItems}/>
    </section>

    
  )
}