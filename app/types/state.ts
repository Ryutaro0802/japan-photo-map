import { Japan } from "~/types";

export interface RootState {
  user: any
}

export interface IndexState {
  loaded: boolean,
  user: any,
  initialized: boolean
}

export interface JapanState {
  japan: Japan | null
}