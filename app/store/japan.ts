import { JapanState, RootState } from "~/types"
import { MutationTree, ActionTree, GetterTree } from "vuex"
import firebase from '~/plugins/firebase'
import { firestoreAction, firebaseAction } from 'vuexfire'
import prefectures from '~/static/prefectures.json'

const db = firebase.firestore()
const japanCollection = db.collection('japan')

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
        const uid = context.rootGetters.user.uid
        return context.bindFirestoreRef('japan', db.collection('japan').doc(uid))
    }),
    initializeJapan: firebaseAction(context => {
        const uid = context.rootGetters.user.uid
        japanCollection
            .doc(uid)
            .get()
            .then(querySnapShot => {
                const snapShot = Object.assign({}, querySnapShot.data())
                prefectures.forEach(prefecture => {
                    if (!snapShot[prefecture]) {
                        snapShot[prefecture] = {
                            gone: false,
                            photoPaths: []
                        }
                    }
                })
                return japanCollection.doc(uid).update(snapShot)
            })
    }),
    sendGonePrefecture: firebaseAction((context, { prefectureName }) => {
        const uid = context.rootGetters.user.uid
        return japanCollection
            .doc(uid)
            .update({ [prefectureName]: { gone: true } })
    }),
    test: firestoreAction(context => {
        const uid = context.rootGetters.user.uid
        return japanCollection
            .doc(uid)
            .set({ aa: 'aa' })
            .then(() => {
                console.log('user updated!')
            })
    })
}
