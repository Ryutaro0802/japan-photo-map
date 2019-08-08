import { JapanState } from "~/types"
import { MutationTree, ActionTree, GetterTree } from "vuex"
import firebase from '~/plugins/firebase'

export const state = (): JapanState => ({
    japan: {
        hokkaido: {
            went: false,
            photos: []
        },
        aomori: {
            went: false,
            photos: []
        },
        iwate: {
            went: false,
            photos: []
        },
        miyagi: {
            went: false,
            photos: []
        },
        akita: {
            went: false,
            photos: []
        },
        yamagata: {
            went: false,
            photos: []
        },
        fukushima: {
            went: false,
            photos: []
        },
        ibaraki: {
            went: false,
            photos: []
        },
        tochigi: {
            went: false,
            photos: []
        },
        gunma: {
            went: false,
            photos: []
        },
        saitama: {
            went: false,
            photos: []
        },
        chiba: {
            went: false,
            photos: []
        },
        tokyo: {
            went: false,
            photos: []
        },
        kanagawa: {
            went: false,
            photos: []
        },
        niigata: {
            went: false,
            photos: []
        },
        toyama: {
            went: false,
            photos: []
        },
        ishikawa: {
            went: false,
            photos: []
        },
        fukui: {
            went: false,
            photos: []
        },
        yamanashi: {
            went: false,
            photos: []
        },
        nagano: {
            went: false,
            photos: []
        },
        gifu: {
            went: false,
            photos: []
        },
        shizuoka: {
            went: false,
            photos: []
        },
        aichi: {
            went: false,
            photos: []
        },
        mie: {
            went: false,
            photos: []
        },
        shiga: {
            went: false,
            photos: []
        },
        kyoto: {
            went: false,
            photos: []
        },
        osaka: {
            went: false,
            photos: []
        },
        hyogo: {
            went: false,
            photos: []
        },
        nara: {
            went: false,
            photos: []
        },
        wakayama: {
            went: false,
            photos: []
        },
        tottori: {
            went: false,
            photos: []
        },
        shimane: {
            went: false,
            photos: []
        },
        okayama: {
            went: false,
            photos: []
        },
        hiroshima: {
            went: false,
            photos: []
        },
        yamaguchi: {
            went: false,
            photos: []
        },
        tokushima: {
            went: false,
            photos: []
        },
        kagawa: {
            went: false,
            photos: []
        },
        ehime: {
            went: false,
            photos: []
        },
        kochi: {
            went: false,
            photos: []
        },
        fukuoka: {
            went: false,
            photos: []
        },
        saga: {
            went: false,
            photos: []
        },
        nagasaki: {
            went: false,
            photos: []
        },
        kumamoto: {
            went: false,
            photos: []
        },
        oita: {
            went: false,
            photos: []
        },
        miyazaki: {
            went: false,
            photos: []
        },
        kagoshima: {
            went: false,
            photos: []
        },
        okinawa: {
            went: false,
            photos: []
        }
    }
})

