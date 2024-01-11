import UnexpectedValueException from '../Common/UnexpectedValueException.ts'

const pictures = [
    [
        'https://sun9-64.userapi.com/impg/C3F391KnLNuf1OB9Qpp7VYGifHQnEwWt_BbrjA/x9cragzxWQI.jpg?size=2560x1440&quality=95&sign=99eb13f7055353f18e14c1facd4cee8e&type=album',
        'https://sun9-31.userapi.com/impg/IGpfAtDQqjXnBXylVvu25iju6bnVanT4wHQeFw/8UHA5EOkxpM.jpg?size=1620x2160&quality=95&sign=8a4db59511bf9eeb3e929ddcda698117&type=album',
        'https://sun9-33.userapi.com/impg/dHHA_O1Gw-V93o-Vx_df-WT57wtPeSjSG7iXOA/5gM8TLERYyY.jpg?size=1620x2160&quality=95&sign=07da3fe4b4f25ba34f7a9889479a4017&type=album',
    ],
    [
        'https://sun9-13.userapi.com/impg/55Op_EgRM0-hkw2AOU2Wg4utBA32304WxWzJww/6XM89t1V2x0.jpg?size=2560x1706&quality=95&sign=8acb5937eb56775e10bcb0cdc6b67590&type=album',
        'https://sun9-54.userapi.com/impg/EsTkqwbH8mmQyaik6uu0rHJYPyR95rJ1F0VYHg/UUbO-jivXRo.jpg?size=2560x1706&quality=95&sign=9432a6961461dbca98be6391f4051b7f&type=album',
        'https://sun9-27.userapi.com/impg/EHD-PGnofY-BfgYx6e5m9TzzpNOUgMBwJVMdnQ/sJgrlpWJwNk.jpg?size=1439x2160&quality=95&sign=05fb1157473b650aae0a7d8b216628c6&type=album',
    ],
    [
        'https://sun9-3.userapi.com/impg/FY0FULutnoxf7ftLoSl8DaPznA11G_9MjEOBdQ/L-vh_NM_lfY.jpg?size=2560x1707&quality=96&sign=9bf015ada3b2e0c618de9637d1b0ddc4&type=album',
        'https://sun9-12.userapi.com/impg/JaM48AfHF9dkNVHpt1j5BXTLCW3I9066P4o0Cw/YqqFEPcfb1o.jpg?size=2560x1703&quality=96&sign=a64b8472757f23f9b446983994ff8af2&type=album',
        'https://sun9-64.userapi.com/impf/c853620/v853620316/10bfce/I-UAYr6QHTs.jpg?size=2560x1707&quality=96&sign=641f2cf31f592308cde99f67e384af0a&type=album',
    ],
    [
        'https://sun9-56.userapi.com/impg/kKv3hsAFXKc5UqmytNHliAst9gXMuYU0rbkDNg/CDxFfk9qpgE.jpg?size=1440x2160&quality=95&sign=5ef049d43bef29a25645476cbc7c46bb&type=album',
        'https://sun9-28.userapi.com/impg/DKFUhphwvmCCb2uMeeRULvUCiScn4MBCo9tVAg/xy-gVNBMwQY.jpg?size=2560x1707&quality=95&sign=a70b45ce78af695740588489ce13159d&type=album',
        'https://sun9-78.userapi.com/impg/OkprW8kSn5UhxzYnr7aWHgeuha_SuCEsKTIliA/xl7AdFfwfNo.jpg?size=2560x1707&quality=95&sign=72e2309568a962571d325a37f0e30bb2&type=album',
    ],
]

export default class SeasonImageService {
    private _winter = [11, 0, 1]
    private _spring = [2, 3, 4]
    private _summer = [5, 6, 7]
    private _autumn = [8, 9, 10]

    public getSeasonNumber(date: Date): number {
        const month = date.getMonth()
        if (this._winter.includes(month)) return 0
        if (this._spring.includes(month)) return 1
        if (this._summer.includes(month)) return 2
        if (this._autumn.includes(month)) return 3
        throw new UnexpectedValueException()
    }

    public getRandomPlaceholderForSeason(season: number): string {
        if (season < 0 || season >= pictures.length)
            throw new UnexpectedValueException()
        const pics = pictures[season]
        const index = Math.floor(Math.random() * pics.length)
        return pics[index]
    }

    public getRandomPlaceholderForDate(date: Date): string {
        const season = this.getSeasonNumber(date)
        return this.getRandomPlaceholderForSeason(season)
    }
}
