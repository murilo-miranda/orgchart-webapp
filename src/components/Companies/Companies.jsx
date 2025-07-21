import { Link } from "react-router-dom";
import styles from "./Companies.module.css";
import { useQuery } from "@apollo/client";
import { GET_COMPANIES } from "../../graphql/company/queries/companies.query";

export function Companies() {
  const { loading, error, data } = useQuery(GET_COMPANIES);

  if (error) return <p>Ocorreu um erro ao carregar empresas</p>;
  if (loading) return <p>Carregando empresas...</p>;
  if (data?.companies.length === 0) {
    return <p>Não existem empresas cadastradas</p>;
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Empresas</h1>
      <ul className={styles.list}>
        {data.companies.map((company) => (
          <li key={company.id} className={styles.companyItem}>
            <Link to={`/company/${company.id}`}>{company.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
