import { useState } from 'react';
import styles from './CompanyForm.module.css';
import { useMutation } from '@apollo/client';
import { CREATE_COMPANY } from '../../graphql/company/mutations/createCompany.query';

export function CompanyForm() {
  const [name, setName] = useState('');
  const [success, setSuccess] = useState(false);

  const [createCompany, { error }] = useMutation(CREATE_COMPANY, {
    onCompleted: () => {
      setSuccess(true);
      setName('');
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() === '') return;

    createCompany({ variables: { input: { name } } });
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <h2 className={styles.title}>Nova Empresa</h2>

      <div className={styles.inputContainer}>
        <label htmlFor="company-name" className={styles.label}>Nome: </label>
        <input
          type="text"
          id="company-name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={styles.input}
        />
      </div>

      <button type="submit" className={styles.button}>
        Cadastrar
      </button>

      {success && <p className={styles.success}>Empresa criada com sucesso!</p>}
      {error && <p className={styles.error}>Erro ao criar empresa.</p>}
    </form>
  );
}
