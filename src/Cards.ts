export class Card {
    id: number;
    glyph: string; //Unicode ID. One glyph can have multiple cards
    src: string; //relative path
    alt: string;
    displayed_name: string;

    constructor(id: number, glyph: string, src: string, alt: string, displayed_name: string) {
        this.id = id; this.glyph = glyph; this.src = src; 
        this.alt = alt; this.displayed_name = displayed_name;
    }
}

export const Cards: Card[] = [
    new Card(10, "か", "/ka_kabocha.png", "かぼちゃ", "かぼちゃ"),
    new Card(1, "あ", "/a_ari.png", "微笑んでいるアリ", "あり"),
    new Card(2, "あ", "/a_ame01.png", "美味しそうなあめ", "あめ"),
    new Card(3, "あ", "/a_ame02.png", "雲から降っている雨", "あめ"),
    // new Card(4, "い", "/a_ari.png", "いす", "いす"),
    // new Card(5, "い", "/a_ari.png", "いぬ", "いぬ"),
    // new Card(6, "う", "/a_ari.png", "うみ", "うみ"),
    // new Card(7, "う", "/a_ari.png", "うし", "うし"),
    // new Card(8, "え", "/a_ari.png", "えほん", "えほん"),
    // new Card(9, "お", "/a_ari.png", "美味しそうなおむらいす", "おむらいす"),
    // new Card(11, "き", "/a_ari.png", "きりん", "きりん"),
    // new Card(12, "く", "/a_ari.png", "くるま", "くるま"),
    // new Card(13, "け", "/a_ari.png", "けんだま", "けんだま"),
    // new Card(14, "こ", "/a_ari.png", "こま", "こま"),
    new Card(15, "さ", "/sa_saru.png", "座っているサル", "さる"),
    new Card(20, "た", "/ta_tane.png", "向日葵の種", "たね"),
    new Card(25, "な", "/na_nashi.png", "なしとようなし", "なし"),
    new Card(30, "は", "/ha_hachi.png", "仕事中のミツバチ", "はち"),

];