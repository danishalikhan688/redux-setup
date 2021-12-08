import React from "react";
import styles from "./Card.module.css";

const Card = (props) => {
     const {car} = props;
     console.log(car,"ssssss")
     console.log("skdjskdjskdjskdj",car.get_images[0])
    return (
        <div className={styles.card}>
            <div className={styles.card_image}>
                <img src="images/download.jpg" alt="imag" />
            </div>
            <div className={styles.card_text}>
                <span className={styles.date}>Year : {car.year}</span>
                <h2>{car.vin}</h2>
                <div className={styles.card_info}>
                    <div className={styles.info}>
                        <div className={styles.value}>Engine</div>
                        <div className={styles.type}>{car.engine}</div>
                    </div>
                    <div className={styles.info}>
                        <div className={styles.value}>Zip Code</div>
                        <div className={styles.type}>{car.zip}</div>
                    </div>
                    <div className={styles.info}>
                        <div className={styles.value}>Fuel</div>
                        <div className={styles.type}>{car.fuel_type}</div>
                    </div>
                </div>
                <hr />
                <div className={styles.card_info}>
                    <div className={styles.info}>
                        <div className={styles.value}>start</div>
                        <div className={styles.type}>{car.created_at}</div>
                    </div>
                    <div className={styles.info}>
                        <div className={styles.value}>Owner</div>
                        <div className={styles.type}>{car.owner_user}</div>
                    </div>
                    <div className={styles.info}>
                        <div className={styles.value}>end </div>
                        <div className={styles.type}>{car.expiry_at}</div>
                    </div>
                </div>
            </div>
            <div className={styles.card_stats}>
                <div className={styles.stat}>
                    <div className={styles.value}>City</div>
                    <div className={styles.type}>{car.city}</div>
                </div>
                <div className={styles.stat}>
                    <div className={styles.value}>Drivertrain</div>
                    <div className={styles.type}>{car.drivetrain}</div>
                </div>
                <div className={styles.stat}>
                    <div className={styles.value}>Color</div>
                    <div className={styles.type}>{car.color}</div>
                </div>
            </div>
        </div>
    )
}
export default Card;