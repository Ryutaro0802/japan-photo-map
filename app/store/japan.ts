import { JapanState, RootState } from "~/types"
import { ActionTree, GetterTree } from "vuex"
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

export const actions: ActionTree<JapanState, RootState> = {
    bindJapanRef: firestoreAction(context => {
        const uid = context.rootGetters.user.uid
        return context.bindFirestoreRef('japan', db.collection('japan').doc(uid))
    }),
    initializeJapan: firebaseAction(async context => {
        const uid = context.rootGetters.user.uid
        const japanCollectionRef = japanCollection.doc(uid)
        const snapShot = await japanCollectionRef.get()
        const snapShotCopy: any = { ...snapShot.data() }
        prefectures.forEach(prefecture => {
            if (!snapShotCopy[prefecture.name]) {
                snapShotCopy[prefecture.name] = {
                    gone: false,
                    photoPaths: []
                }
            }
        })
        return japanCollectionRef.update(snapShotCopy)
    }),
    sendGonePrefecture: firebaseAction(async (context, { prefectureName }) => {
        const uid = context.rootGetters.user.uid
        const japanCollectionRef = japanCollection.doc(uid)
        const snapShot = await japanCollectionRef.get()
        const snapShotCopy: any = { ...snapShot.data() }
        const targetPrefecture = snapShotCopy[prefectureName]
        targetPrefecture.gone = true
        return japanCollectionRef.update({ [prefectureName]: targetPrefecture })
    })
}
