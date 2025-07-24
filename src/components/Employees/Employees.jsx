import styles from "./Employees.module.css";
import { useMutation } from '@apollo/client';
import { DELETE_EMPLOYEE } from "../../graphql/employee/mutations/deleteEmployee.query";
import { SET_MANAGER } from "../../graphql/employee/mutations/setManager.query";
import { useState, useEffect } from "react";

export function Employees({ employees }) {
  const [employeesList, setEmployeesList] = useState(employees);
  const [deleteCompany] = useMutation(DELETE_EMPLOYEE);
  const [setManager] = useMutation(SET_MANAGER);

  useEffect(() => {
    setEmployeesList(employees);
  }, [employees]);


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

  const handleSetManager = async (id, managerId) => {
    try {
      await setManager({ variables: { input: { id: id, managerId } } });

      setEmployeesList(prev =>
        prev.map(emp =>
          emp.id === id ? { ...emp, managerId } : emp
        )
      );
    } catch {
      alert("Falha ao definir gestor");
    }
  };


  return (
    <div>
      <h2 className={styles.title}>Colaboradores</h2>
      <ul className={styles.list}>
        {employeesList.map((employee) => (
          <li key={employee.id} className={styles.employeeItem}>
            <img src={employee.pictureUrl} alt={"foto"} className={styles.image} />
            <p>{employee.name}</p>
            <p>{employee.email}</p>

            <div className={styles.managerContainer}>
              <span className={styles.managerLabel}>Gestor:</span>
              <select
                value={employee.manager?.id || ""}
                onChange={(e) => handleSetManager(employee.id, e.target.value)}
                className={styles.select}
              >
                <option value="">Sem gestor</option>
                {employeesList
                  .filter((e) => e.id !== employee.id)
                  .map((e) => (
                    <option key={e.id} value={e.id}>
                      {e.name}
                    </option>
                  ))}
              </select>
            </div>

            <button id={employee.id} onClick={handleSubmit}>Excluir</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
