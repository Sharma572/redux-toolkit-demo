import Product from "../Component/Product";

const Home = () => {
  return (
    <div>
      <h2>Welcome to My store</h2>
      <p>This is an example of redux-tool-kit</p>
      <section className="Product-wrapper">
        <Product />
      </section>
    </div>
  );
};

export default Home;
