import style from "./style/UserCard.module.css";

const UserCard = ({ firstname, lastname, city, description }) => {
  return (
    <div className={style.userCardContainer}>
      <div className={style.nameContainer}>
        <div>
          {firstname} {lastname}{" "}
        </div>

        <div className={style.city}>Je viens de {city}</div>
      </div>
      <div className={style.descriptionContainer}>{description}</div>
    </div>
  );
};

export default UserCard;
