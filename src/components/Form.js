import React from "react";
import styles from "./Form.module.css"
import useSelect from "../hooks/useSelect"

const Form = ({setCategory}) => {

    const OPTIONS = [
        {value: "general", label: "General"},
        {value: "business", label: "Business"},
        {value: "entertainment", label: "Entertainment"},
        {value: "health", label: "Health"},
        {value: "science", label: "Science"},
        {value: "sports", label: "Sports"},
        {value: "technology", label: "Technology"},
    ];

    // Custom hook
    const [category, SelectNews] = useSelect("", OPTIONS);

    const handleSubmit = e => {
        e.preventDefault();
        setCategory(category)
    }

    return (
        <div className={`row ${styles.searcher}`}>
            <div className="col s12 m10 offset-m1">
                <form
                    onSubmit={handleSubmit}
                >
                    <h2 className={styles.heading}>Search news by category</h2>
                    <SelectNews/>
                    <div className="input-field col s12">
                        <input
                            type="submit"
                            className={`${styles["btn-block"]} btn-large amber darken-2`}
                            value="Search"
                        />
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Form;