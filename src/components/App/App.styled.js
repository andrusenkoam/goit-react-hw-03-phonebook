import styled from 'styled-components';

export const Container = styled.div`
  width: 600px;
  margin-right: auto;
  margin-left: auto;
  padding: 40px 10px 10px 10px;
`;

export const PhonebookTitle = styled.h1`
  margin-bottom: 20px;
  text-align: center;
  font-size: 38px;
  color: rgb(5, 95, 8);
`;

export const ContactsTitle = styled.h2`
  margin-bottom: 20px;
  text-align: center;
  font-size: 32px;
  color: rgb(5, 95, 8);
`;

export const ContactsWraper = styled.div`
  display: ${function ({ children }) {
    const isContacts = children[2].props.contacts.length;

    return isContacts ? 'block' : 'none';

    // if (!isContacts) {
    //   return 'none';
    // }
  }};
`;
