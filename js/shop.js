// Datele produselor - DOAR 2 PRODUSE PENTRU EXEMPLU
const products = [
  {
    id: 1,
    name: "Charm - Bliss",
    price: 45,
    image: "https://andz7z.github.io/assets/corelle/charm/charm-bliss/charm-bliss.jpg",
    video: "https://andz7z.github.io/assets/corelle/charm/charm-bliss/charm-bliss.mp4",
    category: "Geluri UV/Led",
    subcategory: "geluri color",
    description: "Rubber Base Hema Free LUXORISE BLISS CHARM - Pearl Prestige 15ml - este baza semitransparenta fara hema cu o formula avansata si exclusiva. BLISS CHARM are o aderenta impecabila si o vascozitate perfecta pentru orice manichiura delicata, realizata cu oja semipermanenta, gel, polygel. Colectia BLISS CHARM aduce profesionistilor nuante rafinate, pigmentate si incantatoare ce se aplica uniform indiferent de tehnica folosita. BLISS CHARM are o formula revolutionara Hema Free ce isi propune sa ofere tehnicienilor rezultate profesionale prin optimizarea eficienta a procesului de realizare a manichiurilor. Acest rubber base se distinge nu doar prin usurinta de modelare, rezistenta crescuta si aderenta, ci si prin faptul ca este solutia perfecta pentru persoanele care manifesta sensibilitate la compusii chimici din formule clasice de rubber base."
  },
  {
    id: 2,
    name: "Charm - Burbon",
    price: 45,
    image: "https://andz7z.github.io/assets/corelle/charm/charm-burbon/charm-burbon.jpg",
    video: "https://andz7z.github.io/assets/corelle/charm/charm-burbon/charm-burbon.mp4",
    category: "Geluri UV/Led",
    subcategory: "geluri color",
    description: "Rubber Base Hema Free LUXORISE BURBON CHARM - Pearl Prestige 15ml - este baza semitransparenta fara hema cu o formula avansata si exclusiva. BURBON CHARM are o aderenta impecabila si o vascozitate perfecta pentru orice manichiura delicata, realizata cu oja semipermanenta, gel, polygel. Colectia BURBON CHARM aduce profesionistilor nuante rafinate, pigmentate si incantatoare ce se aplica uniform indiferent de tehnica folosita. BURBON CHARM are o formula revolutionara Hema Free ce isi propune sa ofere tehnicienilor rezultate profesionale prin optimizarea eficienta a procesului de realizare a manichiurilor. Acest rubber base se distinge nu doar prin usurinta de modelare, rezistenta crescuta si aderenta, ci si prin faptul ca este solutia perfecta pentru persoanele care manifesta sensibilitate la compusii chimici din formule clasice de rubber base."
  },
  {
    id: 3,
    name: "Charm - Champagne",
    price: 40,
    image: "https://andz7z.github.io/assets/corelle/charm/charm-champagne/charm-champagne.jpg",
    video: "https://andz7z.github.io/assets/corelle/charm/charm-champagne/charm-champagne.mp4",
    category: "Geluri UV/Led",
    subcategory: "geluri color",
    description: "Rubber Base Hema Free LUXORISE CHAMPAGNE CHARM - Pearl Prestige 15ml - este baza semitransparenta fara hema cu o formula avansata si exclusiva. CHAMPAGNE CHARM are o aderenta impecabila si o vascozitate perfecta pentru orice manichiura delicata, realizata cu oja semipermanenta, gel, polygel. Colectia CHAMPAGNE CHARM aduce profesionistilor nuante rafinate, pigmentate si incantatoare ce se aplica uniform indiferent de tehnica folosita. CHAMPAGNE CHARM are o formula revolutionara Hema Free ce isi propune sa ofere tehnicienilor rezultate profesionale prin optimizarea eficienta a procesului de realizare a manichiurilor. Acest rubber base se distinge nu doar prin usurinta de modelare, rezistenta crescuta si aderenta, ci si prin faptul ca este solutia perfecta pentru persoanele care manifesta sensibilitate la compusii chimici din formule clasice de rubber base."
  },
  {
    id: 4,
    name: "Charm - Cherry",
    price: 42,
    image: "https://andz7z.github.io/assets/corelle/charm/charm-cherry/charm-cherry.jpg",
    video: "https://andz7z.github.io/assets/corelle/charm/charm-cherry/charm-cherry.mp4",
    category: "Geluri UV/Led",
    subcategory: "geluri color",
    description: "Rubber Base Hema Free LUXORISE CHERRY CHARM - Pearl Prestige 15ml - este baza semitransparenta fara hema cu o formula avansata si exclusiva. CHERRY CHARM are o aderenta impecabila si o vascozitate perfecta pentru orice manichiura delicata, realizata cu oja semipermanenta, gel, polygel. Colectia CHERRY CHARM aduce profesionistilor nuante rafinate, pigmentate si incantatoare ce se aplica uniform indiferent de tehnica folosita. CHERRY CHARM are o formula revolutionara Hema Free ce isi propune sa ofere tehnicienilor rezultate profesionale prin optimizarea eficienta a procesului de realizare a manichiurilor. Acest rubber base se distinge nu doar prin usurinta de modelare, rezistenta crescuta si aderenta, ci si prin faptul ca este solutia perfecta pentru persoanele care manifesta sensibilitate la compusii chimici din formule clasice de rubber base."
  },
  {
    id: 5,
    name: "Charm - Cocoa",
    price: 45,
    image: "https://andz7z.github.io/assets/corelle/charm/charm-cocoa/charm-cocoa.jpg",
    video: "https://andz7z.github.io/assets/corelle/charm/charm-cocoa/charm-cocoa.mp4",
    category: "Geluri UV/Led",
    subcategory: "geluri color",
    description: "Rubber Base Hema Free LUXORISE COCOA CHARM - Pearl Prestige 15ml - este baza semitransparenta fara hema cu o formula avansata si exclusiva. COCOA CHARM are o aderenta impecabila si o vascozitate perfecta pentru orice manichiura delicata, realizata cu oja semipermanenta, gel, polygel. Colectia COCOA CHARM aduce profesionistilor nuante rafinate, pigmentate si incantatoare ce se aplica uniform indiferent de tehnica folosita. COCOA CHARM are o formula revolutionara Hema Free ce isi propune sa ofere tehnicienilor rezultate profesionale prin optimizarea eficienta a procesului de realizare a manichiurilor. Acest rubber base se distinge nu doar prin usurinta de modelare, rezistenta crescuta si aderenta, ci si prin faptul ca este solutia perfecta pentru persoanele care manifesta sensibilitate la compusii chimici din formule clasice de rubber base."
  },
  {
    id: 6,
    name: "Charm - Cosmic",
    price: 45,
    image: "https://andz7z.github.io/assets/corelle/charm/charm-cosmic/charm-cosmic.jpg",
    video: "https://andz7z.github.io/assets/corelle/charm/charm-cosmic/charm-cosmic.mp4",
    category: "Geluri UV/Led",
    subcategory: "geluri color",
    description: "Rubber Base Hema Free LUXORISE COSMIC CHARM - Pearl Prestige 15ml - este baza semitransparenta fara hema cu o formula avansata si exclusiva. COSMIC CHARM are o aderenta impecabila si o vascozitate perfecta pentru orice manichiura delicata, realizata cu oja semipermanenta, gel, polygel. Colectia COSMIC CHARM aduce profesionistilor nuante rafinate, pigmentate si incantatoare ce se aplica uniform indiferent de tehnica folosita. COSMIC CHARM are o formula revolutionara Hema Free ce isi propune sa ofere tehnicienilor rezultate profesionale prin optimizarea eficienta a procesului de realizare a manichiurilor. Acest rubber base se distinge nu doar prin usurinta de modelare, rezistenta crescuta si aderenta, ci si prin faptul ca este solutia perfecta pentru persoanele care manifesta sensibilitate la compusii chimici din formule clasice de rubber base."
  },
  {
    id: 7,
    name: "Charm - Elite",
    price: 45,
    image: "https://andz7z.github.io/assets/corelle/charm/charm-elite/charm-elite.jpg",
    video: "https://andz7z.github.io/assets/corelle/charm/charm-elite/charm-elite.mp4",
    category: "Geluri UV/Led",
    subcategory: "geluri color",
    description: "Rubber Base Hema Free LUXORISE ELITE CHARM - Pearl Prestige 15ml - este baza semitransparenta fara hema cu o formula avansata si exclusiva. ELITE CHARM are o aderenta impecabila si o vascozitate perfecta pentru orice manichiura delicata, realizata cu oja semipermanenta, gel, polygel. Colectia ELITE CHARM aduce profesionistilor nuante rafinate, pigmentate si incantatoare ce se aplica uniform indiferent de tehnica folosita. ELITE CHARM are o formula revolutionara Hema Free ce isi propune sa ofere tehnicienilor rezultate profesionale prin optimizarea eficienta a procesului de realizare a manichiurilor. Acest rubber base se distinge nu doar prin usurinta de modelare, rezistenta crescuta si aderenta, ci si prin faptul ca este solutia perfecta pentru persoanele care manifesta sensibilitate la compusii chimici din formule clasice de rubber base."
  },
  {
    id: 8,
    name: "Charm - Energy",
    price: 40,
    image: "https://andz7z.github.io/assets/corelle/charm/charm-energy/charm-energy.jpg",
    video: "https://andz7z.github.io/assets/corelle/charm/charm-energy/charm-energy.mp4",
    category: "Geluri UV/Led",
    subcategory: "geluri color",
    description: "Rubber Base Hema Free LUXORISE ENERGY CHARM - Pearl Prestige 15ml - este baza semitransparenta fara hema cu o formula avansata si exclusiva. ENERGY CHARM are o aderenta impecabila si o vascozitate perfecta pentru orice manichiura delicata, realizata cu oja semipermanenta, gel, polygel. Colectia ENERGY CHARM aduce profesionistilor nuante rafinate, pigmentate si incantatoare ce se aplica uniform indiferent de tehnica folosita. ENERGY CHARM are o formula revolutionara Hema Free ce isi propune sa ofere tehnicienilor rezultate profesionale prin optimizarea eficienta a procesului de realizare a manichiurilor. Acest rubber base se distinge nu doar prin usurinta de modelare, rezistenta crescuta si aderenta, ci si prin faptul ca este solutia perfecta pentru persoanele care manifesta sensibilitate la compusii chimici din formule clasice de rubber base."
  },
  {
    id: 9,
    name: "Charm - Gold",
    price: 45,
    image: "https://andz7z.github.io/assets/corelle/charm/charm-gold/charm-gold.jpg",
    video: "https://andz7z.github.io/assets/corelle/charm/charm-gold/charm-gold.mp4",
    category: "Geluri UV/Led",
    subcategory: "geluri color",
    description: "Rubber Base Hema Free LUXORISE GOLD CHARM - Pearl Prestige 15ml - este baza semitransparenta fara hema cu o formula avansata si exclusiva. GOLD CHARM are o aderenta impecabila si o vascozitate perfecta pentru orice manichiura delicata, realizata cu oja semipermanenta, gel, polygel. Colectia GOLD CHARM aduce profesionistilor nuante rafinate, pigmentate si incantatoare ce se aplica uniform indiferent de tehnica folosita. GOLD CHARM are o formula revolutionara Hema Free ce isi propune sa ofere tehnicienilor rezultate profesionale prin optimizarea eficienta a procesului de realizare a manichiurilor. Acest rubber base se distinge nu doar prin usurinta de modelare, rezistenta crescuta si aderenta, ci si prin faptul ca este solutia perfecta pentru persoanele care manifesta sensibilitate la compusii chimici din formule clasice de rubber base."
  },
  {
    id: 10,
    name: "Charm - Golden-Peach",
    price: 45,
    image: "https://andz7z.github.io/assets/corelle/charm/charm-golden-peach/charm-golden-peach.jpg",
    video: "https://andz7z.github.io/assets/corelle/charm/charm-golden-peach/charm-golden-peach.mp4",
    category: "Geluri UV/Led",
    subcategory: "geluri color",
    description: "Rubber Base Hema Free LUXORISE GOLDEN-PEACH CHARM - Pearl Prestige 15ml - este baza semitransparenta fara hema cu o formula avansata si exclusiva. GOLDEN-PEACH CHARM are o aderenta impecabila si o vascozitate perfecta pentru orice manichiura delicata, realizata cu oja semipermanenta, gel, polygel. Colectia GOLDEN-PEACH CHARM aduce profesionistilor nuante rafinate, pigmentate si incantatoare ce se aplica uniform indiferent de tehnica folosita. GOLDEN-PEACH CHARM are o formula revolutionara Hema Free ce isi propune sa ofere tehnicienilor rezultate profesionale prin optimizarea eficienta a procesului de realizare a manichiurilor. Acest rubber base se distinge nu doar prin usurinta de modelare, rezistenta crescuta si aderenta, ci si prin faptul ca este solutia perfecta pentru persoanele care manifesta sensibilitate la compusii chimici din formule clasice de rubber base."
  },
  // Continuă cu restul produselor până la 26...
  {
    id: 11,
    name: "Charm - Grace",
    price: 50,
    image: "https://andz7z.github.io/assets/corelle/charm/charm-grace/charm-grace.jpg",
    video: "https://andz7z.github.io/assets/corelle/charm/charm-grace/charm-grace.mp4",
    category: "Geluri UV/Led",
    subcategory: "geluri color",
    description: "Rubber Base Hema Free LUXORISE GRACE CHARM - Pearl Prestige 15ml - este baza semitransparenta fara hema cu o formula avansata si exclusiva. GRACE CHARM are o aderenta impecabila si o vascozitate perfecta pentru orice manichiura delicata, realizata cu oja semipermanenta, gel, polygel. Colectia GRACE CHARM aduce profesionistilor nuante rafinate, pigmentate si incantatoare ce se aplica uniform indiferent de tehnica folosita. GRACE CHARM are o formula revolutionara Hema Free ce isi propune sa ofere tehnicienilor rezultate profesionale prin optimizarea eficienta a procesului de realizare a manichiurilor. Acest rubber base se distinge nu doar prin usurinta de modelare, rezistenta crescuta si aderenta, ci si prin faptul ca este solutia perfecta pentru persoanele care manifesta sensibilitate la compusii chimici din formule clasice de rubber base."
  },
  {
    id: 12,
    name: "Charm - Luxury",
    price: 45,
    image: "https://andz7z.github.io/assets/corelle/charm/charm-luxury/charm-luxury.jpg",
    video: "https://andz7z.github.io/assets/corelle/charm/charm-luxury/charm-luxury.mp4",
    category: "Geluri UV/Led",
    subcategory: "geluri color",
    description: "Rubber Base Hema Free LUXORISE LUXURY CHARM - Pearl Prestige 15ml - este baza semitransparenta fara hema cu o formula avansata si exclusiva. LUXURY CHARM are o aderenta impecabila si o vascozitate perfecta pentru orice manichiura delicata, realizata cu oja semipermanenta, gel, polygel. Colectia LUXURY CHARM aduce profesionistilor nuante rafinate, pigmentate si incantatoare ce se aplica uniform indiferent de tehnica folosita. LUXURY CHARM are o formula revolutionara Hema Free ce isi propune sa ofere tehnicienilor rezultate profesionale prin optimizarea eficienta a procesului de realizare a manichiurilor. Acest rubber base se distinge nu doar prin usurinta de modelare, rezistenta crescuta si aderenta, ci si prin faptul ca este solutia perfecta pentru persoanele care manifesta sensibilitate la compusii chimici din formule clasice de rubber base."
  },
  {
    id: 13,
    name: "Charm - Mauve",
    price: 45,
    image: "https://andz7z.github.io/assets/corelle/charm/charm-mauve/charm-mauve.jpg",
    video: "https://andz7z.github.io/assets/corelle/charm/charm-mauve/charm-mauve.mp4",
    category: "Geluri UV/Led",
    subcategory: "geluri color",
    description: "Rubber Base Hema Free LUXORISE MAUVE CHARM - Pearl Prestige 15ml - este baza semitransparenta fara hema cu o formula avansata si exclusiva. MAUVE CHARM are o aderenta impecabila si o vascozitate perfecta pentru orice manichiura delicata, realizata cu oja semipermanenta, gel, polygel. Colectia MAUVE CHARM aduce profesionistilor nuante rafinate, pigmentate si incantatoare ce se aplica uniform indiferent de tehnica folosita. MAUVE CHARM are o formula revolutionara Hema Free ce isi propune sa ofere tehnicienilor rezultate profesionale prin optimizarea eficienta a procesului de realizare a manichiurilor. Acest rubber base se distinge nu doar prin usurinta de modelare, rezistenta crescuta si aderenta, ci si prin faptul ca este solutia perfecta pentru persoanele care manifesta sensibilitate la compusii chimici din formule clasice de rubber base."
  },
  {
    id: 14,
    name: "Charm - Mint",
    price: 40,
    image: "https://andz7z.github.io/assets/corelle/charm/charm-mint/charm-mint.jpg",
    video: "https://andz7z.github.io/assets/corelle/charm/charm-mint/charm-mint.mp4",
    category: "Geluri UV/Led",
    subcategory: "geluri color",
    description: "Rubber Base Hema Free LUXORISE MINT CHARM - Pearl Prestige 15ml - este baza semitransparenta fara hema cu o formula avansata si exclusiva. MINT CHARM are o aderenta impecabila si o vascozitate perfecta pentru orice manichiura delicata, realizata cu oja semipermanenta, gel, polygel. Colectia MINT CHARM aduce profesionistilor nuante rafinate, pigmentate si incantatoare ce se aplica uniform indiferent de tehnica folosita. MINT CHARM are o formula revolutionara Hema Free ce isi propune sa ofere tehnicienilor rezultate profesionale prin optimizarea eficienta a procesului de realizare a manichiurilor. Acest rubber base se distinge nu doar prin usurinta de modelare, rezistenta crescuta si aderenta, ci si prin faptul ca este solutia perfecta pentru persoanele care manifesta sensibilitate la compusii chimici din formule clasice de rubber base."
  },
  {
    id: 15,
    name: "Charm - Mocha",
    price: 45,
    image: "https://andz7z.github.io/assets/corelle/charm/charm-mocha/charm-mocha.jpg",
    video: "https://andz7z.github.io/assets/corelle/charm/charm-mocha/charm-mocha.mp4",
    category: "Geluri UV/Led",
    subcategory: "geluri color",
    description: "Rubber Base Hema Free LUXORISE MOCHA CHARM - Pearl Prestige 15ml - este baza semitransparenta fara hema cu o formula avansata si exclusiva. MOCHA CHARM are o aderenta impecabila si o vascozitate perfecta pentru orice manichiura delicata, realizata cu oja semipermanenta, gel, polygel. Colectia MOCHA CHARM aduce profesionistilor nuante rafinate, pigmentate si incantatoare ce se aplica uniform indiferent de tehnica folosita. MOCHA CHARM are o formula revolutionara Hema Free ce isi propune sa ofere tehnicienilor rezultate profesionale prin optimizarea eficienta a procesului de realizare a manichiurilor. Acest rubber base se distinge nu doar prin usurinta de modelare, rezistenta crescuta si aderenta, ci si prin faptul ca este solutia perfecta pentru persoanele care manifesta sensibilitate la compusii chimici din formule clasice de rubber base."
  },
  {
    id: 16,
    name: "Charm - Ocean",
    price: 45,
    image: "https://andz7z.github.io/assets/corelle/charm/charm-ocean/charm-ocean.jpg",
    video: "https://andz7z.github.io/assets/corelle/charm/charm-ocean/charm-ocean.mp4",
    category: "Geluri UV/Led",
    subcategory: "geluri color",
    description: "Rubber Base Hema Free LUXORISE OCEAN CHARM - Pearl Prestige 15ml - este baza semitransparenta fara hema cu o formula avansata si exclusiva. OCEAN CHARM are o aderenta impecabila si o vascozitate perfecta pentru orice manichiura delicata, realizata cu oja semipermanenta, gel, polygel. Colectia OCEAN CHARM aduce profesionistilor nuante rafinate, pigmentate si incantatoare ce se aplica uniform indiferent de tehnica folosita. OCEAN CHARM are o formula revolutionara Hema Free ce isi propune sa ofere tehnicienilor rezultate profesionale prin optimizarea eficienta a procesului de realizare a manichiurilor. Acest rubber base se distinge nu doar prin usurinta de modelare, rezistenta crescuta si aderenta, ci si prin faptul ca este solutia perfecta pentru persoanele care manifesta sensibilitate la compusii chimici din formule clasice de rubber base."
  },
  {
    id: 17,
    name: "Charm - Peach",
    price: 45,
    image: "https://andz7z.github.io/assets/corelle/charm/charm-peach/charm-peach.jpg",
    video: "https://andz7z.github.io/assets/corelle/charm/charm-peach/charm-peach.mp4",
    category: "Geluri UV/Led",
    subcategory: "geluri color",
    description: "Rubber Base Hema Free LUXORISE PEACH CHARM - Pearl Prestige 15ml - este baza semitransparenta fara hema cu o formula avansata si exclusiva. PEACH CHARM are o aderenta impecabila si o vascozitate perfecta pentru orice manichiura delicata, realizata cu oja semipermanenta, gel, polygel. Colectia PEACH CHARM aduce profesionistilor nuante rafinate, pigmentate si incantatoare ce se aplica uniform indiferent de tehnica folosita. PEACH CHARM are o formula revolutionara Hema Free ce isi propune sa ofere tehnicienilor rezultate profesionale prin optimizarea eficienta a procesului de realizare a manichiurilor. Acest rubber base se distinge nu doar prin usurinta de modelare, rezistenta crescuta si aderenta, ci si prin faptul ca este solutia perfecta pentru persoanele care manifesta sensibilitate la compusii chimici din formule clasice de rubber base."
  },
  {
    id: 18,
    name: "Charm - Pink",
    price: 45,
    image: "https://andz7z.github.io/assets/corelle/charm/charm-pink/charm-pink.jpg",
    video: "https://andz7z.github.io/assets/corelle/charm/charm-pink/charm-pink.mp4",
    category: "Geluri UV/Led",
    subcategory: "geluri color",
    description: "Rubber Base Hema Free LUXORISE PINK CHARM - Pearl Prestige 15ml - este baza semitransparenta fara hema cu o formula avansata si exclusiva. PINK CHARM are o aderenta impecabila si o vascozitate perfecta pentru orice manichiura delicata, realizata cu oja semipermanenta, gel, polygel. Colectia PINK CHARM aduce profesionistilor nuante rafinate, pigmentate si incantatoare ce se aplica uniform indiferent de tehnica folosita. PINK CHARM are o formula revolutionara Hema Free ce isi propune sa ofere tehnicienilor rezultate profesionale prin optimizarea eficienta a procesului de realizare a manichiurilor. Acest rubber base se distinge nu doar prin usurinta de modelare, rezistenta crescuta si aderenta, ci si prin faptul ca este solutia perfecta pentru persoanele care manifesta sensibilitate la compusii chimici din formule clasice de rubber base."
  },
  {
    id: 19,
    name: "Charm - Radiance",
    price: 30,
    image: "https://andz7z.github.io/assets/corelle/charm/charm-radiance/charm-radiance.jpg",
    video: "https://andz7z.github.io/assets/corelle/charm/charm-radiance/charm-radiance.mp4",
    category: "Geluri UV/Led",
    subcategory: "geluri color",
    description: "Rubber Base Hema Free LUXORISE RADIANCE CHARM - Pearl Prestige 15ml - este baza semitransparenta fara hema cu o formula avansata si exclusiva. RADIANCE CHARM are o aderenta impecabila si o vascozitate perfecta pentru orice manichiura delicata, realizata cu oja semipermanenta, gel, polygel. Colectia RADIANCE CHARM aduce profesionistilor nuante rafinate, pigmentate si incantatoare ce se aplica uniform indiferent de tehnica folosita. RADIANCE CHARM are o formula revolutionara Hema Free ce isi propune sa ofere tehnicienilor rezultate profesionale prin optimizarea eficienta a procesului de realizare a manichiurilor. Acest rubber base se distinge nu doar prin usurinta de modelare, rezistenta crescuta si aderenta, ci si prin faptul ca este solutia perfecta pentru persoanele care manifesta sensibilitate la compusii chimici din formule clasice de rubber base."
  },
  {
    id: 20,
    name: "Charm - Reef",
    price: 45,
    image: "https://andz7z.github.io/assets/corelle/charm/charm-reef/charm-reef.jpg",
    video: "https://andz7z.github.io/assets/corelle/charm/charm-reef/charm-reef.mp4",
    category: "Geluri UV/Led",
    subcategory: "geluri color",
    description: "Rubber Base Hema Free LUXORISE REEF CHARM - Pearl Prestige 15ml - este baza semitransparenta fara hema cu o formula avansata si exclusiva. REEF CHARM are o aderenta impecabila si o vascozitate perfecta pentru orice manichiura delicata, realizata cu oja semipermanenta, gel, polygel. Colectia REEF CHARM aduce profesionistilor nuante rafinate, pigmentate si incantatoare ce se aplica uniform indiferent de tehnica folosita. REEF CHARM are o formula revolutionara Hema Free ce isi propune sa ofere tehnicienilor rezultate profesionale prin optimizarea eficienta a procesului de realizare a manichiurilor. Acest rubber base se distinge nu doar prin usurinta de modelare, rezistenta crescuta si aderenta, ci si prin faptul ca este solutia perfecta pentru persoanele care manifesta sensibilitate la compusii chimici din formule clasice de rubber base."
  },
  {
    id: 21,
    name: "Charm - Retro",
    price: 45,
    image: "https://andz7z.github.io/assets/corelle/charm/charm-retro/charm-retro.jpg",
    video: "https://andz7z.github.io/assets/corelle/charm/charm-retro/charm-retro.mp4",
    category: "Geluri UV/Led",
    subcategory: "geluri color",
    description: "Rubber Base Hema Free LUXORISE RETRO CHARM - Pearl Prestige 15ml - este baza semitransparenta fara hema cu o formula avansata si exclusiva. RETRO CHARM are o aderenta impecabila si o vascozitate perfecta pentru orice manichiura delicata, realizata cu oja semipermanenta, gel, polygel. Colectia RETRO CHARM aduce profesionistilor nuante rafinate, pigmentate si incantatoare ce se aplica uniform indiferent de tehnica folosita. RETRO CHARM are o formula revolutionara Hema Free ce isi propune sa ofere tehnicienilor rezultate profesionale prin optimizarea eficienta a procesului de realizare a manichiurilor. Acest rubber base se distinge nu doar prin usurinta de modelare, rezistenta crescuta si aderenta, ci si prin faptul ca este solutia perfecta pentru persoanele care manifesta sensibilitate la compusii chimici din formule clasice de rubber base."
  },
  {
    id: 22,
    name: "Charm - Ruby",
    price: 45,
    image: "https://andz7z.github.io/assets/corelle/charm/charm-ruby/charm-ruby.jpg",
    video: "https://andz7z.github.io/assets/corelle/charm/charm-ruby/charm-ruby.mp4",
    category: "Geluri UV/Led",
    subcategory: "geluri color",
    description: "Rubber Base Hema Free LUXORISE RUBY CHARM - Pearl Prestige 15ml - este baza semitransparenta fara hema cu o formula avansata si exclusiva. RUBY CHARM are o aderenta impecabila si o vascozitate perfecta pentru orice manichiura delicata, realizata cu oja semipermanenta, gel, polygel. Colectia RUBY CHARM aduce profesionistilor nuante rafinate, pigmentate si incantatoare ce se aplica uniform indiferent de tehnica folosita. RUBY CHARM are o formula revolutionara Hema Free ce isi propune sa ofere tehnicienilor rezultate profesionale prin optimizarea eficienta a procesului de realizare a manichiurilor. Acest rubber base se distinge nu doar prin usurinta de modelare, rezistenta crescuta si aderenta, ci si prin faptul ca este solutia perfecta pentru persoanele care manifesta sensibilitate la compusii chimici din formule clasice de rubber base."
  },
  {
    id: 23,
    name: "Charm - Sheen",
    price: 50,
    image: "https://andz7z.github.io/assets/corelle/charm/charm-sheen/charm-sheen.jpg",
    video: "https://andz7z.github.io/assets/corelle/charm/charm-sheen/charm-sheen.mp4",
    category: "Geluri UV/Led",
    subcategory: "geluri color",
    description: "Rubber Base Hema Free LUXORISE SHEEN CHARM - Pearl Prestige 15ml - este baza semitransparenta fara hema cu o formula avansata si exclusiva. SHEEN CHARM are o aderenta impecabila si o vascozitate perfecta pentru orice manichiura delicata, realizata cu oja semipermanenta, gel, polygel. Colectia SHEEN CHARM aduce profesionistilor nuante rafinate, pigmentate si incantatoare ce se aplica uniform indiferent de tehnica folosita. SHEEN CHARM are o formula revolutionara Hema Free ce isi propune sa ofere tehnicienilor rezultate profesionale prin optimizarea eficienta a procesului de realizare a manichiurilor. Acest rubber base se distinge nu doar prin usurinta de modelare, rezistenta crescuta si aderenta, ci si prin faptul ca este solutia perfecta pentru persoanele care manifesta sensibilitate la compusii chimici din formule clasice de rubber base."
  },
  {
    id: 24,
    name: "Charm - Silver",
    price: 45,
    image: "https://andz7z.github.io/assets/corelle/charm/charm-silver/charm-silver.jpg",
    video: "https://andz7z.github.io/assets/corelle/charm/charm-silver/charm-silver.mp4",
    category: "Geluri UV/Led",
    subcategory: "geluri color",
    description: "Rubber Base Hema Free LUXORISE SILVER CHARM - Pearl Prestige 15ml - este baza semitransparenta fara hema cu o formula avansata si exclusiva. SILVER CHARM are o aderenta impecabila si o vascozitate perfecta pentru orice manichiura delicata, realizata cu oja semipermanenta, gel, polygel. Colectia SILVER CHARM aduce profesionistilor nuante rafinate, pigmentate si incantatoare ce se aplica uniform indiferent de tehnica folosita. SILVER CHARM are o formula revolutionara Hema Free ce isi propune sa ofere tehnicienilor rezultate profesionale prin optimizarea eficienta a procesului de realizare a manichiurilor. Acest rubber base se distinge nu doar prin usurinta de modelare, rezistenta crescuta si aderenta, ci si prin faptul ca este solutia perfecta pentru persoanele care manifesta sensibilitate la compusii chimici din formule clasice de rubber base."
  },
  {
    id: 25,
    name: "Charm - Timeless",
    price: 45,
    image: "https://andz7z.github.io/assets/corelle/charm/charm-timeless/charm-timeless.jpg",
    video: "https://andz7z.github.io/assets/corelle/charm/charm-timeless/charm-timeless.mp4",
    category: "Geluri UV/Led",
    subcategory: "geluri color",
    description: "Rubber Base Hema Free LUXORISE TIMELESS CHARM - Pearl Prestige 15ml - este baza semitransparenta fara hema cu o formula avansata si exclusiva. TIMELESS CHARM are o aderenta impecabila si o vascozitate perfecta pentru orice manichiura delicata, realizata cu oja semipermanenta, gel, polygel. Colectia TIMELESS CHARM aduce profesionistilor nuante rafinate, pigmentate si incantatoare ce se aplica uniform indiferent de tehnica folosita. TIMELESS CHARM are o formula revolutionara Hema Free ce isi propune sa ofere tehnicienilor rezultate profesionale prin optimizarea eficienta a procesului de realizare a manichiurilor. Acest rubber base se distinge nu doar prin usurinta de modelare, rezistenta crescuta si aderenta, ci si prin faptul ca este solutia perfecta pentru persoanele care manifesta sensibilitate la compusii chimici din formule clasice de rubber base."
  },
  {
    id: 26,
    name: "Charm - Wine",
    price: 45,
    image: "https://andz7z.github.io/assets/corelle/charm/charm-wine/charm-wine.jpg",
    video: "https://andz7z.github.io/assets/corelle/charm/charm-wine/charm-wine.mp4",
    category: "Geluri UV/Led",
    subcategory: "geluri color",
    description: "Rubber Base Hema Free LUXORISE WINE CHARM - Pearl Prestige 15ml - este baza semitransparenta fara hema cu o formula avansata si exclusiva. WINE CHARM are o aderenta impecabila si o vascozitate perfecta pentru orice manichiura delicata, realizata cu oja semipermanenta, gel, polygel. Colectia WINE CHARM aduce profesionistilor nuante rafinate, pigmentate si incantatoare ce se aplica uniform indiferent de tehnica folosita. WINE CHARM are o formula revolutionara Hema Free ce isi propune sa ofere tehnicienilor rezultate profesionale prin optimizarea eficienta a procesului de realizare a manichiurilor. Acest rubber base se distinge nu doar prin usurinta de modelare, rezistenta crescuta si aderenta, ci si prin faptul ca este solutia perfecta pentru persoanele care manifesta sensibilitate la compusii chimici din formule clasice de rubber base."
  },
    {
    id: 27,
    name: "Aspirator Silver",
    price: 175,
    image: "https://andz7z.github.io/assets/corelle/aspirator/silver/silver.jpg",
    video: "https://andz7z.github.io/assets/corelle/aspirator/silver/silver.mp4",
    category: "Aparate & Echipamente",
    subcategory: "aspiratoare praf",
    description: "Aspirator Praf Unghii cu Display 60W AirPrecission Elite - LUXORISE, Silver absoarbe eficient praful nedorit in procesul de realizare a manichiurilor sau pedichiurilor fiind ideal atat pentru uzul profesional, cat si pentru cel personal. Designul sau modern si compact permite o manipulare usoara, precum si posibilitatea de a fi transportat cu usurinta. Dispozitivul este prevazut cu afisaj digital pentru controlul vitezei, permitand monitorizarea si ajustarea precisa a puterii de aspirare. Este dotat cu buton pentru oprire/ pornire si permite folosirea aspiratorului in trei moduri de viteza. Aspiratorul este prevazut cu un filtru de praf reutilizabil. Aspiratorul vine dotat cu 25 buc servetele protectie filtru ."  },
    {
    id: 28,
    name: "Aspirator Precission",
    price: 215,
    image: "https://andz7z.github.io/assets/corelle/aspirator/precission/precission.jpg",
    video: "https://andz7z.github.io/assets/corelle/aspirator/precission/precission.mp4",
    category: "Aparate & Echipamente",
    subcategory: "aspiratoare praf",
    description: "Aspirator Praf Unghii cu Display 60W AirPrecission Elite - LUXORISE, Silver absoarbe eficient praful nedorit in procesul de realizare a manichiurilor sau pedichiurilor fiind ideal atat pentru uzul profesional, cat si pentru cel personal. Designul sau modern si compact permite o manipulare usoara, precum si posibilitatea de a fi transportat cu usurinta. Dispozitivul este prevazut cu afisaj digital pentru controlul vitezei, permitand monitorizarea si ajustarea precisa a puterii de aspirare. Este dotat cu buton pentru oprire/ pornire si permite folosirea aspiratorului in trei moduri de viteza. Aspiratorul este prevazut cu un filtru de praf reutilizabil. Aspiratorul vine dotat cu 25 buc servetele protectie filtru ."
  },
    {
    id: 29,
    name: "Aspirator Pro",
    price: 145,
    image: "https://andz7z.github.io/assets/corelle/aspirator/pro/pro.jpg",
    video: "https://andz7z.github.io/assets/corelle/aspirator/pro/pro.mp4",
    category: "Aparate & Echipamente",
    subcategory: "aspiratoare praf",
    description: "Aspirator Praf Unghii cu Display 60W AirPrecission Elite - LUXORISE, Silver absoarbe eficient praful nedorit in procesul de realizare a manichiurilor sau pedichiurilor fiind ideal atat pentru uzul profesional, cat si pentru cel personal. Designul sau modern si compact permite o manipulare usoara, precum si posibilitatea de a fi transportat cu usurinta. Dispozitivul este prevazut cu afisaj digital pentru controlul vitezei, permitand monitorizarea si ajustarea precisa a puterii de aspirare. Este dotat cu buton pentru oprire/ pornire si permite folosirea aspiratorului in trei moduri de viteza. Aspiratorul este prevazut cu un filtru de praf reutilizabil. Aspiratorul vine dotat cu 25 buc servetele protectie filtru ."
  },
    {
    id: 30,
    name: "Eclat - Angellic",
    price: 45,
    image: "https://andz7z.github.io/assets/corelle/eclat/angellic/eclat-angellic.jpg",
    video: "https://andz7z.github.io/assets/corelle/eclat/angellic/eclat-angellic.mp4",
    category: "Geluri UV/LED",
    subcategory: "geluri cover",
    description: "Ultra flexibila, autonivelanta si super adeziva rubber base este baza semitransparenta, excelenta pentru unghiile subtiri, fragile si denivelate. Rubber Base LUXORISE Eclat Collection - Rainbow Sky 15ml are o formula premium cu o vascozitate potrivita si o aderenta excelenta. Poate fi folosita ca baza la manichiurile cu oja semipermanenta sau la realizarea apexului la manichiurile cu oja semipermanenta, gel si polygel. Totodata, este ideala pentru manichiurile nude si french ca si produs principal."
  },
  {
    "id": 31,
    "name": "Eclat - Brilliant",
    "price": 48,
    "image": "https://andz7z.github.io/assets/corelle/eclat/brilliant/eclat-brilliant.jpg",
    "video": "https://andz7z.github.io/assets/corelle/eclat/brilliant/eclat-brilliant.mp4",
    "category": "Geluri UV/LED",
    "subcategory": "geluri cover",
    "description": "Brilliant oferă un efect strălucitor și intens, perfect pentru un look sofisticat. Formula sa ultra flexibilă și autonivelantă asigură o aplicare perfectă pe unghiile subtiri și fragile."
  },
  {
    "id": 32,
    "name": "Eclat - Crystal",
    "price": 52,
    "image": "https://andz7z.github.io/assets/corelle/eclat/crystal/eclat-crystal.jpg",
    "video": "https://andz7z.github.io/assets/corelle/eclat/crystal/eclat-crystal.mp4",
    "category": "Geluri UV/LED",
    "subcategory": "geluri cover",
    "description": "Crystal aduce transparența și puritatea cristalului pe unghiile tale. Acest gel rubber base oferă finisaje imaculate și protecție de durată pentru unghiile delicate."
  },
  {
    "id": 33,
    "name": "Eclat - Endless",
    "price": 45,
    "image": "https://andz7z.github.io/assets/corelle/eclat/endless/eclat-endless.jpg",
    "video": "https://andz7z.github.io/assets/corelle/eclat/endless/eclat-endless.mp4",
    "category": "Geluri UV/LED",
    "subcategory": "geluri cover",
    "description": "Endless oferă versatilitate și rezistență nelimitată. Formula sa premium asigură o aderere perfectă și rezistă în timp, păstrând frumusețea inițială."
  },
  {
    "id": 34,
    "name": "Eclat - Glassy",
    "price": 50,
    "image": "https://andz7z.github.io/assets/corelle/eclat/glassy/eclat-glassy.jpg",
    "video": "https://andz7z.github.io/assets/corelle/eclat/glassy/eclat-glassy.mp4",
    "category": "Geluri UV/LED",
    "subcategory": "geluri cover",
    "description": "Glassy creează un efect de sticlă lucioasă, oferind un finish perfect neted. Ideal pentru unghiile care necesită o protecție extra și un aspect imaculat."
  },
  {
    "id": 35,
    "name": "Eclat - Grace",
    "price": 47,
    "image": "https://andz7z.github.io/assets/corelle/eclat/grace/eclat-grace.jpg",
    "video": "https://andz7z.github.io/assets/corelle/eclat/grace/eclat-grace.mp4",
    "category": "Geluri UV/LED",
    "subcategory": "geluri cover",
    "description": "Grace aduce eleganță și delicatețe în fiecare aplicație. Formula sa rafinată este perfectă pentru unghiile fragile, oferind protecție și frumusețe."
  },
  {
    "id": 36,
    "name": "Eclat - Hazel",
    "price": 43,
    "image": "https://andz7z.github.io/assets/corelle/eclat/hazel/eclat-hazel.jpg",
    "video": "https://andz7z.github.io/assets/corelle/eclat/hazel/eclat-hazel.mp4",
    "category": "Geluri UV/LED",
    "subcategory": "geluri cover",
    "description": "Hazel oferă nuanțe calde și terestre, perfecte pentru un look natural și sofisticat. Rubber base-ul său asigură flexibilitate și rezistență."
  },
  {
    "id": 37,
    "name": "Eclat - Lagoon",
    "price": 55,
    "image": "https://andz7z.github.io/assets/corelle/eclat/lagoon/eclat-lagoon.jpg",
    "video": "https://andz7z.github.io/assets/corelle/eclat/lagoon/eclat-lagoon.mp4",
    "category": "Geluri UV/LED",
    "subcategory": "geluri cover",
    "description": "Lagoon evocă adâncimea și misterul oceanului. Acest gel oferă nuanțe vibrante și un finish durabil, perfect pentru unghiile moderne."
  },
  {
    "id": 38,
    "name": "Eclat - Lavender",
    "price": 46,
    "image": "https://andz7z.github.io/assets/corelle/eclat/lavender/eclat-lavender.jpg",
    "video": "https://andz7z.github.io/assets/corelle/eclat/lavender/eclat-lavender.mp4",
    "category": "Geluri UV/LED",
    "subcategory": "geluri cover",
    "description": "Lavender aduce prospețimea și calmul lavandei pe unghiile tale. Formula sa delicată este ideală pentru un look feminin și rafinat."
  },
  {
    "id": 39,
    "name": "Eclat - Lilac",
    "price": 44,
    "image": "https://andz7z.github.io/assets/corelle/eclat/lilac/eclat-lilac.jpg",
    "video": "https://andz7z.github.io/assets/corelle/eclat/lilac/eclat-lilac.mp4",
    "category": "Geluri UV/LED",
    "subcategory": "geluri cover",
    "description": "Lilac oferă nuanțe romantice de liliac, perfecte pentru un aspect primăvăratic. Gelul său rubber base asigură o aplicare fără efort și rezistență maximă."
  },
  {
    "id": 40,
    "name": "Eclat - Music",
    "price": 51,
    "image": "https://andz7z.github.io/assets/corelle/eclat/music/eclat-music.jpg",
    "video": "https://andz7z.github.io/assets/corelle/eclat/music/eclat-music.mp4",
    "category": "Geluri UV/LED",
    "subcategory": "geluri cover",
    "description": "Music creează un ritm de culori și efecte fascinante. Perfect pentru personalitățile creative care doresc să se exprime prin unghiile lor."
  },
  {
    "id": 41,
    "name": "Eclat - Nectar",
    "price": 49,
    "image": "https://andz7z.github.io/assets/corelle/eclat/nectar/eclat-nectar.jpg",
    "video": "https://andz7z.github.io/assets/corelle/eclat/nectar/eclat-nectar.mp4",
    "category": "Geluri UV/LED",
    "subcategory": "geluri cover",
    "description": "Nectar oferă dulceața și bogăția culorilor naturale. Formula sa nutritivă protejează unghiile fragile în timp ce oferă un aspect strălucitor."
  },
  {
    "id": 42,
    "name": "Eclat - Oceanic",
    "price": 53,
    "image": "https://andz7z.github.io/assets/corelle/eclat/oceanic/eclat-oceanic.jpg",
    "video": "https://andz7z.github.io/assets/corelle/eclat/oceanic/eclat-oceanic.mp4",
    "category": "Geluri UV/LED",
    "subcategory": "geluri cover",
    "description": "Oceanic capturează adâncimea și mișcarea mării. Acest gel oferă nuanțe intense și un finish durabil, perfect pentru unghiile bold."
  },
  {
    "id": 43,
    "name": "Eclat - Pastel",
    "price": 42,
    "image": "https://andz7z.github.io/assets/corelle/eclat/pastel/eclat-pastel.jpg",
    "video": "https://andz7z.github.io/assets/corelle/eclat/pastel/eclat-pastel.mp4",
    "category": "Geluri UV/LED",
    "subcategory": "geluri cover",
    "description": "Pastel aduce delicatența și subtilitatea nuanțelor pastelate. Ideal pentru un look soft și feminin, cu protecție maximă pentru unghiile sensibile."
  },
  {
    "id": 44,
    "name": "Eclat - Peachy",
    "price": 46,
    "image": "https://andz7z.github.io/assets/corelle/eclat/peachy/eclat-peachy.jpg",
    "video": "https://andz7z.github.io/assets/corelle/eclat/peachy/eclat-peachy.mp4",
    "category": "Geluri UV/LED",
    "subcategory": "geluri cover",
    "description": "Peachy oferă căldura și prospețimea piersicii. Acest gel rubber base este perfect pentru un look fresh și natural, cu rezistență de lungă durată."
  },
  {
    "id": 45,
    "name": "Eclat - Pink",
    "price": 41,
    "image": "https://andz7z.github.io/assets/corelle/eclat/pink/eclat-pink.jpg",
    "video": "https://andz7z.github.io/assets/corelle/eclat/pink/eclat-pink.mp4",
    "category": "Geluri UV/LED",
    "subcategory": "geluri cover",
    "description": "Pink aduce romantismul și feminitatea culorii roz clasice. Formula sa adaptabilă este perfectă pentru toate tipurile de unghii și ocazii."
  },
  {
    "id": 46,
    "name": "Eclat - Radiance",
    "price": 54,
    "image": "https://andz7z.github.io/assets/corelle/eclat/radiance/eclat-radiance.jpg",
    "video": "https://andz7z.github.io/assets/corelle/eclat/radiance/eclat-radiance.mp4",
    "category": "Geluri UV/LED",
    "subcategory": "geluri cover",
    "description": "Radiance oferă un strălucire intensă și naturală. Gelul său premium asigură un finish imaculat și protecție superioară pentru unghiile denivelate."
  },
  {
    "id": 47,
    "name": "Eclat - Rain",
    "price": 47,
    "image": "https://andz7z.github.io/assets/corelle/eclat/rain/eclat-rain.jpg",
    "video": "https://andz7z.github.io/assets/corelle/eclat/rain/eclat-rain.mp4",
    "category": "Geluri UV/LED",
    "subcategory": "geluri cover",
    "description": "Rain evocă prospețimea și puritatea ploii. Acest gel oferă transparență și claritate, perfect pentru unghiile care necesită un aspect natural și protecție."
  },
  {
    "id": 48,
    "name": "Eclat - Sea",
    "price": 52,
    "image": "https://andz7z.github.io/assets/corelle/eclat/sea/eclat-sea.jpg",
    "video": "https://andz7z.github.io/assets/corelle/eclat/sea/eclat-sea.mp4",
    "category": "Geluri UV/LED",
    "subcategory": "geluri cover",
    "description": "Sea capturează libertatea și vastitatea oceanului. Formula sa flexibilă și rezistentă este ideală pentru unghiile active care necesită durabilitate."
  },
  {
    "id": 49,
    "name": "Eclat - Spicy",
    "price": 49,
    "image": "https://andz7z.github.io/assets/corelle/eclat/spicy/eclat-spicy.jpg",
    "video": "https://andz7z.github.io/assets/corelle/eclat/spicy/eclat-spicy.mp4",
    "category": "Geluri UV/LED",
    "subcategory": "geluri cover",
    "description": "Spicy aduce căldura și pasiunea nuanțelor picante. Perfect pentru personalitățile vibrante care doresc să facă o declarație puternică."
  },
  {
    "id": 50,
    "name": "Eclat - Tender",
    "price": 44,
    "image": "https://andz7z.github.io/assets/corelle/eclat/tender/eclet-tender.jpg",
    "video": "https://andz7z.github.io/assets/corelle/eclat/tender/eclat-tender.mp4",
    "category": "Geluri UV/LED",
    "subcategory": "geluri cover",
    "description": "Tender oferă delicatețe și gingășie în fiecare aplicație. Gelul său rubber base este special formulat pentru unghiile sensibile și fragile."
  },
  {
    "id": 51,
    "name": "Eclat - Timeless",
    "price": 55,
    "image": "https://andz7z.github.io/assets/corelle/eclat/timeless/eclat-timeless.jpg",
    "video": "https://andz7z.github.io/assets/corelle/eclat/timeless/eclat-timeless.mp4",
    "category": "Geluri UV/LED",
    "subcategory": "geluri cover",
    "description": "Timeless aduce eleganța eternă a nuanțelor clasice. Formula sa premium asigură rezistență în timp și un finish perfect pentru orice ocazie."
  },
  {
    "id": 52,
    "name": "Eclat - Unique",
    "price": 50,
    "image": "https://andz7z.github.io/assets/corelle/eclat/unique/eclat-unique.jpg",
    "video": "https://andz7z.github.io/assets/corelle/eclat/unique/eclat-unique.mp4",
    "category": "Geluri UV/LED",
    "subcategory": "geluri cover",
    "description": "Unique oferă o experiență personalizată și distinctă. Perfect pentru cei care doresc să se diferențieze prin nuanțe și efecte exclusive."
  },
  {
    "id": 53,
    "name": "Eclat - Vanilla",
    "price": 43,
    "image": "https://andz7z.github.io/assets/corelle/eclat/vanilla/eclat-vanilla.jpg",
    "video": "https://andz7z.github.io/assets/corelle/eclat/vanilla/eclat-vanilla.mp4",
    "category": "Geluri UV/LED",
    "subcategory": "geluri cover",
    "description": "Vanilla aduce caldul și dulceața vaniliei. Acest gel oferă nuanțe neutre și elegante, perfecte pentru un look sofisticat și modern."
  },
  {
    "id": 54,
    "name": "Eclat - Wood",
    "price": 48,
    "image": "https://andz7z.github.io/assets/corelle/eclat/wood/eclat-wood.jpg",
    "video": "https://andz7z.github.io/assets/corelle/eclat/wood/eclat-wood.mp4",
    "category": "Geluri UV/LED",
    "subcategory": "geluri cover",
    "description": "Wood evocă caldul și naturalul lemnului. Perfect pentru un look earthy și sofisticat, cu protecție maximă pentru unghiile naturale."
  },
  {
    "id": 55,
    "name": "Freza BrushLess",
    "price": 189,
    "image": "https://andz7z.github.io/assets/corelle/freze/brushless/brushless.jpg",
    "video": "https://andz7z.github.io/assets/corelle/freze/brushless/brushless.mp4",
    "category": "Aparate & Echipamente",
    "subcategory": "freze eletrice",
    "description": "Freza Unghii Profesionala Brushless NailRevolution PRO - LUXORISE 35.000 RPM, White este solutia de top pentru profestionisti, oferind un control premium performant datorita functiilor digitale integrate. Astfel, butoanele de operare sunt digitale si integrate in display-ul generos si intuitiv. Setarile dorite se pot ajusta prin apasari simple direct pe display, oferind un control precis in timpul utilizarii. Display-ul digital al frezei NailRevolution PRO afiseaza viteza de functionare si sensul de rotatie. Acestea, fiind extrem de utile profesionistilor in utilizarea diferitelor materiale sau tehnici de lucru. Dispozitivul ajunge la o viteza de pana la 35.000 rotatii pe minut si are comutator avansat de directie (doua sensuri de rotatie), fiind adecvata atat dreptacilor, cat si stangacilor. Mandrina sa nu vibreaza in timpul utilizarii, este robusta, are greutate optima si varful subtire ce favorizeaza finetea si precizia operarii. Capul de slefuit poate fi inlocuit fara efort. NailRevolution PRO are eficienta crescuta, nivel de zgomot redus, nu vibreaza si este usor de intretinut. Suportul magnetic integrat de bituri si baza cu suprafata aderenta ii ofera stabilitate si confort."
  },
  {
    "id": 56,
    "name": "Freza Diamond",
    "price": 215,
    "image": "https://andz7z.github.io/assets/corelle/freze/diamond/diamond.jpg",
    "video": "https://andz7z.github.io/assets/corelle/freze/diamond/diamond.mp4",
    "category": "Aparate & Echipamente",
    "subcategory": "freze eletrice",
    "description": "Freza Diamond oferă precizie și durabilitate excepțională pentru profesioniștii din industrie. Cu o viteză maximă de 35.000 RPM și tehnologie avansată, asigură o performanță superioară în fiecare utilizare. Designul ergonomic și display-ul digital intuitiv facilitează controlul precis al setărilor, fiind ideală atât pentru dreptaci, cât și pentru stângaci."
  },
  {
    "id": 57,
    "name": "Freza Elite",
    "price": 195,
    "image": "https://andz7z.github.io/assets/corelle/freze/elite/elite.jpg",
    "video": "https://andz7z.github.io/assets/corelle/freze/elite/elite.mp4",
    "category": "Aparate & Echipamente",
    "subcategory": "freze eletrice",
    "description": "Freza Elite reprezintă excelența în domeniul echipamentelor pentru unghii. Cu mandrina robustă și vibrații reduse, oferă comfort și stabilitate maximă durante utilizării prelungite. Sistemul avansat de control al vitezei și sensul de rotație ajustabil o fac perfectă pentru tehnici diverse și materiale variate."
  },
  {
    "id": 58,
    "name": "Freza Marathon",
    "price": 175,
    "image": "https://andz7z.github.io/assets/corelle/freze/marathon/marathon.jpg",
    "video": "https://andz7z.github.io/assets/corelle/freze/marathon/marathon.mp4",
    "category": "Aparate & Echipamente",
    "subcategory": "freze eletrice",
    "description": "Freza Marathon este concepută pentru rezistență și performanță de lungă durată. Cu motor puternic și eficiență energetică crescută, această freză menține o funcționare stabilă chiar și în sesiuni de lucru intensive. Designul ergonomic și greutatea optimă reduc oboseala mâinilor."
  },
  {
    "id": 59,
    "name": "Freza Milano",
    "price": 165,
    "image": "https://andz7z.github.io/assets/corelle/freze/milano/milano.jpg",
    "video": "https://andz7z.github.io/assets/corelle/freze/milano/milano.mp4",
    "category": "Aparate & Echipamente",
    "subcategory": "freze eletrice",
    "description": "Freza Milano combină designul elegant cu performanța profesională. Cu sistem de răcire eficient și zgomot redus, această freză asigură o experiență de lucru plăcută. Perfectă pentru salonuri de înfrumusețare care doresc să ofere servicii de calitate superioară."
  },
  {
    "id": 60,
    "name": "Freza Quantum",
    "price": 205,
    "image": "https://andz7z.github.io/assets/corelle/freze/quantum/quantum.jpg",
    "video": "https://andz7z.github.io/assets/corelle/freze/quantum/quantum.mp4",
    "category": "Aparate & Echipamente",
    "subcategory": "freze eletrice",
    "description": "Freza Quantum utilizează tehnologie de ultimă oră pentru a oferi control și precizie maximă. Cu display digital avansat și setări personalizabile, această freză se adaptează nevoilor fiecărui profesionist. Viteza constantă și cuplul puternic o fac ideală pentru cele mai exigente aplicații."
  },
  {
    "id": 61,
    "name": "Freza Senso",
    "price": 155,
    "image": "https://andz7z.github.io/assets/corelle/freze/senso/senso.jpg",
    "video": "https://andz7z.github.io/assets/corelle/freze/senso/senso.mp4",
    "category": "Aparate & Echipamente",
    "subcategory": "freze eletrice",
    "description": "Freza Senso este proiectată pentru sensibilitate și control fin. Cu reglaj de viteză progresiv și răspuns instant la comenzi, permite lucrul cu precizie milimetrică. Ideală pentru tehnici delicate și lucrul pe unghii naturale, unde controlul este esențial."
  },
  {
    "id": 62,
    "name": "Freza Smart",
    "price": 185,
    "image": "https://andz7z.github.io/assets/corelle/freze/smart/smart.jpg",
    "video": "https://andz7z.github.io/assets/corelle/freze/smart/smart.mp4",
    "category": "Aparate & Echipamente",
    "subcategory": "freze eletrice",
    "description": "Freza Smart integrează tehnologii inteligente pentru o experiență de lucru superioară. Cu memorie pentru setări personalizate și conectivitate modernă, această freză se adaptează stilului fiecărui utilizator. Sistemul de control automat al vitezei asigură rezultate perfecte în fiecare utilizare."
  },
  {
    "id": 63,
    "name": "Freza Turbo",
    "price": 195,
    "image": "https://andz7z.github.io/assets/corelle/freze/turbo/turbo.jpg",
    "video": "https://andz7z.github.io/assets/corelle/freze/turbo/turbo.mp4",
    "category": "Aparate & Echipamente",
    "subcategory": "freze eletrice",
    "description": "Freza Turbo oferă putere și viteză excepționale pentru cele mai exigente aplicații profesionale. Cu motor high-torque și sistem de răcire avansat, menține performanța maximă chiar și în condiții de utilizare intensivă. Perfectă pentru salonuri cu trafic ridicat și proceduri complexe."
  },
  {
    "id": 64,
    "name": "Harmony - Blush",
    "price": 57,
    "image": "https://andz7z.github.io/assets/corelle/harmony/blush/blush-harmony.jpg",
    "video": "https://andz7z.github.io/assets/corelle/harmony/blush/harmony-blush.mp4",
    "category": "Geluri UV/Led",
    "subcategory": "geluri de constructie",
    "description": "Rubber Base Hema Free LUXORISE Harmony - Blushing Brilliance 10ml are o formula inovativa si delicata, fara hema, o armonie perfecta intre flexibilitate, rafinament si subtilitate. Baza semitransparenta Rubber Base Harmony este un mix de ingrediente premium, ce isi propune sa ofere profesionistilor si amatorilor rezultate exceptionale indiferent de tipul de manichiura ales - oja semipermanenta, gel, polygel. Colectia Rubber Base Harmony dezvaluie cele mai fine, delicate si impresionante nuante pentru manichiuri nude si french. Totodata, are o vascozitate si aderenta excelenta in procesul de realizare a manichiurilor."
  },
  {
    "id": 65,
    "name": "Harmony - Breezy",
    "price": 56,
    "image": "https://andz7z.github.io/assets/corelle/harmony/breezy/harmony-breezy.jpg",
    "video": "https://andz7z.github.io/assets/corelle/harmony/breezy/harmony-breezy.mp4",
    "category": "Geluri UV/Led",
    "subcategory": "geluri de constructie",
    "description": "Rubber Base Hema Free LUXORISE Harmony - Breezy 10ml aduce prospețime și ușurință în fiecare aplicație. Formula sa inovativă fără hema oferă o armonie perfectă între flexibilitate și rezistență, asigurând rezultate excepționale pentru manichiurile nude și french."
  },
  {
    "id": 66,
    "name": "Harmony - Brilliance",
    "price": 59,
    "image": "https://andz7z.github.io/assets/corelle/harmony/brilliance/harmony-brilliance.jpg",
    "video": "https://andz7z.github.io/assets/corelle/harmony/brilliance/harmony-brilliance.mp4",
    "category": "Geluri UV/Led",
    "subcategory": "geluri de constructie",
    "description": "Rubber Base Hema Free LUXORISE Harmony - Brilliance 10ml oferă strălucire și claritate excepționale. Cu nuanțe delicate și formula premium fără hema, asigură o aplicare perfectă și rezultate durabile pentru toate tipurile de manichiuri."
  },
  {
    "id": 67,
    "name": "Harmony - Caramel",
    "price": 58,
    "image": "https://andz7z.github.io/assets/corelle/harmony/caramel/harmony-caramel.jpg",
    "video": "https://andz7z.github.io/assets/corelle/harmony/caramel/harmony-caramel.mp4",
    "category": "Geluri UV/Led",
    "subcategory": "geluri de constructie",
    "description": "Rubber Base Hema Free LUXORISE Harmony - Caramel 10ml aduce căldura și bogăția nuanțelor de caramel. Formula sa rafinată fără hema oferă flexibilitate și aderență excelentă, perfectă pentru manichiuri naturale și elegante."
  },
  {
    "id": 68,
    "name": "Harmony - Desire",
    "price": 60,
    "image": "https://andz7z.github.io/assets/corelle/harmony/desire/harmony-desire.jpg",
    "video": "https://andz7z.github.io/assets/corelle/harmony/desire/harmony-desire.mp4",
    "category": "Geluri UV/Led",
    "subcategory": "geluri de constructie",
    "description": "Rubber Base Hema Free LUXORISE Harmony - Desire 10ml exprimă pasiune și intensitate prin nuanțele sale profunde. Formula premium fără hema asigură o aplicare impecabilă și rezultate de durată pentru manichiurile sofisticate."
  },
  {
    "id": 69,
    "name": "Harmony - Dune",
    "price": 55,
    "image": "https://andz7z.github.io/assets/corelle/harmony/dune/harmony-dune.jpg",
    "video": "https://andz7z.github.io/assets/corelle/harmony/dune/harmony-dune.mp4",
    "category": "Geluri UV/Led",
    "subcategory": "geluri de constructie",
    "description": "Rubber Base Hema Free LUXORISE Harmony - Dune 10ml evocă nisipul și caldul deșertului. Cu formula sa delicată fără hema, oferă nuanțe naturale și rezistență exceptională, ideală pentru manichiuri subtile și rafinate."
  },
  {
    "id": 70,
    "name": "Harmony - Embrace",
    "price": 57,
    "image": "https://andz7z.github.io/assets/corelle/harmony/embrace/harmony-embrace.jpg",
    "video": "https://andz7z.github.io/assets/corelle/harmony/embrace/harmony-embrace.mp4",
    "category": "Geluri UV/Led",
    "subcategory": "geluri de constructie",
    "description": "Rubber Base Hema Free LUXORISE Harmony - Embrace 10ml oferă caldul și protecția unei îmbrățișări. Formula sa inovativă fără hema asigură flexibilitate și aderență perfectă, pentru manichiuri care înglobează frumusețe și confort."
  },
  {
    "id": 71,
    "name": "Harmony - Gentle",
    "price": 56,
    "image": "https://andz7z.github.io/assets/corelle/harmony/gentle/harmony-gentle.jpg",
    "video": "https://andz7z.github.io/assets/corelle/harmony/gentle/harmony-gentle.mp4",
    "category": "Geluri UV/Led",
    "subcategory": "geluri de constructie",
    "description": "Rubber Base Hema Free LUXORISE Harmony - Gentle 10ml este perfectă pentru unghiile sensibile. Formula sa delicată fără hema oferă o aplicare blândă și protecție maximă, asigurând manichiuri frumoase și sănătoase."
  },
  {
    "id": 72,
    "name": "Harmony - Hazel",
    "price": 58,
    "image": "https://andz7z.github.io/assets/corelle/harmony/hazel/harmony-hazel.jpg",
    "video": "https://andz7z.github.io/assets/corelle/harmony/hazel/harmony-hazel.mp4",
    "category": "Geluri UV/Led",
    "subcategory": "geluri de constructie",
    "description": "Rubber Base Hema Free LUXORISE Harmony - Hazel 10ml aduce profunzimea și misterul nuanțelor de alune. Formula premium fără hema oferă flexibilitate și rezistență, perfectă pentru manichiuri naturale și elegante."
  },
  {
    "id": 73,
    "name": "Harmony - Lilac",
    "price": 59,
    "image": "https://andz7z.github.io/assets/corelle/harmony/lilac/harmony-lilac.jpg",
    "video": "https://andz7z.github.io/assets/corelle/harmony/lilac/harmony-lilac.mp4",
    "category": "Geluri UV/Led",
    "subcategory": "geluri de constructie",
    "description": "Rubber Base Hema Free LUXORISE Harmony - Lilac 10ml oferă prospețimea și delicatețea liliacului. Formula sa rafinată fără hema asigură o aplicare perfectă și rezultate durabile pentru manichiuri feminine și romantice."
  },
  {
    "id": 74,
    "name": "Harmony - Mocha",
    "price": 57,
    "image": "https://andz7z.github.io/assets/corelle/harmony/mocha/harmony-mocha.jpg",
    "video": "https://andz7z.github.io/assets/corelle/harmony/mocha/harmony-mocha.mp4",
    "category": "Geluri UV/Led",
    "subcategory": "geluri de constructie",
    "description": "Rubber Base Hema Free LUXORISE Harmony - Mocha 10ml combină bogăția cafelei cu eleganța. Formula premium fără hema oferă nuanțe calde și rezistență exceptională, ideală pentru manichiuri sofisticate."
  },
  {
    "id": 75,
    "name": "Harmony - Peach",
    "price": 56,
    "image": "https://andz7z.github.io/assets/corelle/harmony/peach/harmony-peach.jpg",
    "video": "https://andz7z.github.io/assets/corelle/harmony/peach/harmony-peach.mp4",
    "category": "Geluri UV/Led",
    "subcategory": "geluri de constructie",
    "description": "Rubber Base Hema Free LUXORISE Harmony - Peach 10ml aduce dulceața și prospețimea piersicii. Formula sa delicată fără hema asigură o aplicare perfectă și rezultate naturale pentru manichiuri fresh și youthful."
  },
  {
    "id": 76,
    "name": "Harmony - Purple",
    "price": 60,
    "image": "https://andz7z.github.io/assets/corelle/harmony/purple/harmony-purple.jpg",
    "video": "https://andz7z.github.io/assets/corelle/harmony/purple/harmony-purple.mp4",
    "category": "Geluri UV/Led",
    "subcategory": "geluri de constructie",
    "description": "Rubber Base Hema Free LUXORISE Harmony - Purple 10ml exprimă regalitatea și misterul nuanțelor de violet. Formula premium fără hema oferă intensitate și durabilitate, perfectă pentru manichiuri dramatice și elegante."
  },
  {
    "id": 77,
    "name": "Harmony - Silk",
    "price": 58,
    "image": "https://andz7z.github.io/assets/corelle/harmony/silk/harmony-silk.jpg",
    "video": "https://andz7z.github.io/assets/corelle/harmony/silk/harmony-silk.mp4",
    "category": "Geluri UV/Led",
    "subcategory": "geluri de constructie",
    "description": "Rubber Base Hema Free LUXORISE Harmony - Silk 10ml oferă finețea și mătasea unei aplicări perfecte. Formula sa rafinată fără hema asigură o textură netedă și finish imaculat pentru manichiuri de lux."
  },
  {
    "id": 78,
    "name": "Harmony - Silken",
    "price": 59,
    "image": "https://andz7z.github.io/assets/corelle/harmony/silken/harmony-silken.jpg",
    "video": "https://andz7z.github.io/assets/corelle/harmony/silken/harmony-silken.mp4",
    "category": "Geluri UV/Led",
    "subcategory": "geluri de constructie",
    "description": "Rubber Base Hema Free LUXORISE Harmony - Silken 10ml aduce rafinamentul și eleganța mătăsii naturale. Formula premium fără hema oferă o aplicare fără efort și rezultate de durată pentru manichiuri perfecte."
  },
  {
    "id": 79,
    "name": "Harmony - Sparkle",
    "price": 60,
    "image": "https://andz7z.github.io/assets/corelle/harmony/sparkle/harmony-sparkle.jpg",
    "video": "https://andz7z.github.io/assets/corelle/harmony/sparkle/harmony-sparkle.mp4",
    "category": "Geluri UV/Led",
    "subcategory": "geluri de constructie",
    "description": "Rubber Base Hema Free LUXORISE Harmony - Sparkle 10ml aduce strălucire și magie în fiecare aplicație. Formula sa inovativă fără hema oferă efecte scintilante și rezistență exceptională pentru manichiuri festive."
  },
  {
    "id": 80,
    "name": "Harmony - Vintage",
    "price": 55,
    "image": "https://andz7z.github.io/assets/corelle/harmony/vintage/harmony-vintage.jpg",
    "video": "https://andz7z.github.io/assets/corelle/harmony/vintage/harmony-vintage.mp4",
    "category": "Geluri UV/Led",
    "subcategory": "geluri de constructie",
    "description": "Rubber Base Hema Free LUXORISE Harmony - Vintage 10ml evocă eleganța și farmecul epocii de aur. Formula sa rafinată fără hema oferă nuanțe retro și durabilitate, perfectă pentru manichiuri cu stil timeless."
  },
  {
    "id": 81,
    "name": "Lampa Crystal",
    "price": 165,
    "image": "https://andz7z.github.io/assets/corelle/lampi/crystal/crystal.jpg",
    "video": "https://andz7z.github.io/assets/corelle/lampi/crystal/crystal.mp4",
    "category": "Aparate & Echipamente",
    "subcategory": "Lampi UV/Led",
    "description": "Modul de utilizare: Conectați lampa la priză până la încărcarea completă. Apăsați lung butonul ON/OFF pentru a porni lampa. După ce aplicați produsele care necesită polimerizare, introduceți mâna în lampă pentru a o porni cu ajutorul senzorului de mișcare timp de 120 secunde. Setați timpul dorit folosind rotița, apoi introduceți mâna în lampă pentru a o activa. Dacă scoateți mâna înainte de trecerea timerului selectat, lampa va întrerupe procesul de uscare, iar după ce reintroduceți mâna, aceasta va porni de la timpul rămas. După setarea timpului dorit, aveți posibilitatea să activați lampa și cu ajutorul rotiței. Apăsați scurt pe aceasta pentru a începe sau întrerupe funcționarea lămpii. Lampa va memora ultimul program pe care l-ați selectat (timp de uscare). Astfel, fără să mai apăsați niciun buton, următoarea polimerizare va porni direct de la acel program. Lampa se va opri automat dacă nu va fi utilizată timp de 5 minute. ATENȚIE! A nu se folosi de persoanele cu sensibilitate! Nu lăsați aparatul nesupravegheat în timpul funcționării."
  },
  {
    "id": 82,
    "name": "Lampa Diamond",
    "price": 220,
    "image": "https://andz7z.github.io/assets/corelle/lampi/diamond/diamond.jpg",
    "video": "https://andz7z.github.io/assets/corelle/lampi/diamond/diamond.mp4",
    "category": "Aparate & Echipamente",
    "subcategory": "Lampi UV/Led",
    "description": "Lampa Diamond oferă performanță premium cu tehnologie avansată de polimerizare. Cu senzor de mișcare intuitiv și timer reglabil, asigură uscarea perfectă a tuturor produselor UV/LED. Designul elegant și funcțiile inteligente o fac ideală pentru salonuri profesionale."
  },
  {
    "id": 83,
    "name": "Lampa Digital",
    "price": 195,
    "image": "https://andz7z.github.io/assets/corelle/lampi/digital/digital.jpg",
    "video": "https://andz7z.github.io/assets/corelle/lampi/digital/digital.mp4",
    "category": "Aparate & Echipamente",
    "subcategory": "Lampi UV/Led",
    "description": "Lampa Digital cu display modern și control precis al timpilor de polimerizare. Sistemul său avansat asigură uscarea uniformă și eficientă a jelurilor și ojiei semipermanente. Perfectă pentru tehnici precise și rezultate profesionale."
  },
  {
    "id": 84,
    "name": "Lampa Glam",
    "price": 175,
    "image": "https://andz7z.github.io/assets/corelle/lampi/glam/glam.jpg",
    "video": "https://andz7z.github.io/assets/corelle/lampi/glam/glam.mp4",
    "category": "Aparate & Echipamente",
    "subcategory": "Lampi UV/Led",
    "description": "Lampa Glam combină designul sofisticat cu tehnologia de ultimă oră. Cu iluminare uniformă și setări personalizabile, oferă cele mai bune rezultate în polimerizarea produselor pentru unghii. Ideală pentru esteticienele care apreciază calitatea și estetica."
  },
  {
    "id": 85,
    "name": "Lampa Infinity",
    "price": 210,
    "image": "https://andz7z.github.io/assets/corelle/lampi/infinity/infinity.jpg",
    "video": "https://andz7z.github.io/assets/corelle/lampi/infinity/infinity.mp4",
    "category": "Aparate & Echipamente",
    "subcategory": "Lampi UV/Led",
    "description": "Lampa Infinity oferă performanță nelimitată cu timpi de polimerizare optimizați. Tehnologia sa avansată asigură uscarea rapidă și completă a tuturor tipurilor de geluri, menținând strălucirea și durabilitatea finisajelor."
  },
  {
    "id": 86,
    "name": "Lampa Nova",
    "price": 185,
    "image": "https://andz7z.github.io/assets/corelle/lampi/nova/nova.jpg",
    "video": "https://andz7z.github.io/assets/corelle/lampi/nova/nova.mp4",
    "category": "Aparate & Echipamente",
    "subcategory": "Lampi UV/Led",
    "description": "Lampa Nova aduce inovație și eficiență în fiecare polimerizare. Cu sistem inteligent de memorare a setărilor și opțiune de activare prin senzor, oferă o experiență de lucro fără efort și rezultate constante."
  },
  {
    "id": 87,
    "name": "Lampa Senso",
    "price": 160,
    "image": "https://andz7z.github.io/assets/corelle/lampi/senso/senso.jpg",
    "video": "https://andz7z.github.io/assets/corelle/lampi/senso/senso.mp4",
    "category": "Aparate & Echipamente",
    "subcategory": "Lampi UV/Led",
    "description": "Lampa Senso cu tehnologie de senzori avansați pentru o utilizare intuitivă și eficientă. Răspunde instant la prezența mâinii și asigură timpi exacti de uscare, protejând în același timp pielea sensibilă."
  },
  {
    "id": 88,
    "name": "Lampa SunOne",
    "price": 200,
    "image": "https://andz7z.github.io/assets/corelle/lampi/sunone/sunone.jpg",
    "video": "https://andz7z.github.io/assets/corelle/lampi/sunone/sunone.mp4",
    "category": "Aparate & Echipamente",
    "subcategory": "Lampi UV/Led",
    "description": "Lampa SunOne reprezintă vârful tehnologiei în domeniul polimerizării. Cu spectru optimizat de LED și control digital precis, garantează cele mai bune rezultate pentru toate tipurile de manichiuri semipermanente și construcții cu gel."
  },
  {
    "id": 89,
    "name": "Oja Abyss",
    "price": 58,
    "image": "https://andz7z.github.io/assets/corelle/oja/abyss/abyss.jpg",
    "video": "https://andz7z.github.io/assets/corelle/oja/abyss/abyss.mp4",
    "category": "Oja Semipermanenta",
    "subcategory": "oje normale",
    "description": "Oja Semipermanenta SensoPRO Milano 10ml - 121 Dark Purple Pearl este flexibila, pigmentata, are textura cremoasa si fluida ce permite aplicarea usoara. Cu aceasta oja poti avea o manichiura ce rezista pe unghii pana la 4-6 saptamani. Pensula permite o aplicare usoara si precisa in zona cuticulei. Poate fi aplicata peste baza, gel sau polygel."
  },
  {
    "id": 90,
    "name": "Oja Blind",
    "price": 57,
    "image": "https://andz7z.github.io/assets/corelle/oja/blind/blind.jpg",
    "video": "https://andz7z.github.io/assets/corelle/oja/blind/blind.mp4",
    "category": "Oja Semipermanenta",
    "subcategory": "oje normale",
    "description": "Oja Semipermanenta SensoPRO Blind 10ml oferă nuanțe intense și acoperire perfectă. Textura sa cremoasă și fluidă permite o aplicare ușoară și uniformă, asigurând o manichiură rezistentă care durează până la 4-6 săptămâni."
  },
  {
    "id": 91,
    "name": "Oja Dark",
    "price": 59,
    "image": "https://andz7z.github.io/assets/corelle/oja/dark/dark.jpg",
    "video": "https://andz7z.github.io/assets/corelle/oja/dark/dark.mp4",
    "category": "Oja Semipermanenta",
    "subcategory": "oje normale",
    "description": "Oja Semipermanenta SensoPRO Dark 10ml aduce profunzimea și eleganța nuanțelor închise. Pigmentată și flexibilă, oferă o acoperire impecabilă și durabilitate excepțională pentru un look sofisticat."
  },
  {
    "id": 92,
    "name": "Oja Games",
    "price": 61,
    "image": "https://andz7z.github.io/assets/corelle/oja/games/games.jpg",
    "video": "https://andz7z.github.io/assets/corelle/oja/games/games.mp4",
    "category": "Oja Semipermanenta",
    "subcategory": "oje normale",
    "description": "Oja Semipermanenta SensoPRO Games 10ml oferă nuanțe jucăușe și vibrante pentru un look modern și distractiv. Formula sa de calitate superioară asigură rezistență și strălucire de lungă durată."
  },
  {
    "id": 93,
    "name": "Oja Love",
    "price": 56,
    "image": "https://andz7z.github.io/assets/corelle/oja/love/love.jpg",
    "video": "https://andz7z.github.io/assets/corelle/oja/love/love.mp4",
    "category": "Oja Semipermanenta",
    "subcategory": "oje normale",
    "description": "Oja Semipermanenta SensoPRO Love 10ml exprimă pasiunea și romantismul prin nuanțele sale calde. Pensula de precizie permite o aplicare perfectă în zona cuticulei pentru un rezultat impecabil."
  },
  {
    "id": 94,
    "name": "Oja Luxe",
    "price": 65,
    "image": "https://andz7z.github.io/assets/corelle/oja/luxe/luxe.jpg",
    "video": "https://andz7z.github.io/assets/corelle/oja/luxe/luxe.mp4",
    "category": "Oja Semipermanenta",
    "subcategory": "oje normale",
    "description": "Oja Semipermanenta SensoPRO Luxe 10ml aduce luxul și rafinamentul pe unghiile tale. Cu textură cremoasă și pigmentație intensă, oferă un finish de excepție care rezistă în timp."
  },
  {
    "id": 95,
    "name": "Oja Magenta",
    "price": 60,
    "image": "https://andz7z.github.io/assets/corelle/oja/magenta/magenta.jpg",
    "video": "https://andz7z.github.io/assets/corelle/oja/magenta/magenta.mp4",
    "category": "Oja Semipermanenta",
    "subcategory": "oje normale",
    "description": "Oja Semipermanenta SensoPRO Magenta 10ml captivă prin nuanțele sale vibrante și pline de viață. Flexibilă și ușor de aplicat, asigură o manichiură perfectă care durează săptămâni la rând."
  },
  {
    "id": 96,
    "name": "Oja Merlot",
    "price": 62,
    "image": "https://andz7z.github.io/assets/corelle/oja/merlot/merlot.jpg",
    "video": "https://andz7z.github.io/assets/corelle/oja/merlot/merlot.mp4",
    "category": "Oja Semipermanenta",
    "subcategory": "oje normale",
    "description": "Oja Semipermanenta SensoPRO Merlot 10ml evocă bogăția și sofisticarea vinului roșu. Cu acoperire perfectă și textură fluidă, oferă un look elegant și durabil."
  },
  {
    "id": 97,
    "name": "Oja Milano",
    "price": 58,
    "image": "https://andz7z.github.io/assets/corelle/oja/milano/milano.jpg",
    "video": "https://andz7z.github.io/assets/corelle/oja/milano/milano.mp4",
    "category": "Oja Semipermanenta",
    "subcategory": "oje normale",
    "description": "Oja Semipermanenta SensoPRO Milano 10ml combină eleganța italiană cu performanța profesională. Formula sa avansată asigură o aplicare fără efort și rezistență exceptională."
  },
  {
    "id": 98,
    "name": "Oja Nude",
    "price": 55,
    "image": "https://andz7z.github.io/assets/corelle/oja/nude/nude.jpg",
    "video": "https://andz7z.github.io/assets/corelle/oja/nude/nude.mp4",
    "category": "Oja Semipermanenta",
    "subcategory": "oje normale",
    "description": "Oja Semipermanenta SensoPRO Nude 10ml oferă nuanțe naturale și discrete pentru un look elegant de zi cu zi. Perfectă pentru unghiile care necesită un aspect subtil și rafinat."
  },
  {
    "id": 99,
    "name": "Oja Pearly",
    "price": 63,
    "image": "https://andz7z.github.io/assets/corelle/oja/pearly/pearly.jpg",
    "video": "https://andz7z.github.io/assets/corelle/oja/pearly/pearly.mp4",
    "category": "Oja Semipermanenta",
    "subcategory": "oje normale",
    "description": "Oja Semipermanenta SensoPRO Pearly 10ml aduce strălucirea perlelor pe unghiile tale. Cu efecte irisante și textură cremoasă, creează un finish sofisticat și luminos."
  },
  {
    "id": 100,
    "name": "Oja Rain",
    "price": 57,
    "image": "https://andz7z.github.io/assets/corelle/oja/rain/rain.jpg",
    "video": "https://andz7z.github.io/assets/corelle/oja/rain/rain.mp4",
    "category": "Oja Semipermanenta",
    "subcategory": "oje normale",
    "description": "Oja Semipermanenta SensoPRO Rain 10ml evocă prospețimea și puritatea ploii. Cu nuanțe reci și transparente, oferă un look fresh și modern pentru orice ocazie."
  },
  {
    "id": 101,
    "name": "Oja Sacramento",
    "price": 64,
    "image": "https://andz7z.github.io/assets/corelle/oja/sacramento/sacramento.jpg",
    "video": "https://andz7z.github.io/assets/corelle/oja/sacramento/sacramento.mp4",
    "category": "Oja Semipermanenta",
    "subcategory": "oje normale",
    "description": "Oja Semipermanenta SensoPRO Sacramento 10ml aduce căldura și energiile pozitive ale Californiei. Pigmentată intens și ușor de aplicat, asigură o manichiură vibrantă și durabilă."
  },
  {
    "id": 102,
    "name": "Oja Sparkle",
    "price": 65,
    "image": "https://andz7z.github.io/assets/corelle/oja/sparkle/sparkle.jpg",
    "video": "https://andz7z.github.io/assets/corelle/oja/sparkle/sparkle.mp4",
    "category": "Oja Semipermanenta",
    "subcategory": "oje normale",
    "description": "Oja Semipermanenta SensoPRO Sparkle 10ml transformă unghiile în adevărate bijuterii strălucitoare. Cu efecte scintilante și textură de calitate, oferă un look festiv și glamuros."
  },
  {
    "id": 103,
    "name": "Oja Tropical",
    "price": 59,
    "image": "https://andz7z.github.io/assets/corelle/oja/tropical/tropical.jpg",
    "video": "https://andz7z.github.io/assets/corelle/oja/tropical/tropical.mp4",
    "category": "Oja Semipermanenta",
    "subcategory": "oje normale",
    "description": "Oja Semipermanenta SensoPRO Tropical 10ml aduce vibranta și căldura tropicelor pe unghiile tale. Cu nuanțe exotice și formula flexibilă, creează un look plin de viață și energie."
  },
  {
    "id": 104,
    "name": "Oja Wind",
    "price": 56,
    "image": "https://andz7z.github.io/assets/corelle/oja/wind/wind.jpg",
    "video": "https://andz7z.github.io/assets/corelle/oja/wind/wind.mp4",
    "category": "Oja Semipermanenta",
    "subcategory": "oje normale",
    "description": "Oja Semipermanenta SensoPRO Wind 10ml evocă libertatea și ușurința vântului. Cu nuanțe aeriene și textură fluidă, oferă un look modern și fără griji pentru orice ocazie."
  }
];
// Categoriile pentru filtrare
const categories = [
  {
    name: "Geluri UV/Led",
    options: ["geluri color", "geluri de constructie", "geluri cover", "geluri glitter", "geluri 3d"]
  },
  {
    name: "Oja semipermanenta",
    options: ["oje normale", "colectii", "oje cu efect"]
  },
  {
    name: "Tipsuri & unghii false",
    options: ["Tipsuri clasice", "tipsuri full-cover", "tipsuri transparente", "tipsuri speciale"]
  },
  {
    name: "Aparate & Echipamente",
    options: ["Lampi UV/Led", "freze electrice", "sterilizatoare", "aspiratoare praf"]
  },
  {
    name: "Accesorii",
    options: ["Pensule", "Decoruri", "Sabloane", "suporturi"]
  },
  {
    name: "Produse pentru pregatirea unghiei",
    options: ["Nail prep", "primer", "base coat", "top coat"]
  },
  {
    name: "Removers",
    options: ["Cleanser", "degresant", "acetona"]
  },
  {
    name: "Kit-uri complete",
    options: ["Kit incepatori", "Kit gel", "Kit semipermanent", "Kit profesional"]
  },
];
// Variabile globale
let cart = [];
let currentProduct = null;
let activeFilters = {
    categories: [],
    priceSort: ""
};
let currentLayout = "grid-3";

