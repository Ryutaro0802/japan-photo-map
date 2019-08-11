import { JapanState, RootState } from "~/types"
import { MutationTree, ActionTree, GetterTree } from "vuex"
import firebase from '~/plugins/firebase'
import { firestoreAction, firebaseAction } from 'vuexfire'

const db = firebase.firestore()

export const state = (): JapanState => ({
    japan: null
})

export const getters: GetterTree<JapanState, RootState> = {
    japan: state => state.japan
}

export const mutations: MutationTree<JapanState> = {
    setTest(state: JapanState, { test }): void {
        // state.user = user
    }
}

export const actions: ActionTree<JapanState, RootState> = {
    bindJapanRef: firestoreAction(context => {
        const user = context.rootState.user
        const uid = user.uid
        return context.bindFirestoreRef('japan', db.collection('japan').doc(uid))
    }),
    sendGonePrefecture: firebaseAction((context, { prefectureName }) => {
        console.log({ prefectureName })
        const user = context.rootState.user
        const uid = user.uid
        return db
            .collection('japan')
            .doc(uid)
            .update({ [prefectureName]: { gone: true } })
    }),
    test: firestoreAction(context => {
        const user = context.rootState.user
        const uid = user.uid
        return db
            .collection('japan')
            .doc(uid)
            .set({ aa: 'aa' })
            .then(() => {
                console.log('user updated!')
            })
    })
}
