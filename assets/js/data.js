/* ==========================================================================
   Contenuti dinamici: bacheca news e galleria.
   Per aggiungere una news basta inserire un nuovo oggetto in cima a NEWS.
   ========================================================================== */

const IMG = "assets/img/";

window.SITE = {
  phone: "+41 91 832 13 44",
  phoneHref: "tel:+41918321344",
  email: "info@scisanbernardino.ch",
  address: "Cantonál 116, CH-6565 San Bernardino (GR)",
  booking: "https://scisanbernardino.skischool.shop/",
  instagram: "https://www.instagram.com/scisanbernardino/",
  marino: "https://www.marinosport.ch/noleggio.html",
};

/* cat: "stagione" | "corsi" | "eventi" | "gare" | "maestri"
   img: percorso relativo a assets/img (senza thumb) — se assente la news è solo testo */
window.NEWS = [
  { date: "2026-03-22", title: "Speciale Pasqua", cat: "eventi", img: "news/scisanbernardino_Pasqua-2026_22-03-2026.jpg",
    text: "Dal 3 al 6 aprile a Confin: lezioni private a CHF 65.– invece di 80.–. Per i nostri clienti 50% di sconto sugli skipass." },
  { date: "2026-03-01", title: "Lezioni private — Skipass 50%", cat: "corsi", img: "news/scisanbernardino_Skipas-50-2026.jpg",
    text: "Sci alpino, snowboard e sci di fondo. Mostrando la conferma della lezione si ottiene il 50% di riduzione sullo skipass." },
  { date: "2026-01-08", title: "5 Domeniche — Corsi collettivi", cat: "corsi", img: "news/scisanbernardino_Corsi-domenicali-2026_08-01-2026.jpg",
    text: "Snowli Club e Sci Ragazzi: si parte domenica 11 gennaio 2026 alle 09:45 a Pian Cales." },
  { date: "2025-12-29", title: "Fiaccolata maestri", cat: "eventi", img: "news/scisanbernardino_Fiaccolata-2025-2026-2.jpg",
    text: "Mercoledì 31.12.2025 ore 18:30 a Pian Cales. All'insegna della tradizione!" },
  { date: "2025-12-07", title: "Corsi Collettivi 2025-2026", cat: "stagione", img: "news/01-scisanbernardino__Colettivi-2025-2026_02-12-2025-1.jpg",
    text: "Date e tariffe: 5 giorni, weekend, domeniche e corso del sabato." },
  { date: "2025-12-07", title: "Snowli Club, Sci Ragazzi, Academy", cat: "stagione", img: "news/02-scisanbernardino_INFO-Corsi-e-SSL-2025-2026_03-11-2025-2.jpg",
    text: "I nostri corsi collettivi e i livelli Swiss Snow League." },
  { date: "2025-12-07", title: "Lezioni Private 2025-2026", cat: "stagione", img: "news/03-scisanbernardino_011-Lezioni-Private-2025-2026_04-10-2025-2.jpg",
    text: "Sci, snowboard e sci di fondo tutti i giorni dalle 09:00 alle 16:00." },
  { date: "2025-12-07", title: "Sci di fondo", cat: "stagione", img: "news/04-scisanbernardino_03-Fondo-2025-2026_11-10-2025.jpg",
    text: "Tecnica classica e skating, per principianti ed esperti." },
  { date: "2025-12-07", title: "Snowboard", cat: "stagione", img: "news/05-scisanbernardino_04-Snowboard-2025-2026_11-10-2025.jpg",
    text: "Corsi collettivi 5 giorni e lezioni private." },
  { date: "2025-12-07", title: "Skipass & impianti", cat: "stagione", img: "news/06-scisanbernardino-Impianti-di-risalita-2025-2026.jpg",
    text: "Tariffe Confin + Pian Cales, Baby Campana e posteggi." },
  { date: "2025-12-07", title: "Escursioni & sentieri invernali", cat: "stagione", img: "news/07-scisanbernardino_Escursione-e-piste-fondo_Tariffe-2025-2026.jpg",
    text: "Escursioni con ciaspole e cartina delle piste di fondo." },
  { date: "2025-12-07", title: "Diventa maestro di sci", cat: "maestri", img: "news/08-scisanbernardino_Diventa-Maestro-di-Sci-2025-2026_04-11-2025-1.jpg",
    text: "Trasforma la passione in una professione." },
  { date: "2025-12-07", title: "Swiss Champion Martina Toscano", cat: "maestri", img: "news/SSSSB_Internet-Martina-Swiss-Snow-Happ-14-04-2023.jpg",
    text: "Campionessa svizzera maestri di sci in slalom gigante — Arosa, 12 aprile 2024." },
  { date: "2023-01-29", title: "Greenhope 25.02.2023", cat: "eventi", img: "news/SSSB_Internet-News_Greenhope-A-25-02-2023.jpg" },
  { date: "2023-01-29", title: "Greenhope — Programma", cat: "eventi", img: "news/SSSB_Internet-News_Greenhope-B-25-02-2023-1.jpg" },
  { date: "2023-01-29", title: "Carnevale", cat: "corsi", img: "news/SSSB_Internet-News_Carnevale-20-02-2023-4.jpg" },
  { date: "2023-01-29", title: "Gare FIS Slalom", cat: "gare", img: "news/SSSB_internet-News_Gare-FIS-2022-2023_29-01-2023.jpg" },
  { date: "2023-01-29", title: "Corso domenicale 2", cat: "corsi", img: "news/SSSB_Internet-News_Domenicale-2-20-02-2023.jpg" },
  { date: "2022-02-25", title: "Federico Toscano", cat: "gare", img: "news/SSSB_Federico-News-24-02-2022.jpg" },
  { date: "2022-01-11", title: "Sciare a San Bernardino", cat: "eventi", img: "news/SSSB_News_Pian-Cales-riaperto-11-01-2022.jpg" },
  { date: "2021-12-29", title: "Fiaccolata 31.12 ore 18.30", cat: "eventi", img: "news/SSSB_News_Fiaccolata-31-12-2021.jpg" },
  { date: "2021-12-23", title: "Corso di Natale 2021", cat: "corsi", img: "news/SSSB_News_Corso-di-Natale-23-12-2021-1.jpg" },
  { date: "2021-12-10", title: "Prenatalizio 2021", cat: "corsi", img: "news/SSSB_News-2021-2022_Corso-Prenatalizio-11-12-2021-5.jpg" },
  { date: "2019-12-22", title: "Inizio Corsi Collettivi", cat: "corsi", img: "gare/SSSSB-Flyer-internet-News_Natale-2019-2020.jpg" },
  { date: "2019-11-11", title: "Prima nevicata", cat: "eventi", text: "La prima neve è arrivata a San Bernardino: la stagione si avvicina!" },
  { date: "2019-03-07", title: "Sci in maschera", cat: "eventi", img: "gare/Foto-Flyer-Carnevale-in-maschera-2019.jpg" },
  { date: "2019-02-22", title: "Evergreen on tour", cat: "eventi", img: "gare/img_95093402508415743873230.jpg", wide: true },
  { date: "2019-02-18", title: "Corso di Carnevale", cat: "corsi", img: "gare/Foto-Flyer-Carnevale-2019.jpg" },
  { date: "2019-02-18", title: "Slalom Internazionale FIS", cat: "gare", img: "gare/FIS-SL-Podio_News-12-02-2019.jpg" },
  { date: "2019-02-02", title: "Corso Domenicale 2", cat: "corsi", img: "gare/Corso-Domenicale-2_News-2018-2019.jpg" },
  { date: "2019-01-10", title: "11 e 12.02.2019 Slalom FIS — Gara internazionale", cat: "gare", img: "gare/Flyer-Slalom-FIS-11e12-02-2019.jpg" },
  { date: "2019-01-07", title: "13.01.2019 Sci Alpino — Corso domenicale", cat: "corsi", img: "gare/Foto-Info_Sci-alpino-B-07-01-2019-B-1-800x324.jpg", wide: true,
    list: ["5 domeniche consecutive di corso collettivo", "13.01. / 20.01. / 27.01. / 03.02. / 10.02.", "Ore 10:00 inizio corso", "Ritrovo Baby Lift Campana"] },
  { date: "2019-01-07", title: "12.01.2019 Sci di Fondo — Corso di sabato", cat: "corsi", img: "gare/Foto-Info_Fondo-07.01.2019-A.jpg", wide: true,
    list: ["5 sabati consecutivi di corso collettivo", "12.01. / 19.01. / 26.01. / 02.02. / 09.02.", "Ore 10:00 inizio corso", "Ritrovo cassa pista sci di fondo Fornas"] },
  { date: "2019-01-01", title: "Programma corso di Capodanno", cat: "corsi",
    list: ["1° giorno martedì 01.01.2019 inizio lezioni ore 13:00", "2° – 5° giorno inizio lezioni ore 10:00", "Giovedì 3 gen. ore 16:30 in slitta genitore-figlio", "Sabato 5 gen. ore 10:30 gara di fine corso"] },
  { date: "2018-12-27", title: "Capodanno con la fiaccolata maestri", cat: "eventi",
    text: "Siete tutti invitati alla tradizionale fiaccolata maestri della Scuola Svizzera di Sci e Snowboard San Bernardino, ritrovo ore 18:30 in Pian Cales." },
  { date: "2018-12-20", title: "Inizio corso di Natale", cat: "corsi",
    text: "27.12.2018 — Inizio dei corsi di gruppo con il corso di Natale." },
];

