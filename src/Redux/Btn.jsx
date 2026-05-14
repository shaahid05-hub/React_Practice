import { useDispatch, useSelector } from "react-redux"
import { DEC, INC } from "./Slice"

const Btn = () => {
    let counter = useSelector(state => state.count)
    let dispatch = useDispatch()
    return (
        <>
            <center>
                <h1>count:{counter}</h1>
                <button className="btn btn-primary btn-outline-primary " onClick={() => dispatch(INC())}>INC</button>
                <button className="btn btn-danger btn-outline-danger" onClick={() => dispatch(DEC())}>DEC</button>
            </center>
        </>
    )
}

export default Btn