import { Link } from "react-router-dom";
import Button from "../components/Button";
import LabelInput from "../components/LabelInput";
import Section from "../components/Section";

const Login = () => {
  return (
    <main>
      <Section bgColor="bg-[linear-gradient(180deg,_#B5B6F2_0%,_#EFEFFF_100%)]">
        <div className="h-full flex justify-center items-center py-10">
          <div className="flex flex-col bg-white p-7.5 gap-7.5 rounded-sm">
            <div className="flex flex-col items-center">
              <h2 className="font-bold text-[1.375rem] text-dark_gray">Crie sua conta</h2>
              <p className="font-normal text-dark_gray2 text-sm">
                Já possui uma conta? Entre <Link to="/cadastrar" className="underline cursor-pointer">aqui</Link>.
              </p>
            </div>
            <form action="" className="flex flex-col gap-5">
              <LabelInput>
                <LabelInput.Label>Login *</LabelInput.Label>
                <LabelInput.Input />
              </LabelInput>
              <LabelInput>
                <LabelInput.Label>Senha *</LabelInput.Label>
                <LabelInput.Input type="password" />
              </LabelInput>

              <button className="cursor-pointer hover:brightness-150 duration-100">
                <span className="text-dark_gray2 font-medium text-sm underline">Esqueci a senha</span>
              </button>
              <Button>Criar Conta</Button>
            </form>

            <div className="flex flex-col justify-center items-center gap-2.5">
              <p className="font-medium text-sm text-dark_gray2">Ou faça login com</p>
              <div className="flex gap-3.5">
                <button className="p-2.5 cursor-pointer hover:brightness-120 duration-100">
                  <img src="/icon-gmail.png" alt="gmail" />
                </button>
                <button className="p-2.5 cursor-pointer hover:brightness-120 duration-100">
                  <img src="/icon-face.png" alt="gmail" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
 
export default Login;