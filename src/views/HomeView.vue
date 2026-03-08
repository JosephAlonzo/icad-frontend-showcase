<template>
  <div class="home">
    <!-- ══════════════════════════════════════
         HERO SECTION
    ══════════════════════════════════════ -->
    <section class="hero">
      <div class="hero__bg-gradient" />
      <div class="hero__grid-overlay" />

      <div class="hero__content">
        <CarrouselComponent></CarrouselComponent>
        <div class="hero__text" :class="{ 'hero__text--visible': mounted }">
          <h1 class="hero__title">
            L'identification,<br />
            <span class="hero__title--accent">le lien qui vous unit</span>
          </h1>

          <p class="hero__desc">
            I-CAD gère le Fichier National d'Identification des Carnivores Domestiques en France.
            Protégez votre animal en l'identifiant et en mettant à jour ses informations.
          </p>

          <div class="hero__actions">
            <v-btn
              class="btn-primary"
              rounded="pill"
              size="large"
              elevation="0"
              append-icon="mdi-arrow-right"
              @click="emit('open-login', 'Détenteur')"
            >
              Accéder à mon espace
            </v-btn>
            <v-btn class="btn-ghost" rounded="pill" size="large" variant="outlined">
              Déclarer un animal perdu
            </v-btn>
          </div>
        </div>
      </div>
    </section>

    <!-- ══════════════════════════════════════
         QUICK ACCESS — WHO ARE YOU?
    ══════════════════════════════════════ -->
    <section class="section profiles-section">
      <div class="container">
        <div class="section-header">
          <p class="section-eyebrow">Espace personnalisé</p>
          <h2 class="section-title">Qui êtes-vous ?</h2>
          <p class="section-sub">Accédez directement aux services qui vous correspondent</p>
          <div class="profiles-grid">
            <ProfileCard
              v-for="profile in profiles"
              :key="profile.title"
              :title="profile.title"
              :desc="profile.desc"
              :icon="profile.icon"
              :color="profile.color"
              :isActive="activeProfile === profile.title"
              @click="openProfile(profile.title)"
            ></ProfileCard>
          </div>
        </div>
      </div>
    </section>

    <!-- ══════════════════════════════════════
         KEY ACTIONS
    ══════════════════════════════════════ -->
    <section class="section actions-section">
      <div class="container">
        <div class="section-header">
          <p class="section-eyebrow">Démarches en ligne</p>
          <h2 class="section-title">Ce que vous pouvez faire</h2>
        </div>

        <div class="actions-grid">
          <div class="action-card" v-for="action in actions" :key="action.title">
            <div class="action-card__icon-wrap">
              <v-icon size="24" color="#D81B3F">{{ action.icon }}</v-icon>
            </div>
            <div class="action-card__body">
              <h4 class="action-card__title">{{ action.title }}</h4>
              <p class="action-card__desc">{{ action.desc }}</p>
            </div>
            <v-icon size="20" color="#D81B3F" class="action-card__arrow">mdi-arrow-right</v-icon>
          </div>
        </div>
      </div>
    </section>

    <!-- ══════════════════════════════════════
         HOW IT WORKS
    ══════════════════════════════════════ -->
    <section class="section steps-section">
      <div class="container">
        <div class="steps-layout">
          <div class="steps-text">
            <p class="section-eyebrow">Simple & rapide</p>
            <h2 class="section-title">Identifier votre animal<br />en 3 étapes</h2>
            <p class="section-sub">
              L'identification de votre animal est obligatoire en France. Voici comment procéder
              facilement.
            </p>
            <v-btn
              class="btn-primary mt-6"
              rounded="pill"
              elevation="0"
              append-icon="mdi-arrow-right"
            >
              Commencer ma démarche
            </v-btn>
          </div>

          <div class="steps-list">
            <div class="step" v-for="(step, i) in steps" :key="i">
              <div class="step__number">{{ String(i + 1).padStart(2, '0') }}</div>
              <div class="step__content">
                <v-icon size="22" color="#D81B3F" class="mb-2">{{ step.icon }}</v-icon>
                <h4 class="step__title">{{ step.title }}</h4>
                <p class="step__desc">{{ step.desc }}</p>
              </div>
              <div v-if="i < steps.length - 1" class="step__connector" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ══════════════════════════════════════
         STATISTICS BANNER
    ══════════════════════════════════════ -->
    <section class="stats-banner">
      <div class="container">
        <div class="stats-banner__grid">
          <div class="stats-banner__item" v-for="s in bigStats" :key="s.label">
            <span class="stats-banner__value">{{ s.value }}</span>
            <span class="stats-banner__label">{{ s.label }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- ══════════════════════════════════════
         LATEST NEWS
    ══════════════════════════════════════ -->
    <section class="section news-section">
      <div class="container">
        <div class="section-header section-header--row">
          <div>
            <p class="section-eyebrow">Restez informé</p>
            <h2 class="section-title">Actualités</h2>
          </div>
          <a href="#" class="see-all-link">
            Voir toutes les actualités
            <v-icon size="16">mdi-arrow-right</v-icon>
          </a>
        </div>

        <div class="news-grid">
          <div class="news-card news-card--featured">
            <div class="news-card__img-wrap"></div>
            <div class="news-card__body">
              <span class="news-tag">Campagne</span>
              <h3 class="news-card__title">
                J'aime mon animal, je l'identifie : la campagne nationale est lancée
              </h3>
              <p class="news-card__excerpt">
                Une nouvelle campagne de sensibilisation à l'identification des animaux de compagnie
                est en cours sur tout le territoire français.
              </p>
              <div class="news-card__footer">
                <span class="news-date">
                  <v-icon size="14">mdi-calendar</v-icon>
                  15 novembre 2024
                </span>
                <a href="#" class="news-link">Lire la suite →</a>
              </div>
            </div>
          </div>

          <div class="news-side">
            <div class="news-card news-card--small" v-for="item in sideNews" :key="item.title">
              <span class="news-tag news-tag--sm">{{ item.tag }}</span>
              <h4 class="news-card__title--sm">{{ item.title }}</h4>
              <div class="news-card__footer">
                <span class="news-date">
                  <v-icon size="12">mdi-calendar</v-icon>
                  {{ item.date }}
                </span>
                <a href="#" class="news-link--sm">Lire →</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ══════════════════════════════════════
         LOST ANIMAL CTA
    ══════════════════════════════════════ -->
    <section class="cta-section">
      <div class="container">
        <div class="cta-card">
          <div class="cta-card__deco" />
          <div class="cta-card__content">
            <v-icon size="48" color="#D81B3F" class="mb-4">mdi-map-marker-alert</v-icon>
            <h2 class="cta-card__title">Votre animal est perdu ?</h2>
            <p class="cta-card__desc">
              Signalez sa disparition immédiatement sur I-CAD pour maximiser les chances de le
              retrouver.
            </p>
            <div class="cta-card__actions">
              <v-btn class="btn-primary" rounded="pill" size="large" elevation="0">
                Déclarer un animal perdu
              </v-btn>
              <v-btn class="btn-outline" rounded="pill" size="large" variant="outlined">
                Rechercher un animal trouvé
              </v-btn>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import CarrouselComponent from '@/components/CarrouselComponent.vue'
import ProfileCard from '@/components/ProfileCard.vue'
import { ref, onMounted } from 'vue'

import { profiles, actions, steps, bigStats, sideNews } from '@/data/dumpData'
const emit = defineEmits(['open-login'])

const mounted = ref(false)
const activeProfile = ref('')

function openProfile(profileTitle: string) {
  activeProfile.value = profileTitle
  emit('open-login', profileTitle)
}

onMounted(() => setTimeout(() => (mounted.value = true), 100))
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&family=DM+Sans:ital,wght@0,400;0,500;1,400&display=swap');

/* ─── GLOBAL ─── */
.home {
  font-family: 'DM Sans', sans-serif;
  color: #1c1e26;
  overflow-x: hidden;
}
.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 40px;
}

