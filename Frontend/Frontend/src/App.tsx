import { IncrementPage } from "./Component/incrementPage";
import Button from "./Component/Button";
import ProductList from "./Component/productList";

const products = [
  { id: 1, price: 2000 },
  { id: 2, price: 2500 },
  { id: 3, price: 3000 },
];

function App() {
  const isAboutPage = window.location.pathname.toLowerCase() === "/about";

  if (isAboutPage) {
    return (
      <>
        <h1>About Page</h1>
        <p>This is the about page.</p>
        <Button label="Go to Home Page" onClick={() => (window.location.pathname = "/")} />
      </>
    );
  }

  return (
    <>
      <IncrementPage />
      <ProductList product={products} />
      <Button label="Go to About Page" onClick={() => (window.location.pathname = "/about")} />
    </>
  );
}

export default App;
