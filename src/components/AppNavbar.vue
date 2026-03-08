<template>
  <div>
    <!-- ══ Top Government Bar ══ -->
    <div class="gov-bar">
      <span class="gov-bar__title">
        MINISTÈRE DE L'AGRICULTURE ET DE LA SOUVERAINETÉ ALIMENTAIRE</span
      >
      <div class="gov-bar__actions">
        <a href="#">Contact</a>
        <span class="divider">|</span>
        <a href="#">Newsletter</a>
        <span class="divider">|</span>
        <button class="lang-btn">
          <v-icon size="13">mdi-web</v-icon>
          FR
        </button>
      </div>
    </div>

    <nav class="navbar" :class="{ 'navbar--scrolled': isScrolled }">
      <div class="navbar__inner">
        <!-- Logo -->
        <RouterLink to="/" class="navbar__logo">
          <div class="logo-text">
            <img src="@/assets/logo_icad.png" alt="Logo I-CAD" width="100" height="38" />
            <span class="logo-text__sub">Identification Carnivores</span>
          </div>
          <div class="logo-text">
            <img
              src="@/assets/logo_masa_delegation.svg"
              alt="Logo minister de l'agriculture"
              width="100"
              height="100"
            />
          </div>
        </RouterLink>

        <!-- Desktop Nav Links -->
        <ul class="navbar__links">
          <li v-for="item in navItems" :key="item.label">
            <RouterLink :to="item.to" class="nav-link" active-class="nav-link--active">
              {{ item.label }}
            </RouterLink>
          </li>
        </ul>

        <!-- Right Actions -->
        <div class="navbar__actions">
          <button class="search-btn" @click="searchOpen = !searchOpen">
            <v-icon size="18">mdi-magnify</v-icon>
            <span>Rechercher...</span>
          </button>

          <v-btn
            class="login-btn p-4"
            rounded="pill"
            color="#D81B3F"
            prepend-icon="mdi-account-circle"
            elevation="0"
            @click="emit('open-login', 'Détenteur')"
          >
            Connexion
          </v-btn>
        </div>

        <!-- Mobile Hamburger -->
        <button class="hamburger" @click="mobileOpen = !mobileOpen">
          <v-icon color="#1C1E26">{{ mobileOpen ? 'mdi-close' : 'mdi-menu' }}</v-icon>
        </button>
      </div>

      <!-- Search Bar expandable -->
      <Transition name="search-slide">
        <div v-if="searchOpen" class="search-bar">
          <v-text-field
            v-model="searchQuery"
            placeholder="Rechercher sur I-CAD..."
            variant="outlined"
            density="compact"
            prepend-inner-icon="mdi-magnify"
            hide-details
            autofocus
            rounded="pill"
            bg-color="white"
            @keyup.esc="searchOpen = false"
          />
          <button class="search-bar__close" @click="searchOpen = false">
            <v-icon>mdi-close</v-icon>
          </button>
        </div>
      </Transition>

      <!-- Mobile Menu -->
      <Transition name="mobile-slide">
        <div v-if="mobileOpen" class="mobile-menu">
          <RouterLink
            v-for="item in navItems"
            :key="item.label"
            :to="item.to"
            class="mobile-link"
            active-class="mobile-link--active"
            @click="mobileOpen = false"
          >
            <v-icon size="18">{{ item.icon }}</v-icon>
            {{ item.label }}
          </RouterLink>

          <div class="mobile-menu__footer">
            <v-btn
              block
              rounded="pill"
              color="#D81B3F"
              prepend-icon="mdi-account-circle"
              elevation="0"
            >
              Connexion
            </v-btn>
          </div>
        </div>
      </Transition>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { RouterLink } from 'vue-router'

const isScrolled = ref(false)
const mobileOpen = ref(false)
const searchOpen = ref(false)
const searchQuery = ref('')
const emit = defineEmits(['open-login'])

const navItems = [
  { label: 'Accueil', to: '/', icon: 'mdi-home-outline' },
  { label: 'Démarches', to: '/demarches', icon: 'mdi-clipboard-list-outline' },
  { label: 'FAQ', to: '/faq', icon: 'mdi-help-circle-outline' },
  { label: 'Fichier Opérateurs', to: '/operateurs', icon: 'mdi-file-document-outline' },
  { label: 'Actualités', to: '/actualites', icon: 'mdi-newspaper-variant-outline' },
  { label: 'Statistiques', to: '/statistiques', icon: 'mdi-chart-bar' },
  { label: 'À propos', to: '/a-propos', icon: 'mdi-information-outline' },
]

function handleScroll() {
  isScrolled.value = window.scrollY > 20
}

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800&display=swap');

