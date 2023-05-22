import { Form, Label } from "./Form.styled"
import { Formik, Field, ErrorMessage } from 'formik';
import { nanoid } from "nanoid";
import * as Yup from 'yup'

const FormSchema = Yup.object().shape({
    name: Yup.string().matches(/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/, 'Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d\'Artagnan').required('Is required'),
    number: Yup.string().matches(/^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/,'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +').required('Is required')
 });

export const Forma = ({ onAdd, contactList}) => {
    return (
    <Formik
            initialValues={{
                name: '',
                number: ''
            }}

            validationSchema={FormSchema}
        
            onSubmit={(values, actions) => {
                console.log(contactList.filter(el => el.name.toLowerCase() === values.name.toLowerCase()))
                if (contactList.find(contact => contact.name.toLowerCase() === values.name.toLowerCase())) {
                    alert(` ${values.name} is already in contacts`)
                    return
                }
                else {
                    onAdd({ ...values, id: nanoid() })
                    actions.resetForm();
                }
            }}
    >
      <Form>
        <Label> Name
            <Field name="name" title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan" required />     
            <ErrorMessage name="name"/>        
        </Label>
        <Label> Tel
            <Field name="number" title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +" required ></Field>
            <ErrorMessage name="number"/>
        </Label>
        <button type="submit" component="p">Add contact</button>
        </Form>
    </Formik>
    )
}
