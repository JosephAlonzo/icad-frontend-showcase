<template>
  <div class="carte-wrapper">
    <!-- VERSO (détails) — formato A5 landscape para doblar -->
    <div class="carte-id carte-id--verso">
      <!-- LADO IZQUIERDO — Détenteur -->
      <div class="verso__left">
        <div class="verso__brand">
          <div class="verso__brand-left">
            <img src="@/assets/logo_icad.png" alt="I-CAD" height="22" />
            <div class="verso__brand-badge">i-cad.fr</div>
          </div>
          <div class="verso__brand-center">
            <div class="verso__brand-title">CARTE D'IDENTIFICATION</div>
            <div class="verso__brand-sub">DE VOTRE ANIMAL</div>
          </div>
          <div class="verso__brand-gov">
            <img
              src="@/assets/logo_masa_delegation.svg"
              alt="Logo minister de l'agriculture"
              width="100"
              height="100"
            />
          </div>
        </div>

        <div class="verso__section-label">DÉTENTEUR</div>

        <div class="verso__fields">
          <div class="verso__row">
            <span class="k">CIVILITÉ</span><span class="v">{{ detenteur.civilite }}</span>
            <span class="k ml">PRÉNOM</span><span class="v">{{ detenteur.prenom }}</span>
          </div>
          <div class="verso__row">
            <span class="k">NOM</span><span class="v">{{ detenteur.nom }}</span>
          </div>
          <div class="verso__row">
            <span class="k">ADRESSE</span><span class="v">{{ detenteur.adresse }}</span>
          </div>
          <div class="verso__row mt-sm">
            <span class="k">VILLE</span><span class="v">{{ detenteur.ville }}</span>
          </div>
          <div class="verso__row">
            <span class="k">CODE POSTAL</span><span class="v">{{ detenteur.codePostal }}</span>
            <span class="k ml">PAYS</span><span class="v">{{ detenteur.pays }}</span>
          </div>
          <div class="verso__row">
            <span class="k">TÉLÉPHONE</span><span class="v">{{ detenteur.telephone }}</span>
          </div>
          <div class="verso__row">
            <span class="k">COURRIEL</span><span class="v">{{ detenteur.courriel }}</span>
          </div>
        </div>

        <div class="verso__date">{{ dateEdition }}</div>
      </div>

      <!-- SÉPARATEUR -->
      <div class="verso__sep"></div>

      <!-- LADO DERECHO — Animal -->
      <div class="verso__right">
        <div class="verso__animal-header">
          <div class="verso__animal-drawing">
            <span style="font-size: 2.2rem; line-height: 1">{{ animal.emoji }}</span>
          </div>
          <div class="verso__animal-title">{{ animal.type.toUpperCase() }}</div>
        </div>

        <div class="verso__fields">
          <div class="verso__row">
            <span class="k">INSERT</span><span class="v bold">{{ insert }}</span>
            <span class="k ml2">DATE</span><span class="v">{{ animal.dateIdentification }}</span>
          </div>
          <div class="verso__row">
            <span class="k">EMPLACEMENT</span><span class="v">{{ animal.emplacement }}</span>
          </div>

          <div class="verso__spacer"></div>

          <div class="verso__row">
            <span class="k">DATE DE NAISSANCE</span
            ><span class="v">{{ animal.dateNaissance }}</span>
          </div>
          <div class="verso__row">
            <span class="k">PAYS DE NAISSANCE</span
            ><span class="v">{{ animal.paysNaissance }}</span>
          </div>
          <div class="verso__row">
            <span class="k">NOM D'USAGE</span><span class="v">{{ animal.nomUsage }}</span>
          </div>

          <div class="verso__spacer"></div>

          <div class="verso__row">
            <span class="k">SEXE</span><span class="v">{{ animal.sexe }}</span>
            <span class="k ml">STÉRILISÉ</span><span class="v">{{ animal.sterilise }}</span>
            <span class="k ml">CATÉGORIE</span><span class="v">{{ animal.categorie }}</span>
          </div>
          <div class="verso__row">
            <span class="k">INSCRIT AU LIVRE DES ORIGINES</span
            ><span class="v">{{ animal.livreOrigines }}</span>
          </div>
          <div class="verso__row">
            <span class="k">RACE / APPARENCE RACIALE</span><span class="v">{{ animal.race }}</span>
          </div>

          <div class="verso__spacer"></div>

          <div class="verso__row">
            <span class="k">POil</span><span class="v">{{ animal.poil }}</span>
          </div>

          <div class="verso__spacer"></div>

          <div class="verso__row verso__row--wrap">
            <span class="k">SIGNES PARTICULIERS</span>
            <span class="v wrap">{{ animal.signesParticuliers }}</span>
          </div>
        </div>
      </div>
    </div>

    <div class="carte-id carte-id--recto">
      <div class="carte-id__bg-pattern"></div>

      <div class="recto__inner">
        <!-- Côté gauche recto — miroir du détenteur -->
        <div class="recto__left">
          <div class="recto__logo-wrap">
            <img src="@/assets/logo_icad_inverted.png" alt="I-CAD" height="32" />
          </div>
          <div class="recto__tagline">CARTE D'IDENTIFICATION<br />DE VOTRE ANIMAL</div>
          <div class="recto__site">i-cad.fr</div>
        </div>

        <!-- Ligne de pliage -->
        <div class="recto__fold-line"></div>

        <!-- Côté droit recto — infos animal -->
        <div class="recto__right">
          <div class="recto__animal-icon">
            <span style="font-size: 3.5rem">{{ animal.emoji }}</span>
          </div>
          <div class="recto__number">{{ insert }}</div>
          <div class="recto__chip">
            <div class="chip-gold"></div>
          </div>
        </div>
      </div>
    </div>

    <!-- Actions -->
    <div class="carte-actions" v-if="showActions">
      <v-btn
        variant="elevated"
        prepend-icon="mdi-download"
        rounded="lg"
        elevation="0"
        class="btn btn-primary"
      >
        Télécharger
      </v-btn>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Detenteur {
  civilite: string
  prenom: string
  nom: string
  adresse: string
  ville: string
  codePostal: string
  pays: string
  telephone: string
  courriel: string
}

