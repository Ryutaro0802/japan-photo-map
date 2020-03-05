export const prefectureNameTranslator = (name: string): object | undefined => {
    switch (name) {
        case 'hokkaido':
            return {
                prefectureName: '北海道',
                prefectureAddUnitName: '北海道'
            }
        case 'aomori':
            return {
                prefectureName: '青森',
                prefectureAddUnitName: '青森県'
            }
        case 'iwate':
            return {
                prefectureName: '岩手',
                prefectureAddUnitName: '岩手県'
            }
        case 'miyagi':
            return {
                prefectureName: '宮城',
                prefectureAddUnitName: '宮城県'
            }
        case 'akita':
            return {
                prefectureName: '秋田',
                prefectureAddUnitName: '秋田県'
            }
        case 'yamagata':
            return {
                prefectureName: '山形',
                prefectureAddUnitName: '山形県'
            }
        case 'fukushima':
            return {
                prefectureName: '福島',
                prefectureAddUnitName: '福島県'
            }
        case 'ibaraki':
            return {
                prefectureName: '茨城',
                prefectureAddUnitName: '茨城県'
            }
        case 'tochigi':
            return {
                prefectureName: '栃木',
                prefectureAddUnitName: '栃木県'
            }
        case 'gunma':
            return {
                prefectureName: '群馬',
                prefectureAddUnitName: '群馬県'
            }
        case 'saitama':
            return {
                prefectureName: '埼玉',
                prefectureAddUnitName: '埼玉県'
            }
        case 'chiba':
            return {
                prefectureName: '千葉',
                prefectureAddUnitName: '千葉県'
            }
        case 'tokyo':
            return {
                prefectureName: '東京',
                prefectureAddUnitName: '東京県'
            }
        case 'kanagawa':
            return {
                prefectureName: '神奈川',
                prefectureAddUnitName: '神奈川県'
            }
        case 'niigata':
            return {
                prefectureName: '新潟',
                prefectureAddUnitName: '新潟県'
            }
        case 'toyama':
            return {
                prefectureName: '富山',
                prefectureAddUnitName: '富山県'
            }
        case 'ishikawa':
            return {
                prefectureName: '石川',
                prefectureAddUnitName: '石川県'
            }
        case 'fukui':
            return {
                prefectureName: '福井',
                prefectureAddUnitName: '福井県'
            }
        case 'yamanashi':
            return {
                prefectureName: '山梨',
                prefectureAddUnitName: '山梨県'
            }
        case 'nagano':
            return {
                prefectureName: '長野',
                prefectureAddUnitName: '長野県'
            }
        case 'gifu':
            return {
                prefectureName: '岐阜',
                prefectureAddUnitName: '岐阜県'
            }
        case 'shizuoka':
            return {
                prefectureName: '静岡',
                prefectureAddUnitName: '静岡県'
            }
        case 'aichi':
            return {
                prefectureName: '愛知',
                prefectureAddUnitName: '愛知県'
            }
        case 'mie':
            return {
                prefectureName: '三重',
                prefectureAddUnitName: '三重県'
            }
        case 'shiga':
            return {
                prefectureName: '滋賀',
                prefectureAddUnitName: '滋賀県'
            }
        case 'kyoto':
            return {
                prefectureName: '京都',
                prefectureAddUnitName: '京都府'
            }
        case 'osaka':
            return {
                prefectureName: '大阪',
                prefectureAddUnitName: '大阪府'
            }
        case 'hyogo':
            return {
                prefectureName: '兵庫',
                prefectureAddUnitName: '兵庫県'
            }
        case 'nara':
            return {
                prefectureName: '奈良',
                prefectureAddUnitName: '奈良県'
            }
        case 'wakayama':
            return {
                prefectureName: '和歌山',
                prefectureAddUnitName: '和歌山県'
            }
        case 'tottori':
            return {
                prefectureName: '鳥取',
                prefectureAddUnitName: '鳥取県'
            }
        case 'shimane':
            return {
                prefectureName: '島根',
                prefectureAddUnitName: '島根県'
            }
        case 'okayama':
            return {
                prefectureName: '岡山',
                prefectureAddUnitName: '岡山県'
            }
        case 'hiroshima':
            return {
                prefectureName: '広島',
                prefectureAddUnitName: '広島県'
            }
        case 'yamaguchi':
            return {
                prefectureName: '山口',
                prefectureAddUnitName: '山口県'
            }
        case 'tokushima':
            return {
                prefectureName: '徳島',
                prefectureAddUnitName: '徳島県'
            }
        case 'kagawa':
            return {
                prefectureName: '香川',
                prefectureAddUnitName: '香川県'
            }
        case 'ehime':
            return {
                prefectureName: '愛媛',
                prefectureAddUnitName: '愛媛県'
            }
        case 'kochi':
            return {
                prefectureName: '高知',
                prefectureAddUnitName: '高知県'
            }
        case 'fukuoka':
            return {
                prefectureName: '福岡',
                prefectureAddUnitName: '福岡県'
            }
        case 'saga':
            return {
                prefectureName: '佐賀',
                prefectureAddUnitName: '佐賀県'
            }
        case 'nagasaki':
            return {
                prefectureName: '長崎',
                prefectureAddUnitName: '長崎県'
            }
        case 'kumamoto':
            return {
                prefectureName: '熊本',
                prefectureAddUnitName: '熊本県'
            }
        case 'oita':
            return {
                prefectureName: '大分',
                prefectureAddUnitName: '大分県'
            }
        case 'miyazaki':
            return {
                prefectureName: '宮崎',
                prefectureAddUnitName: '宮崎県'
            }
        case 'kagoshima':
            return {
                prefectureName: '鹿児島',
                prefectureAddUnitName: '鹿児島県'
            }
        case 'okinawa':
            return {
                prefectureName: '沖縄',
                prefectureAddUnitName: '沖縄県'
            }
    }
}

export default (_: any, inject: any) => {
    inject('prefectureNameTranslator', prefectureNameTranslator)
}