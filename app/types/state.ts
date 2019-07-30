import { Person } from "~/types"

export interface RootState {}

export interface IndexState {
  loaded: boolean,
  user: any,
  loggedIn: boolean
}