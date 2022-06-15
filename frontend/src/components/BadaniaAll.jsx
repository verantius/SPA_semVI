import { useState } from 'react'
import { useDispatch } from 'react-redux'
import {  BsPlus } from 'react-icons/bs'
import { dodajBadanie } from '../features/badania/badaniaSlice'

const badaniaRodzaj = [
  {
    label: " ",
    value: " ",
  },
  {
    label: "Badania Mikrobiologiczne",
    value: "one",
  },
  {
    label: "Badania Chemiczne",
    value: "two",
  },
  {
    label: "Badania Fizykochemiczne",
    value: "three",
  },
 
];
const badaniaSposob = [
  {
    label: " ",
    value: " ",
  },
  {
    label: "PN-IS0-3480284/KLD",
    value: "one",
  },
  {
    label: "PN-IS0-865293/EOM",
    value: "two",
  },
  {
    label: "PN-ISO-251195/NXC",
    value: "three",
  },
 
];
const status = [
  {
    label: "pilne",
    value: "one",
  },
  {
    label: "pilne pilne",
    value: "two",
  },
  {
    label: "pilne pilne pilne",
    value: "three",
  },
  {
    label: "pilne pilne pilne pilne",
    value: "three",
  },
 
];
function BadaniaAll() {
  const [info_badania, set_info_badania] = useState({
    produkt: '',
    firma: '',
    produkcja: '',
    info: '',
    zbadano: '',
  })
//
  const { produkt, firma, produkcja, info, zbadano } = info_badania
//
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
      firma,
      produkcja,
      info,
      zbadano,
    }
//
    dispatch(dodajBadanie(badaniaData))
    badaniaData('')
  }

  

  return (
    <section className='form'>
      <form onSubmit={onSubmit}>
        <div className='form-group'>
        <p>Produkt:</p>
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
        <p>Firma:</p>
          <input
            type='text'
            name='firma'
            id='firma'
            value={firma}
            placeholder='podaj producenta'
            onChange={onChange}
          />
        </div>

        <div className='form-group'>
        <p>Data produkcji:</p>
          <input
            type='text'
            name='produkcja'
            id='produkcja'
            value={produkcja}
            placeholder='podaj datę produkcji'
            onChange={onChange}
          />
        </div>
        

        <div className='form-group'>
        <p>Dodatkowe info:</p>
          <input
            type='text'
            name='info'
            id='info'
            value={info}
            placeholder='dodatkowe info'
            onChange={onChange}
          />
        </div>

        <div className="select-container">
        <p>Rodzaj badań:</p>
          <select>
            {badaniaRodzaj.map((option) => (
              <option value={option.value}>{option.label}</option>
              ))}
          </select>
        </div>

        <div className="select-container">
        <p>Norma:</p>
          <select>
            {badaniaSposob.map((option) => (
              <option value={option.value}>{option.label}</option>
              ))}
          </select>
        </div>

        <div className="select-container">
        <p>status:</p>
          <select>
            {status.map((option) => (
              <option value={option.value}>{option.label}</option>
              ))}
          </select>
        </div>

        <div className='form-group'>
        <p>zbadano:</p>
          <input
            type='text'
            name='zbadano'
            id='zbadano'
            value={zbadano}
            placeholder='podaj czy badanie zostalo wykonane'
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
