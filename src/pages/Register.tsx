import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import Button from "../components/Button";
import Card from "../components/Card";
import Checkbox from "../components/Checkbox";
import LabelInput from "../components/LabelInput";
import Section from "../components/Section";

import { registerUserServices } from "../services/user";
import { AppError } from "../utils/AppError";

const Register = () => {
  const navigate = useNavigate();

  const [checked, setChecked] = useState(false);
  const [firstname, setFirstname] = useState('');
  const [surname, setSurname] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmitFormData() {
    try {
      setLoading(true);
      event.preventDefault();

      const objUser = {
        firstname,
        surname,
        cpf: cpf.replace(/[^0-9]/g, ""),
        email,
        phone: phone.replace(/[^0-9]/g, ""),
        password,
        confirmPassword,
      }

      await registerUserServices(objUser);

      toast.success("Cadastrado com sucesso!", {
        autoClose: 3000,
        theme: 'colored',
      })
      setChecked(false);
      setFirstname('');
      setSurname('');
      setCpf('');
      setEmail('');
      setPhone('');
      setPassword('')
      setConfirmPassword('');

      navigate('/login');
    } catch (error) {
      const isAppError = error instanceof AppError;
      const title = isAppError ? error.message : 'Erro.'

      toast.error(title, {
        autoClose: 3000,
        theme: 'colored'
      })
    } finally {
      setLoading(false);
    }
  }

  return (
    <main>
      <Section bgColor="bg-background" className="items-center">
        <div className="flex flex-col gap-2.5 max-w-[750px]">
          <h2 className="text-[1.375rem] md:text-3xl font-bold text-dark_gray mt-5 mb-2.5 text-center md:text-start">Criar Conta</h2>
          <form action={handleSubmitFormData} className="flex flex-col gap-2.5">
            <Card>
              <Card.Title>Informações Pessoais</Card.Title>
              <Card.Line />
              <LabelInput>
                <LabelInput.Label htmlFor="firstname">Primeiro nome *</LabelInput.Label>
                <LabelInput.Input
                  id="firstname" name="firstname" placeholder="Insira seu primeiro nome" required
                  value={firstname} onChangeText={setFirstname}
                />
              </LabelInput>
              <LabelInput>
                <LabelInput.Label htmlFor="surname">Sobrenome *</LabelInput.Label>
                <LabelInput.Input
                  id="surname" name="surname" placeholder="Insira seu nome" required
                  value={surname} onChangeText={setSurname}
                />
              </LabelInput>
              <LabelInput>
                <LabelInput.Label htmlFor="cpf">CPF *</LabelInput.Label>
                <LabelInput.Input
                  id="cpf" name="cpf" placeholder="Insira seu CPF" required
                  value={cpf} onChangeText={setCpf}
                />
              </LabelInput>
              <LabelInput>
                <LabelInput.Label htmlFor="email">E-mail *</LabelInput.Label>
                <LabelInput.Input
                  id="email" name="email" type="email" placeholder="Insira seu email" required
                  value={email} onChangeText={setEmail}
                />
              </LabelInput>
              <LabelInput>
                <LabelInput.Label htmlFor="phone">Celular *</LabelInput.Label>
                <LabelInput.Input
                  id="phone" name="phone" placeholder="Insira seu celular" required
                  value={phone} onChangeText={setPhone}
                />
              </LabelInput>
              <LabelInput>
                <LabelInput.Label htmlFor="password">Senha *</LabelInput.Label>
                <LabelInput.Input
                  id="password" name="password" type="password" placeholder="Insira seu celular" required
                  value={password} onChangeText={setPassword}
                />
              </LabelInput>
              <LabelInput>
                <LabelInput.Label htmlFor="confirm_password">Confirmar Senha *</LabelInput.Label>
                <LabelInput.Input
                  id="confirm_password" name="confirm_password" type="password" placeholder="Insira seu celular" required
                  value={confirmPassword} onChangeText={setConfirmPassword}
                />
              </LabelInput>
            </Card>
            {/* <Card>
              <Card.Title>Informações de Entrega</Card.Title>
              <Card.Line />
              <LabelInput>
                <LabelInput.Label>Endereço *</LabelInput.Label>
                <LabelInput.Input placeholder="Insira seu endereço" />
              </LabelInput>
              <LabelInput>
                <LabelInput.Label>Bairro *</LabelInput.Label>
                <LabelInput.Input placeholder="Insira seu bairro" />
              </LabelInput>
              <LabelInput>
                <LabelInput.Label>Cidade *</LabelInput.Label>
                <LabelInput.Input placeholder="Insira sua cidade" />
              </LabelInput>
              <LabelInput>
                <LabelInput.Label>CEP *</LabelInput.Label>
                <LabelInput.Input placeholder="Insira seu CEP" />
              </LabelInput>
              <LabelInput>
                <LabelInput.Label>Complemento</LabelInput.Label>
                <LabelInput.Input placeholder="Insira complemento" />
              </LabelInput>
            </Card> */}
            <Checkbox
              classname="text-left items-start mt-5 mb-7.5"
              checked={checked}
              onChecked={setChecked}
              title="Quero receber por email ofertas e novidades das lojas da Digital Store. A frequência de envios pode varias de acordo com a interação do cliente."
            />
            <Button loading={loading} type="submit" className="mb-10 md:mb-20">Criar Conta</Button>
          </form>
        </div>
      </Section>
    </main>
  );
}
 
export default Register;