// Inițializare aplicație
document.addEventListener('DOMContentLoaded', function() {
    // Make products globally available
    window.products = products;
    
    initializeBestSellerSlider();
    initializeCart();
    initializeProductModal();
    initializeProductsPage();
    initializeFilters();
    initializeCustomAlert();
    initializeNotifications();
    initializeSearch();
    initializeCategoryTags();
    initializeReviewSystem();
});

// Initialize Review System
function initializeReviewSystem() {
    // Adaugă event listener pentru rating-ul din modal
    document.addEventListener('click', function(e) {
        const ratingElement = e.target.closest('.product-rating');
        const starElement = e.target.closest('.star');
        const ratingText = e.target.classList.contains('rating-text');
        
        if (ratingElement || starElement || ratingText) {
            console.log('=== DEBUG AUTH STATE ===');
            console.log('1. window.currentUser:', window.currentUser);
            console.log('2. window.auth.currentUser:', window.auth?.currentUser);
            console.log('3. firebase.auth().currentUser:', firebase.auth().currentUser);
            console.log('4. window.isUserLoggedIn:', window.isUserLoggedIn?.());
            
            // Verifică mai multe surse pentru starea de autentificare
            const isAuthenticated = window.currentUser || 
                                  window.auth?.currentUser || 
                                  firebase.auth().currentUser;
            
            console.log('5. Final isAuthenticated check:', isAuthenticated);
            
            if (isAuthenticated) {
                console.log('User IS authenticated, opening review modal');
                openReviewModal(currentProduct);
            } else {
                console.log('User is NOT authenticated');
                showNotification('Please log in to submit a review');
                
                // Deschide secțiunea de auth
                setTimeout(() => {
                    const authSection = document.getElementById('auth-section');
                    if (authSection) {
                        authSection.classList.add('active');
                        document.body.style.overflow = 'hidden';
                    }
                }, 1000);
            }
        }
    });
}