/* ─── HERO ─── */
.hero {
  position: relative;
  min-height: 88vh;
  background: #0b0d14;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
}

.hero__bg-gradient {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(ellipse 80% 60% at 60% 40%, rgba(216, 27, 63, 0.18) 0%, transparent 70%),
    radial-gradient(ellipse 50% 50% at 20% 80%, rgba(25, 118, 210, 0.12) 0%, transparent 60%),
    linear-gradient(135deg, var(--color-primary) 0%, #141720 100%);
}

.hero__content {
  position: relative;
  z-index: 2;
  max-width: 1280px;
  margin: 0 auto;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 50px;
  padding-top: 80px;
  padding-bottom: 80px;
}

.hero__text {
  max-width: 600px;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}
.hero__text--visible {
  opacity: 1;
  transform: translateY(0);
}

.hero__badge {
  display: inline-flex;
  align-items: center;
  background: rgba(216, 27, 63, 0.15);
  border: 1px solid rgba(216, 27, 63, 0.4);
  color: #ff6b88;
  font-family: 'Outfit', sans-serif;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  padding: 5px 14px;
  border-radius: 999px;
  margin-bottom: 24px;
}

.hero__title {
  font-family: 'Outfit', sans-serif;
  font-size: clamp(2.4rem, 5vw, 4rem);
  font-weight: 800;
  color: #ffffff;
  line-height: 1.1;
  letter-spacing: -0.02em;
  margin-bottom: 20px;
}
.hero__title--accent {
  color: #d81b3f;
}

.hero__desc {
  font-size: 1.05rem;
  color: rgba(255, 255, 255, 0.6);
  line-height: 1.7;
  margin-bottom: 36px;
  max-width: 500px;
}

.hero__actions {
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
}

@keyframes scrollBounce {
  0%,
  100% {
    transform: translateY(0);
    opacity: 0.4;
  }
  50% {
    transform: translateY(8px);
    opacity: 1;
  }
}

/* ─── INFO BANNER ─── */
.info-banner {
  background: #fff8e1;
  border-bottom: 1px solid #ffe082;
  padding: 14px 40px;
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 0.875rem;
  color: #5d4037;
}
.info-banner__link {
  display: flex;
  align-items: center;
  gap: 2px;
  color: #d81b3f;
  font-weight: 600;
  text-decoration: none;
  margin-left: auto;
  white-space: nowrap;
  font-family: 'Outfit', sans-serif;
}

/* ─── SECTIONS COMMON ─── */
.section {
  padding: 80px 0;
}
.section-header {
  text-align: center;
  margin-bottom: 56px;
}
.section-header--row {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  text-align: left;
  margin-bottom: 40px;
}
.section-eyebrow {
  font-family: 'Outfit', sans-serif;
  font-size: 0.78rem;
  font-weight: 700;
  color: #d81b3f;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  margin-bottom: 8px;
}
.section-title {
  font-family: 'Outfit', sans-serif;
  font-size: clamp(1.6rem, 3vw, 2.4rem);
  font-weight: 800;
  color: #1c1e26;
  letter-spacing: -0.02em;
  line-height: 1.2;
}
.section-sub {
  font-size: 1rem;
  color: #6b7280;
  margin-top: 12px;
  max-width: 520px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.7;
}
.see-all-link {
  display: flex;
  align-items: center;
  gap: 4px;
  color: #d81b3f;
  text-decoration: none;
  font-family: 'Outfit', sans-serif;
  font-weight: 600;
  font-size: 0.9rem;
  white-space: nowrap;
}

/* ─── PROFILES ─── */
.profiles-section {
  background: #f8f9fc;
}
.profiles-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

/* ─── ACTIONS ─── */
.actions-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 14px;
}

