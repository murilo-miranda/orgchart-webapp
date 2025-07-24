import style from './CompanyPage.module.css'
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_COMPANY } from '../../graphql/company/queries/company.query';
import { Company } from '../../components/Company/Company';
import { Employees } from '../../components/Employees/Employees';
import { EmployeeForm } from '../../components/EmployeeForm/EmployeeForm';

export default function CompanyPage() {
  const { id } = useParams();

  const { data, loading, error, refetch } = useQuery(GET_COMPANY, {
    variables: { id },
  });

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>Erro ao carregar empresa.</p>;

  return (
    <div className={style.container}>
      <div>
        <Company company={data.company} />
        <Employees employees={data.company.employees} />
      </div>
      <div>
        <EmployeeForm refetch={refetch} />
      </div>
    </div>
  )
}
