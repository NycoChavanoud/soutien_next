import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";
import style from "./style/AddUserForm.module.css";

const AddUserForm = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [city, setCity] = useState("");
  const [description, setDescription] = useState("");

  const router = useRouter();

  const handleCreateUser = (e) => {
    e.preventDefault();
    axios
      .post(`/api/users`, {
        firstname,
        lastname,
        city,
        description,
      })
      .then(() => router.push("/users"))
      .catch((err) => {
        console.error(err);
      });
  };
  console.log(firstname, lastname, city, description);

  return (
    <form
      className={style.formContainer}
      data-cy="formAddUsers"
      onSubmit={handleCreateUser}
    >
      <label htmlFor="firstname" className={style.labelForm}>
        firstname :{" "}
      </label>
      <input
        type="text"
        id="firstname"
        data-cy="firstname"
        className={style.inputForm}
        required
        value={firstname}
        onChange={(e) => setFirstname(e.target.value)}
        maxLength={40}
      />

      <label htmlFor="lastname" className={style.labelForm}>
        lastname :{" "}
      </label>
      <input
        type="text"
        id="lastname"
        data-cy="lastname"
        className={style.inputForm}
        required
        value={lastname}
        onChange={(e) => setLastname(e.target.value)}
        maxLength={40}
      />

      <label htmlFor="city" className={style.labelForm}>
        city :{" "}
      </label>
      <input
        type="text"
        id="city"
        data-cy="city"
        className={style.inputForm}
        required
        value={city}
        onChange={(e) => setCity(e.target.value)}
        maxLength={40}
      />

      <label htmlFor="description" className={style.labelForm}>
        Description
      </label>
      <textarea
        id="description"
        data-cy="description"
        className={style.textareaForm}
        autoComplete="off"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <button className={style.btnForm}>Valider</button>
    </form>
  );
};

export default AddUserForm;
