
import { useState } from "react";

export default function SmallApp() {
    const [checkedState, SetCheckedState] = useState();
    const [v1, setV1] = useState();
    const [v2, setV2] = useState();
    const CheckHandler = (data) => {
        SetCheckedState(data);
    };
    function submit() {
        const ans1 = checkedState === "first" ? true : false;
        const ans2 = checkedState === "second" ? true : false;
        console.log(v1, v2, ans1, ans2);
    }
    function reset() {
        console.log("click");
        SetCheckedState("");
        setV1("");
        setV2("");
    }
    function formHandler(e) {
        e.preventDefault();
    }
    return (
        <div className="App">
            Name:
            <input type="text" value={v1} onChange={(e) => setV1(e.target.value)} />
            <br /> <br />
            Last Name:
            <input type="text" value={v2} onChange={(e) => setV2(e.target.value)} />
            <form onSubmit={formHandler}>
                <input
                    type="checkbox"
                    checked={checkedState === "first"}
                    value={checkedState}
                    onClick={() => CheckHandler("first")}
                />
                <input
                    type="checkbox"
                    value={checkedState}
                    checked={checkedState === "second"}
                    onClick={() => CheckHandler("second")}
                />
                <button onClick={reset}>reset</button>
                <button style={{ backgroundColor: "palegreen" }} onClick={submit}>
                    Submit
                </button>
            </form>
        </div>
    );
}