.action-card {
  display: flex;
  align-items: center;
  gap: 18px;
  background: #fff;
  border: 1px solid #f0f0f5;
  border-radius: 14px;
  padding: 20px 22px;
  cursor: pointer;
  transition: all 0.2s ease;
}
.action-card:hover {
  border-color: #d81b3f;
  box-shadow: 0 4px 20px rgba(216, 27, 63, 0.08);
  transform: translateX(4px);
}

.action-card__icon-wrap {
  width: 44px;
  height: 44px;
  background: #fff0f3;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
.action-card__body {
  flex: 1;
}
.action-card__title {
  font-family: 'Outfit', sans-serif;
  font-size: 0.95rem;
  font-weight: 600;
  color: #1c1e26;
  margin-bottom: 4px;
}
.action-card__desc {
  font-size: 0.8rem;
  color: #9ca3af;
  line-height: 1.5;
}
.action-card__arrow {
  opacity: 0;
  transition: opacity 0.2s;
}
.action-card:hover .action-card__arrow {
  opacity: 1;
}

/* ─── STEPS ─── */
.steps-section {
  background: #f8f9fc;
}
.steps-layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
}
.steps-text .section-sub {
  margin-left: 0;
}

.steps-list {
  display: flex;
  flex-direction: column;
  gap: 0;
}
.step {
  display: flex;
  gap: 24px;
  position: relative;
  padding-bottom: 32px;
}
.step__number {
  font-family: 'Outfit', sans-serif;
  font-size: 2.5rem;
  font-weight: 800;
  color: rgba(216, 27, 63, 0.12);
  line-height: 1;
  min-width: 56px;
  padding-top: 2px;
}
.step__content {
  flex: 1;
}
.step__title {
  font-family: 'Outfit', sans-serif;
  font-size: 1rem;
  font-weight: 700;
  color: #1c1e26;
  margin-bottom: 6px;
}
.step__desc {
  font-size: 0.875rem;
  color: #6b7280;
  line-height: 1.7;
}
.step__connector {
  position: absolute;
  left: 27px;
  top: 48px;
  bottom: 0;
  width: 2px;
  background: linear-gradient(to bottom, rgba(216, 27, 63, 0.2), transparent);
}

