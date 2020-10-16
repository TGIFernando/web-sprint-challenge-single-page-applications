import React, {useState, useEffect} from 'react'
import styled from 'styled-components'

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
    const [formValues, setFormValues] = useState(initialFormValues)

    const change = e => {
        const {checked, name, type, value} = e.target
        const valueToUse = type === 'checkbox' ? checked : value
        setFormValues({...formValues, [name]: valueToUse})
    }

    const submit = e => {
        e.preventDefault()
    }
    console.log(formValues)
    return(
        <Mdiv> 
            <p>Build Your Pizza</p>
            <form onSubmit={submit}>
                <MLabel>
                    <p>Name</p>
                    <input type='text' value={formValues.name} onChange={change} name='name'/>
                </MLabel>


                <MLabel>
                  <p>Choice of size<br/>Required</p>
                   <Select name='size' value={formValues.size} onChange={change}>
                       <option value=''>---Select Size---</option>
                       <option value='small'>Small</option>
                       <option value='medium'>Medium</option>
                       <option value='large'>Large</option>
                   </Select> 
                </MLabel>

                <MLabel>
                    <p>Choice of sauce<br/>Required</p>
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

                <MLabel>
                    <input type='submit' value='Place Order'/>
                </MLabel>
            </form>
        </Mdiv>
    )
}