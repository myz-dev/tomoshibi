export class Card {
    id: number;
    gliph: string; //Unicode ID. One gliph can have multiple cards
    src: string; //relative path
    alt: string;
    displayed_name: string;

    constructor(id: number, gliph: string, src: string, alt: string, displayed_name: string) {
        this.id = id; this.gliph = gliph; this.src = src; 
        this.alt = alt; this.displayed_name = displayed_name;
    }
}

export const Cards: Card[] = [
    new Card(1, "あ", "./../../static/a_ari.png", "微笑んでいるアリ", "あり"),
    new Card(2, "あ", "./../../static/a_ame01.png", "美味しそうなあめ", "あめ"),
    new Card(3, "あ", "./../../static/a_ame02.png", "雲から降っている雨", "あめ"),
    new Card(3, "あ", "./../../static/a_ame02.png", "雲から降っている雨", "あめ"),
    new Card(3, "あ", "./../../static/a_ame02.png", "雲から降っている雨", "あめ"),
    new Card(3, "あ", "./../../static/a_ame02.png", "雲から降っている雨", "あめ"),
    new Card(3, "あ", "./../../static/a_ame02.png", "雲から降っている雨", "あめ"),
    new Card(3, "あ", "./../../static/a_ame02.png", "雲から降っている雨", "あめ"),
    new Card(3, "あ", "./../../static/a_ame02.png", "雲から降っている雨", "あめ"),
    new Card(3, "あ", "./../../static/a_ame02.png", "雲から降っている雨", "あめ"),
    new Card(3, "あ", "./../../static/a_ame02.png", "雲から降っている雨", "あめ"),
    new Card(3, "あ", "./../../static/a_ame02.png", "雲から降っている雨", "あめ"),
    new Card(3, "あ", "./../../static/a_ame02.png", "雲から降っている雨", "あめ"),
];