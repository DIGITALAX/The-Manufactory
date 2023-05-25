import { useDispatch, useSelector } from "react-redux";
import Mint from "./Mint";
import { RootState } from "@/redux/store";

const Modals = () => {
  const modal = useSelector((state: RootState) => state.app.modalReducer);
  const dispatch = useDispatch();

  return (
    <>{modal.open && <Mint message={modal.message} dispatch={dispatch} />}</>
  );
};

export default Modals;
