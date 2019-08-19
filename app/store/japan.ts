import { JapanState, RootState, Photo } from "~/types"
import { MutationTree, ActionTree, GetterTree } from "vuex"
import firebase from '~/plugins/firebase'
import { firestoreAction, firebaseAction } from 'vuexfire'
import prefectures from '~/static/prefectures.json'

type sendGonePrefectureArgument = {
    prefectureName: string,
    goneState: boolean
}
type addPhotoArgument = {
    prefectureName: string,
    photo: Photo
}

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
    sendGonePrefecture: firebaseAction(async (context, argument: sendGonePrefectureArgument) => {
        const utility: any = await collectionUtility(context.rootGetters)
        const targetPrefecture = utility.snapShot[argument.prefectureName]
        targetPrefecture.gone = argument.goneState
        return utility.ref.update({ [argument.prefectureName]: targetPrefecture })
    }),
    addPhoto: firebaseAction(async (context, argument: addPhotoArgument) => {
        const utility: any = await collectionUtility(context.rootGetters)
        const targetPrefecture = utility.snapShot[argument.prefectureName]
        targetPrefecture.photos.push(argument.photo)
        utility.ref.update({ [argument.prefectureName]: targetPrefecture })
        context.dispatch('sendGonePrefecture', {
            prefectureName: argument.prefectureName,
            goneState: true
        })
    })
}
