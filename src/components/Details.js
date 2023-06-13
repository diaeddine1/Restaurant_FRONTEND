/*import { useParams } from 'react-router-dom';



import React from 'react'

export default function Details() {
const { name } = useParams();

// use the `name` parameter to fetch and display the details of the container

return (
  <div className="details">
    <h2>{name} details</h2>
    <p>Container details go here</p>
  </div>
);
}*/

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import data from "./data.json";
import Contain from "./Contain";
import "leaflet/dist/leaflet.css";
import Mapp from "./Mapp";
// import { Carousel } from 'react-responsive-carousel';
// import "react-responsive-carousel/lib/styles/carousel.min.css";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import { BsStarFill, BsFillTelephoneFill } from "react-icons/bs";
import "../App.css";
import Rating from "./Rating";
import { FaMapMarkerAlt } from "react-icons/fa";
import { BsClock } from "react-icons/bs";
import { MdPriceChange } from "react-icons/md";
import Etat from "./Etat";
import { Link } from "react-router-dom";
import axios from "axios";
function Details() {
  const userid = localStorage.getItem("userid");
  const user = localStorage.getItem("user");
  const [photos, setphotos] = useState([])
  const [information, setinformation] = useState([])
  data = [
    {
      id: 1,
      restaurant: "Gusto",
      review: "89",
      adresse: "Bd Mohamed VI Zone De L'Agdal, Marrakech 40020 Morocco",
      etat: " Closed now",
      price_range: "$10 - $30",
      cuisines: "Italian, Mediterranean",
      tel: "+212 642-555858",
      map: "TcU_https://maps.google.com/maps?saddr=&daddr=Bd+Mohamed+VI+Zone+De+L%27Agdal%2C+Marrakech+40020+Morocco@31.578676,-7.982995_fdl",
      rating: "4.5",
      latitude: "31.578676",
      longitude: "-7.982995",
      img1: "https://media-cdn.tripadvisor.com/media/photo-s/26/13/17/97/restaurant-atmosphere.jpg",
      img2: "https://media-cdn.tripadvisor.com/media/photo-s/26/13/17/92/restaurant-atmosphere.jpg",
      img3: "https://media-cdn.tripadvisor.com/media/photo-f/25/b8/5b/f0/gusto.jpg",
      img4: "https://media-cdn.tripadvisor.com/media/photo-f/26/13/17/8a/restaurant-atmosphere.jpg",
      img5: "https://media-cdn.tripadvisor.com/media/photo-f/26/13/17/65/cocktail-by-gusto.jpg",
    },
    {
      id: 2,
      restaurant: "Pepe Nero",
      review: "4,696",
      adresse: "17 Derb Cherkaoui Douar Graoua, Marrakech 40000 Morocco",
      etat: " Closed now",
      price_range: "Not Specified",
      cuisines:
        "Local cuisine, Italian, Moroccan, Mediterranean, European, Healthy",
      tel: "+212 5243-89067",
      map: "Bj8_https://maps.google.com/maps?saddr=&daddr=17+Derb+Cherkaoui+Douar+Graoua%2C+Marrakech+40000+Morocco@31.62524,-7.984018_0A7",
      rating: "4.5",
      latitude: "31.62524",
      longitude: "-7.984018",
      img1: "https://media-cdn.tripadvisor.com/media/photo-s/26/44/56/07/pepe-nero-restaurant.jpg",
      img2: "https://media-cdn.tripadvisor.com/media/photo-s/01/e1/66/5b/pepe-nero-fragole-e-cioccolato.jpg",
      img3: "https://media-cdn.tripadvisor.com/media/photo-f/01/e1/66/48/pepe-nero-dining-saloon.jpg",
      img4: "https://media-cdn.tripadvisor.com/media/photo-f/01/e1/66/44/pepe-nero-moroccan-saloon.jpg",
      img5: "https://media-cdn.tripadvisor.com/media/photo-f/01/e1/66/3f/pepe-nero-music-saloon.jpg",
    },
    {
      id: 3,
      restaurant: "Gm Cafe Gourmet",
      review: "300",
      adresse:
        "Croisement Av. Moulay Hassan Et Rue Imam Malik, Marrakech 40000 Morocco",
      etat: " Closed now",
      price_range: "$5 - $25",
      cuisines: "Italian, Japanese, Thai",
      tel: "+212 5244-33738",
      map: "gWW_https://maps.google.com/maps?saddr=&daddr=Croisement+Av.+Moulay+Hassan+Et+Rue+Imam+Malik%2C+Marrakech+40000+Morocco@31.62827,-8.005798_puC",
      rating: "5.0",
      latitude: "31.62827",
      longitude: "-8.005798",
      img1: "https://media-cdn.tripadvisor.com/media/photo-s/22/e3/ee/6b/gm-cafe-gourmet.jpg",
      img2: "https://media-cdn.tripadvisor.com/media/photo-p/22/e4/13/51/situe-au-boulevard-moulay.jpg",
      img3: "https://media-cdn.tripadvisor.com/media/photo-s/22/e4/13/52/situe-au-boulevard-moulay.jpg",
      img4: "https://media-cdn.tripadvisor.com/media/photo-s/22/e4/13/50/situe-au-boulevard-moulay.jpg",
      img5: "https://media-cdn.tripadvisor.com/media/photo-s/22/e4/13/4f/situe-au-boulevard-moulay.jpg",
    },
    {
      id: 4,
      restaurant: "La Palette Restaurant Marrakech",
      review: "707",
      adresse: "24 Rue Moulay Ali, Marrakech 40000 Morocco",
      etat: " Closed now",
      price_range: "$7 - $28",
      cuisines:
        "Gastropub, Moroccan, Mediterranean, European, Healthy, Dining bars",
      tel: "+212 622-513311",
      map: "qpl_https://maps.google.com/maps?saddr=&daddr=24+Rue+Moulay+Ali%2C+Marrakech+40000+Morocco@31.637623,-8.013369_4OH",
      rating: "5.0",
      latitude: "31.637623",
      longitude: "-8.013369",
      img1: "https://media-cdn.tripadvisor.com/media/photo-s/19/e0/e2/ec/salle-principale-de-la.jpg",
      img2: "https://media-cdn.tripadvisor.com/media/photo-s/19/ea/40/c0/la-palette-restaurant.jpg",
      img3: "https://media-cdn.tripadvisor.com/media/photo-f/1a/02/12/8c/la-palette-restaurant.jpg",
      img4: "https://media-cdn.tripadvisor.com/media/photo-f/19/ea/41/75/la-palette-restaurant.jpg",
      img5: "https://media-cdn.tripadvisor.com/media/photo-f/19/ea/41/3e/la-palette-restaurant.jpg",
    },
    {
      id: 5,
      restaurant: "My Taher",
      review: "399",
      adresse: "9 Rue des Banques, Marrakech 40000 Morocco",
      etat: " Closed now",
      price_range: "Not Specified",
      cuisines: "Moroccan, Mediterranean",
      tel: "+212 661-142012",
      map: "h8O_https://maps.google.com/maps?saddr=&daddr=9+Rue+des+Banques%2C+Marrakech+40000+Morocco@31.62626,-7.986915_qSB",
      rating: "5.0",
      latitude: "31.62626",
      longitude: "-7.986915",
      img1: "https://media-cdn.tripadvisor.com/media/photo-s/21/6f/7d/06/my-taher.jpg",
      img2: "https://media-cdn.tripadvisor.com/media/photo-s/23/b8/e1/e7/menu.jpg",
      img3: "https://media-cdn.tripadvisor.com/media/photo-s/23/b8/e1/d8/my-taher.jpg",
      img4: "https://media-cdn.tripadvisor.com/media/photo-s/23/b8/e1/d5/my-taher.jpg",
      img5: "https://media-cdn.tripadvisor.com/media/photo-f/23/b8/e1/c3/my-taher.jpg",
    },
    {
      id: 6,
      restaurant: "Dameh",
      review: "324",
      adresse:
        "15 Gueliz rue Qadi Ayad, El Harti RDC RÃ©sidence Mirador, Marrakech 40000 Morocco",
      etat: " Closed now",
      price_range: "$6 - $19",
      cuisines: "Moroccan, Mediterranean, Healthy, Middle Eastern, Israeli",
      tel: "+212 611-200044",
      map: "4wV_https://maps.google.com/maps?saddr=&daddr=15+Gueliz+rue+Qadi+Ayad%2C+El+Harti+RDC+R%C3%A9sidence+Mirador%2C+Marrakech+40000+Morocco@31.63048,-8.011671_pdQ",
      rating: "5.0",
      latitude: "31.63048",
      longitude: "-8.011671",
      img1: "https://media-cdn.tripadvisor.com/media/photo-p/1a/fe/fe/31/photo3jpg.jpg",
      img2: "https://media-cdn.tripadvisor.com/media/photo-s/1a/ca/2c/95/houmous-dans-tous-ses.jpg",
      img3: "https://media-cdn.tripadvisor.com/media/photo-f/1a/bf/d0/54/foto-de-la-salle-du-restaurant.jpg",
      img4: "https://media-cdn.tripadvisor.com/media/photo-f/21/54/84/38/caption.jpg",
      img5: "https://media-cdn.tripadvisor.com/media/photo-f/21/54/84/37/caption.jpg",
    },
    {
      id: 7,
      restaurant: "Dar Zellij",
      review: "3,786",
      adresse: "No1 Kaa Sour, Sidi Ben Slimane Medina, Marrakech 40000 Morocco",
      etat: " Closed now",
      price_range: "Not Specified",
      cuisines:
        "Local cuisine, Moroccan, Vegetarian Friendly, Vegan Options, Halal",
      tel: "+212 5243-82627",
      map: "HNy_https://maps.google.com/maps?saddr=&daddr=No1+Kaa+Sour%2C+Sidi+Ben+Slimane+Medina%2C+Marrakech+40000+Morocco@31.637318,-7.992271_ImC",
      rating: "4.5",
      latitude: "31.637318",
      longitude: "-7.992271",
      img1: "https://media-cdn.tripadvisor.com/media/photo-s/0f/d9/fb/b0/dar-zellij.jpg",
      img2: "https://media-cdn.tripadvisor.com/media/photo-s/0f/c8/00/f4/dar-zellij.jpg",
      img3: "https://media-cdn.tripadvisor.com/media/photo-f/0f/da/0a/5f/dar-zellij.jpg",
      img4: "https://media-cdn.tripadvisor.com/media/photo-f/0f/bb/8f/17/dar-zellij.jpg",
      img5: "https://media-cdn.tripadvisor.com/media/photo-f/0f/d6/64/7c/dar-zellij.jpg",
    },
    {
      id: 8,
      restaurant: "Las Terrazas De Andalucia",
      review: "570",
      adresse:
        "Hotel El Andalous, Avenue du President Kennedy Hivernage, Marrakech 40020 Morocco",
      etat: " Closed now",
      price_range: "$2 - $24",
      cuisines: "Moroccan, Spanish, Asian",
      tel: "+212 5244-48226",
      map: "Eea_https://maps.google.com/maps?saddr=&daddr=Hotel+El+Andalous%2C+Avenue+du+President+Kennedy+Hivernage%2C+Marrakech+40020+Morocco@31.621124,-8.00703_2yG",
      rating: "4.5",
      latitude: "31.621124",
      longitude: "-8.00703",
      img1: "https://media-cdn.tripadvisor.com/media/photo-s/1a/7a/f1/4c/caption.jpg",
      img2: "https://media-cdn.tripadvisor.com/media/photo-s/1a/a7/1f/aa/caption.jpg",
      img3: "https://media-cdn.tripadvisor.com/media/photo-f/1a/a6/f5/be/caption.jpg",
      img4: "https://media-cdn.tripadvisor.com/media/photo-f/1a/7a/f0/b2/caption.jpg",
      img5: "https://media-cdn.tripadvisor.com/media/photo-f/1a/7a/f0/4f/caption.jpg",
    },
    {
      id: 9,
      restaurant: "Le Bled",
      review: "12",
      adresse: "Douar Coucou Oasis Hassan II, Marrakech 40000 Morocco",
      etat: " Closed now",
      price_range: "$11 - $65",
      cuisines: "Moroccan, International, Mediterranean, Barbecue, European",
      tel: "+212 608-081212",
      map: "rMj_https://maps.google.com/maps?saddr=&daddr=Douar+Coucou+Oasis+Hassan+II%2C+Marrakech+40000+Morocco@31.65051,-8.05414_yzi",
      rating: "3.0",
      latitude: "31.65051",
      longitude: "-8.05414",
      img1: "https://media-cdn.tripadvisor.com/media/photo-s/28/b7/c5/72/2-piscines-paradisiaques.jpg",
      img2: "https://media-cdn.tripadvisor.com/media/photo-s/0b/f1/67/0d/tagine-poulet-citrons.jpg",
      img3: "https://media-cdn.tripadvisor.com/media/photo-f/0b/f1/66/75/le-restaurant-dans-les.jpg",
      img4: "https://media-cdn.tripadvisor.com/media/photo-f/23/7e/f5/be/caption.jpg",
      img5: "https://media-cdn.tripadvisor.com/media/photo-f/0d/91/bf/be/ciftlik-icinde-mua-agac.jpg",
    },
    {
      id: 10,
      restaurant: "Cuisine De Terroir",
      review: "2,332",
      adresse: "St Kennaria 118 Immeuble biyaze, Marrakech 40000 Morocco",
      etat: " Closed now",
      price_range: "$1 - $7",
      cuisines: "Moroccan",
      tel: "+212 610-193183",
      map: "8RD_https://maps.google.com/maps?saddr=&daddr=St+Kennaria+118+Immeuble+biyaze%2C+Marrakech+40000+Morocco@31.62581,-7.986302_rb1",
      rating: "4.5",
      latitude: "31.62581",
      longitude: "-7.986302",
      img1: "https://media-cdn.tripadvisor.com/media/photo-s/1b/17/90/8a/caption.jpg",
      img2: "https://media-cdn.tripadvisor.com/media/photo-o/22/af/73/13/cuisine-marocaine-internationa.jpg",
      img3: "https://media-cdn.tripadvisor.com/media/photo-s/20/8a/ff/a0/our-beautiful-terrasse.jpg",
      img4: "https://media-cdn.tripadvisor.com/media/photo-s/14/85/13/a9/cuisine-de-terroir.jpg",
      img5: "https://media-cdn.tripadvisor.com/media/photo-l/1d/31/6e/76/cuisine-de-terroir.jpg",
    },
    {
      id: 11,
      restaurant: "Chez Yassine",
      review: "967",
      adresse: "70 Rue Fatima Zahra, Marrakech 40000 Morocco",
      etat: " Closed now",
      price_range: "Not Specified",
      cuisines:
        "Local cuisine, Italian, Moroccan, Pizza, Mediterranean, European",
      tel: "+212 661-538081",
      map: "uAK_https://maps.google.com/maps?saddr=&daddr=70+Rue+Fatima+Zahra%2C+Marrakech+40000+Morocco@31.628464,-7.993919_zGv",
      rating: "4.5",
      latitude: "31.628464",
      longitude: "-7.993919",
      img1: "https://media-cdn.tripadvisor.com/media/photo-s/12/4c/0c/6b/pastilla.jpg",
      img2: "https://media-cdn.tripadvisor.com/media/photo-s/09/8b/9b/d3/yassin-likoum-kamlin.jpg",
      img3: "https://media-cdn.tripadvisor.com/media/photo-l/09/8b/9c/09/yassin-likoum-kamlin.jpg",
      img4: "https://media-cdn.tripadvisor.com/media/photo-f/13/3a/bf/46/la-table-du-ramadan.jpg",
      img5: "https://media-cdn.tripadvisor.com/media/photo-l/1d/4f/87/d4/caption.jpg",
    },
    {
      id: 12,
      restaurant: "Restaurant Angsana Si Said",
      review: "209",
      adresse: "24, Derb Si Said, Marrakech 40000 Morocco",
      etat: " Closed now",
      price_range: "$22 - $36",
      cuisines: "Vegetarian Friendly, Vegan Options, Gluten Free Options",
      tel: "+212 678-966066",
      map: "rYC_https://maps.google.com/maps?saddr=&daddr=24%2C+Derb+Si+Said%2C+Marrakech+40000+Morocco@31.62271,-7.983853_0EB",
      rating: "5.0",
      latitude: "31.62271",
      longitude: "-7.983853",
      img1: "https://media-cdn.tripadvisor.com/media/photo-s/1a/11/15/25/every-day-our-restaurant.jpg",
      img2: "https://media-cdn.tripadvisor.com/media/photo-s/1a/44/16/ac/our-moroccan-salad-selection.jpg",
      img3: "https://media-cdn.tripadvisor.com/media/photo-f/1a/44/15/f0/fresh-gambas-from-oualidia.jpg",
      img4: "https://media-cdn.tripadvisor.com/media/photo-f/1a/44/34/aa/one-of-our-traditional.jpg",
      img5: "https://media-cdn.tripadvisor.com/media/photo-f/1a/44/34/54/a-mint-tea-in-front-of.jpg",
    },
    {
      id: 13,
      restaurant: "Manzil la Tortue",
      review: "364",
      adresse:
        "Km12, Route de Ouarzazate Douar Gzoula, Marrakech 40000 Morocco",
      etat: " Closed now",
      price_range: "$27 - $49",
      cuisines: "French, Moroccan, Mediterranean, European, International",
      tel: "+212 661-955517",
      map: "Ggn_https://maps.google.com/maps?saddr=&daddr=Km12%2C+Route+de+Ouarzazate+Douar+Gzoula%2C+Marrakech+40000+Morocco@31.614029,-7.890144_dZe",
      rating: "5.0",
      latitude: "31.614029",
      longitude: "-7.890144",
      img1: "https://media-cdn.tripadvisor.com/media/photo-s/22/a6/a0/cf/bed-a-cote-de-la-piscine.jpg",
      img2: "https://media-cdn.tripadvisor.com/media/photo-s/06/bc/d5/1b/manzil-la-tortue.jpg",
      img3: "https://media-cdn.tripadvisor.com/media/photo-f/06/bc/d2/e5/manzil-la-tortue.jpg",
      img4: "https://media-cdn.tripadvisor.com/media/photo-f/22/a6/a0/da/vue.jpg",
      img5: "https://media-cdn.tripadvisor.com/media/photo-l/22/a6/a0/d8/bassin-exterieur-chauffe.jpg",
    },
    {
      id: 14,
      restaurant: "L'Auberge Espagnole",
      review: "437",
      adresse:
        "Street Corner Tarik Ibn Ziad and Moulay Ali Gueliz, Marrakech 40000 Morocco",
      etat: " Closed now",
      price_range: "$4 - $43",
      cuisines: "Latin, Bar, Mediterranean, European, Spanish",
      tel: "+212 5244-58913",
      map: "E2f_https://maps.google.com/maps?saddr=&daddr=Street+Corner+Tarik+Ibn+Ziad+and+Moulay+Ali+Gueliz%2C+Marrakech+40000+Morocco@31.637571,-8.013169_hIa",
      rating: "4.5",
      latitude: "31.637571",
      longitude: "-8.013169",
      img1: "https://media-cdn.tripadvisor.com/media/photo-s/28/40/44/0d/le-restaurant-l-auberge.jpg",
      img2: "https://media-cdn.tripadvisor.com/media/photo-s/26/ab/fe/9b/restaurant-espagnole.jpg",
      img3: "https://media-cdn.tripadvisor.com/media/photo-f/28/40/45/27/fete-auberge-espagnole.jpg",
      img4: "https://media-cdn.tripadvisor.com/media/photo-f/28/40/45/20/ambiance-auberge-espagnole.jpg",
      img5: "https://media-cdn.tripadvisor.com/media/photo-l/28/40/45/13/groupe-live-auberge-espagnole.jpg",
    },
    {
      id: 15,
      restaurant: "L'Ardoise du MarchÃ©",
      review: "87",
      adresse:
        "Rue Oummo el Banin Imm Jaffa, Gueliz El Harti, Marrakech 40000 Morocco",
      etat: " Closed now",
      price_range: "$15 - $45",
      cuisines: "French",
      tel: "+212 661339923",
      map: "O26_https://maps.google.com/maps?saddr=&daddr=Rue+Oummo+el+Banin+Imm+Jaffa%2C+Gueliz+El+Harti%2C+Marrakech+40000+Morocco@31.63062,-8.007012_t8N",
      rating: "4.5",
      latitude: "31.63062",
      longitude: "-8.007012",
      img1: "https://media-cdn.tripadvisor.com/media/photo-p/26/92/91/38/salle-restau.jpg",
      img2: "https://media-cdn.tripadvisor.com/media/photo-s/26/92/a3/54/8.jpg",
      img3: "https://media-cdn.tripadvisor.com/media/photo-f/26/92/a2/db/7.jpg",
      img4: "https://media-cdn.tripadvisor.com/media/photo-f/26/92/a2/ad/6.jpg",
      img5: "https://media-cdn.tripadvisor.com/media/photo-f/26/92/a2/5e/5.jpg",
    },
    {
      id: 16,
      restaurant: "Fluffy",
      review: "114",
      adresse:
        "91, Avenue Hommane Fetouaki Arsat Maach, Medina Mall, Marrakech 40000 Morocco",
      etat: " Closed now",
      price_range: "$2 - $11",
      cuisines: "Spanish, International",
      tel: "+212 660-232405",
      map: "thr_https://maps.google.com/maps?saddr=&daddr=91%2C+Avenue+Hommane+Fetouaki+Arsat+Maach%2C+Medina+Mall%2C+Marrakech+40000+Morocco@31.620464,-7.986483_Bdf",
      rating: "5.0",
      latitude: "31.620464",
      longitude: "-7.986483",
      img1: "https://media-cdn.tripadvisor.com/media/photo-s/28/b5/25/44/a-really-good-place-to.jpg",
      img2: "https://media-cdn.tripadvisor.com/media/photo-s/28/d8/9d/7f/cotelettes-grilles.jpg",
      img3: "https://media-cdn.tripadvisor.com/media/photo-f/28/d8/9c/ba/brunch.jpg",
      img4: "https://media-cdn.tripadvisor.com/media/photo-f/28/d8/9c/5e/cuisine-ouvert-sur-ma.jpg",
      img5: "https://media-cdn.tripadvisor.com/media/photo-s/28/d8/98/df/fluffy-au-fruits.jpg",
    },
    {
      id: 17,
      restaurant: "La Terrasse de La Brillante - Rooftop",
      review: "109",
      adresse:
        "Rue Bahia 6, Riad Zitoun Jdid La Brillante Marrakech, Marrakech 40000 Morocco",
      etat: " Closed now",
      price_range: "$16 - $33",
      cuisines:
        "Mediterranean, Healthy, Moroccan, International, Diner, Dining bars",
      tel: "+212 696-035951",
      map: "8v5_https://maps.google.com/maps?saddr=&daddr=Rue+Bahia+6%2C+Riad+Zitoun+Jdid+La+Brillante+Marrakech%2C+Marrakech+40000+Morocco@31.622261,-7.984313_UQr",
      rating: "5.0",
      latitude: "31.622261",
      longitude: "-7.984313",
      img1: "https://media-cdn.tripadvisor.com/media/photo-s/1b/17/eb/8f/lounge-and-restaurant.jpg",
      img2: "https://media-cdn.tripadvisor.com/media/photo-s/1b/c1/e4/07/chair-d-araignee-acidulee.jpg",
      img3: "https://media-cdn.tripadvisor.com/media/photo-f/1b/17/eb/92/lounge.jpg",
      img4: "https://media-cdn.tripadvisor.com/media/photo-f/28/90/0b/52/enjoy-our-terrasse.jpg",
      img5: "https://media-cdn.tripadvisor.com/media/photo-l/28/90/0a/5c/lounge-at-sunset.jpg",
    },
    {
      id: 18,
      restaurant: "Dar Chef",
      review: "1,257",
      adresse: "Rue Kennaria N 123 Bis, Marrakech 40000 Morocco",
      etat: " Closed now",
      price_range: "$9 - $17",
      cuisines: "Moroccan, African, Healthy, Middle Eastern",
      tel: "+212 661-286859",
      map: "BKh_https://maps.google.com/maps?saddr=&daddr=Rue+Kennaria+N+123+Bis%2C+Marrakech+40000+Morocco@31.625599,-7.986289_0Nf",
      rating: "4.5",
      latitude: "31.625599",
      longitude: "-7.986289",
      img1: "https://media-cdn.tripadvisor.com/media/photo-p/13/47/87/d6/dar-chef.jpg",
      img2: "https://media-cdn.tripadvisor.com/media/photo-p/14/dd/69/b9/trid-special-dish-for.jpg",
      img3: "https://media-cdn.tripadvisor.com/media/photo-f/19/5b/0f/a3/dar-chef-cooking-school.jpg",
      img4: "https://media-cdn.tripadvisor.com/media/photo-l/0e/d4/13/a8/getlstd-property-photo.jpg",
      img5: "https://media-cdn.tripadvisor.com/media/photo-f/26/d8/71/2b/chef-loubna-is-ready.jpg",
    },
    {
      id: 19,
      restaurant: "Casa Lalla Restaurant",
      review: "432",
      adresse: "Riad Zitoun Lakdime 16 Derb Jamaa, Marrakech 40000 Morocco",
      etat: " Closed now",
      price_range: "$10 - $30",
      cuisines: "French, Moroccan, European, International",
      tel: "+212 674-984460",
      map: "Q6x_https://maps.google.com/maps?saddr=&daddr=Riad+Zitoun+Lakdime+16+Derb+Jamaa%2C+Marrakech+40000+Morocco@31.623796,-7.986164_ccH",
      rating: "5.0",
      latitude: "31.623796",
      longitude: "-7.986164",
      img1: "https://media-cdn.tripadvisor.com/media/photo-p/27/be/cd/5e/restaurant-casa-lalla.jpg",
      img2: "https://media-cdn.tripadvisor.com/media/photo-s/14/fa/e5/8b/patio-salle-restaurant.jpg",
      img3: "https://media-cdn.tripadvisor.com/media/photo-f/1b/0a/99/be/salade-de-betterave.jpg",
      img4: "https://media-cdn.tripadvisor.com/media/photo-f/14/fa/d6/76/salade-aux-gambas.jpg",
      img5: "https://media-cdn.tripadvisor.com/media/photo-f/14/fa/e5/84/bar.jpg",
    },
    {
      id: 20,
      restaurant: "Bazaar CafÃ©",
      review: "5,509",
      adresse: "Derb Sidi El Yamani, 24B, Marrakech 40000 Morocco",
      etat: " Closed now",
      price_range: "$11 - $33",
      cuisines: "African, Moroccan, Mediterranean, Healthy, Middle Eastern",
      tel: "+212 5243-87283",
      map: "8xy_https://maps.google.com/maps?saddr=&daddr=Derb+Sidi+El+Yamani%2C+24B%2C+Marrakech+40000+Morocco@31.628956,-7.990959_sjD",
      rating: "4.5",
      latitude: "31.628956",
      longitude: "-7.990959",
      img1: "https://media-cdn.tripadvisor.com/media/photo-p/16/63/48/87/bazaar-cafe.jpg",
      img2: "https://media-cdn.tripadvisor.com/media/photo-s/09/03/2f/46/bazaar-cafe.jpg",
      img3: "https://media-cdn.tripadvisor.com/media/photo-f/09/03/2a/20/bazaar-cafe.jpg",
      img4: "https://media-cdn.tripadvisor.com/media/photo-f/09/03/2d/fc/bazaar-cafe.jpg",
      img5: "https://media-cdn.tripadvisor.com/media/photo-f/09/03/2f/3a/bazaar-cafe.jpg",
    },
    {
      id: 21,
      restaurant: "La Table Ocre",
      review: "269",
      adresse: "91 Avenue Homman Fetouaki, Marrakech 40000 Morocco",
      etat: " Closed now",
      price_range: "Not Specified",
      cuisines: "Moroccan, Mediterranean",
      tel: "+212 667-576209",
      map: "yX8_https://maps.google.com/maps?saddr=&daddr=91+Avenue+Homman+Fetouaki%2C+Marrakech+40000+Morocco@31.62039,-7.986538_2UK",
      rating: "5.0",
      latitude: "31.62039",
      longitude: "-7.986538",
      img1: "https://media-cdn.tripadvisor.com/media/photo-s/28/ed/65/1c/caption.jpg",
      img2: "https://media-cdn.tripadvisor.com/media/photo-s/26/7a/10/58/un-design-soigne-pour.jpg",
      img3: "https://media-cdn.tripadvisor.com/media/photo-s/26/50/01/a5/la-table-ocre.jpg",
      img4: "https://media-cdn.tripadvisor.com/media/photo-f/28/c5/46/d5/tajine-de-viande-et-fruits.jpg",
      img5: "https://media-cdn.tripadvisor.com/media/photo-f/28/c5/46/d4/caption.jpg",
    },
    {
      id: 22,
      restaurant: "Terrasses Des Arts",
      review: "121",
      adresse: "5 Derb L'Hotel Bab Doukala, Marrakech 40000 Morocco",
      etat: " Closed now",
      price_range: "$5 - $25",
      cuisines: "Moroccan, Mediterranean, Cafe, International, Asian",
      tel: "+212 696-442344",
      map: "l9Q_https://maps.google.com/maps?saddr=&daddr=5+Derb+L%27Hotel+Bab+Doukala%2C+Marrakech+40000+Morocco@31.632963,-7.997941_qoS",
      rating: "5.0",
      latitude: "31.632963",
      longitude: "-7.997941",
      img1: "https://media-cdn.tripadvisor.com/media/photo-s/1b/07/fc/f0/rooftop-terrace-restaurant.jpg",
      img2: "https://media-cdn.tripadvisor.com/media/photo-s/1b/07/fd/48/exotic-spiced-salad.jpg",
      img3: "https://media-cdn.tripadvisor.com/media/photo-f/1b/07/fd/02/view-from-the-rooftop.jpg",
      img4: "https://media-cdn.tripadvisor.com/media/photo-f/1b/07/fd/42/beef-filet-with-sweet.jpg",
      img5: "https://media-cdn.tripadvisor.com/media/photo-f/1b/07/fc/bd/rooftop-terrace-restaurant.jpg",
    },
    {
      id: 23,
      restaurant: "Pointbar",
      review: "912",
      adresse:
        "3 bis rue Abou Hayane Taouhidi, Gueliz, Marrakech 40000 Morocco",
      etat: " Closed now",
      price_range: "Not Specified",
      cuisines: "Bar, Mediterranean, European, Spanish, Pub, Wine Bar",
      tel: "+212 600-015010",
      map: "pWm_https://maps.google.com/maps?saddr=&daddr=3+bis+rue+Abou+Hayane+Taouhidi%2C+Gueliz%2C+Marrakech+40000+Morocco@31.639067,-8.014753_Ppo",
      rating: "5.0",
      latitude: "31.639067",
      longitude: "-8.014753",
      img1: "https://media-cdn.tripadvisor.com/media/photo-s/23/42/47/0d/la-terrasse-du-restaurant.jpg",
      img2: "https://media-cdn.tripadvisor.com/media/photo-s/1c/bb/4c/e0/gyosas-poulet-ou-crevette.jpg",
      img3: "https://media-cdn.tripadvisor.com/media/photo-f/1c/bb/4c/de/burger-vegetarien.jpg",
      img4: "https://media-cdn.tripadvisor.com/media/photo-f/1c/bb/f0/3a/brochette-de-poulet-tandoori.jpg",
      img5: "https://media-cdn.tripadvisor.com/media/photo-f/1c/bb/ef/8f/terrasse-du-pointbar.jpg",
    },
    {
      id: 24,
      restaurant: "Palais Dar Soukkar",
      review: "1,376",
      adresse:
        "3,8 KM, Route de l'Ourika Restaurant Lounge Marrakech, Marrakech 40000 Morocco",
      etat: " Closed now",
      price_range: "Not Specified",
      cuisines:
        "Local cuisine, French, Moroccan, International, Mediterranean, European",
      tel: "+212 5243-75535",
      map: "KBf_https://maps.google.com/maps?saddr=&daddr=3%2C8+KM%2C+Route+de+l%27Ourika+Restaurant+Lounge+Marrakech%2C+Marrakech+40000+Morocco@31.574823,-7.978414_Fis",
      rating: "4.5",
      latitude: "31.574823",
      longitude: "-7.978414",
      img1: "https://media-cdn.tripadvisor.com/media/photo-s/18/7b/8b/8f/outdoor-live-show-terrace.jpg",
      img2: "https://media-cdn.tripadvisor.com/media/photo-s/12/42/0d/4f/dar-soukkar.jpg",
      img3: "https://media-cdn.tripadvisor.com/media/photo-f/12/42/0c/8f/dar-soukkar.jpg",
      img4: "https://media-cdn.tripadvisor.com/media/photo-f/10/00/87/0b/restaurant.jpg",
      img5: "https://media-cdn.tripadvisor.com/media/photo-f/18/7b/8c/43/international-cuisine.jpg",
    },
    {
      id: 25,
      restaurant: "L'Ã” A LA BOUCHE - Marrakech",
      review: "503",
      adresse: "4 rue Badr GuÃ©liz Marrakech, Marrakech 40000 Morocco",
      etat: " Closed now",
      price_range: "$33 - $54",
      cuisines: "French, Healthy, Gastropub",
      tel: "+212 666-383133",
      map: "mFD_https://maps.google.com/maps?saddr=&daddr=4+rue+Badr+Gu%C3%A9liz+Marrakech%2C+Marrakech+40000+Morocco@31.632399,-8.006319_xcV",
      rating: "5.0",
      latitude: "31.632399",
      longitude: "-8.006319",
      img1: "https://media-cdn.tripadvisor.com/media/photo-s/23/19/ac/cf/envie-de-diner-en-ville.jpg",
      img2: "https://media-cdn.tripadvisor.com/media/photo-p/19/24/a5/81/envie-de-diner-en-ville.jpg",
      img3: "https://media-cdn.tripadvisor.com/media/photo-s/19/24/a6/42/envie-de-diner-en-ville.jpg",
      img4: "https://media-cdn.tripadvisor.com/media/photo-s/19/24/a5/97/envie-de-diner-en-ville.jpg",
      img5: "https://media-cdn.tripadvisor.com/media/photo-s/19/24/a5/fa/envie-de-diner-en-ville.jpg",
    },
    {
      id: 26,
      restaurant: "BaromÃ¨tre Marrakech",
      review: "1,074",
      adresse:
        "Rue Moulay Ali GuÃ©liz RÃ©sidence Al houda, Marrakech 40000 Morocco",
      etat: " Open now",
      price_range: "Not Specified",
      cuisines:
        "French, International, Mediterranean, Fusion, Vegetarian Friendly",
      tel: "+212 666-886798",
      map: "hno_https://maps.google.com/maps?saddr=&daddr=Rue+Moulay+Ali+Gueliz+R%C3%A9sidence+Al+houda%2C+Marrakech+40000+Morocco@31.637169,-8.014103_7Et",
      rating: "5.0",
      latitude: "31.637169",
      longitude: "-8.014103",
      img1: "https://media-cdn.tripadvisor.com/media/photo-s/0e/c5/e6/b1/the-bar.jpg",
      img2: "https://media-cdn.tripadvisor.com/media/photo-s/1d/46/f6/21/poulet-basse-temperature.jpg",
      img3: "https://media-cdn.tripadvisor.com/media/photo-f/1d/46/f5/5b/le-jardin-marin.jpg",
      img4: "https://media-cdn.tripadvisor.com/media/photo-f/1d/46/f6/22/daurade-mousseline-de.jpg",
      img5: "https://media-cdn.tripadvisor.com/media/photo-l/1d/46/f6/34/prohibition.jpg",
    },
    {
      id: 27,
      restaurant: "Medina Burger",
      review: "473",
      adresse: "91 Avenue Homman Fetouaki Medina Mall, Marrakech 40000 Morocco",
      etat: " Closed now",
      price_range: "Not Specified",
      cuisines: "American",
      tel: "+212 664-888278",
      map: "ICX_https://maps.google.com/maps?saddr=&daddr=91+Avenue+Homman+Fetouaki+Medina+Mall%2C+Marrakech+40000+Morocco@31.620466,-7.986482_2z6",
      rating: "5.0",
      latitude: "31.620466",
      longitude: "-7.986482",
      img1: "https://media-cdn.tripadvisor.com/media/photo-s/28/ed/5e/76/caption.jpg",
      img2: "https://media-cdn.tripadvisor.com/media/photo-s/28/21/82/59/medina-burger.jpg",
      img3: "https://media-cdn.tripadvisor.com/media/photo-s/26/e6/bc/b3/a-pleasure-to-serve-you.jpg",
      img4: "https://media-cdn.tripadvisor.com/media/photo-f/27/31/46/8e/our-burger-family.jpg",
      img5: "https://media-cdn.tripadvisor.com/media/photo-l/28/c5/33/46/heavenly-soft-buns-smashed.jpg",
    },
  ];
  
  const { id } = useParams();
  console.log(information.id)
  // console.log(name);
  // const [information, setinformation] = useState({});
  // const user = localStorage.getItem("userid");
  // useEffect(() => {
  //   const foundinformation = data.find((information) => information.restaurant === name);
  //   if (foundinformation) {
  //     setinformation(foundinformation);
  //   }
  // }, [name]);


  useEffect(() => {
    const fetchData = () => {
      return axios
        .get(`http://localhost:8082/restaurants/${id}/photos`)
        .then((response) => setphotos(response.data))
        .catch((error) => console.log(error));
  };
  fetchData();
    
  }, []);

  useEffect(() => {
    const fetchData = () => {
      return axios
        .get(`http://localhost:8082/restaurants/${id}`)
        .then((response) => setinformation(response.data))
        .catch((error) => console.log(error));
  };
  fetchData();
    
  }, []);
  
  // const regex = /(<([^>]+)>)/gi;
  // let newdec = information.description;

  // if (newdec && regex.test(newdec)) {
  //   newdec = newdec.replace(regex, "");
  // }

  return (
    <>
      <div className="cent">
        <Carousel variant="dark" fade={true} indicators={false}>
        {photos.length > 0? photos.map(photo=>(
          
           <Carousel.Item interval={5000}>
            <img
              style={{ height: "500px", width: "500px", objectFit: "contain" }}
              className="d-block w-100"
              src={photo.url}
              alt="First slide"
            />
           </Carousel.Item>
       
        
       )):( <Carousel.Item interval={5000}>
        <img
          style={{ height: "500px", width: "500px", objectFit: "contain" }}
          className="d-block w-100"
          src="/noimage.png"
          alt="First slide"
        />
       </Carousel.Item>)}
          {/* <Carousel.Item interval={5000}>
            <img
              style={{ height: "500px", width: "500px", objectFit: "cover" }}
              className="d-block w-100"
              src={information.img1}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item interval={5000}>
            <img
              style={{ height: "500px", width: "500px", objectFit: "cover" }}
              className="d-block w-100"
              src={information.img2}
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item interval={5000}>
            <img
              style={{ height: "500px", width: "500px", objectFit: "cover" }}
              className="d-block w-100"
              src={information.img3}
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item interval={5000}>
            <img
              style={{ height: "500px", width: "500px", objectFit: "cover" }}
              className="d-block w-100"
              src={information.img4}
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item interval={5000}>
            <img
              style={{
                height: "500px",
                width: "500px",
                objectFit: "cover",
                borderRadius: "20px",
              }}
              className="d-block w-100"
              src={information.img5}
              alt="Third slide"
            />
          </Carousel.Item> */}
        </Carousel>
      <div className="information">
            <p>
            <span className="number">{information.rating} </span>{" "}
            <span
              style={{
                fontSize: "23px",
                fontWeight: "bold",
                padding: "5px",
                color: "gold",
              }}
            >
              {" "}
              <Rating rating={information.rating} />{" "}
            </span>
            <span
              style={{
                fontSize: "22px",
                fontWeight: "bold",
                verticalAlign: "middle",
              }}
            >
              {" "}
              {information.review} Review
            </span>
          </p>
          <p>
            <span style={{ fontSize: "20px", fontWeight: "bold" }}>
              Cuisine :{" "}
            </span>
            <span style={{ fontSize: "20px" }}>{information.cuisine} </span>
          </p>
          <p>
            <span
              style={{ fontSize: "35px", color: "#5EAC1B", padding: "10px" }}
            >
              {" "}
              <MdPriceChange />{" "}
            </span>{" "}
            <span style={{ fontSize: "20px", fontWeight: "bold" }}>
              {" "}
              {information.price_range}{" "}
            </span>
          </p>
          <p>
            <span
              style={{ fontSize: "25px", color: "#5EAC1B", padding: "10px" }}
            >
              {" "}
              <BsFillTelephoneFill />{" "}
            </span>{" "}
            <span style={{ fontSize: "20px", fontWeight: "bold" }}>
              {" "}
              {information.phone}{" "}
            </span>
          </p>
          <p>
            <span
              style={{ fontSize: "25px", color: "crimson", padding: "10px" }}
            >
              {" "}
              <FaMapMarkerAlt />
            </span>{" "}
            <span style={{ fontSize: "20px", fontWeight: "bold", color: "" }}>
              {" "}
              {information.adresse}{" "}
            </span>
          </p>
          <Etat open={information.heure_open} close={information.heure_close} /> 
           {userid !== null ? (
            <Link to={`/Reserve/${id}`} className="reserver">
              RESERVER
            </Link>
          ) : (
            <Link to="/login"> please login to make a reservation</Link>
          )}
        </div>
      </div>

        <Mapp
        lat={information.latitude}
        lon={information.longitude}
        nom={information.nom}
      /> 
    </>
  );
}

export default Details;
