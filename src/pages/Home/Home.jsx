import style from "./Home.module.css";
import { Companies } from "../../components/Companies/Companies";
import { CompanyForm } from "../../components/CompanyForm/CompanyForm";
import { useQuery } from "@apollo/client";
import { GET_COMPANIES } from "../../graphql/company/queries/companies.query";

export default function Home() {
  const { loading, error, data } = useQuery(GET_COMPANIES);

  return (
    <div className={style.container}>
      <div>
        <Companies loading={loading} error={error} companies={data?.companies}/>
      </div>
      <div>
        <CompanyForm/>
      </div>
    </div>
  );
}
