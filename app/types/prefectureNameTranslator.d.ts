import Vue from 'vue'

// 2. 拡張したい型が含まれるファイルを指定してください
//    Vue のコンストラクタの型は types/vue.d.ts に入っています
declare module 'vue/types/vue' {
    // 3. 拡張した Vue を定義します
    interface Vue {
        $prefectureNameTranslator: any
    }
}