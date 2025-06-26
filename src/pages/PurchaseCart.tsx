import { useCallback, useEffect, useMemo, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import html2canvas from 'html2canvas';
import { toast } from 'react-toastify';

import { useUser } from '../hooks/useUser';

import { purchaseApiEmpty, type PurchaseApi } from '../Model/Purchase';
import Button from "../components/Button";
import Card from "../components/Card";
import ItemLinePurchase from "../components/ItemLinePurchese";
import Section from "../components/Section";

import { getPurchaseByRefServices } from '../services/purchase';
import { getFormatMoney } from '../utils/formatMoney';
import { AppError } from '../utils/AppError';

const PurchaseCart = () => {
  const { user } = useUser();
  const navigate = useNavigate();
  const { id } = useParams();

  const [purchase, setPurchase] = useState<PurchaseApi>(purchaseApiEmpty)

  const loadPurchase = useCallback(async () => {
    try {
      if(user !== null) {
        if(id === undefined) {
          navigate('/')
          return ;
        }
        const response = await getPurchaseByRefServices({ ref: id });
        if(response !== null) {
          setPurchase(response);
        }
      }
    } catch (error) {
      const isAppError = error instanceof AppError;
      const title = isAppError ? error.message : 'Erro ao buscar os dados do usuário para o formulário.'
      
      toast.error(title, {
        autoClose: 3000,
        theme: 'colored'
      })
    }
  }, [id, navigate, user])

  function screenPage() {
    const htmlDocumentIdElement = document.getElementById('#capture');
    if(htmlDocumentIdElement !== null) {
      html2canvas(htmlDocumentIdElement)
        .then(canvas => {
          const dataURL = canvas.toDataURL('image/png');

          const link = document.createElement('a');
          link.download = `recibo.png`;
          link.href = dataURL;
          link.click();
        })
    }
  }

  function handleGoHome() {
    navigate('/')
  }

  useEffect(() => {
    loadPurchase()
  }, [loadPurchase])

  const { total, installment } = useMemo(() => {
    const initialValue = 0;

    const total = purchase.products.reduce(
      (accumulator, product) => {
        const valueProduct = product.price_with_discount * product.quantity;

        return accumulator + valueProduct;
      },
      initialValue,
    );

    const installment = 10;
    const value = getFormatMoney(total);
    const valueInstallment = getFormatMoney(total / installment);

    return {
      total: value,
      installment: valueInstallment,
    }
  }, [purchase.products])

  return (
    <main>
      <Section bgColor="bg-background" className="pb-20">
        <div className="flex flex-col w-full max-w-[720px] m-auto gap-10">
          <div id="#capture" className="flex w-full">
            <Card>
              <p className="text-6xl text-center mt-2.5">🎉</p>
              <h2 className="text-2xl font-bold text-dark_gray text-center" style={{ letterSpacing: 0.75 }}>
                Compra Realizada com sucesso!
              </h2>
              <Card.Line />
              <div className="flex flex-col gap-2.5">
                <Card.Title size="base">
                  Informações Pessoais
                </Card.Title>
                <ItemLinePurchase title='Nome' value={purchase.name_completed} />
                <ItemLinePurchase title='CPF' value={purchase.cpf} />
                <ItemLinePurchase title='E-mail' value={purchase.email} />
                <ItemLinePurchase title='Celular' value={purchase.phone} />
              </div>
              <Card.Line />
              <div className="flex flex-col gap-2.5">
                <Card.Title size="base">
                  Informações de Entrega
                </Card.Title>
                <ItemLinePurchase title='Endereço' value={purchase.address} />
                <ItemLinePurchase title='Bairro' value={purchase.district} />
                <ItemLinePurchase title='Cidade' value={purchase.city} />
                <ItemLinePurchase title='CEP' value={purchase.cep} />
              </div>
              <Card.Line />
              <div className="flex flex-col gap-2.5">
                <Card.Title size="base">
                  Informações de Pagamento
                </Card.Title>
                {purchase.type_payment === 'billet' ? (
                  <ItemLinePurchase title='Pagamento' value='Boleto' />
                ) : (
                  <>
                    <ItemLinePurchase title='Titular do Cartão' value={purchase.name_card} />
                    <ItemLinePurchase title='Final' value={purchase.number_card} />
                  </>
                )}
              </div>

              <Card.Line />

              <Card.Title size="base">
                Resumo da compra
              </Card.Title>

              {purchase.products.map(product => (
                <div className="flex gap-5" key={product.id}>
                  <img
                    className="object-cover rounded-xs max-h-12 h-full"
                    width={70} src={product.images.length > 0 ? product.images[0] : '/produc-image-1.jpeg'}
                    alt={product.name}
                  />
                  <div className='flex flex-col w-full'>
                    <strong className="flex-1 text-sm pb-2.5 text-dark_gray">
                      { product.name }
                    </strong>
                    <p className='text-xs text-light_gray text-right'>x { product.quantity }</p>
                  </div>
                </div>
              ))}

              <div className="flex flex-col bg-[#F6AA1C0C] border border-[#F6AA1C26] p-5">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-bold text-dark_gray">Total</h3>
                  <span className="text-lg font-bold text-dark_gray">R$ {total}</span>
                </div>
                <span className="text-xs font-medium text-light_gray text-right">
                  ou 10x de R$ { installment } sem juros
                </span>
              </div>

              <button
                onClick={screenPage}
                className="mb-2.5 duration-200 m-auto cursor-pointer hover:brightness-110"
              >
                <span className="text-base underline text-dark_gray2 font-normal">Imprimir Recibo</span>
              </button>
            </Card>
          </div>

          <Button size="large" bgColor="warning" onClick={handleGoHome}>
            Voltar para Home
          </Button>
        </div>
      </Section>
    </main>
  );
}
 
export default PurchaseCart;