/* ─── STATS BANNER ─── */
.stats-banner {
  background: linear-gradient(135deg, #d81b3f, #b0152f);
  padding: 60px 0;
}
.stats-banner__grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  text-align: center;
}
.stats-banner__value {
  display: block;
  font-family: 'Outfit', sans-serif;
  font-size: 2.2rem;
  font-weight: 800;
  color: #fff;
  letter-spacing: -0.02em;
}
.stats-banner__label {
  display: block;
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.7);
  margin-top: 6px;
  line-height: 1.4;
}

/* ─── NEWS ─── */
.news-grid {
  display: grid;
  grid-template-columns: 1.4fr 1fr;
  gap: 24px;
}
.news-card--featured {
  background: #fff;
  border-radius: 20px;
  overflow: hidden;
  border: 1px solid #f0f0f5;
  transition: box-shadow 0.25s;
}
.news-card--featured:hover {
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.1);
}
.news-card__img-wrap {
  height: 220px;
  background: url('@/assets/carrousel/img3.png') center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
}
.news-card__body {
  padding: 24px;
}
.news-tag {
  display: inline-block;
  background: #fff0f3;
  color: #d81b3f;
  font-family: 'Outfit', sans-serif;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: 3px 10px;
  border-radius: 999px;
  margin-bottom: 12px;
}
.news-tag--sm {
  font-size: 0.65rem;
  margin-bottom: 8px;
}
.news-card__title {
  font-family: 'Outfit', sans-serif;
  font-size: 1.1rem;
  font-weight: 700;
  color: #1c1e26;
  line-height: 1.4;
  margin-bottom: 10px;
}
.news-card__excerpt {
  font-size: 0.875rem;
  color: #6b7280;
  line-height: 1.7;
  margin-bottom: 16px;
}
.news-card__footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.news-date {
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 0.78rem;
  color: #9ca3af;
}
.news-link {
  color: #d81b3f;
  font-family: 'Outfit', sans-serif;
  font-weight: 600;
  font-size: 0.85rem;
  text-decoration: none;
}

