import styles from "./Employees.module.css";
import { useMutation } from '@apollo/client';
import { DELETE_EMPLOYEE } from "../../graphql/employee/mutations/deleteEmployee.query";
import { useState } from "react";

export function Employees({ employees }) {
  const [employeesList, setEmployeesList] = useState(employees);
  const [deleteCompany] = useMutation(DELETE_EMPLOYEE);

  if (employees.length === 0) {
    return <p>Não existem colaboradores cadastrados</p>;
  }

  const handleSubmit = async (e) => {
    const id = e.target.id;

    try {
      await deleteCompany({ variables: { input: { id: id } } });

      setEmployeesList(prev => prev.filter(employee => employee.id !== id));
    } catch (err) {
      alert("Falha ao excluir colaborador");
    }
  }

  return (
    <div>
      <h2 className={styles.title}>Colaboradores</h2>
      <ul className={styles.list}>
        {employeesList.map((employee) => (
          <li key={employee.id} className={styles.employeeItem}>
            <img src={employee.pictureUrl} alt={`Foto do(a) ${employee.name}`} className={styles.image} />
            <p>{employee.name}</p>
            <p>{employee.email}</p>
            <button id={employee.id} onClick={handleSubmit}>Excluir</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
