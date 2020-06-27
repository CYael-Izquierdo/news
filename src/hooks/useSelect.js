import React, {useState} from "react";

const UseSelect = (initState, options) => {

    // Custom hook state
    const [state, setState] = useState(initState);

    const SelectNotice = () => (
        <select
            className="browser-default"
            value={state}
            onChange={e => setState(e.target.value)}
        >
            <option value="">Select</option>
            {
                options.map(({value, label}) => (
                    <option key={value} value={value}>{label}</option>
                ))
            }
        </select>
    );
    return [state, SelectNotice];
}

export default UseSelect;