import { Japan } from "~/types";

export interface RootState {
  user: any
}

export interface IndexState {
  loaded: boolean,
  user: any
}

export interface JapanState {
  japan: Japan | null
}