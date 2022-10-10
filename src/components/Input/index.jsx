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
const Input = ({
  bigClass = '',
  onChange = null,
  onClick = null,
  onBlur = null,
  disabled = false,
  className = '',
  label = '',
  value = '',
  name = '',
  type = 'text',
  typeInput = 'text',
  maxLength = null,
  hasError = null, // ENVIAR UN TEXTO O COMPONENTE
  hasSpan = null, // ENVIAR UN TEXTO O COMPONENTE
  id = uuid(),
  sufixHolder = null,
  sufixSolid = false,
  onLoading = false,
  textLoading = false,
  onlyLetters = false,
  enablePasswordIcon = false,
  required = false,
  placeholder = '',
}) => {
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

  const hasPoint = (str) => str.includes('.')

  const limitDecimal = (number, decimal = 2) => {
    if (!hasPoint(number)) {
      return number
    }
    const numberAbs = number.split('.')[0]
    const numberDecimal = number.split('.')[1]
    const limit = numberDecimal.slice(0, decimal)
    return `${numberAbs}.${limit}`
  }
  const onChangeValue = (event) => {
    console.log('tipo de validacion', type)
    if (!disabled && onChange) {
      let text = event.target.value
      if (type !== 'text') {
        text = text.replace(regexByTypeInput[type], '')
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
  const handleBlur = (event) => {
    if (onBlur) {
      onBlur(event.target.value)
    }
  }
  const mouseDownEvt = (event) => {
    if (!refInput || refInput.current.contains(event.target)) {
      return
    }
    setActive('')
  }

  useEffect(() => {
    document.addEventListener('mousedown', mouseDownEvt)
    return () => document.removeEventListener('mousedown', mouseDownEvt)
  }, [])

  const setDefaultPropsInput = (toggle) => {
    const defaultPropsInput = { type: 'text' }
    if (typeInput === 'password') {
      defaultPropsInput.type = 'password'
    }
    if (type === 'decimal') {
      defaultPropsInput.type = 'number'
      defaultPropsInput.step = '0.00'
      defaultPropsInput.inputMode = 'decimal'
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
        disabled={disabled}
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
              maxLength={maxLength}
              value={val || ''}
              onChange={onChangeValue}
              onBlur={handleBlur}
              onClick={onClick}
              disabled={disabled}
              {...setDefaultPropsInput()}
              placeholder={placeholder}
              type={toggleInput}
            />

            {sufixHolder && (
              <span className='cuidaUi__sufix'>{sufixHolder}</span>
            )}
          </>
        )}
      </div>
      {hasSpan ? (
        <div className='cuidaUi__span' htmlFor={id}>
          {hasSpan}
        </div>
      ) : null}
      {hasError ? (
        <span className='cuidaUi__error' htmlFor={id}>
          {hasError}
        </span>
      ) : null}
    </div>
  )
}

export default Input