.news-side {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.news-card--small {
  background: #fff;
  border: 1px solid #f0f0f5;
  border-radius: 14px;
  padding: 18px 20px;
  transition: all 0.2s ease;
  cursor: pointer;
}
.news-card--small:hover {
  border-color: #d81b3f;
  box-shadow: 0 4px 16px rgba(216, 27, 63, 0.08);
}
.news-card__title--sm {
  font-family: 'Outfit', sans-serif;
  font-size: 0.9rem;
  font-weight: 600;
  color: #1c1e26;
  line-height: 1.4;
  margin-bottom: 12px;
}
.news-link--sm {
  color: #d81b3f;
  font-family: 'Outfit', sans-serif;
  font-weight: 600;
  font-size: 0.78rem;
  text-decoration: none;
}

/* ─── CTA ─── */
.cta-section {
  background: #f8f9fc;
  padding: 80px 0;
}
.cta-card {
  background: #fff;
  border: 1px solid #f0f0f5;
  border-radius: 28px;
  padding: 64px;
  text-align: center;
  position: relative;
  overflow: hidden;
}
.cta-card__deco {
  position: absolute;
  top: -80px;
  right: -80px;
  width: 320px;
  height: 320px;
  background: radial-gradient(circle, rgba(216, 27, 63, 0.06) 0%, transparent 70%);
  border-radius: 50%;
}
.cta-card__content {
  position: relative;
  z-index: 1;
}
.cta-card__title {
  font-family: 'Outfit', sans-serif;
  font-size: 2rem;
  font-weight: 800;
  color: #1c1e26;
  margin-bottom: 14px;
}
.cta-card__desc {
  font-size: 1rem;
  color: #6b7280;
  max-width: 480px;
  margin: 0 auto 32px;
  line-height: 1.7;
}
.cta-card__actions {
  display: flex;
  gap: 14px;
  justify-content: center;
  flex-wrap: wrap;
}
/* ─── BUTTONS (Vuetify overrides) ─── */
.btn-primary {
  background: var(--color-primary);
  color: #fff;
  font-family: 'Outfit', sans-serif;
  font-weight: 600;
  font-size: 0.9rem;
  text-transform: none;
  letter-spacing: 0;
  box-shadow: 0 6px 24px rgba(216, 27, 63, 0.35);
  transition: all 0.25s ease;
  padding: 15px;
}
.btn-primary:hover {
  background: #b0152f;
  box-shadow: 0 10px 32px rgba(216, 27, 63, 0.45);
  transform: translateY(-2px);
  padding: 15px;
}
.btn-ghost {
  color: rgba(255, 255, 255, 0.85);
  border-color: rgba(255, 255, 255, 0.35);
  font-family: 'Outfit', sans-serif;
  font-weight: 600;
  font-size: 0.9rem;
  text-transform: none;
  letter-spacing: 0;
  padding: 15px;
}
.btn-ghost:hover {
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(255, 255, 255, 0.7);
}
.btn-outline {
  color: #d81b3f;
  border-color: #d81b3f;
  font-family: 'Outfit', sans-serif;
  font-weight: 600;
  font-size: 0.9rem;
  text-transform: none;
  letter-spacing: 0;
  padding: 15px;
}

/* ─── RESPONSIVE ─── */
@media (max-width: 1024px) {
  .profiles-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .steps-layout {
    grid-template-columns: 1fr;
    gap: 40px;
  }
  .stats-banner__grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 32px;
  }
  .news-grid {
    grid-template-columns: 1fr;
  }
  .footer__top {
    grid-template-columns: 1fr 1fr;
    gap: 32px;
  }
}

@media (max-width: 768px) {
  .hero__content {
    flex-direction: column;
    padding-top: 60px;
    padding-bottom: 60px;
  }
  .stat-card {
    min-width: 180px;
  }
  .actions-grid {
    grid-template-columns: 1fr;
  }
  .profiles-grid {
    grid-template-columns: 1fr;
  }
  .container {
    padding: 0 20px;
  }
  .cta-card {
    padding: 36px 24px;
  }
  .footer__top {
    grid-template-columns: 1fr;
  }
  .footer__bottom {
    flex-direction: column;
    gap: 12px;
    text-align: center;
  }
  .section-header--row {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }
}
</style>
