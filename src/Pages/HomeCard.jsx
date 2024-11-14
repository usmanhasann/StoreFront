import image1 from "../../public/1001.png";
import image2 from "../../public/1001.png";
import image3 from "../../public/1001.png";
import image4 from "../../public/1001.png";
import image5 from "../../public/1001.png";
import image6 from "../../public/1001.png";
import CartHome from "../components/CartHome";

export const HomeCard = () => {
  const products = [
    {
      id: 1,
      name: "Sony Wh-Ch510 Bluetooth Wireless",
      price: 149,
      image: image1,
    },
    { id: 2, name: "boAt Rockerz 450", price: 49, image: image2 },
    { id: 3, name: "JBL Tune 760NC", price: 179, image: image3 },
    { id: 4, name: "Logitech H111 Wired", price: 39, image: image4 },
    {
      id: 5,
      name: "APPLE Airpods Max Bluetooth Headset",
      price: 199,
      image: image5,
    },
    { id: 6, name: "ZEBRONICS Zeb-Thunder Wired", price: 29, image: image6 },
    { id: 7, name: "Bose QuietComfort 35 II", price: 299, image: image1 },
    { id: 8, name: "Sennheiser Momentum 3", price: 349, image: image2 },
    { id: 9, name: "Beats Studio3 Wireless", price: 249, image: image3 },
    { id: 10, name: "AKG N60NC Wireless", price: 229, image: image4 },
    { id: 11, name: "Bang & Olufsen Beoplay H9", price: 499, image: image5 },
    { id: 12, name: "Plantronics BackBeat Pro 2", price: 199, image: image6 },
  ];
  return (
    <main>
      <section>
        {products.map((product) => (
          <CartHome key={product.id} product={product} />
        ))}
      </section>
    </main>
  );
};
