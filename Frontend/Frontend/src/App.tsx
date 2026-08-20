import ServiceCard from "./Component/serviceCard";
import ServiceList from "./Component/ServiceList";
import type 

type Service = {
  id: number;
  name: string;
};

const serviceListData: Service[] = [
  {id:1,name:"test"},
  {id:2,name:"test2"},
  {id:3,name:"test3"},
  {id:4,name:"test4"},
  {id:5,name:"test5"}
];


function App() {
  return (
    <main>
      <ul>
        {serviceListData.map((service) => (
          <li key={service.id}>{service.name}</li>
        ))}
      </ul>
    </main>
  );
}

export default App;
