import { useDispatch, useSelector } from "react-redux";
import { decrement, decrementWitchChekingAction, increment } from "../../../app/Features/Counter/actions";

const Counter = () => {
  let { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(decrementWitchChekingAction(1))}>-</button>
      {``} <span>{count}</span>
      {``} <button onClick={() => dispatch(increment(1))}>+</button>
    </div>
  );
};
export default Counter;
