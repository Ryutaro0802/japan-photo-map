import { Person } from "~/types"

export interface RootState {}

export interface IndexState {
  loaded: boolean,
  user: any,
  loggedIn: boolean
}

export interface JapanState {
  japan: any
}