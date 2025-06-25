import Card from "../components/Card";
import Section from "../components/Section";

const NotFound = () => {
  return (
    <main className="bg-red-400 flex-1 flex h-full">
      <Section bgColor="bg-background">
        <div className="flex mt-16 mb-16 justify-center items-center">
          <Card className="md:max-w-[700px] max-w-[300px] items-center gap-10">
            <Card.Title size='base'>
              Pagina não encontrada!
            </Card.Title>
            <h2 className="font-bold text-primary text-9xl">404</h2>
            <p className="text-dark_gray2 text-lg">
              A página que procura ainda está em desenvolvimento!
            </p>
          </Card>
        </div>
      </Section>
    </main>
  );
}
 
export default NotFound;