window.GALLERY = [
  "20191208_122414", "20191208_122744", "20191208_124027", "20191208_130401", "20191229_130239", "20191229_141052",
  "SSSSB-30-Dic_-Andrea-Cat-30-12-2020-1", "SSSSB-30-Dic_-Aria-Laura-Elisa-30-12-2020-1", "SSSSB-30-Dic_-Gruppo_Andrea-Alli-30-12-2020-1",
  "SSSSB-30-Dic_-Gruppo_Gianluca-B-30-12-2020-1", "SSSSB-30-Dic_-Gruppo_Gianluca-30-12-2020-1", "SSSSB-30-Dic_-Gruppo_Marino-Andrea-Deg-30-12-2020-1",
  "SSSSB-30-Dic_-Gruppo_Massimo-30-12-2020-1", "SSSSB-30-Dic_-Gruppo_SNOWLI-CLUB-30-12-2020-1",
  "SSSSB-Gruppo-GARA_-Andrea-Alli-05-01-2020", "SSSSB-Gruppo-GARA_-Andrea-Deg-05-01-2020", "SSSSB-Gruppo-GARA_-AndreaCat-05-01-2020",
  "SSSSB-Gruppo-GARA_-Francesco-J-05-01-2020", "SSSSB-Gruppo-GARA_-Giacomo-V-05-01-2020", "SSSSB-Gruppo-GARA_-Laura-Elisa-05-01-2020",
  "SSSSB-Gruppo-GARA_-Laura-Paolo-05-01-2020", "SSSSB-Gruppo-GARA_-Manuel-05-01-2020", "SSSSB-Gruppo-GARA_-Marino-05-01-2020",
  "SSSSB-Gruppo-GARA_-Martina-05-01-2020", "SSSSB-Gruppo-GARA_-Massimo-05-01-2020", "SSSSB-Gruppo-GARA_-Willy-Francesco-05-01-2020",
  "SSSSB-Gruppo_-Andrea-Alli-05-01-2020", "SSSSB-Gruppo_-Giacomo-V-05-01-2020", "SSSSB-Gruppo_-Manuel-05-01-2020",
  "SSSSB-Gruppo_-Marino-Andrea-Deg-05-01-2020", "SSSSB-Gruppo_-Martina-05-01-2020", "SSSSB-Gruppo_-Massimo-05-01-2020",
  "SSSSB_Gruppo-Willy_Laura_Paolo-05-01-2020",
].map((n) => {
  let caption = "San Bernardino";
  if (n.startsWith("2019")) caption = "Paesaggi invernali — San Bernardino";
  else if (n.includes("GARA")) caption = "Gara di fine corso — 05.01.2020 · gruppo " + n.split("GARA_-")[1].replace(/-05-01-2020$/, "").replace(/-/g, " ");
  else if (n.includes("30-Dic")) caption = "Corso di Natale — 30.12.2020 · " + n.split("30-Dic_-")[1].replace(/-30-12-2020-1$/, "").replace(/Gruppo_/, "gruppo ").replace(/[-_]/g, " ");
  else caption = "Corso di Capodanno — 05.01.2020 · gruppo " + n.replace(/^SSSSB[-_]Gruppo[-_]+/, "").replace(/-05-01-2020$/, "").replace(/[-_]/g, " ");
  return { full: IMG + "galleria/" + n + ".jpg", thumb: IMG + "galleria/thumb/" + n + ".jpg", caption };
});
