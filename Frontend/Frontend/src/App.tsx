import ServiceCard from "./Component/serviceCard";
import ServiceList from "./Component/ServiceList";
import type {Service} from "./Component/ServiceList";
import { IncrementPage } from "./Component/incrementPage";
import FocusInput  from "./Component/FocusInput";
import ProductList from "./Component/productList";



const serviceListData: Service[] = [
  { id: 1, name: "test" },
  { id: 2, name: "test2" },
  { id: 3, name: "test3" },
  { id: 4, name: "test4" },
  { id: 5, name: "test5" },
];

const products = [
  { id: 1, price: 2000 },
  { id: 2, price: 2500 },
  { id: 3, price: 3000 },
];

function App() {
  return (
    <>
      <IncrementPage />
      <ProductList product={products} />
      {/* <FocusInput /> */}
      {/* <InputFiled /> */}
      {/* <ServiceCard title="Test title" description="This is test" /> */}
      {/* <ServiceList services={serviceListData} /> */}
    </>
  );
}

export default App;
