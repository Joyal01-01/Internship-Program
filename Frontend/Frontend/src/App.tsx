import { IncrementPage } from "./Component/incrementPage";
import ProductList from "./Component/productList";

const products = [
  { id: 1, price: 2000 },
  { id: 2, price: 2500 },
  { id: 3, price: 3000 },
];

function App() {
  const isAboutPage = window.location.pathname.toLowerCase() === "/about";

  return (
    <>
      <nav className="site-nav" aria-label="Primary navigation">
        <a href="/" aria-current={!isAboutPage ? "page" : undefined}>
          Home
        </a>
        <a href="/about" aria-current={isAboutPage ? "page" : undefined}>
          About
        </a>
      </nav>
      <main>
        {isAboutPage ? (
          <>
            <h1>About Page</h1>
            <p>This is the about page.</p>
          </>
        ) : (
          <>
            <IncrementPage />
            <ProductList product={products} />
          </>
        )}
      </main>
    </>
  );
}

export default App;
