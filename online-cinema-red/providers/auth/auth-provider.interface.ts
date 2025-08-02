import { User } from "@/shared/types/user.interface";
import { Dispatch, SetStateAction } from "react";

export type TypeUserState = User | null;

export interface IContext {
  user: TypeUserState;
  setUser: Dispatch<SetStateAction<TypeUserState>>;
}