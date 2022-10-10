import React, { useState, useEffect, useRef } from 'react'

/**
 * Input React Component
 * Examples:
   <Input disabled={false} label="Input" value={text} onChange={value => setText(value)} />
 *
 *
 */
function generateRandomLetter() {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

  let result = ''

  for (let i = 0; i < 2; i++) {
    result =
      result + characters.charAt(Math.floor(Math.random() * characters.length))
  }

  return result
}
const uuid = () => {
  const num = Math.floor(Math.random() * 1000000 + 1)

  const lettersA = generateRandomLetter()

  const lettersB = generateRandomLetter()

  return `${lettersA}${num}${lettersB}`
}

interface Iinput {
  bigClass?: string
  onChange?: Function
  HandleClick?: Function
  onBlur?: Function
  disabled?: boolean
  className?: string
  label: string
  value: string
  id: any
  name: string
  type?: string
  typeInput?: string
  maxLength?: number
  hasError?: string // ENVIAR UN TEXTO O COMPONENTE
  hasSpan?: string // ENVIAR UN TEXTO O COMPONENTE
  sufixHolder?: string
  sufixSolid?: boolean
  onLoading?: boolean
  textLoading?: boolean
  onlyLetters?: boolean
  enablePasswordIcon?: boolean
  required?: boolean
  placeholder?: string
}

const Input = ({
  bigClass = '',
  disabled = false,
  className = '',
  label = '',
  value = '',
  name = '',
  type = 'text',
  typeInput = 'text',
  id = uuid(),
  sufixSolid = false,
  sufixHolder = '',
  onLoading = false,
  textLoading = false,
  onlyLetters = false,
  enablePasswordIcon = false,
  required = false,
  placeholder = '',
  hasError = '',
  hasSpan = '',
  maxLength = 99,
  HandleClick = () => {},
  onChange = () => {},
  onBlur = () => {},
}: Iinput) => {
  const refInput = useRef(null)
  const [active, setActive] = useState('')
  const [val, setVal] = useState(value || '')
  const [toggleInput, setToggleInput] = useState(typeInput || type)

  const regexByTypeInput = {
    number: /[^0-9]/g,
    text: /[^a-zA-ZÁÉÍÓÚáéíóúñÑ ]/gi,
    decimal: /[^\d+(.\d{1,2})?]/g,
    alfa: /[^a-z0-9 -]/gi,
    // email: /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,4})+$/,
  }

  useEffect(() => {
    if (val !== value) {
      setVal(value)
    }
  }, [val, value])

  const hasPoint = (str: any) => str.includes('.')

  const limitDecimal = (number: any, decimal = 2) => {
    if (!hasPoint(number)) {
      return number
    }
    const numberAbs = number.split('.')[0]
    const numberDecimal = number.split('.')[1]
    const limit = numberDecimal.slice(0, decimal)
    return `${numberAbs}.${limit}`
  }
  const onChangeValue = (event: any) => {
    if (!disabled && onChange) {
      let text = event.target.value
      if (type == 'number') {
        text = text.replace(regexByTypeInput.number, '')
      } else if (onlyLetters) {
        text = text.replace(regexByTypeInput.text, '')
      }
      if (type === 'decimal') {
        text = limitDecimal(text)
      }
      onChange(text)
      setVal(text)
    }
  }
  const handleBlur = (event: any) => {
    if (onBlur) {
      onBlur(event.target.value)
    }
  }
  const mouseDownEvt = (event: any) => {
    if (!refInput || (refInput && refInput.current)) {
      return
    }
    setActive('')
  }

  useEffect(() => {
    document.addEventListener('mousedown', mouseDownEvt)
    return () => document.removeEventListener('mousedown', mouseDownEvt)
  }, [])

  const setDefaultPropsInput = (toggle?: any) => {
    const defaultPropsInput = { type: 'text' }
    if (typeInput === 'password') {
      defaultPropsInput.type = 'password'
    }
    if (type === 'decimal') {
      defaultPropsInput.type = 'number'
      // defaultPropsInput.step = '0.00'
      // defaultPropsInput.inputMode = 'decimal'
    }

    if (toggle) {
      if (toggleInput === 'text') {
        defaultPropsInput.type = 'password'
        setToggleInput('password')
        return defaultPropsInput
      }
      defaultPropsInput.type = 'text'
      setToggleInput('text')
    }
    return defaultPropsInput
  }
  const handlerEye = () => {
    setDefaultPropsInput('toggle')
  }
  return (
    <div className={`cuidaUi ${bigClass}`}>
      <div
        id={id}
        ref={refInput}
        className={`cuidaUi__input  ${active} ${disabled ? 'disabled' : ''}
        ${(val || '').trim().length > 0 ? 'filled' : ''}
        ${hasError ? 'has-error' : ''}
        ${hasSpan ? 'has-span' : ''}
        ${sufixSolid ? 'sufix--solid' : ''}
        ${className}`.trim()}
        onClick={() => setActive('active')}
      >
        {onLoading ? (
          <div className='rd--input-loader'>
            <div className='loadercontent loader'>
              <div className='loader-style-1' />
            </div>
            <p>{textLoading}</p>
          </div>
        ) : (
          <>
            <label>
              {label}
              {required && '*'}
            </label>
            {enablePasswordIcon && (
              <i
                className={`eye-icon  ${
                  toggleInput === 'text' ? 'icon-eye-normal' : 'icon-eye-pirata'
                }`}
                onClick={() => handlerEye()}
              />
            )}

            <input
              name={name}
              maxLength={maxLength ? maxLength : 99}
              value={val || ''}
              onChange={onChangeValue}
              onBlur={handleBlur}
              onClick={() => HandleClick}
              disabled={disabled}
              {...setDefaultPropsInput()}
              placeholder={placeholder}
              type={toggleInput}
            />

            {sufixHolder && sufixHolder.length && (
              <span className='cuidaUi__sufix'>{sufixHolder}</span>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default Input