// Funcții pentru Review Modal
// Funcții pentru Review Modal
function openReviewModal(product) {
    console.log('=== openReviewModal DEBUG ===');
    console.log('Product:', product);
    console.log('Window currentUser:', window.currentUser);
    console.log('Auth currentUser:', window.auth?.currentUser);
    
    // Verificare multiplă a autentificării
    const user = window.currentUser || window.auth?.currentUser || firebase.auth().currentUser;
    
    if (!user) {
        console.log('User not authenticated in openReviewModal');
        showNotification('Please log in to submit a review');
        
        // Forțează deschiderea auth section
        setTimeout(() => {
            const authSection = document.getElementById('auth-section');
            if (authSection) {
                authSection.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        }, 500);
        return;
    }
    
    console.log('User authenticated, proceeding with review modal');
    
    let reviewModal = document.getElementById('review-modal');
    if (!reviewModal) {
        console.log('Creating review modal...');
        createReviewModal();
        reviewModal = document.getElementById('review-modal');
    }
    
    currentProduct = product;
    
    // Actualizează informațiile produsului în modal
    const reviewProductTitle = document.querySelector('.review-product-title');
    const reviewProductImage = document.querySelector('.review-product-image');
    const reviewProductCategory = document.querySelector('.review-product-category');
    
    if (reviewProductTitle) reviewProductTitle.textContent = product.name;
    if (reviewProductImage) {
        reviewProductImage.src = product.image;
        reviewProductImage.alt = product.name;
    }
    if (reviewProductCategory) {
        reviewProductCategory.textContent = `${product.category} - ${product.subcategory}`;
    }
    
    // Verifică dacă utilizatorul are deja un review
    checkExistingReview(product.id);
    
    // Deschide modalul
    reviewModal.classList.add('active');
    document.body.classList.add('review-modal-open');
    
    console.log('Review modal opened successfully for user:', user.displayName);
}   

function createReviewModal() {
    const reviewModal = document.createElement('div');
    reviewModal.id = 'review-modal';
    reviewModal.className = 'review-modal';
    reviewModal.innerHTML = `
        <div class="review-modal-content">
            <div class="review-modal-header">
                <h3>Share Your Experience</h3>
                <button class="close-review-modal">
                    <ion-icon name="close-outline"></ion-icon>
                </button>
            </div>
            <div class="review-product-info">
                <img src="" alt="" class="review-product-image">
                <div class="review-product-details">
                    <h4 class="review-product-title"></h4>
                    <p class="review-product-category"></p>
                </div>
            </div>
            <div class="review-form">
                <div class="rating-section">
                    <label>Your Rating:</label>
                    <div class="star-rating">
                        <input type="radio" id="star5" name="rating" value="5">
                        <label for="star5">★</label>
                        <input type="radio" id="star4" name="rating" value="4">
                        <label for="star4">★</label>
                        <input type="radio" id="star3" name="rating" value="3">
                        <label for="star3">★</label>
                        <input type="radio" id="star2" name="rating" value="2">
                        <label for="star2">★</label>
                        <input type="radio" id="star1" name="rating" value="1">
                        <label for="star1">★</label>
                    </div>
                </div>
                <div class="comment-section">
                    <label for="review-comment">Your Review:</label>
                    <textarea 
                        id="review-comment" 
                        placeholder="Share your thoughts about this product... (optional)"
                        maxlength="500"
                    ></textarea>
                    <div class="character-count">0/500</div>
                </div>
                <div class="review-actions">
                    <button class="cancel-review-btn">Cancel</button>
                    <button class="submit-review-btn" disabled>Submit Review</button>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(reviewModal);
    
    // Adaugă event listeners
    setupReviewModalEvents();
}

function setupReviewModalEvents() {
    const reviewModal = document.getElementById('review-modal');
    const closeBtn = reviewModal.querySelector('.close-review-modal');
    const cancelBtn = reviewModal.querySelector('.cancel-review-btn');
    const submitBtn = reviewModal.querySelector('.submit-review-btn');
    const starInputs = reviewModal.querySelectorAll('input[name="rating"]');
    const commentTextarea = reviewModal.querySelector('#review-comment');
    
    // Închide modalul
    closeBtn.addEventListener('click', closeReviewModal);
    cancelBtn.addEventListener('click', closeReviewModal);
    reviewModal.addEventListener('click', function(e) {
        if (e.target === reviewModal) {
            closeReviewModal();
        }
    });
    
    // Actualizează butonul de submit când se selectează un rating
    starInputs.forEach(input => {
        input.addEventListener('change', function() {
            submitBtn.disabled = false;
            submitBtn.textContent = 'Submit Review';
        });
    });
    
    // Actualizează numărul de caractere
    commentTextarea.addEventListener('input', function() {
        const count = this.value.length;
        this.parentElement.querySelector('.character-count').textContent = `${count}/500`;
    });
    
    // Submit review
    submitBtn.addEventListener('click', submitReview);
}

async function checkExistingReview(productId) {
    if (!window.currentUser) return;
    
    try {
        const existingReview = await window.getUserReviewForProduct(productId);
        const reviewModal = document.getElementById('review-modal');
        
        if (existingReview) {
            // Utilizatorul are deja un review
            const starInput = reviewModal.querySelector(`input[value="${existingReview.rating}"]`);
            if (starInput) starInput.checked = true;
            
            const commentTextarea = reviewModal.querySelector('#review-comment');
            commentTextarea.value = existingReview.comment || '';
            commentTextarea.parentElement.querySelector('.character-count').textContent = 
                `${existingReview.comment?.length || 0}/500`;
            
            const submitBtn = reviewModal.querySelector('.submit-review-btn');
            submitBtn.disabled = false;
            submitBtn.textContent = 'Update Review';
        }
    } catch (error) {
        console.error('Error checking existing review:', error);
    }
}

async function submitReview() {
    const reviewModal = document.getElementById('review-modal');
    const selectedRating = reviewModal.querySelector('input[name="rating"]:checked');
    const comment = reviewModal.querySelector('#review-comment').value.trim();
    
    if (!selectedRating) {
        showNotification('Please select a rating');
        return;
    }
    
    const rating = parseInt(selectedRating.value);
    const productId = currentProduct.id;
    
    const submitBtn = reviewModal.querySelector('.submit-review-btn');
    submitBtn.disabled = true;
    submitBtn.textContent = 'Submitting...';
    
    try {
        const success = await window.submitProductReview(productId, rating, comment);
        
        if (success) {
            showNotification('Thank you for your review!');
            closeReviewModal();
            
            // Actualizează rating-ul afișat în modalul de produs
            if (window.currentProduct && window.currentProduct.id === productId) {
                updateProductRatingDisplay(productId);
            }
        } else {
            submitBtn.disabled = false;
            submitBtn.textContent = 'Submit Review';
        }
    } catch (error) {
        console.error('Error submitting review:', error);
        showNotification('Failed to submit review. Please try again.');
        submitBtn.disabled = false;
        submitBtn.textContent = 'Submit Review';
    }
}

async function updateProductRatingDisplay(productId) {
    try {
        const ratingData = await window.getProductRating(productId);
        const ratingElement = document.querySelector('.product-rating');
        
        if (ratingElement && ratingData.reviewsCount > 0) {
            renderProductRating(ratingElement, ratingData.averageRating, ratingData.reviewsCount);
        }
    } catch (error) {
        console.error('Error updating product rating display:', error);
    }
}

function renderProductRating(ratingElement, averageRating, reviewsCount) {
    ratingElement.innerHTML = '';
    ratingElement.style.cursor = 'pointer';
    ratingElement.title = 'Click to add your review';
    
    const fullStars = Math.floor(averageRating);
    const hasHalfStar = averageRating % 1 >= 0.5;
    
    for (let i = 0; i < 5; i++) {
        const star = document.createElement('span');
        star.className = 'star';
        if (i < fullStars) {
            star.innerHTML = '★';
            star.style.color = '#ffc107';
        } else if (i === fullStars && hasHalfStar) {
            star.innerHTML = '★';
            star.style.color = '#ffc107';
            star.style.opacity = '0.7';
        } else {
            star.innerHTML = '☆';
            star.style.color = '#ccc';
        }
        ratingElement.appendChild(star);
    }
    
    const ratingText = document.createElement('span');
    ratingText.className = 'rating-text';
    ratingText.textContent = `${averageRating.toFixed(1)}/5.0 (${reviewsCount} reviews)`;
    ratingElement.appendChild(ratingText);
}

function renderNoReviewsYet(ratingElement) {
    ratingElement.innerHTML = '';
    ratingElement.style.cursor = 'pointer';
    ratingElement.title = 'Be the first to review this product';
    
    for (let i = 0; i < 5; i++) {
        const star = document.createElement('span');
        star.className = 'star';
        star.innerHTML = '☆';
        star.style.color = '#ccc';
        ratingElement.appendChild(star);
    }
    
    const ratingText = document.createElement('span');
    ratingText.className = 'rating-text';
    ratingText.textContent = 'No reviews yet - Be the first!';
    ratingText.style.color = '#666';
    ratingText.style.fontStyle = 'italic';
    ratingElement.appendChild(ratingText);
}

function closeReviewModal() {
    const reviewModal = document.getElementById('review-modal');
    if (reviewModal) {
        reviewModal.classList.remove('active');
        document.body.classList.remove('review-modal-open');
    }
}

// Funcții pentru Best Seller Slider
function initializeBestSellerSlider() {
    const sliderTrack = document.querySelector('.slider-track');
    
    // Adaugă primele 5 produse în slider
    const bestSellerProducts = products.slice(88, 93);
    
    bestSellerProducts.forEach(product => {
        const productCard = createProductCard(product);
        sliderTrack.appendChild(productCard);
    });
    
    // Implementare funcționalitate de glisare
    let isDragging = false;
    let startPos = 0;
    let currentTranslate = 0;
    let prevTranslate = 0;
    let animationID;
    
    sliderTrack.addEventListener('mousedown', dragStart);
    sliderTrack.addEventListener('touchstart', dragStart);
    sliderTrack.addEventListener('mouseup', dragEnd);
    sliderTrack.addEventListener('touchend', dragEnd);
    sliderTrack.addEventListener('mousemove', drag);
    sliderTrack.addEventListener('touchmove', drag);
    
    function dragStart(e) {
        if (e.type === 'touchstart') {
            startPos = e.touches[0].clientX;
        } else {
            startPos = e.clientX;
            e.preventDefault();
        }
        
        isDragging = true;
        animationID = requestAnimationFrame(animation);
        sliderTrack.classList.add('grabbing');
    }
    
    function drag(e) {
        if (!isDragging) return;
        
        let currentPosition = 0;
        if (e.type === 'touchmove') {
            currentPosition = e.touches[0].clientX;
        } else {
            currentPosition = e.clientX;
        }
        
        const currentDiff = currentPosition - startPos;
        
        // Limitează glisarea pentru a nu depăși limitele
        const maxTranslate = 0;
        const minTranslate = -sliderTrack.scrollWidth + sliderTrack.offsetWidth;
        
        currentTranslate = prevTranslate + currentDiff;
        
        if (currentTranslate > maxTranslate) {
            currentTranslate = maxTranslate;
        }
        
        if (currentTranslate < minTranslate) {
            currentTranslate = minTranslate;
        }
    }
    
    function dragEnd() {
        isDragging = false;
        cancelAnimationFrame(animationID);
        
        // Ajustare pentru a se alinia corect cu cardurile
        const cardWidth = document.querySelector('.product-card').offsetWidth + 20; // 20px gap
        const movedBy = currentTranslate - prevTranslate;
        
        if (Math.abs(movedBy) > cardWidth / 3) {
            if (movedBy > 0) {
                // Glisare spre dreapta
                currentTranslate = prevTranslate + cardWidth;
            } else {
                // Glisare spre stânga
                currentTranslate = prevTranslate - cardWidth;
            }
        }
        
        // Limitează glisarea pentru a nu depăși limitele
        const maxTranslate = 0;
        const minTranslate = -sliderTrack.scrollWidth + sliderTrack.offsetWidth;
        
        if (currentTranslate > maxTranslate) {
            currentTranslate = maxTranslate;
        }
        
        if (currentTranslate < minTranslate) {
            currentTranslate = minTranslate;
        }
        
        prevTranslate = currentTranslate;
        setSliderPosition();
        sliderTrack.classList.remove('grabbing');
    }
    
    function animation() {
        setSliderPosition();
        if (isDragging) requestAnimationFrame(animation);
    }
    
    function setSliderPosition() {
        sliderTrack.style.transform = `translateX(${currentTranslate}px)`;
    }
    
    // Butonul VIEW MORE
    document.querySelector('.view-more-btn').addEventListener('click', function() {
        document.getElementById('products-page').classList.add('active');
        document.body.classList.add('view-all-open');
        renderProductsGrid();
    });
}

// Funcții pentru Coșul de cumpărături
function initializeCart() {
    const cartIcon = document.querySelector('.cart-icon');
    const closeCart = document.querySelector('.close-cart');
    const cartOverlay = document.querySelector('.cart-overlay');
    
    cartIcon.addEventListener('click', openCart);
    closeCart.addEventListener('click', closeCartHandler);
    cartOverlay.addEventListener('click', closeCartHandler);
    
    // Butonul de checkout
    document.querySelector('.checkout-btn').addEventListener('click', function() {
        if (cart.length === 0) {
            showNotification('Your cart is empty! Add some products first.');
            return;
        }
        showSuccessNotification('Order placed successfully! Thank you for your purchase!');
        cart = [];
        updateCart();
        closeCartHandler();
    });
    
    // Butonul de clear cart
    document.querySelector('.clear-cart-btn').addEventListener('click', function() {
        if (cart.length === 0) {
            showNotification('Your cart is already empty!');
            return;
        }
        showCustomAlert();
    });
}

function openCart() {
    document.querySelector('.cart-sidebar').classList.add('active');
    document.querySelector('.cart-overlay').classList.add('active');
}

function closeCartHandler() {
    document.querySelector('.cart-sidebar').classList.remove('active');
    document.querySelector('.cart-overlay').classList.remove('active');
}

function addToCart(product, quantity = 1) {
    const existingItem = cart.find(item => item.id === product.id);
    
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: quantity
        });
    }
    
    updateCart();
    
    // Arată notificarea specială pentru adăugare în coș
    showCartNotification(product, quantity);
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCart();
}

function updateCartQuantity(productId, newQuantity) {
    const item = cart.find(item => item.id === productId);
    
    if (item) {
        if (newQuantity <= 0) {
            removeFromCart(productId);
        } else {
            item.quantity = newQuantity;
        }
    }
    
    updateCart();
}

function updateCart() {
    const cartItems = document.querySelector('.cart-items');
    const cartCount = document.querySelector('.cart-count');
    const subtotalPrice = document.querySelector('.subtotal-price');
    const shippingPrice = document.querySelector('.shipping-price');
    const totalPrice = document.querySelector('.total-price');
    const progressFill = document.querySelector('.progress-fill');
    const progressText = document.querySelector('.progress-text');
    const remainingAmount = document.querySelector('.remaining-amount');
    
    // Actualizează numărul de produse din coș
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
    
    // Actualizează lista de produse din coș
    cartItems.innerHTML = '';
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<p class="empty-cart">Your cart is empty</p>';
    } else {
        cart.forEach(item => {
            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            cartItem.innerHTML = `
                <img src="${item.image}" alt="${item.name}" class="cart-item-image">
                <div class="cart-item-details">
                    <h4 class="cart-item-name">${item.name}</h4>
                    <p class="cart-item-price">${item.price} RON</p>
                    <div class="cart-item-actions">
                        <button class="quantity-btn decrease" data-id="${item.id}">-</button>
                        <span class="item-quantity">${item.quantity}</span>
                        <button class="quantity-btn increase" data-id="${item.id}">+</button>
                        <button class="remove-item" data-id="${item.id}">
                            <ion-icon name="trash-outline"></ion-icon>
                        </button>
                    </div>
                </div>
            `;
            cartItems.appendChild(cartItem);
        });
        
        // Adaugă event listeners pentru butoanele din coș
        document.querySelectorAll('.decrease').forEach(btn => {
            btn.addEventListener('click', function() {
                const productId = parseInt(this.getAttribute('data-id'));
                const item = cart.find(item => item.id === productId);
                if (item) {
                    updateCartQuantity(productId, item.quantity - 1);
                }
            });
        });
        
        document.querySelectorAll('.increase').forEach(btn => {
            btn.addEventListener('click', function() {
                const productId = parseInt(this.getAttribute('data-id'));
                const item = cart.find(item => item.id === productId);
                if (item) {
                    updateCartQuantity(productId, item.quantity + 1);
                }
            });
        });
        
        document.querySelectorAll('.remove-item').forEach(btn => {
            btn.addEventListener('click', function() {
                const productId = parseInt(this.getAttribute('data-id'));
                removeFromCart(productId);
                showNotification('Item removed from cart!');
            });
        });
    }
    
    // Actualizează prețurile
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const shipping = subtotal >= 300 ? 0 : 15;
    const total = subtotal + shipping;
    
    subtotalPrice.textContent = `${subtotal} RON`;
    shippingPrice.textContent = shipping === 0 ? 'FREE' : `${shipping} RON`;
    totalPrice.textContent = `${total} RON`;
    
    // Actualizează progress bar-ul pentru transport gratuit
    const progressPercent = Math.min((subtotal / 300) * 100, 100);
    progressFill.style.width = `${progressPercent}%`;
    
    const remaining = 300 - subtotal;
    
    // Actualizează mesajul pentru transport gratuit
    if (subtotal >= 300) {
        progressText.innerHTML = '🎉 <strong>Congratulations! You got FREE shipping!</strong>';
        progressText.classList.add('free-shipping');
        remainingAmount.textContent = '0 RON';
    } else {
        progressText.innerHTML = `Add <span class="remaining-amount">${remaining}</span> RON for free shipping`;
        progressText.classList.remove('free-shipping');
        remainingAmount.textContent = `${remaining} RON`;
    }
}

// Funcții pentru Modalul de Produs
function initializeProductModal() {
    const modal = document.getElementById('product-modal');
    const backModal = document.querySelector('.back-modal');
    
    backModal.addEventListener('click', function() {
        closeProductModal();
    });
    
    // Butoanele de cantitate
    document.querySelector('.decrease-qty').addEventListener('click', function() {
        const quantityElement = document.querySelector('.quantity');
        let quantity = parseInt(quantityElement.textContent);
        if (quantity > 1) {
            quantityElement.textContent = quantity - 1;
        }
    });
    
    document.querySelector('.increase-qty').addEventListener('click', function() {
        const quantityElement = document.querySelector('.quantity');
        let quantity = parseInt(quantityElement.textContent);
        quantityElement.textContent = quantity + 1;
    });
    
    // Butonul Add to Cart
    document.querySelector('.add-to-cart-btn').addEventListener('click', function() {
        if (currentProduct) {
            const quantity = parseInt(document.querySelector('.quantity').textContent);
            addToCart(currentProduct, quantity);
            
            // Resetează cantitatea la 1
            document.querySelector('.quantity').textContent = '1';
            
            // Închide modalul după adăugare (opțional)
            setTimeout(() => {
                closeProductModal();
            }, 1500);
        }
    });
    
    // Închide modalul când se dă click în afara conținutului
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeProductModal();
        }
    });
    
    // Previne scroll-ul în fundal când modalul este deschis
    modal.addEventListener('scroll', function(e) {
        e.stopPropagation();
    });
}

function openProductModal(product) {
    currentProduct = product;
    const modal = document.getElementById('product-modal');
    
    // Blochează scroll-ul pe body
    document.body.classList.add('modal-open');
    
    // Actualizează conținutul modalului
    document.querySelector('.product-title').textContent = product.name;
    
    // Încarcă rating-ul real din baza de date
    loadProductRating(product.id);
    
    // Setează imaginea
    const image = document.querySelector('.product-image-large');
    image.src = product.image;
    image.alt = product.name;
    
    // Setează descrierea
    document.querySelector('.product-description').innerHTML = `
        <p>${product.description}</p>
        <h4>Avantaje:</h4>
        <ul>
            <li>Formula avansata, fara hema</li>
            <li>Stabilitate excelenta. Nu curge in zona cuticulei</li>
            <li>Aderenta superioara pe unghia naturala</li>
            <li>Ajuta la nivelarea unghiilor</li>
            <li>Previne exfolierea unghiilor</li>
            <li>Ajuta la o intarire flexibila a unghiilor</li>
            <li>Perfecta pentru manichiuri nude</li>
            <li>Potrivita pentru realizarea apexului</li>
            <li>Mareste rezistenta unghiei</li>
            <li>Paleta de nuante pigmentate si delicate</li>
        </ul>
        <div class="product-specs">
            <p><strong>Cantitate:</strong> 15ml</p>
            <p><strong>Colectie:</strong> WINTER 2025</p>
        </div>
    `;
    
    // Actualizează prețul butonului
    document.querySelector('.add-to-cart-btn').innerHTML = `
        <ion-icon name="cart-outline"></ion-icon>
        Add to Cart - ${product.price} RON
    `;
    
    // Generează produse similare random
    renderSimilarProducts(product);
    
    // Deschide modalul
    modal.classList.add('active');
    
    // Scroll la începutul modalului
    modal.scrollTop = 0;
}

// Make openProductModal globally available
window.openProductModal = openProductModal;

function closeProductModal() {
    const modal = document.getElementById('product-modal');
    modal.classList.remove('active');
    
    // Dezactivează blocarea scroll-ului
    document.body.classList.remove('modal-open');
}

async function loadProductRating(productId) {
    try {
        const ratingData = await window.getProductRating(productId);
        const ratingElement = document.querySelector('.product-rating');
        
        if (ratingData.reviewsCount > 0) {
            renderProductRating(ratingElement, ratingData.averageRating, ratingData.reviewsCount);
        } else {
            // Dacă nu există review-uri, afișează mesaj pentru a încuraja primul review
            renderNoReviewsYet(ratingElement);
        }
    } catch (error) {
        console.error('Error loading product rating:', error);
        const ratingElement = document.querySelector('.product-rating');
        renderNoReviewsYet(ratingElement);
    }
}

function renderSimilarProducts(currentProduct) {
    const similarProductsGrid = document.querySelector('.similar-products-grid');
    similarProductsGrid.innerHTML = '';
    
    // Filtrează produsele pentru a exclude produsul curent
    const otherProducts = products.filter(p => p.id !== currentProduct.id);
    
    // Amestecă produsele și ia primele 2
    const shuffled = [...otherProducts].sort(() => 0.5 - Math.random());
    const similarProducts = shuffled.slice(0, 2);
    
    if (similarProducts.length === 0) {
        similarProductsGrid.innerHTML = '<p>No similar products found</p>';
        return;
    }
    
    similarProducts.forEach(product => {
        const similarProductCard = document.createElement('div');
        similarProductCard.className = 'similar-product-card';
        similarProductCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="similar-product-image">
            <div class="similar-product-info">
                <h3 class="similar-product-name">${product.name}</h3>
                <p class="similar-product-price">${product.price} RON</p>
            </div>
        `;
        
        similarProductCard.addEventListener('click', function() {
            openProductModal(product);
        });
        
        similarProductsGrid.appendChild(similarProductCard);
    });
}

