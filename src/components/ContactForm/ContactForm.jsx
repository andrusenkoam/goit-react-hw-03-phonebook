// -------- Formik --------

import { Formik } from 'formik';
import { object, string, number } from 'yup';
import { nanoid } from 'nanoid';
import { BiSolidBookAdd } from 'react-icons/bi';
import PropTypes from 'prop-types';
import { FormError } from './FormError/FormError';
import { AddContactsForm, FormWraper, Input } from './ContactForm.styled';

const nameInputId = nanoid();
const numberInputId = nanoid();

const initialValues = {
  name: '',
  number: '',
};

const contactShema = object({
  name: string().min(2).required(),
  number: number().positive().integer().required(),
});

export const ContactForm = ({ onSubmit }) => {
  const handleSubmit = (values, { resetForm }) => {
    onSubmit(values);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={contactShema}
      onSubmit={handleSubmit}
    >
      <AddContactsForm>
        <FormWraper>
          <div role="group">
            <label htmlFor={nameInputId}>Name</label>
            <Input
              id={nameInputId}
              type="text"
              name="name"
              placeholder="Enter name"
              required
            />
            <FormError name="name" />
          </div>
          <div role="group">
            <label htmlFor={numberInputId}>Number</label>
            <Input
              id={numberInputId}
              type="tel"
              name="number"
              placeholder="Enter number"
              required
            />
            <FormError name="number" />
          </div>
        </FormWraper>
        <button type="submit">
          <BiSolidBookAdd size={20} />
        </button>
      </AddContactsForm>
    </Formik>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

// -------- Component with state --------

// import { Component } from 'react';
// import { nanoid } from 'nanoid';
// import PropTypes from 'prop-types';
// import { BiSolidBookAdd } from 'react-icons/bi';
// import { Form } from './ContactForm.styled';

// export class ContactForm extends Component {
//   static propTypes = {
//     onSubmit: PropTypes.func.isRequired,
//   };

//   state = {
//     name: '',
//     number: '',
//   };

//   nameInputId = nanoid();
//   numberInputId = nanoid();

//   handleImputChange = e => {
//     const { name, value } = e.target;

//     this.setState({ [name]: value });
//   };

//   handleFormSubmit = evt => {
//     evt.preventDefault();

//     this.props.onSubmit(this.state);
//     this.reset();
//   };

//   reset = () =>
//     this.setState({
//       name: '',
//       number: '',
//     });

//   render() {
//     const { name, number } = this.state;

//     return (
//       <Form action="submit" onSubmit={this.handleFormSubmit}>
//         <label htmlFor={this.nameInputId}>Name</label>
//         <input
//           id={this.nameInputId}
//           type="text"
//           name="name"
//           value={name}
//           required
//           onChange={this.handleImputChange}
//         />
//         <label htmlFor={this.numberInputId}>Number</label>
//         <input
//           id={this.numberInputId}
//           type="tel"
//           name="number"
//           value={number}
//           required
//           onChange={this.handleImputChange}
//         />
//         <button>
//           <BiSolidBookAdd size={20} />
//         </button>
//       </Form>
//     );
//   }
// }