/* ── Gov Bar ── */
.gov-bar {
  background: #0f1117;
  padding: 6px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: 'Outfit', sans-serif;
  font-size: 0.7rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.45);
  letter-spacing: 0.05em;
  text-transform: uppercase;
}
.gov-bar__actions {
  display: flex;
  align-items: center;
  gap: 10px;
}
.gov-bar a {
  color: rgba(255, 255, 255, 0.45);
  text-decoration: none;
  transition: color 0.2s;
}
.gov-bar a:hover {
  color: #fff;
}
.divider {
  opacity: 0.25;
}
.lang-btn {
  display: flex;
  align-items: center;
  gap: 4px;
  background: none;
  border: none;
  color: rgba(255, 255, 255, 0.45);
  font-family: 'Outfit', sans-serif;
  font-size: 0.7rem;
  font-weight: 600;
  cursor: pointer;
  letter-spacing: 0.05em;
  transition: color 0.2s;
}
.lang-btn:hover {
  color: #fff;
}

/* ── Main Navbar ── */
.navbar {
  background: #ffffff;
  position: sticky;
  top: 0;
  z-index: 200;
  border-bottom: 1px solid #f0f0f5;
  transition: box-shadow 0.3s ease;
}
.navbar--scrolled {
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.08);
}
.navbar__inner {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 40px;
  height: auto;
  display: flex;
  align-items: center;
  gap: 28px;
}

/* ── Logo ── */
.navbar__logo {
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  flex-shrink: 0;
}
.logo-icon {
  width: 38px;
  height: 38px;
  background: #d81b3f;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(216, 27, 63, 0.3);
  flex-shrink: 0;
}
.logo-text {
  display: flex;
  flex-direction: column;
  line-height: 1.1;
}
.logo-text__sub {
  font-family: 'Outfit', sans-serif;
  font-size: 0.58rem;
  font-weight: 500;
  color: #9ca3af;
  letter-spacing: 0.07em;
  text-transform: uppercase;
}

/* ── Nav Links ── */
.navbar__links {
  display: flex;
  align-items: center;
  gap: 2px;
  list-style: none;
  flex: 1;
  padding: 0;
  margin: 0;
}
.nav-link {
  font-family: 'Outfit', sans-serif;
  font-size: 0.875rem;
  font-weight: 500;
  color: #4b5563;
  text-decoration: none;
  padding: 7px 11px;
  border-radius: 8px;
  transition: all 0.2s ease;
  white-space: nowrap;
}
.nav-link:hover {
  color: #d81b3f;
  background: #fff0f3;
}
.nav-link--active {
  color: #d81b3f !important;
  background: #fff0f3;
  font-weight: 600;
}

/* ── Actions ── */
.navbar__actions {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
}
.search-btn {
  display: flex;
  align-items: center;
  gap: 6px;
  background: #f5f6fa;
  border: 1px solid #e5e7eb;
  border-radius: 999px;
  padding: 6px 14px;
  font-family: 'Outfit', sans-serif;
  font-size: 0.82rem;
  color: #9ca3af;
  cursor: pointer;
  transition: all 0.2s;
}
.search-btn:hover {
  background: #edeef5;
  color: #6b7280;
}
.login-btn {
  font-family: 'Outfit', sans-serif !important;
  font-weight: 600 !important;
  font-size: 0.82rem !important;
  text-transform: none !important;
  letter-spacing: 0 !important;
  padding: 15px;
}

/* ── Hamburger ── */
.hamburger {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
  margin-left: auto;
}

/* ── Search Bar ── */
.search-bar {
  background: #f8f9fc;
  padding: 10px 40px;
  display: flex;
  align-items: center;
  gap: 12px;
  border-top: 1px solid #e5e7eb;
}
.search-bar__close {
  background: none;
  border: none;
  color: #9ca3af;
  cursor: pointer;
  display: flex;
  align-items: center;
  transition: color 0.2s;
}
.search-bar__close:hover {
  color: #d81b3f;
}

/* ── Transitions ── */
.search-slide-enter-active,
.search-slide-leave-active {
  transition: all 0.25s ease;
}
.search-slide-enter-from,
.search-slide-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}

/* ── Mobile Menu ── */
.mobile-menu {
  background: #fff;
  border-top: 1px solid #f0f0f5;
  padding: 16px 20px 24px;
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.mobile-link {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 14px;
  border-radius: 10px;
  text-decoration: none;
  font-family: 'Outfit', sans-serif;
  font-size: 0.95rem;
  font-weight: 500;
  color: #4b5563;
  transition: all 0.2s;
}
.mobile-link:hover {
  background: #fff0f3;
  color: #d81b3f;
}
.mobile-link--active {
  background: #fff0f3;
  color: #d81b3f;
  font-weight: 600;
}
.mobile-menu__footer {
  margin-top: 16px;
  padding-top: 16px;
  border-top: 1px solid #f0f0f5;
}

.mobile-slide-enter-active,
.mobile-slide-leave-active {
  transition: all 0.3s ease;
}
.mobile-slide-enter-from,
.mobile-slide-leave-to {
  opacity: 0;
  transform: translateY(-12px);
}

/* ── Responsive ── */
@media (max-width: 1024px) {
  .navbar__links {
    display: none;
  }
  .navbar__actions .search-btn {
    display: none;
  }
  .hamburger {
    display: flex;
  }
}
@media (max-width: 640px) {
  .gov-bar__title {
    display: none;
  }
  .gov-bar {
    justify-content: flex-end;
  }
  .navbar__inner {
    padding: 0 20px;
  }
  .search-bar {
    padding: 10px 20px;
  }
}
</style>
