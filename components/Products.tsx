import { useRef } from "react";
import { products } from "../lib/products"
import NumberInput from "./NumberInput";

interface Props {
  submitTarget: string;
  enabled: boolean;
}

export default function Products({ submitTarget, enabled }: Props) {
  const formRef = useRef<HTMLFormElement>(null);

  return (
    <form method='get' action={submitTarget} ref={formRef}>
      <div className='flex flex-col gap-16'>
        <div className="grid grid-cols-2 gap-8">
          {products.map(product => {
            return (
              <div className="rounded-md text-fuchsia-300 bg-pink-100 text-left p-8" key={product.id}>
                <h3 className="text-2xl font-bold text-black tracking-wider">{product.name}</h3>
                <p className="text-sm text-black">{product.description}</p>
                <img className="rounded-md hover:scale-75 mt-4 scale-50" src={product.image}></img>
                <p className="my-4">
                  <span className="mt-4 text-xl font-bold text-black">${product.priceUsd}</span>
                  {product.unitName && <span className="text-sm text-black"> /{product.unitName}</span>}
                </p>
                <div className="mt-1 text-black bg-black w-0" >
                  <NumberInput name={product.id} formRef={formRef} />
                </div>
              </div>
            )
          })}

        </div>

        <button
          className="items-center px-20 rounded-md py-2 max-w-fit self-center bg-gray-900 text-fuchsia-200 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={!enabled}
        >
          Checkout
        </button>
      </div>
    </form>
  )
}
