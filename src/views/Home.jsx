import Header from '../components/Header';
import CardPizza from '../components/CardPizza';
import { pizzas } from '../data/pizzas';

const Home = () => {
  return (
    <div className="container my-4">
      <Header />
      <div className="row">
        {
          pizzas.map(pizza => <CardPizza
            key={pizza.id}
            name={pizza.name}
            price={pizza.price}
            ingredients={pizza.ingredients}
            img={pizza.img}
          />)
        }
        {/* <CardPizza
          name="Napolitana"
          price={5950}
          ingredients={["mozzarella", "tomates", "jamón", "orégano"]}
          img="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_cl.jpg?alt=media&token=6a9a33da-5c00-49d4-9080-784dcc87ec2c"
        /> */}
      </div>
    </div>
  );
};

export default Home;
