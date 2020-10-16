import * as yup from 'yup'

export default yup.object().shape({
    name: yup.string().required('name is required').min(2, 'name must be at least 2 charecters'),
    size: yup.string().required().oneOf(['small', 'medium', 'large'], 'must pick a size'),
    sauce: yup.string().required().oneOf(['red', 'garlic white', 'pesto', 'bbq'], 'must pick a sauce'),
    pepperoni: yup.boolean(),
    olives: yup.boolean(),
    cheese: yup.boolean(),
    sausage: yup.boolean(),
    gf: yup.boolean(),
    instructions: yup.string(),
    amt: yup.string(),
})