// ... restul funcțiilor rămân la fel (initializeProductsPage, initializeFilters, etc.)

// Funcții pentru Pagina de Produse
function initializeProductsPage() {
    // Butonul de back
    document.querySelector('.back-btn').addEventListener('click', function() {
        document.getElementById('products-page').classList.remove('active');
        document.body.classList.remove('view-all-open');
    });
    
    // Butoanele de layout
    document.querySelectorAll('.layout-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.layout-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            currentLayout = this.getAttribute('data-layout');
            const productsGrid = document.querySelector('.products-grid');
            
            productsGrid.className = 'products-grid';
            productsGrid.classList.add(currentLayout);
        });
    });
    
    // Închide pagina de produse când se dă click în afara conținutului
    document.getElementById('products-page').addEventListener('click', function(e) {
        if (e.target === this) {
            this.classList.remove('active');
            document.body.classList.remove('view-all-open');
        }
    });
}

function renderProductsGrid(filteredProducts = products) {
    const productsGrid = document.querySelector('.products-grid');
    const productsCount = document.querySelector('.products-count');
    
    productsGrid.innerHTML = '';
    productsCount.textContent = `${filteredProducts.length} products`;
    
    if (filteredProducts.length === 0) {
        productsGrid.innerHTML = '<p class="no-products">No products found matching your filters.</p>';
        return;
    }
    
    filteredProducts.forEach(product => {
        const gridProduct = document.createElement('div');
        gridProduct.className = 'grid-product';
        gridProduct.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="grid-product-image">
            <button class="favorite-btn" data-product-id="${product.id}">
                <ion-icon name="${window.isProductFavorite && window.isProductFavorite(product.id) ? 'heart' : 'heart-outline'}"></ion-icon>
            </button>
            <div class="grid-product-info">
                <h3 class="grid-product-name">${product.name}</h3>
                <p class="grid-product-price">${product.price} RON</p>
            </div>
        `;
        
        // Adaugă event listener pentru butonul de favorite
        const favoriteBtn = gridProduct.querySelector('.favorite-btn');
        favoriteBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            if (window.toggleFavorite) {
                window.toggleFavorite(product);
                
                // Actualizează iconița
                const icon = this.querySelector('ion-icon');
                if (window.isProductFavorite && window.isProductFavorite(product.id)) {
                    icon.setAttribute('name', 'heart');
                    this.classList.add('active');
                } else {
                    icon.setAttribute('name', 'heart-outline');
                    this.classList.remove('active');
                }
            }
        });
        
        gridProduct.addEventListener('click', function(e) {
            if (!e.target.closest('.favorite-btn')) {
                openProductModal(product);
            }
        });
        
        productsGrid.appendChild(gridProduct);
    });
}

// Funcții pentru Filtre
function initializeFilters() {
    const filterCategories = document.querySelector('.filter-categories');
    const priceSort = document.querySelector('.price-sort');
    const clearFiltersBtn = document.querySelector('.clear-filters');
    
    // Generează categoriile de filtrare
    categories.forEach(category => {
        const categoryElement = document.createElement('div');
        categoryElement.className = 'filter-category';
        
        categoryElement.innerHTML = `
            <h4>${category.name}</h4>
            <div class="filter-options" style="display: none;">
                ${category.options.map(option => 
                    `<div class="filter-option" data-category="${category.name}" data-option="${option}">${option}</div>`
                ).join('')}
            </div>
        `;
        
        filterCategories.appendChild(categoryElement);
        
        // Toggle pentru afișarea opțiunilor la hover
        const categoryHeader = categoryElement.querySelector('h4');
        const optionsContainer = categoryElement.querySelector('.filter-options');
        
        categoryHeader.addEventListener('mouseenter', function() {
            optionsContainer.style.display = 'block';
        });
        
        categoryElement.addEventListener('mouseleave', function() {
            optionsContainer.style.display = 'none';
        });
        
        // Adaugă event listeners pentru opțiuni
        categoryElement.querySelectorAll('.filter-option').forEach(option => {
            option.addEventListener('click', function() {
                const category = this.getAttribute('data-category');
                const optionValue = this.getAttribute('data-option');
                
                toggleFilter(category, optionValue);
            });
        });
    });
    
    // Filtrare după preț
    priceSort.addEventListener('change', function() {
        activeFilters.priceSort = this.value;
        applyFilters();
    });
    
    // Butonul Clear Filters
    clearFiltersBtn.addEventListener('click', function() {
        activeFilters = {
            categories: [],
            priceSort: ""
        };
        
        // Resetează UI-ul
        document.querySelector('.price-sort').value = "";
        document.querySelectorAll('.filter-option').forEach(option => {
            option.classList.remove('active');
        });
        
        updateActiveFiltersDisplay();
        applyFilters();
        
        // Arată notificarea
        showNotification('Filters cleared successfully!');
    });
}

function toggleFilter(category, option) {
    const filterKey = `${category}:${option}`;
    const filterIndex = activeFilters.categories.indexOf(filterKey);
    
    if (filterIndex === -1) {
        activeFilters.categories.push(filterKey);
    } else {
        activeFilters.categories.splice(filterIndex, 1);
    }
    
    updateActiveFiltersDisplay();
    applyFilters();
}

function updateActiveFiltersDisplay() {
    const activeFiltersContainer = document.querySelector('.active-filters');
    activeFiltersContainer.innerHTML = '';
    
    activeFilters.categories.forEach(filter => {
        const [category, option] = filter.split(':');
        
        const activeFilter = document.createElement('div');
        activeFilter.className = 'active-filter';
        activeFilter.innerHTML = `
            ${option}
            <button class="remove-filter" data-filter="${filter}">
                <ion-icon name="close-outline"></ion-icon>
            </button>
        `;
        
        activeFiltersContainer.appendChild(activeFilter);
    });
    
    // Adaugă event listeners pentru butoanele de eliminare filtru
    document.querySelectorAll('.remove-filter').forEach(btn => {
        btn.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            const filterIndex = activeFilters.categories.indexOf(filter);
            
            if (filterIndex !== -1) {
                activeFilters.categories.splice(filterIndex, 1);
                updateActiveFiltersDisplay();
                applyFilters();
            }
        });
    });
}

function applyFilters() {
    let filteredProducts = [...products];
    
    // Aplică filtrele după categorie
    if (activeFilters.categories.length > 0) {
        filteredProducts = filteredProducts.filter(product => {
            return activeFilters.categories.some(filter => {
                const [category, option] = filter.split(':');
                return product.category === category && product.subcategory === option;
            });
        });
    }
    
    // Aplică sortarea după preț
    if (activeFilters.priceSort) {
        filteredProducts.sort((a, b) => {
            if (activeFilters.priceSort === 'asc') {
                return a.price - b.price;
            } else {
                return b.price - a.price;
            }
        });
    }
    
    renderProductsGrid(filteredProducts);
}

// Funcție pentru Custom Alert
function initializeCustomAlert() {
    const alert = document.getElementById('custom-alert');
    const cancelBtn = document.querySelector('.alert-cancel');
    const confirmBtn = document.querySelector('.alert-confirm');
    
    cancelBtn.addEventListener('click', function() {
        alert.classList.remove('active');
    });
    
    confirmBtn.addEventListener('click', function() {
        cart = [];
        updateCart();
        closeCartHandler();
        alert.classList.remove('active');
        
        // Arată notificarea
        showNotification('Cart cleared successfully!');
    });
    
    // Închide alerta când se dă click în afara conținutului
    alert.addEventListener('click', function(e) {
        if (e.target === alert) {
            alert.classList.remove('active');
        }
    });
}

function showCustomAlert() {
    document.getElementById('custom-alert').classList.add('active');
}

// Funcții pentru Notificări
function initializeNotifications() {
    // Butonul de închidere pentru success notification
    document.querySelector('.success-close').addEventListener('click', function() {
        document.getElementById('success-notification').classList.remove('active');
    });
    
    // Butoanele pentru cart notification
    document.querySelector('.view-cart-btn').addEventListener('click', function() {
        document.getElementById('cart-notification').classList.remove('active');
        openCart();
    });
    
    document.querySelector('.continue-shopping-btn').addEventListener('click', function() {
        document.getElementById('cart-notification').classList.remove('active');
    });
}

function showNotification(message) {
    const notification = document.getElementById('notification');
    const notificationText = document.querySelector('.notification-text');
    
    notificationText.textContent = message;
    notification.classList.add('active');
    
    // Ascunde notificarea după 3 secunde
    setTimeout(() => {
        notification.classList.remove('active');
    }, 3000);
}

function showSuccessNotification(message) {
    const successNotification = document.getElementById('success-notification');
    const successText = successNotification.querySelector('p');
    
    successText.textContent = message;
    successNotification.classList.add('active');
    
    // Ascunde notificarea după 4 secunde
    setTimeout(() => {
        successNotification.classList.remove('active');
    }, 4000);
}

function showCartNotification(product, quantity) {
    const cartNotification = document.getElementById('cart-notification');
    const productName = cartNotification.querySelector('.product-added-name');
    
    productName.textContent = product.name;
    cartNotification.classList.add('active');
    
    // Ascunde notificarea după 5 secunde
    setTimeout(() => {
        if (cartNotification.classList.contains('active')) {
            cartNotification.classList.remove('active');
        }
    }, 5000);
}

// Funcție utilitară pentru crearea cardurilor de produs CU FAVORITE
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
        <img src="${product.image}" alt="${product.name}" class="product-image">
        <video class="product-video" muted loop>
            <source src="${product.video}" type="video/mp4">
        </video>
        <div class="product-info">
            <h3 class="product-name">${product.name}</h3>
            <p class="product-price">${product.price} RON</p>
        </div>
        <button class="favorite-btn" data-product-id="${product.id}">
            <ion-icon name="${window.isProductFavorite && window.isProductFavorite(product.id) ? 'heart' : 'heart-outline'}"></ion-icon>
        </button>
        <div class="product-overlay">
            <button class="read-more-btn">
                <ion-icon name="chevron-forward-outline"></ion-icon>
                Read More
            </button>
        </div>
    `;
    
    // Adaugă event listener pentru hover pentru a porni videoclipul
    card.addEventListener('mouseenter', function() {
        const video = this.querySelector('.product-video');
        video.play();
    });
    
    card.addEventListener('mouseleave', function() {
        const video = this.querySelector('.product-video');
        video.pause();
        video.currentTime = 0;
    });
    
    card.addEventListener('click', function(e) {
        if (!e.target.closest('.favorite-btn') && !e.target.closest('.read-more-btn')) {
            openProductModal(product);
        }
    });
    
    // Favorite button functionality
    const favoriteBtn = card.querySelector('.favorite-btn');
    favoriteBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        if (window.toggleFavorite) {
            window.toggleFavorite(product);
            
            // Actualizează iconița
            const icon = this.querySelector('ion-icon');
            if (window.isProductFavorite && window.isProductFavorite(product.id)) {
                icon.setAttribute('name', 'heart');
                this.classList.add('active');
            } else {
                icon.setAttribute('name', 'heart-outline');
                this.classList.remove('active');
            }
        }
    });
    
    return card;
}

