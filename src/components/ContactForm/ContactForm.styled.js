// -------- Styles for Formik --------

import styled from 'styled-components';
import { Form, Field } from 'formik';

export const AddContactsForm = styled(Form)`
  margin-bottom: 40px;

  & button {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: auto;
    margin-left: auto;
    width: 30%;
    color: yellowGreen;
    cursor: pointer;
    transition: color 500ms ease;

    &:hover,
    &:focus {
      color: green;
    }
  }
`;

export const FormWraper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;

  & div {
    display: flex;
    flex-direction: column;
    width: 49%;
  }

  & label {
    font-size: 20px;
    color: rgb(5, 95, 8);
  }
`;

export const Input = styled(Field)`
  padding: 5px;
`;

// -------- Styles for Component --------

// import styled from 'styled-components';

// export const Form = styled.form`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   margin-bottom: 40px;

//   & label {
//     margin-right: 5px;
//     font-size: 20px;
//     color: rgb(5, 95, 8);
//   }

//   & input {
//     margin-right: 10px;
//     padding: 5px;
//   }

//   & button {
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     color: yellowGreen;
//     cursor: pointer;
//     transition: color 500ms ease;

//     &:hover,
//     &:focus {
//       color: green;
//     }
//   }
// `;
