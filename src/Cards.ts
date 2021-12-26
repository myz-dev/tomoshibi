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
    new Card(1, "あ", "/a_ari.webp", "微笑んでいるアリ", "あり"),
    new Card(2, "あ", "/a_ame01.webp", "美味しそうなあめ", "あめ"),
    new Card(3, "あ", "/a_ame02.webp", "雲から降っている雨", "あめ"),
    // new Card(4, "い", "/a_ari.webp", "いす", "いす"),
    // new Card(5, "い", "/a_ari.webp", "いぬ", "いぬ"),
    // new Card(6, "う", "/a_ari.webp", "うみ", "うみ"),
    // new Card(7, "う", "/a_ari.webp", "うし", "うし"),
    // new Card(8, "え", "/a_ari.webp", "えほん", "えほん"),
    // new Card(9, "お", "/a_ari.webp", "美味しそうなおむらいす", "おむらいす"),
    new Card(10, "か", "/ka_kabocha.webp", "かぼちゃ", "かぼちゃ"),
    // new Card(11, "き", "/a_ari.webp", "きりん", "きりん"),
    // new Card(12, "く", "/a_ari.webp", "くるま", "くるま"),
    // new Card(13, "け", "/a_ari.webp", "けんだま", "けんだま"),
    // new Card(14, "こ", "/a_ari.webp", "こま", "こま"),
    new Card(15, "さ", "/sa_saru.webp", "座っているサル", "さる"),
    
    new Card(20, "た", "/ta_tane.webp", "向日葵の種", "たね"),
    new Card(25, "な", "/na_nashi.webp", "なしとようなし", "なし"),
    new Card(30, "は", "/ha_hachi.webp", "仕事中のミツバチ", "はち"),

];