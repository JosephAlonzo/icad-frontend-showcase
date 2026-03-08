<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__top">
        <div class="footer__brand">
          <div class="footer__logo">
            <img src="@/assets/logo_icad_inverted.png" alt="Logo I-CAD" width="100" height="38" />
            <div>
              <span class="footer__logo-sub">Identification Carnivores</span>
            </div>
          </div>

          <p class="footer__tagline">
            Le fichier national d'identification des carnivores domestiques, géré sous délégation du
            Ministère de l'Agriculture.
          </p>

          <img
            src="@/assets/logo_masa_delegation.svg"
            alt="Logo minister de l'agriculture"
            width="150"
            height="auto"
          />
        </div>

        <div class="footer__links" v-for="col in footerLinks" :key="col.title">
          <h5 class="footer__col-title">{{ col.title }}</h5>
          <ul>
            <li v-for="link in col.links" :key="link">
              <a href="#">{{ link }}</a>
            </li>
          </ul>
        </div>
      </div>

      <section id="frise">
        <img src="@/assets/frise.png" alt="Logo I-CAD" />
      </section>

      <div class="footer__bottom">
        <span>© 2026 I-CAD — Tous droits réservés</span>
        <div class="footer__legal">
          <a href="#">Mentions légales</a>
          <a href="#">Politique de confidentialité</a>
          <a href="#">Accessibilité</a>
        </div>
      </div>
    </div>
  </footer>
</template>
<script setup lang="ts">
const footerLinks = [
  {
    title: 'Démarches',
    links: [
      'Identifier mon animal',
      'Déclarer un animal perdu',
      'Changer de propriétaire',
      'Télécharger ma carte',
    ],
  },
  {
    title: 'Professionnels',
    links: ['Vétérinaires', 'Tatoueurs agréés', 'Refuges & SPA', 'Éleveurs'],
  },
  {
    title: 'I-CAD',
    links: ['À propos', 'FAQ', 'Actualités', 'Contact', 'Newsletter'],
  },
]
</script>
<style scoped>
#frise {
  background: url(@/assets/frise_bg.png) repeat-x top left;
}
.footer {
  background: var(--color-primary);
  padding: 60px 15px 15px 15px;
}
.footer__top {
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr 1fr;
  gap: 20px;
  padding-bottom: 48px;
}
.footer__logo {
  display: flex;
  align-items: end;
  gap: 10px;
  margin-bottom: 16px;
}
.logo-icon {
  width: 36px;
  height: 36px;
  background: #d81b3f;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.footer__logo-name {
  font-family: 'Outfit', sans-serif;
  font-size: 1.1rem;
  font-weight: 800;
  color: #fff;
  display: block;
}
.footer__logo-sub {
  font-size: 0.6rem;
  color: rgba(255, 255, 255, 0.8);
  text-transform: uppercase;
  letter-spacing: 0.06em;
  display: block;
}
.footer__tagline {
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.6);
  line-height: 1.7;
}
.footer__col-title {
  font-family: 'Outfit', sans-serif;
  font-size: 0.78rem;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.8);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 16px;
}
.footer__links ul {
  list-style: none;
  padding: 0;
}
.footer__links li {
  margin-bottom: 10px;
}
.footer__links a {
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.65);
  text-decoration: none;
  transition: color 0.2s;
}
.footer__links a:hover {
  color: #fff;
}
.footer__bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0;
  font-size: 0.78rem;
  color: rgba(255, 255, 255, 0.8);
}
.footer__legal {
  display: flex;
  gap: 24px;
}
.footer__legal a {
  color: rgba(255, 255, 255, 0.65);
  text-decoration: none;
  transition: color 0.2s;
}
.footer__legal a:hover {
  color: rgba(255, 255, 255, 0.9);
}
</style>
