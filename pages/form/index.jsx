import style from "../../styles/Form.module.css";
import AddUserForm from "../../components/AddUserForm";
import Layout from "../../components/Layout";

const index = () => {
  return (
    <Layout>
      <div className={style.formContainer}>
        <AddUserForm />
      </div>
    </Layout>
  );
};

export default index;
