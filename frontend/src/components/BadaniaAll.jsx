import { useState } from 'react'
import { useDispatch } from 'react-redux'
import {  BsPlus } from 'react-icons/bs'
import { dodajBadanie } from '../features/badania/badaniaSlice'

function BadaniaAll() {
  const [info_badania, set_info_badania] = useState({
    produkt: '',
    zbadano: '',
    text: '',
  })

  const { produkt, zbadano, text } = info_badania

  const dispatch = useDispatch()

  const onChange = (e) => {
    set_info_badania((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }
  const onSubmit = (e) => {
    e.preventDefault()

    const badaniaData = {
      produkt,
      zbadano,
      text,
    }

    dispatch(dodajBadanie(badaniaData))
    badaniaData('')
  }

  return (
    <section className='form'>
      <form onSubmit={onSubmit}>
        <div className='form-group'>
          <input
            type='text'
            name='produkt'
            id='produkt'
            value={produkt}
            placeholder='podaj produkt'
            onChange={onChange}
          />
        </div>
        <div className='form-group'>
          <input
            type='text'
            name='zbadano'
            id='zbadano'
            value={zbadano}
            placeholder='zbadano?'
            onChange={onChange}
          />
        </div>
        <div className='form-group'>
          <input
            type='text'
            name='text'
            id='text'
            value={text}
            placeholder='text?'
            onChange={onChange}
          />
        </div>
        <div className='form-group'>
          <button className='btn btn-block' type='submit'>
          <p>Dodaj </p><BsPlus/>
          </button>
        </div>
      </form>
          <label htmlFor='text'>lista badań</label>
    </section>
  )
}

export default BadaniaAll
