import Carrousel from "../components/Carousel";

const HomePage = () => {
  return (
    <main className="flex flex-col bg-light_gray3 flex-1">
      <Carrousel />

      <section>
        <h4>Coleções em destaque</h4>
      </section>
    </main>
  );
}
 
export default HomePage;