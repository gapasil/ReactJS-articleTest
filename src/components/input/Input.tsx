import React , { createRef } from 'react'
import "./input.scss"

interface InputProps {
  img?: string;
  placeholder?: string;
  onChange?: (value: string) => void;
  value?: string;
  types?: string;
  ref?: React.RefObject<HTMLInputElement>;
  maxLength?: number;
  typeStyle?: string;
  children?: React.ReactNode;
}

export const Input = ({
  img,
  placeholder,
  onChange,
  value,
  types = 'text', // Значение по умолчанию для types
  ref,
  maxLength = 10000, // Значение по умолчанию для maxLength
  typeStyle = '', // Значение по умолчанию для typeStyle
  children,
}: InputProps) => {

  const inputRef:React.RefObject<HTMLInputElement> = createRef();

  if(typeStyle == "1")
  {
    if(onChange){
      return (
        <div className={`CustomInputBlock${typeStyle}`}>
          {children}
          <input
            placeholder={placeholder}
            value={value}
            type={types}
            ref={ref?ref:inputRef}
            maxLength={maxLength?maxLength:10000}
            onChange={(e)=>onChange(e.target.value)}
          />
        </div>
      )
    } else {
      return (
        <div className={`CustomInputBlock${typeStyle}`}>
          {children}
          <input
            placeholder={placeholder}
            type={types}
            ref={ref?ref:inputRef}
            maxLength={maxLength?maxLength:10000}
          />
        </div>
      )
    }
  }
  if(!img){
    if(onChange){
      return (
        <div className={`CustomInputBlock${typeStyle}`}>
          <input
            placeholder={placeholder}
            value={value}
            type={types}
            ref={ref?ref:inputRef}
            maxLength={maxLength?maxLength:10000}
            onChange={(e)=>onChange(e.target.value)}
          />
        </div>
      )
    } else {
      return (
        <div className={`CustomInputBlock${typeStyle}`}>
          <input
            placeholder={placeholder}
            type={types}
            ref={ref?ref:inputRef}
            maxLength={maxLength?maxLength:10000}
          />
        </div>
      )
    }
  } else {
    if(onChange){
      return (
        <div className={`CustomInputBlock${typeStyle}`}>
          <img
            src={img}
          />
          <input
            placeholder={placeholder}
            value={value}
            type={types}
            ref={ref?ref:inputRef}
            maxLength={maxLength?maxLength:10000}
            onChange={(e)=>onChange(e.target.value)}
          />
        </div>
      )
    } else {
      return (
        <div className={`CustomInputBlock${typeStyle}`}>
          <img
            src={img}
          />
          <input
            placeholder={placeholder}
            type={types}
            ref={ref?ref:inputRef}
            maxLength={maxLength?maxLength:10000}
          />
        </div>
      )
    }
  }
}
