import styles from './EmployeeForm.module.css';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { CREATE_EMPLOYEE } from '../../graphql/employee/mutations/createEmployee.query';
import { FormField } from '../shared/FormField/FormField';
import { Button } from '../shared/Button/Button';

export function EmployeeForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [picture, setPicture] = useState(null);
  const [success, setSuccess] = useState(false);
  const companyId = useParams().id;

  const [createEmployee, { error }] = useMutation(CREATE_EMPLOYEE, {
    onCompleted: () => {
      setSuccess(true);
      setName('');
      setEmail('');
      setPicture(null);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() === '') return;
    if (email.trim() === '') return;

    createEmployee({
      variables: {
        input: { name, email, picture, companyId }
      }
    });
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <h2 className={styles.title}>Adicionar Colaborador</h2>

      <div className={styles.inputContainer}>
        <FormField
          label="Nome:"
          id="employee-name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <FormField
          label="Email:"
          id="employee-email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <FormField
          label="Foto:"
          id="employee-picture"
          type="file"
          onChange={(e) => setPicture(e.target.files[0])}
          accept="image/*"
        />

        <div>
          {picture && <p>Preview:</p>}
          {picture && <img src={URL.createObjectURL(picture)} alt="Preview" className={styles.image}/>}
        </div>
      </div>

      <Button />

      {success && <p className={styles.success}>Colaborador criado com sucesso!</p>}
      {error && <p className={styles.error}>Erro ao criar colaborador.</p>}
    </form>
  );
}