interface Animal {
  type: string
  dateIdentification: string
  emplacement: string
  dateNaissance: string
  paysNaissance: string
  nomUsage: string
  sexe: string
  sterilise: string
  categorie: string
  livreOrigines: string
  race: string
  poil: string
  signesParticuliers: string
  emoji: string
}

defineProps<{
  insert: string
  detenteur: Detenteur
  animal: Animal
  dateEdition: string
  showActions?: boolean
}>()
</script>

<style scoped>
.carte-wrapper {
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  max-width: 860px;
}

.carte-id {
  width: 100%;
  aspect-ratio: 210 / 100;
  border-radius: 14px;
  overflow: hidden;
  position: relative;
}

/* ══ VERSO (blanc — informations) ══ */
.carte-id--verso {
  background: #ffffff;
  border: 1px solid #e0e0e0;
  display: flex;
  flex-direction: row;
  box-shadow: 0 6px 24px rgba(0, 0, 0, 0.15);
}

.verso__left {
  flex: 0 0 50%;
  padding: 14px 18px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  border-right: 3px solid var(--color-primary);
  background: #ffffff;
}

.verso__sep {
  display: none;
}

.verso__right {
  flex: 0 0 50%;
  padding: 14px 16px;
  display: flex;
  flex-direction: column;
  gap: 3px;
  background: #ffffff;
}

.verso__brand {
  display: flex;
  align-items: flex-start;
  gap: 6px;
  padding-bottom: 7px;
  border-bottom: 2px solid var(--color-primary);
  margin-bottom: 2px;
}

.verso__brand-left {
  display: flex;
  flex-direction: column;
  gap: 3px;
  flex-shrink: 0;
}

.verso__brand-badge {
  background: var(--color-primary);
  color: #fff;
  font-size: 0.45rem;
  font-weight: 700;
  padding: 1px 5px;
  border-radius: 5px;
  text-align: center;
}

.verso__brand-center {
  flex: 1;
  text-align: center;
}

.verso__brand-title {
  font-size: 0.6rem;
  font-weight: 800;
  color: #1a3a5a;
  letter-spacing: 0.03em;
}

.verso__brand-sub {
  font-size: 0.58rem;
  font-weight: 700;
  color: var(--color-primary);
}

.verso__brand-gov {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 3px;
  flex-shrink: 0;
}

.verso__gov-flag {
  display: flex;
  width: 22px;
  height: 14px;
  border-radius: 2px;
  overflow: hidden;
  border: 0.5px solid #ccc;
}