// Funcții pentru Search System
function initializeSearch() {
    const searchBtn = document.querySelector('.search-btn');
    const searchPanel = document.getElementById('search-panel');
    const closeSearch = document.querySelector('.close-search');
    const searchOverlay = document.querySelector('.search-overlay');
    const searchInput = document.querySelector('.search-input');
    const searchSuggestions = document.querySelector('.search-suggestions');

    // Deschide panoul de search
    searchBtn.addEventListener('click', function() {
        searchPanel.classList.add('active');
        searchOverlay.classList.add('active');
        document.body.classList.add('search-open');
        searchInput.focus();
    });

    // Închide panoul de search - CORECTAT
    closeSearch.addEventListener('click', function(e) {
        e.stopPropagation();
        closeSearchPanel();
    });
    
    searchOverlay.addEventListener('click', closeSearchPanel);

    // Închide cu Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && searchPanel.classList.contains('active')) {
            closeSearchPanel();
        }
    });

    // AI Prediction pentru search
    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase().trim();
        if (searchTerm.length > 0) {
            const aiSuggestions = generateAISuggestions(searchTerm);
            displayAISuggestions(aiSuggestions);
        } else {
            showDefaultSuggestions();
        }
    });

    // Navighează cu săgețile și Enter
    searchInput.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
            e.preventDefault();
            navigateSuggestions(e.key);
        } else if (e.key === 'Enter') {
            e.preventDefault();
            const activeSuggestion = document.querySelector('.search-suggestion.active');
            if (activeSuggestion) {
                handleSuggestionClick(activeSuggestion);
            }
        }
    });

    // Initializează sugestiile default
    showDefaultSuggestions();
}

