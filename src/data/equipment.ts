import { Equipment, EquipmentCategory } from "@/types/equipment";

export const equipmentData: Equipment[] = [
  {
    id: "minigraver-1-7t",
    name: "Minigraver 1.7T",
    brand: "Kubota",
    category: "Minigraver",
    shortDescription: "Compacte minigraver voor smalle tuinen, binnenruimtes en lichte graafwerkzaamheden.",
    description:
      "De Kubota 1.7T minigraver is de ideale keuze voor kleine projecten waarbij ruimte schaars is. Met een transportbreedte van slechts 75 cm past deze machine door vrijwel elke toegangspoort. Ondanks zijn compacte afmetingen levert hij uitstekende graafprestaties voor tuin- en rioleringswerk. De machine is uitgerust met een automatisch uitschuifbaar onderstel en een 360° draaibare bovenstructuur.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80",
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
    ],
    specs: [
      { label: "Gewicht",            value: "1.700 kg" },
      { label: "Vermogen",           value: "11.4 kW" },
      { label: "Graafdiepte",        value: "230 cm",  highlight: true },
      { label: "Transportbreedte",   value: "75 cm" },
      { label: "Bereik",             value: "360 cm" },
      { label: "Bakinhoud",          value: "0.04 m³" },
      { label: "Rijbewijs",          value: "Niet vereist" },
      { label: "Brandstof",          value: "Diesel" },
    ],
    toepassingen: [
      "Tuinaanleg & vijvers",
      "Binnenruimtes & kelders",
      "Lichte rioleringswerken",
      "Sleuvengraven nutsvoorzieningen",
    ],
    tags: ["Compact", "Stedelijk"],
    dailyRate: 180,
    weeklyRate: 720,
    featured: false,
    available: true,
    relatedIds: ["minigraver-3-5t", "minigraver-6t"],
    seoTitle: "Minigraver 1.7T Verhuur | Kubota | Trova Verhuur Amsterdam",
    seoDescription: "Huur een Kubota Minigraver 1.7T voor €180/dag. Compact en krachtig voor tuin- en rioleringswerk. Direct beschikbaar in Amsterdam.",
  },
  {
    id: "minigraver-3-5t",
    name: "Minigraver 3.5T",
    brand: "Bobcat",
    category: "Minigraver",
    shortDescription: "Onze meest verhuurde machine — veelzijdig, krachtig en compact voor middelgroot grondverzet.",
    description:
      "De Bobcat 3.5T minigraver is de absolute bestseller van ons machinepark. Deze veelzijdige machine combineert compactheid met echte graafkracht en is geschikt voor een breed scala aan projecten: van tuinaanleg en rioleringswerkzaamheden tot fundatiegraven en kelderuitgravingen. De machine is uitgerust met een proportioneel hydraulisch systeem, automatisch uitschuifbaar onderstel en een rotatiekoppeling voor snelle wisselstukken.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    ],
    specs: [
      { label: "Gewicht",            value: "3.500 kg" },
      { label: "Vermogen",           value: "24.4 kW" },
      { label: "Graafdiepte",        value: "320 cm",  highlight: true },
      { label: "Transportbreedte",   value: "160 cm" },
      { label: "Bereik",             value: "530 cm" },
      { label: "Bakinhoud",          value: "0.10 m³" },
      { label: "Rijbewijs",          value: "Niet vereist" },
      { label: "Brandstof",          value: "Diesel" },
    ],
    toepassingen: [
      "Grondwerk nieuwbouw & verbouw",
      "Riolering & leidingwerk",
      "Vijver & drainage aanleg",
      "Fundaties & kelderwerk",
    ],
    tags: ["Meest verhuurd", "Veelzijdig"],
    dailyRate: 240,
    weeklyRate: 980,
    featured: true,
    available: true,
    relatedIds: ["minigraver-1-7t", "minigraver-6t", "shovel-13t"],
    seoTitle: "Minigraver 3.5T Verhuur | Bobcat | Trova Verhuur Amsterdam",
    seoDescription: "Huur een Bobcat Minigraver 3.5T voor €240/dag. Meest verhuurde machine. Direct beschikbaar in Amsterdam en omgeving.",
  },
  {
    id: "minigraver-6t",
    name: "Minigraver 6T",
    brand: "Volvo",
    category: "Minigraver",
    shortDescription: "Krachtige minigraver voor zware grondwerken, fundaties en diep sleuvengraven.",
    description:
      "De Volvo 6T minigraver levert serieuze prestaties voor zwaardere projecten. Met een graafdiepte van 410 cm en een stevige bakinhoud is deze machine uitermate geschikt voor diep fundatiewerk, kelderuitgravingen en zwaar rioleringswerk. De Volvo EC60E staat bekend om zijn betrouwbaarheid, lage brandstofverbruik en gebruiksvriendelijke bediening. Inclusief automatisch uitschuifbaar onderstel voor optimale stabiliteit.",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1200&q=80",
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
    ],
    specs: [
      { label: "Gewicht",            value: "6.000 kg" },
      { label: "Vermogen",           value: "37.5 kW" },
      { label: "Graafdiepte",        value: "410 cm",  highlight: true },
      { label: "Transportbreedte",   value: "230 cm" },
      { label: "Bereik",             value: "680 cm" },
      { label: "Bakinhoud",          value: "0.22 m³" },
      { label: "Rijbewijs",          value: "Niet vereist" },
      { label: "Brandstof",          value: "Diesel" },
    ],
    toepassingen: [
      "Zware fundaties & kelderwerk",
      "Diep sleuvengraven",
      "Sloop & opruimwerkzaamheden",
      "Zwaar rioleringswerk",
    ],
    tags: ["Zwaar werk", "Fundaties"],
    dailyRate: 320,
    weeklyRate: 1280,
    featured: true,
    available: true,
    relatedIds: ["minigraver-3-5t", "shovel-13t"],
    seoTitle: "Minigraver 6T Verhuur | Volvo | Trova Verhuur Amsterdam",
    seoDescription: "Huur een Volvo Minigraver 6T voor €320/dag. Krachtig voor zware fundaties en kelderwerk. Direct beschikbaar.",
  },
  {
    id: "shovel-13t",
    name: "Shovel 13T",
    brand: "Caterpillar",
    category: "Shovel",
    shortDescription: "Zware rupskraan voor infrastructuur, wegenbouw en grootschalige grondverzet projecten.",
    description:
      "De Caterpillar 13T shovel is onze zwaarste machine en is ontworpen voor grootschalige grondverzetprojecten. Met een indrukwekkende graafdiepte van 510 cm en een bakinhoud van 0.55 m³ verplaatst deze machine enorme hoeveelheden grond per cyclus. De Cat 313 is uitgerust met de nieuwste Next Generation-technologie voor maximale productiviteit en minimaal brandstofverbruik. Ideaal voor wegenbouw, infrastructuurprojecten en grote bouwterreinen.",
    image: "https://images.unsplash.com/photo-1590496793929-36417d3117de?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1590496793929-36417d3117de?w=1200&q=80",
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80",
    ],
    specs: [
      { label: "Gewicht",            value: "13.000 kg" },
      { label: "Vermogen",           value: "70.5 kW" },
      { label: "Graafdiepte",        value: "510 cm",  highlight: true },
      { label: "Transportbreedte",   value: "260 cm" },
      { label: "Bereik",             value: "830 cm" },
      { label: "Bakinhoud",          value: "0.55 m³" },
      { label: "Rijbewijs",          value: "Niet vereist" },
      { label: "Brandstof",          value: "Diesel" },
    ],
    toepassingen: [
      "Infrastructuur & wegenbouw",
      "Grote bouwterreinen",
      "Afgraven & ophogen",
      "Sloop grote constructies",
    ],
    tags: ["Zwaar", "Infrastructuur"],
    dailyRate: 480,
    weeklyRate: 1900,
    featured: true,
    available: true,
    relatedIds: ["minigraver-6t", "wiellader-g2500"],
    seoTitle: "Shovel 13T Verhuur | Caterpillar | Trova Verhuur Amsterdam",
    seoDescription: "Huur een Caterpillar Shovel 13T voor €480/dag. Voor infrastructuur en grootschalig grondverzet. Direct beschikbaar.",
  },
  {
    id: "wiellader-g2500",
    name: "Giant G2500 X-TRA",
    brand: "Giant",
    category: "Wiellader",
    shortDescription: "Compacte wiellader met hoge hefcapaciteit voor laad-, transport- en palletwerkzaamheden.",
    description:
      "De Giant G2500 X-TRA is een veelzijdige compacte wiellader die uitblinkt in laad- en transportwerkzaamheden op bouwplaatsen, tuincentra en agrarische bedrijven. Met een hefcapaciteit van 2.500 kg en een breed assortiment aan wisselbakken (pallet vork, brede bak, greep) is deze machine inzetbaar voor bijna elk materiaalverplaatsingsproject. De joystick-bediening zorgt voor intuïtief en productief werken.",
    image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=1200&q=80",
    ],
    specs: [
      { label: "Gewicht",            value: "4.200 kg" },
      { label: "Hefcapaciteit",      value: "2.500 kg", highlight: true },
      { label: "Hefhoogte",          value: "310 cm" },
      { label: "Transportbreedte",   value: "170 cm" },
      { label: "Vermogen",           value: "49 kW" },
      { label: "Aandrijving",        value: "4WD Hydrostatisch" },
      { label: "Rijbewijs",          value: "Niet vereist" },
      { label: "Brandstof",          value: "Diesel" },
    ],
    toepassingen: [
      "Pallets & materialen laden",
      "Grond- en puinverplaatsing",
      "Agrarische toepassingen",
      "Bouwplaats logistiek",
    ],
    tags: ["Veelzijdig", "Hoog hefvermogen"],
    dailyRate: 290,
    weeklyRate: 1150,
    featured: true,
    available: true,
    relatedIds: ["wiellader-g1500", "wiellader-g2200e"],
    seoTitle: "Giant G2500 Wiellader Verhuur | Trova Verhuur Amsterdam",
    seoDescription: "Huur een Giant G2500 X-TRA wiellader voor €290/dag. 2500 kg hefcapaciteit. Direct beschikbaar in Amsterdam.",
  },
  {
    id: "wiellader-g1500",
    name: "Giant G1500 X-TRA",
    brand: "Giant",
    category: "Wiellader",
    shortDescription: "Lichte compacte wiellader voor smalle ruimtes en lichte materiaalverplaatsing.",
    description:
      "De Giant G1500 X-TRA is ideaal voor kleinschalige laad- en transporttaken op locaties met beperkte ruimte. Met een transportbreedte van slechts 130 cm rijdt deze machine door smallere poorten en gangen. De machine is eenvoudig te bedienen via de joystick en compatibel met alle standaard Giant wisselbakken.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80",
    ],
    specs: [
      { label: "Gewicht",            value: "2.800 kg" },
      { label: "Hefcapaciteit",      value: "1.500 kg", highlight: true },
      { label: "Hefhoogte",          value: "270 cm" },
      { label: "Transportbreedte",   value: "130 cm" },
      { label: "Vermogen",           value: "35 kW" },
      { label: "Aandrijving",        value: "4WD Hydrostatisch" },
      { label: "Rijbewijs",          value: "Niet vereist" },
      { label: "Brandstof",          value: "Diesel" },
    ],
    toepassingen: [
      "Smalle ruimtes & binnenplaatsen",
      "Lichte materiaalverplaatsing",
      "Tuincentra & kwekerijen",
      "Kleine bouwplaatsen",
    ],
    tags: ["Compact", "Licht"],
    dailyRate: 240,
    weeklyRate: 960,
    featured: false,
    available: true,
    relatedIds: ["wiellader-g2500", "wiellader-g2200e"],
    seoTitle: "Giant G1500 Wiellader Verhuur | Trova Verhuur Amsterdam",
    seoDescription: "Huur een Giant G1500 X-TRA wiellader voor €240/dag. Compact en wendbaar voor smalle ruimtes.",
  },
  {
    id: "wiellader-g2200e",
    name: "Giant G2200E Elektrisch",
    brand: "Giant",
    category: "Elektrisch",
    shortDescription: "Volledig elektrische wiellader — emissievrij, stil en perfect voor binnenwerkzaamheden.",
    description:
      "De Giant G2200E is de elektrische variant van de populaire G2200 wiellader. Met een volledig elektrische aandrijving stoot deze machine geen uitlaatgassen uit, is hij stil in gebruik en ideaal voor binnenwerkzaamheden of projecten in milieugevoelige gebieden. De lithium-ion accu biedt een volledige werkdag aan bedrijfstijd bij normaal gebruik. Inclusief snellader.",
    image: "https://images.unsplash.com/photo-1593941707882-a56bbc8427f9?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1593941707882-a56bbc8427f9?w=1200&q=80",
    ],
    specs: [
      { label: "Gewicht",            value: "3.600 kg" },
      { label: "Hefcapaciteit",      value: "2.200 kg", highlight: true },
      { label: "Hefhoogte",          value: "300 cm" },
      { label: "Transportbreedte",   value: "155 cm" },
      { label: "Accu",               value: "Li-Ion 48V / 280 Ah" },
      { label: "Laadtijd",           value: "ca. 4 uur" },
      { label: "Emissie",            value: "Nul emissie",  highlight: true },
      { label: "Rijbewijs",          value: "Niet vereist" },
    ],
    toepassingen: [
      "Binnenwerkzaamheden",
      "Stadscentra & emissiezones",
      "Ziekenhuizen & scholen",
      "Duurzame bouwprojecten",
    ],
    tags: ["Elektrisch", "Emissievrij", "Nieuw"],
    dailyRate: 310,
    weeklyRate: 1240,
    featured: true,
    available: true,
    relatedIds: ["wiellader-g2500", "wiellader-g1500"],
    seoTitle: "Elektrische Wiellader G2200E Verhuur | Giant | Trova Verhuur",
    seoDescription: "Huur een elektrische Giant G2200E wiellader voor €310/dag. Nul emissie, stil, perfect voor binnen. Direct beschikbaar.",
  },
  {
    id: "tandemasser-kipper",
    name: "Tandemasser met Kipper",
    brand: "Proline",
    category: "Aanhanger",
    shortDescription: "Robuuste tandemasser kipper voor transport van grond, puin en materialen tot 3.500 kg.",
    description:
      "De Proline tandemasser kipper is onmisbaar voor het afvoeren van grond, puin of het aanvoeren van materialen bij grondverzetprojecten. Met een laadvermogen van 3.500 kg en een kipper-functie is het lossen snel en zonder extra handarbeid mogelijk. De aanhanger is voorzien van een stabiele vloer, hoge bordenwanden en een volledige verlichtingsset. Kan gecombineerd worden met een trekker van minimaal 2.500 kg.",
    image: "https://images.unsplash.com/photo-1558981285-6f0c94958bb6?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1558981285-6f0c94958bb6?w=1200&q=80",
    ],
    specs: [
      { label: "Laadvermogen",       value: "3.500 kg", highlight: true },
      { label: "Laadoppervlak",      value: "420 × 210 cm" },
      { label: "Eigen gewicht",      value: "1.100 kg" },
      { label: "Totaal gewicht",     value: "4.600 kg" },
      { label: "Kipper",             value: "Hydraulisch" },
      { label: "Koppeling",          value: "50mm kogel" },
      { label: "Verlichting",        value: "Volledig LED" },
      { label: "Rijbewijs",          value: "BE" },
    ],
    toepassingen: [
      "Grond- en puinafvoer",
      "Zand & grindtransport",
      "Planttransport tuinprojecten",
      "Bouwmaterialen aanvoer",
    ],
    tags: ["Kipper", "Zwaar transport"],
    dailyRate: 120,
    weeklyRate: 490,
    featured: false,
    available: true,
    relatedIds: ["machine-transporter", "minigraver-3-5t"],
    seoTitle: "Tandemasser Kipper Verhuur | Trova Verhuur Amsterdam",
    seoDescription: "Huur een tandemasser kipper voor €120/dag. 3500 kg laadvermogen. Direct beschikbaar in Amsterdam.",
  },
  {
    id: "machine-transporter",
    name: "Machinetransporter",
    brand: "Humbaur",
    category: "Aanhanger",
    shortDescription: "Verlaagde machinetransporter voor veilig vervoer van minigravers, wielladers en andere machines.",
    description:
      "De Humbaur machinetransporter is speciaal ontworpen voor het veilig vervoer van zware bouwmachines. Het verlaagde laadbed maakt op- en afrijden eenvoudig via de oprijplanken. Geschikt voor minigravers tot 6T, wielladers en andere rijdende machines. De transporter is uitgerust met meerdere sjorpunten, ledverlichtingsset en rijschakelaars voor veilig transport over de openbare weg.",
    image: "https://images.unsplash.com/photo-1558981285-6f0c94958bb6?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1558981285-6f0c94958bb6?w=1200&q=80",
    ],
    specs: [
      { label: "Laadvermogen",       value: "6.000 kg", highlight: true },
      { label: "Laadlengte",         value: "520 cm" },
      { label: "Laadoppervlak",      value: "520 × 220 cm" },
      { label: "Laadbed hoogte",     value: "73 cm" },
      { label: "Oprijhoek",          value: "11°" },
      { label: "Koppeling",          value: "50mm kogel" },
      { label: "Verlichting",        value: "Volledig LED" },
      { label: "Rijbewijs",          value: "BE" },
    ],
    toepassingen: [
      "Transport minigravers & shovels",
      "Transport wielladers",
      "Verplaatsen bouwmachines",
      "Verhuur combinatiepakket",
    ],
    tags: ["Machinetransport", "Verlaagd bed"],
    dailyRate: 95,
    weeklyRate: 380,
    featured: false,
    available: true,
    relatedIds: ["tandemasser-kipper", "minigraver-3-5t"],
    seoTitle: "Machinetransporter Verhuur | Humbaur | Trova Verhuur Amsterdam",
    seoDescription: "Huur een machinetransporter voor €95/dag. Geschikt voor minigravers tot 6T. Direct beschikbaar in Amsterdam.",
  },
];