.verso__gov-flag span {
  flex: 1;
  display: block;
}
.flag-blue {
  background: #002395;
}
.flag-white {
  background: #fff;
}
.flag-red {
  background: #ed2939;
}

.verso__gov-text {
  font-size: 0.42rem;
  color: #4a6a8a;
  text-align: right;
  line-height: 1.35;
}

.verso__section-label {
  background: var(--color-primary);
  color: #fff;
  font-size: 0.62rem;
  font-weight: 800;
  letter-spacing: 0.1em;
  padding: 3px 0;
  text-align: center;
  border-radius: 3px;
  margin: 2px 0;
}

.verso__fields {
  display: flex;
  flex-direction: column;
  gap: 1px;
}

.verso__row {
  display: flex;
  align-items: baseline;
  flex-wrap: nowrap;
  gap: 3px;
  line-height: 1.65;
}

.verso__row--wrap {
  flex-wrap: wrap;
}

.k {
  color: #4a6a8a;
  font-size: 0.56rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  white-space: nowrap;
  flex-shrink: 0;
}

.v {
  color: #1a2a3a;
  font-size: 0.65rem;
  font-weight: 500;
  white-space: nowrap;
}

.v.bold {
  font-weight: 800;
  font-family: monospace !important;
  letter-spacing: 0.03em;
}

.v.wrap {
  white-space: normal;
  line-height: 1.4;
}

.ml {
  margin-left: 8px;
}
.ml2 {
  margin-left: 20px;
}
.mt-sm {
  margin-top: 3px;
}

.verso__date {
  margin-top: auto;
  font-size: 0.48rem;
  color: #6a8aaa;
  font-family: monospace !important;
  padding-top: 6px;
}

.verso__animal-header {
  display: flex;
  align-items: center;
  gap: 10px;
  padding-bottom: 7px;
  border-bottom: 2px solid var(--color-primary);
  margin-bottom: 2px;
}

.verso__animal-drawing {
  width: 56px;
  height: 56px;
  background: #ddeaf4;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.verso__animal-title {
  font-size: 0.9rem;
  font-weight: 900;
  color: #1a2a3a;
  letter-spacing: 0.1em;
}

.verso__spacer {
  height: 5px;
}

/* ══ RECTO (azul — carte bancaire) ══ */
.carte-id--recto {
  background: linear-gradient(135deg, #a8c8e8 0%, #7aaed4 40%, #5a94c4 100%);
  border: none;
  box-shadow: 0 6px 24px rgba(90, 148, 196, 0.3);
}

.carte-id__bg-pattern {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at 75% 25%, rgba(255, 255, 255, 0.15) 0%, transparent 50%),
    radial-gradient(circle at 25% 75%, rgba(255, 255, 255, 0.08) 0%, transparent 40%);
  pointer-events: none;
}

.recto__inner {
  position: relative;
  z-index: 1;
  display: flex;
  width: 100%;
  height: 100%;
}

.recto__left {
  flex: 0 0 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 24px 28px;
  gap: 10px;
}

.recto__tagline {
  font-size: 0.7rem;
  font-weight: 800;
  color: rgba(255, 255, 255, 0.9);
  letter-spacing: 0.05em;
  line-height: 1.5;
  text-transform: uppercase;
}

.recto__site {
  font-size: 0.65rem;
  font-weight: 700;
  color: var(--color-primary);
  background: rgba(255, 255, 255, 0.9);
  padding: 3px 10px;
  border-radius: 20px;
  display: inline-block;
}

.recto__fold-line {
  width: 2px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px 0;
  flex-shrink: 0;
}

.recto__right {
  flex: 0 0 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 24px;
  gap: 12px;
  position: relative;
}

.recto__animal-icon {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.recto__animal-icon span {
  background-color: var(--color-surface);
  padding: 5px;
  border-radius: var(--radius-md);
}

.recto__number {
  position: absolute;
  bottom: 20px;
  left: 20px;
  font-size: 0.65rem;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.85);
  letter-spacing: 0.08em;
  font-family: monospace !important;
}

.recto__chip {
  position: absolute;
  bottom: 16px;
  right: 24px;
}

.chip-gold {
  width: 36px;
  height: 28px;
  background: linear-gradient(135deg, #d4a843, #f0c85a);
  border-radius: 5px;
}

/* ══ ACTIONS ══ */
.carte-actions {
  display: flex;
  gap: 12px;
}
</style>
