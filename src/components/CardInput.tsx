import InputComponent, { type InputComponentProps } from "./InputComponent";

interface CardInputProps extends InputComponentProps {
  label: string
  onClick: () => void
}

const CardInput = ({ label, onClick, id, name, ...rest}: CardInputProps) => {
  return (
    <div className="flex flex-col w-full">
      <label
        className="text-xs font-bold text-dark_gray2 mb-1"
        htmlFor={id}>
        { label }
      </label>
      <div className="md:flex md:gap-2.5">
        <InputComponent
          id={id}
          name={name}
          type="text"
          {...rest}
        />
        <button
          className="h-15 md:max-w-[110px] mt-2.5 md:mt-0 w-full rounded-lg bg-light_gray3 flex justify-center items-center duration-200 hover:brightness-102 cursor-pointer"
          onClick={onClick}
        >
          <span className="text-sm font-bold text-primary">OK</span>
        </button>
      </div>
    </div>
  );
}
 
export default CardInput;