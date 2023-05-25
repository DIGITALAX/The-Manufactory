import { AnyAction, Dispatch } from "redux";

export type MintProps = {
  message: string;
  dispatch: Dispatch<AnyAction>;
};
