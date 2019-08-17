import { JapanState, RootState } from "~/types"
import { MutationTree, ActionTree, GetterTree } from "vuex"
import firebase from '~/plugins/firebase'
import { firestoreAction, firebaseAction } from 'vuexfire'
import prefectures from '~/static/prefectures.json'

const db = firebase.firestore()
const japanCollection = db.collection('japan')
const collectionUtility = async (rootGetters: any) => {
    const uid = rootGetters.user.uid
    const ref = japanCollection.doc(uid)
    const snapShot = await ref.get()
    return {
        snapShot: { ...snapShot.data() },
        ref
    }
}

export const state = (): JapanState => ({
    japan: null,
    initialized: false
})

export const getters: GetterTree<JapanState, RootState> = {
    japan: state => state.japan,
    initialized: state => state.initialized
}

export const mutations: MutationTree<JapanState> = {
    setInitialized(state: JapanState): void {
        state.initialized = true
    }
}

export const actions: ActionTree<JapanState, RootState> = {
    bindJapanRef: firestoreAction(context => {
        const uid = context.rootGetters.user.uid
        return context.bindFirestoreRef('japan', db.collection('japan').doc(uid))
    }),
    initializeJapan: firebaseAction(async context => {
        const utility: any = await collectionUtility(context.rootGetters)
        prefectures.forEach(prefecture => {
            if (!utility.snapShot[prefecture.name]) {
                utility.snapShot[prefecture.name] = {
                    gone: false,
                    photos: []
                }
            }
        })
        context.commit('setInitialized')
        return utility.ref.update(utility.snapShot)
    }),
    sendGonePrefecture: firebaseAction(async (context, { prefectureName }) => {
        const utility: any = await collectionUtility(context.rootGetters)
        const targetPrefecture = utility.snapShot[prefectureName]
        targetPrefecture.gone = true
        return utility.ref.update({ [prefectureName]: targetPrefecture })
    }),
    addPhoto: firebaseAction(async (context, { prefectureName, photo }) => {
        const utility: any = await collectionUtility(context.rootGetters)
        const targetPrefecture = utility.snapShot[prefectureName]
        targetPrefecture.photos.push(photo)
        return utility.ref.update({ [prefectureName]: targetPrefecture })
    })
}