function closeSearchPanel() {
    const searchPanel = document.getElementById('search-panel');
    const searchOverlay = document.querySelector('.search-overlay');
    
    searchPanel.classList.remove('active');
    searchOverlay.classList.remove('active');
    document.body.classList.remove('search-open');
    
    // Resetează inputul
    document.querySelector('.search-input').value = '';
    
    // Arată sugestiile default din nou
    showDefaultSuggestions();
}

// AI Prediction Engine
function generateAISuggestions(searchTerm) {
    const suggestions = [];
    
    // Caută în produse
    const productMatches = products.filter(product => 
        product.name.toLowerCase().includes(searchTerm) ||
        product.description.toLowerCase().includes(searchTerm) ||
        product.category.toLowerCase().includes(searchTerm) ||
        product.subcategory.toLowerCase().includes(searchTerm)
    );
    
    // Adaugă produsele găsite
    productMatches.forEach(product => {
        suggestions.push({
            text: `${product.name} - ${product.price} RON`,
            type: 'product',
            product: product,
            relevance: calculateRelevance(product, searchTerm)
        });
    });
    
    // Caută în categorii
    categories.forEach(category => {
        if (category.name.toLowerCase().includes(searchTerm)) {
            suggestions.push({
                text: `Categorie: ${category.name}`,
                type: 'category',
                category: category.name,
                relevance: 0.8
            });
        }
        
        // Caută în subcategorii
        category.options.forEach(option => {
            if (option.toLowerCase().includes(searchTerm)) {
                suggestions.push({
                    text: `${category.name} - ${option}`,
                    type: 'subcategory',
                    category: category.name,
                    subcategory: option,
                    relevance: 0.7
                });
            }
        });
    });
    
    // Sugestii inteligente bazate pe pattern matching
    const commonPatterns = {
        'gel': ['Geluri UV/LED', 'geluri color', 'geluri de constructie', 'geluri cover'],
        'rubber': ['geluri color', 'Rubber Base'],
        'oja': ['Oja semipermanenta', 'oje normale'],
        'tips': ['Tipsuri & unghii false', 'Tipsuri clasice'],
        'lampa': ['Aparate & Echipamente', 'Lampi UV/Led'],
        'freza': ['Aparate & Echipamente', 'freze electrice'],
        'builder': ['geluri de constructie', 'Geluri UV/LED'],
        'cover': ['geluri cover', 'Geluri UV/LED'],
        'glitter': ['geluri glitter', 'Geluri UV/LED'],
        '3d': ['geluri 3d', 'Geluri UV/LED'],
        'base': ['geluri color', 'Rubber Base'],
        'top': ['top coat', 'Produse pentru pregatirea unghiei'],
        'primer': ['primer', 'Produse pentru pregatirea unghiei'],
        'cleaner': ['Cleanser', 'Removers'],
        'acetona': ['acetona', 'Removers']
    };
    
    // Verifică pattern-uri comune
    Object.keys(commonPatterns).forEach(pattern => {
        if (searchTerm.includes(pattern)) {
            commonPatterns[pattern].forEach(item => {
                const [mainCat, subCat] = item.split(' - ');
                if (subCat) {
                    suggestions.push({
                        text: item,
                        type: 'subcategory',
                        category: mainCat,
                        subcategory: subCat,
                        relevance: 0.6
                    });
                } else {
                    suggestions.push({
                        text: `Categorie: ${item}`,
                        type: 'category',
                        category: item,
                        relevance: 0.6
                    });
                }
            });
        }
    });
    
    // Sortează după relevanță
    return suggestions.sort((a, b) => b.relevance - a.relevance).slice(0, 10);
}