export function getEquipmentById(id: string): Equipment | undefined {
  return equipmentData.find((e) => e.id === id);
}

export function getEquipmentByCategory(
  category: EquipmentCategory | "Alle"
): Equipment[] {
  if (category === "Alle") return equipmentData;
  return equipmentData.filter((e) => e.category === category);
}

export function getFeaturedEquipment(): Equipment[] {
  return equipmentData.filter((e) => e.featured);
}

export function getAllCategories(): Array<{
  name: EquipmentCategory | "Alle";
  count: number;
}> {
  const cats = [
    "Alle",
    ...Array.from(new Set(equipmentData.map((e) => e.category))),
  ] as Array<EquipmentCategory | "Alle">;

  return cats.map((name) => ({
    name,
    count:
      name === "Alle"
        ? equipmentData.length
        : equipmentData.filter((e) => e.category === name).length,
  }));
}

export function getRelatedEquipment(
  equipment: Equipment,
  limit = 3
): Equipment[] {
  if (equipment.relatedIds && equipment.relatedIds.length > 0) {
    const related = equipment.relatedIds
      .map((id) => getEquipmentById(id))
      .filter((e): e is Equipment => e !== undefined);
    return related.slice(0, limit);
  }
  return equipmentData
    .filter((e) => e.id !== equipment.id && e.category === equipment.category)
    .slice(0, limit);
}
