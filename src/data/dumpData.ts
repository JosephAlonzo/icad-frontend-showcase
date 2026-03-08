export const profiles = [
  {
    icon: 'mdi-account-heart',
    title: 'Détenteur',
    desc: 'Gérez les informations de votre animal de compagnie',
    color: '#4CAF50',
  },
  {
    icon: 'mdi-medical-bag',
    title: 'Vétérinaire',
    desc: "Accédez aux outils professionnels d'identification",
    color: '#2196F3',
  },
  {
    icon: 'mdi-needle',
    title: 'Tatoueur Agréé',
    desc: "Gérez vos actes d'identification et certifications",
    color: '#FF9800',
  },
  {
    icon: 'mdi-domain',
    title: 'Acteur de la Filière',
    desc: 'Refuges, éleveurs, animaleries — espace dédié',
    color: '#4CAF50',
  },
  {
    icon: 'mdi-scale-balance',
    title: 'Ayant-droit',
    desc: "Accédez au dossier d'un animal en succession",
    color: '#00BCD4',
  },
  {
    icon: 'mdi-office-building-outline',
    title: 'Ministère',
    desc: 'Interface de supervision et statistiques nationales',
    color: '#FF9800',
  },
]

export const actions = [
  {
    icon: 'mdi-plus-circle-outline',
    title: 'Identifier mon animal',
    desc: 'Enregistrer un chien, chat ou furet dans le fichier national',
  },
  {
    icon: 'mdi-pencil-outline',
    title: 'Mettre à jour mes coordonnées',
    desc: 'Modifier votre adresse, téléphone ou email facilement',
  },
  {
    icon: 'mdi-file-download-outline',
    title: "Télécharger la carte d'identification",
    desc: "Obtenez le certificat officiel d'identification de votre animal",
  },
  {
    icon: 'mdi-account-switch-outline',
    title: 'Déclarer un changement de propriétaire',
    desc: "Transférer la responsabilité légale de l'animal",
  },
  {
    icon: 'mdi-map-marker-alert-outline',
    title: 'Signaler un animal perdu',
    desc: 'Alerter le réseau I-CAD pour faciliter les retrouvailles',
  },
  {
    icon: 'mdi-heart-broken-outline',
    title: 'Déclarer un décès',
    desc: 'Mettre à jour le statut de votre animal décédé',
  },
]

export const steps = [
  {
    icon: 'mdi-stethoscope',
    title: 'Consultez un professionnel',
    desc: "Rendez-vous chez un vétérinaire ou tatoueur agréé I-CAD pour l'identification par puce ou tatouage.",
  },
  {
    icon: 'mdi-file-sign',
    title: 'Complétez le dossier',
    desc: 'Renseignez les informations de votre animal et vos coordonnées dans le fichier national.',
  },
  {
    icon: 'mdi-check-decagram',
    title: 'Confirmation officielle',
    desc: "Recevez votre attestation d'identification officielle et accédez à votre espace en ligne.",
  },
]

export const bigStats = [
  { value: '18 millions', label: 'animaux identifiés en France' },
  { value: '30 000+', label: 'professionnels agréés' },
  { value: '1 million', label: 'nouvelles identifications / an' },
  { value: '24h/24', label: 'service disponible en ligne' },
]

export const sideNews = [
  {
    tag: 'Réglementation',
    title: 'Nouvelles obligations pour les éleveurs en 2025',
    date: '8 novembre 2024',
  },
  {
    tag: 'Mise à jour',
    title: "L'application mobile I-CAD est disponible sur iOS et Android",
    date: '2 novembre 2024',
  },
  {
    tag: 'Statistiques',
    title: "Rapport annuel 2024 : record d'identifications",
    date: '25 octobre 2024',
  },
]