function calculateRelevance(product, searchTerm) {
    let relevance = 0;
    
    // Numele produsului are cea mai mare prioritate
    if (product.name.toLowerCase().includes(searchTerm)) {
        relevance += 2.0;
    }
    
    // Categorie
    if (product.category.toLowerCase().includes(searchTerm)) {
        relevance += 1.5;
    }
    
    // Subcategorie
    if (product.subcategory.toLowerCase().includes(searchTerm)) {
        relevance += 1.2;
    }
    
    // Descriere
    if (product.description.toLowerCase().includes(searchTerm)) {
        relevance += 0.5;
    }
    
    return relevance;
}

function displayAISuggestions(aiSuggestions) {
    const searchSuggestions = document.querySelector('.search-suggestions');
    
    if (aiSuggestions.length === 0) {
        searchSuggestions.innerHTML = `
            <div class="no-results">
                <ion-icon name="search-outline"></ion-icon>
                <p>Nu am găsit rezultate pentru căutarea ta</p>
                <small>Încearcă cu alte cuvinte cheie</small>
            </div>
        `;
        return;
    }
    
    searchSuggestions.innerHTML = aiSuggestions.map(suggestion => `
        <div class="search-suggestion" 
             data-type="${suggestion.type}"
             ${suggestion.product ? `data-product-id="${suggestion.product.id}"` : ''}
             ${suggestion.category ? `data-category="${suggestion.category}"` : ''}
             ${suggestion.subcategory ? `data-subcategory="${suggestion.subcategory}"` : ''}>
            <div class="suggestion-content">
                <span class="suggestion-text">${suggestion.text}</span>
                ${suggestion.type === 'product' ? '<span class="suggestion-badge">Produs</span>' : ''}
                ${suggestion.type === 'category' ? '<span class="suggestion-badge">Categorie</span>' : ''}
                ${suggestion.type === 'subcategory' ? '<span class="suggestion-badge">Subcategorie</span>' : ''}
            </div>
        </div>
    `).join('');
    
    // Adaugă event listeners pentru noile sugestii
    searchSuggestions.querySelectorAll('.search-suggestion').forEach((suggestion, index) => {
        suggestion.addEventListener('click', function() {
            handleSuggestionClick(this);
        });
        
        // Prima sugestie este activă by default
        if (index === 0) {
            suggestion.classList.add('active');
        }
    });
}

