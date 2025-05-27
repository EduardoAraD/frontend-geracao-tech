import Card from "../components/Card";
import ItemOrder from "../components/ItemOrder";
import Section from "../components/Section";

const MyOrders = () => {
  return (
    <main>
      <Section bgColor="bg-background">
        <div className="mt-5 mb-10">
          <Card>
            <Card.Title>Meus Pedidos</Card.Title>
            <Card.Line />
            <ItemOrder status='cancel' />
            <Card.Line />
            <ItemOrder status='finish' />
            <Card.Line />
            <ItemOrder status='transit' />
            <Card.Line />
            <ItemOrder status='progress' />
          </Card>
        </div>        
      </Section>
    </main>
  );
}
 
export default MyOrders;