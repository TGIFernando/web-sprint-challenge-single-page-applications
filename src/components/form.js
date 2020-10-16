import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import Schema from './Schema'
import * as yup from 'yup'
import {Link, Route} from 'react-router-dom'
import Order from './Order'
const MLabel = styled.label`
font-size:2rem;
display:flex;
padding: 2px;
align-items:center;
border:2px solid red;
justify-content: center;
flex-direction: column;
text-align: center;
`
const Select = styled.select`
height: 2rem;
border-radius: 10px;
`
const Mdiv = styled.div`
background-color: #2C7773;
`
export default function Form(){
    const initalTValue = true
    const initialFormValues = {
        name:'',
        size: '',
        sauce: '',
        pepperoni: false,
        olives: false,
        cheese: false,
        sausage: false,
        gf: false,
        instructions: '',
        amt: '',
    }
    const [errors, setErrors] = useState({
        name: "",
        size: "",
        sauce: "",
    })
    const [formValues, setFormValues] = useState(initialFormValues)
    const [disabled, setDisabled] = useState(initalTValue)

    const change = e => {
        const {checked, name, type, value} = e.target
        const valueToUse = type === 'checkbox' ? checked : value
        setFormValues({...formValues, [name]: valueToUse})
        hadleSetErrors(name, valueToUse)
    }

    const submit = e => {
        e.preventDefault()
    }

    const hadleSetErrors = (name, value) => {
        yup.reach(Schema, name).validate(value)
            .then(() => setErrors({...errors, [name]: ''}))
            .catch(err => {setErrors({...errors, [name]: err.errors[0]})})
    }

    useEffect(() => {
        Schema.isValid(formValues)
            .then(valid => {
                setDisabled(!valid)
            }).catch(err => {
                console.log(err)
            })
    }, [formValues])
    console.log(formValues)
    console.log(errors)
    return(
        <Mdiv> 
            <p>Build Your Pizza</p>
            <form onSubmit={submit}>
                <MLabel>
                    <p>Name<br/>Required</p>
                    {errors.name.length === 0 ? null : <pre>{errors.name}</pre>}
                    <input type='text' value={formValues.name} onChange={change} name='name'/>
                </MLabel>


                <MLabel>
                  <p>Choice of size<br/>Required</p>
                  {errors.size.length === 0 ? null : <pre>{errors.size}</pre>}
                   <Select name='size' value={formValues.size} onChange={change}>
                       <option value=''>---Select Size---</option>
                       <option value='small'>Small</option>
                       <option value='medium'>Medium</option>
                       <option value='large'>Large</option>
                   </Select> 
                </MLabel>

                <MLabel>
                    <p>Choice of sauce<br/>Required</p>
                    {errors.sauce.length === 0 ? null : <pre>{errors.sauce}</pre>}
                    <label htmlFor='red'>Red Sauce
                        <input type='radio' name='sauce' value='red' id='red' onChange={change}/>
                    </label>
                    <label htmlFor='garlic'>Garlic White Sauce
                        <input type='radio' name='sauce' value='garlic white' id='garlic' onChange={change}/>
                    </label>
                    <label htmlFor='pesto'>Pesto Sauce
                        <input type='radio' name='sauce' value='pesto' id='pesto' onChange={change}/>
                    </label>
                    <label htmlFor='bbq'>BBQ Sauce
                        <input type='radio' name='sauce' value='bbq' id='bbq' onChange={change}/>
                    </label>
                </MLabel>

                <MLabel>
                    <p>Add Toppings</p>
                    <label htmlFor='pepperoni'> Pepperoni
                        <input type='checkbox' name='pepperoni' value={true} id='pepperoni' onChange={change}/>
                    </label>
                    <label htmlFor='olives'> Olives
                        <input type='checkbox' name='olives' value={true} id='olives' onChange={change}/>
                    </label>
                    <label htmlFor='cheese'> Extra Cheese
                        <input type='checkbox' name='cheese' value={true} id='cheese' onChange={change}/>
                    </label>
                    <label htmlFor='sausage'> Sausage
                        <input type='checkbox' name='sausage' value={true} id='sausage' onChange={change}/>
                    </label>
                </MLabel>

                <MLabel>
                    <p>Choice of substitute</p>
                    <label htmlFor='gf'> Gluten Free Crust
                        <input type='checkbox' name='gf' value={true} id='gf' onChange={change}/>
                    </label>
                </MLabel>

                <MLabel>
                    <p>Special instructions</p>
                    <input type='text' value={formValues.instructions} onChange={change} name='instructions'/>
                </MLabel>
                <MLabel><input type='submit' disabled={disabled} value='Place Order'/></MLabel>
                <MLabel>
                    <p>ORDER: </p>
                    <h2>NAME: {formValues.name}</h2>
                    <h2>SIZE: {formValues.size}</h2>
                    <h2>INSTRUCTIONS: {formValues.instructions}</h2>
                </MLabel>
{/* 
                <div>
                    <Link to='/order'>
                        <input type='submit' disabled={disabled} value='Place Order'/>
                    </Link>

                    <Route path = '/order'>
                        <Order name = {formValues.name}/>
                    </Route>
                </div> */}
            </form>

        </Mdiv>
    )
}