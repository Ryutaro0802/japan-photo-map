import { IndexState } from "~/types"
import { MutationTree, ActionTree, GetterTree } from "vuex"
import firebase from '~/plugins/firebase'
import { vuexfireMutations } from 'vuexfire'

// FIXME stateにObjectを代入しようとするとstrict=trueの場合エラーがでるため暫定的にfalseに設定する
export const strict = false

export const state = (): IndexState => ({
  loaded: false,
  user: null
})

export const getters: GetterTree<IndexState, IndexState> = {
  loggedIn: state => !!state.user,
  loaded: state => state.loaded,
  user: state => state.user
}

export const mutations: MutationTree<IndexState> = {
  setUser(state: IndexState, { user }): void {
    state.user = user
  },
  clearUser(state: IndexState): void {
    state.user = null
  },
  setLoaded(state: IndexState, { loaded }): void {
    state.loaded = loaded
  },
  ...vuexfireMutations
}

export const actions: ActionTree<IndexState, IndexState> = {
  async callAuth():Promise<any> {
    firebase.auth().signInWithRedirect(new firebase.auth.GoogleAuthProvider())
  },
  signOut() {
    firebase.auth().signOut()
    this.commit('clearUser')
  }
}