// ===== Dashboard data =====
export const detenteur = {
  civilite: 'Monsieur',
  prenom: 'Pierre',
  nom: 'Voazin',
  adresse: '155 av. Jean Jaurès',
  ville: 'Aubervilliers',
  codePostal: '93300',
  pays: 'France',
  telephone: '06 30 00 00 01',
  courriel: 'contact@i-cad.fr',
}

export const stats = [
  {
    icon: 'mdi-paw',
    value: '3',
    label: 'Animaux enregistrés',
    trend: '+1 cette année',
    trendUp: true,
  },
  {
    icon: 'mdi-check-circle-outline',
    value: '3',
    label: 'Identifications actives',
    trend: 'Tous valides',
    trendUp: true,
  },
  {
    icon: 'mdi-file-document-outline',
    value: '7',
    label: 'Documents disponibles',
    trend: 'Téléchargeables',
    trendUp: true,
  },
  {
    icon: 'mdi-bell-badge-outline',
    value: '2',
    label: 'Alertes en attente',
    trend: 'À traiter',
    trendUp: false,
  },
]

export const animals = [
  {
    emoji: '🐈',
    name: 'Luna',
    meta: 'Chatte · Européenne · 4 ans',
    id: '250269802456712',
    status: 'Active',
    chipClass: 'chip-green',
    chipIcon: 'mdi-check-circle',
    insert: '250269802456712',
    type: 'Chat',
    dateIdentification: '15/03/2021',
    emplacement: 'Cou Côté Gauche',
    dateNaissance: '10/01/2021',
    paysNaissance: 'France',
    nomUsage: 'Luna',
    sexe: 'Femelle',
    sterilise: 'Oui',
    categorie: '1',
    livreOrigines: 'Non',
    race: 'Européen',
    poil: 'Roux et Blanc',
    signesParticuliers: 'Tache Blanche Sur Le Poitrail, Bout Des Pattes Blanc',
    dateEdition: '15/03/2021 09:30:12:00',
  },
  {
    emoji: '🐕',
    name: 'Rex',
    meta: 'Chien · Berger Allemand · 6 ans',
    id: '250269802398441',
    status: 'Active',
    chipClass: 'chip-green',
    chipIcon: 'mdi-check-circle',
    insert: '250269802398441',
    type: 'Chien',
    dateIdentification: '20/06/2019',
    emplacement: 'Encolure Côté Gauche',
    dateNaissance: '05/04/2019',
    paysNaissance: 'France',
    nomUsage: 'Rex',
    sexe: 'Mâle',
    sterilise: 'Non',
    categorie: '2',
    livreOrigines: 'Oui',
    race: 'Berger Allemand',
    poil: 'Fauve et Noir',
    signesParticuliers: 'Selle Noire Sur Le Dos, Museau Noir, Marques Feu Aux Sourcils',
    dateEdition: '20/06/2019 14:15:22:00',
  },
  {
    emoji: '🐈‍⬛',
    name: 'Milo',
    meta: 'Chat · Maine Coon · 2 ans',
    id: '250269802501883',
    status: 'En cours',
    chipClass: 'chip-orange',
    chipIcon: 'mdi-clock-outline',
    insert: '250269802501883',
    type: 'Chat',
    dateIdentification: '08/02/2024',
    emplacement: 'Cou Côté Droit',
    dateNaissance: '15/11/2023',
    paysNaissance: 'France',
    nomUsage: 'Milo',
    sexe: 'Mâle',
    sterilise: 'Non',
    categorie: '1',
    livreOrigines: 'Non',
    race: 'Maine Coon',
    poil: 'Noir',
    signesParticuliers: 'Poil Long, Touffe Aux Oreilles, Queue Touffue Noire',
    dateEdition: '08/02/2024 10:45:33:00',
  },
]

export const quickActions = [
  { icon: 'mdi-map-marker-alert-outline', label: 'Signaler<br>perdu' },
  { icon: 'mdi-card-account-details-outline', label: 'Télécharger<br>ma carte' },
  { icon: 'mdi-account-arrow-right-outline', label: 'Céder un<br>animal' },
  { icon: 'mdi-pencil-outline', label: 'Modifier<br>mes infos' },
]

