import style from "./Home.module.css";
import { Companies } from "../../components/Companies/Companies";
import { CompanyForm } from "../../components/CompanyForm/CompanyForm";

export default function Home() {
  return (
    <div className={style.container}>
      <div>
        <Companies/>
      </div>
      <div>
        <CompanyForm/>
      </div>
    </div>
  );
}
