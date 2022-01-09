export class Card {
	id: number;
	glyph: string; //Unicode ID. One glyph can have multiple cards
	src: string; //relative path
	alt: string;
	displayed_name: string;
	color_front_bg: string; //as style property. For example: "background-color: rgb(125 211 252);"
	color_front_text: string; //as style property. For example: color:  "color: rgb(248 113 113);"

	constructor(
		id: number,
		glyph: string,
		src: string,
		alt: string,
		displayed_name: string,
		color_front_bg: string,
		color_front_text: string
	) {
		this.id = id;
		this.glyph = glyph;
		this.src = src;
		this.alt = alt;
		this.displayed_name = displayed_name;
		this.color_front_bg = color_front_bg;
		this.color_front_text = color_front_text;
	}
}

export const Cards: Card[] = [
	new Card(
		1,
		'あ',
		'/a_ari.webp',
		'微笑んでいるアリ',
		'あり',
		'background-color: #7DD3FC',
		'color: #F87171'
	),
	new Card(
		2,
		'あ',
		'/a_ame01.webp',
		'美味しそうなあめ',
		'あめ',
		'background-color: #7DD3FC',
		'color: #F87171'
	),
	new Card(
		3,
		'あ',
		'/a_ame02.webp',
		'雲から降っている雨',
		'あめ',
		'background-color: #7DD3FC',
		'color: #F87171'
	),
	// new Card(4, "い", "/a_ari.webp", "いす", "いす"),
	// new Card(5, "い", "/a_ari.webp", "いぬ", "いぬ"),
	// new Card(6, "う", "/a_ari.webp", "うみ", "うみ"),
	// new Card(7, "う", "/a_ari.webp", "うし", "うし"),
	// new Card(8, "え", "/a_ari.webp", "えほん", "えほん"),
	// new Card(9, "お", "/a_ari.webp", "美味しそうなおむらいす, "112233". "335544"おむらいす"),
	new Card(
		10,
		'か',
		'/ka_kabocha.webp',
		'かぼちゃ',
		'かぼちゃ',
		'background-color: #7DD3FC',
		'color: #F87171'
	),
	// new Card(11, "き", "/a_ari.webp", "きりん", "きりん"),
	// new Card(12, "く", "/a_ari.webp", "くるま", "くるま"),
	// new Card(13, "け", "/a_ari.webp", "けんだま", "けんだま", "112233". "335544"
	// new Card(14, "こ", "/a_ari.webp", "こま", "こま"),
	new Card(
		15,
		'さ',
		'/sa_saru.webp',
		'座っているサル',
		'さる',
		'background-color: #7DD3FC',
		'color: #F87171'
	),

	new Card(
		20,
		'た',
		'/ta_tane.webp',
		'向日葵の種',
		'たね',
		'background-color: #7DD3FC',
		'color: #F87171'
	),
	new Card(
		25,
		'な',
		'/na_nashi.webp',
		'なしとようなし',
		'なし',
		'background-color: #7DD3FC',
		'color: #F87171'
	),
	new Card(
		30,
		'は',
		'/ha_hachi.webp',
		'仕事中のミツバチ',
		'はち',
		'background-color: #7DD3FC',
		'color: #F87171'
	)
];
