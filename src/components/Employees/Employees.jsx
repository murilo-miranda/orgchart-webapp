import styles from "./Employees.module.css";

export function Employees({ employees }) {
  if (employees.length === 0) {
    return <p>Não existem colaboradores cadastrados</p>;
  }

  return (
    <div>
      <h2 className={styles.title}>Colaboradores</h2>
      <ul className={styles.list}>
        {employees.map((employee) => (
          <li key={employee.id} className={styles.employeeItem}>
            <img src={employee.pictureUrl} alt={`Foto do(a) ${employee.name}`} className={styles.image} />
            <p>{employee.name}</p>
            <p>{employee.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