function showDefaultSuggestions() {
    const searchSuggestions = document.querySelector('.search-suggestions');
    
    const defaultSuggestions = [
        { text: '🔍 Caută "geluri" pentru produse', type: 'hint', search: 'geluri' },
        { text: '🔍 Caută "rubber base"', type: 'hint', search: 'rubber base' },
        { text: '🔍 Caută "oja semipermanentă"', type: 'hint', search: 'oja' },
        { text: '📞 Contact Us', type: 'page', url: '/contact' },
        { text: '❓ FAQ', type: 'page', url: '/faq' },
        { text: '💅 Toate Gelurile UV/LED', type: 'category', category: 'Geluri UV/Led' },
        { text: '🎨 Oja Semipermanentă', type: 'category', category: 'Oja semipermanenta' },
        { text: '👆 Tipsuri & Unghii False', type: 'category', category: 'Tipsuri & unghii false' },
        { text: '⚡ Aparate & Echipamente', type: 'category', category: 'Aparate & Echipamente' }
    ];
    
    searchSuggestions.innerHTML = defaultSuggestions.map(suggestion => `
        <div class="search-suggestion" 
             data-type="${suggestion.type}"
             ${suggestion.search ? `data-search="${suggestion.search}"` : ''}
             ${suggestion.category ? `data-category="${suggestion.category}"` : ''}
             ${suggestion.url ? `data-url="${suggestion.url}"` : ''}>
            <div class="suggestion-content">
                <span class="suggestion-text">${suggestion.text}</span>
            </div>
        </div>
    `).join('');
    
    // Adaugă event listeners pentru sugestiile default
    searchSuggestions.querySelectorAll('.search-suggestion').forEach((suggestion, index) => {
        suggestion.addEventListener('click', function() {
            handleSuggestionClick(this);
        });
        
        if (index === 0) {
            suggestion.classList.add('active');
        }
    });
}

function navigateSuggestions(direction) {
    const suggestions = document.querySelectorAll('.search-suggestion');
    const currentActive = document.querySelector('.search-suggestion.active');
    let currentIndex = -1;

    if (currentActive) {
        currentIndex = Array.from(suggestions).indexOf(currentActive);
    }

    let newIndex;
    if (direction === 'ArrowDown') {
        newIndex = currentIndex < suggestions.length - 1 ? currentIndex + 1 : 0;
    } else {
        newIndex = currentIndex > 0 ? currentIndex - 1 : suggestions.length - 1;
    }

    // Elimină clasa active de la toate sugestiile
    suggestions.forEach(suggestion => suggestion.classList.remove('active'));
    
    // Adaugă clasa active la sugestia curentă
    if (suggestions[newIndex]) {
        suggestions[newIndex].classList.add('active');
        suggestions[newIndex].scrollIntoView({ block: 'nearest' });
    }
}

function handleSuggestionClick(suggestionElement) {
    const type = suggestionElement.getAttribute('data-type');
    const category = suggestionElement.getAttribute('data-category');
    const subcategory = suggestionElement.getAttribute('data-subcategory');
    const url = suggestionElement.getAttribute('data-url');
    const productId = suggestionElement.getAttribute('data-product-id');
    const searchTerm = suggestionElement.getAttribute('data-search');

    if (type === 'hint' && searchTerm) {
        // Completează search bar-ul cu termenul sugerat
        document.querySelector('.search-input').value = searchTerm;
        document.querySelector('.search-input').focus();
        
        // Trigger input event pentru a genera sugestii AI
        const event = new Event('input', { bubbles: true });
        document.querySelector('.search-input').dispatchEvent(event);
        return;
    }
    else if (type === 'page') {
        // Redirecționează către pagina respectivă
        window.location.href = url;
    }
    else if (type === 'product' && productId) {
        // Deschide modalul produsului
        const product = products.find(p => p.id === parseInt(productId));
        if (product) {
            closeSearchPanel();
            openProductModal(product);
        }
    }
    else if (type === 'category' || type === 'subcategory') {
        // Deschide pagina de produse cu filtrele aplicate
        document.getElementById('products-page').classList.add('active');
        document.body.classList.add('view-all-open');
        
        // Resetează filtrele vechi
        activeFilters.categories = [];
        
        if (category) {
            if (subcategory) {
                // Filtrează după subcategorie specifică
                activeFilters.categories.push(`${category}:${subcategory}`);
            } else {
                // Filtrează după toată categoria
                const categoryObj = categories.find(c => c.name === category);
                if (categoryObj) {
                    categoryObj.options.forEach(option => {
                        activeFilters.categories.push(`${category}:${option}`);
                    });
                }
            }
        }
        
        updateActiveFiltersDisplay();
        applyFilters();
        closeSearchPanel();
    }
}

// Initializează butoanele de categorii
function initializeCategoryTags() {
    document.querySelectorAll('.category-tag').forEach(tag => {
        tag.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            
            // Deschide pagina de produse
            document.getElementById('products-page').classList.add('active');
            document.body.classList.add('view-all-open');
            
            // Aplică filtrele pentru categoria selectată
            activeFilters.categories = [];
            const categoryObj = categories.find(c => c.name === category);
            if (categoryObj) {
                categoryObj.options.forEach(option => {
                    activeFilters.categories.push(`${category}:${option}`);
                });
            }
            
            updateActiveFiltersDisplay();
            applyFilters();
            closeSearchPanel();
        });
    });
}