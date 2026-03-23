import {FC} from "react";
import styles from "../styles/style.module.css";
import VideoProp from "../types/videoProp.ts";

const searchItem:FC<VideoProp> = (props) => {
    return (
        <div className={styles.cityElem}>
            <div>
                <h3>{props.name}</h3>
                <p>{props.id}</p>
            </div>
            <img src={props.image} alt={String(props.id)}/>
        </div>
    );
}

export default searchItem;