export const activity = [
  { icon: 'mdi-paw', text: '<strong>Milo</strong> enregistré avec succès', time: 'Il y a 3 jours' },
  {
    icon: 'mdi-file-download-outline',
    text: "Carte d'identification <strong>Luna</strong> téléchargée",
    time: 'Il y a 1 semaine',
  },
  {
    icon: 'mdi-pencil-outline',
    text: 'Adresse mise à jour pour <strong>Rex</strong>',
    time: 'Il y a 2 semaines',
  },
]

export const faq = [
  {
    category: 'identification',
    question: "Qu'est-ce que l'identification d'un animal ?",
    answer:
      "L'identification est une obligation légale en France pour les chiens et les chats. Elle consiste à implanter une puce électronique sous la peau de l'animal ou à le tatouer. Le numéro est ensuite enregistré dans le fichier national I-CAD.",
    open: false,
  },
  {
    category: 'identification',
    question: 'Mon animal est-il obligatoirement identifié ?',
    answer:
      "Oui, en France, l'identification est obligatoire pour tous les chiens dès 4 mois et pour tous les chats dès 7 mois. Elle est également obligatoire avant toute cession (vente, don) d'un animal.",
    open: false,
  },
  {
    category: 'identification',
    question: "Comment retrouver le numéro d'identification de mon animal ?",
    answer:
      "Le numéro d'identification (15 chiffres) figure sur la carte d'identification de votre animal, sur les documents vétérinaires, ou peut être lu par un vétérinaire ou un refuge avec un lecteur de puce.",
    open: false,
  },
  {
    category: 'compte',
    question: 'Comment modifier mes coordonnées ?',
    answer:
      "Rendez-vous dans la section 'Mettre à jour mes infos' de votre espace détenteur. Vous pouvez y modifier votre adresse, téléphone et email. Les modifications sont prises en compte immédiatement dans le fichier national.",
    open: false,
  },
  {
    category: 'compte',
    question: "J'ai oublié mon numéro d'identification, que faire ?",
    answer:
      "Votre numéro d'identification est le numéro de la puce de votre animal (15 chiffres). Vous pouvez le retrouver sur votre carte d'identification animale, sur vos documents vétérinaires, ou en vous rendant chez votre vétérinaire.",
    open: false,
  },
  {
    category: 'demarches',
    question: 'Comment déclarer mon animal perdu ?',
    answer:
      "Connectez-vous à votre espace détenteur et cliquez sur 'Signaler perdu / trouvé'. Renseignez les informations demandées. La déclaration sera visible immédiatement par les vétérinaires et refuges agréés sur tout le territoire.",
    open: false,
  },
  {
    category: 'demarches',
    question: 'Comment effectuer une cession de propriété ?',
    answer:
      "La cession de propriété permet de transférer officiellement un animal à un nouveau propriétaire. Rendez-vous dans 'Cession de propriété', renseignez les coordonnées du nouveau détenteur et validez. Le nouveau propriétaire recevra une confirmation par email.",
    open: false,
  },
  {
    category: 'carte',
    question: "Comment télécharger la carte d'identification de mon animal ?",
    answer:
      "Dans la section 'Mes animaux', cliquez sur l'animal concerné puis sur 'Voir la carte d'identification'. Vous pourrez ensuite la télécharger en PDF depuis le bouton 'Télécharger'.",
    open: false,
  },
  {
    category: 'carte',
    question: "La carte d'identification a-t-elle une valeur officielle ?",
    answer:
      "Oui, la carte d'identification I-CAD est un document officiel reconnu par les autorités françaises. Elle est indispensable pour les voyages à l'étranger, les expositions canines et félines, et toute transaction impliquant un animal identifié.",
    open: false,
  },
]
