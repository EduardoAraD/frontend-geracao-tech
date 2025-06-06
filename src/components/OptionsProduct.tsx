import type { ReactNode } from "react";
import { Fragment } from "react/jsx-runtime";

interface OptionsProductProps {
  children: ReactNode
}

const OptionsProduct = ({ children }: OptionsProductProps) => {
  return (
    <Fragment>
      {children}
    </Fragment>
  );
}

const Title = ({ title }: { title: string }) => {
  return (
    <h4 className="text-sm font-bold text-light_gray mt-5 mb-2.5">{title}</h4>
  )
}

const Sizes = ({ sizes, sizeSelected, onSize }: { sizes: string[], sizeSelected: string, onSize: (value: string) => void }) => {
  return (
    <div className="flex gap-2.5">
      {sizes.map(item => (
        <button
          onClick={() => onSize(item)}
          key={item}
          className={`h-12 w-12 flex justify-center items-center border-1 cursor-pointer duration-200 rounded-sm ${sizeSelected === item ? 'bg-primary border-primary' : 'bg-white border-light_gray2'} hover:brightness-110`}
        >
          <span className={`text-base font-bold ${sizeSelected === item ? 'text-white' : 'text-dark_gray2'}`}>
            { item }
          </span>
        </button>
      ))}
    </div>
  )
}

const Colors = ({ colors, colorSelected, onColor }: { colors: string[], colorSelected: string, onColor: (value: string) => void }) => {
  return (
    <div className="flex gap-2.5">
      {colors.map(item => (
        <button
          key={item}
          onClick={() => onColor(item)}
          className={`bg-white p-0.5 rounded-full shadow-dark_gray shadow-2xl border-2 duration-200 hover:brightness-110 ${colorSelected === item ? 'border-primary' : 'border-white'}`}
        >
          <div className="h-8 w-8 rounded-full" style={{ backgroundColor: item }} />
        </button>
      ))}
    </div>
  )
}

OptionsProduct.Title = Title;
OptionsProduct.Sizes = Sizes;
OptionsProduct.Colors = Colors;
 
export default OptionsProduct;
