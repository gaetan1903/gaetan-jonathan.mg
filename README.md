
# Site Professionnel - Gaetan Jonathan BAKARY
## Personal Brand Hub | Carrière · Services · Communauté · Blog

Un site professionnel personnel complet développé avec React, TypeScript et Tailwind CSS, utilisant un design glassmorphism élégant. Plus qu'un simple portfolio, c'est une plateforme multi-facettes présentant mon parcours professionnel, mes services freelance, mon engagement communautaire et mes partages techniques.

## 👤 À Propos

**Gaetan Jonathan BAKARY** - Head of Development Hub Center chez AccèsBanque Madagascar

Passionné de technologie, du développement à l'automatisation. Expert en optimisation des systèmes, développement et gestion de produits numériques.

### 🎯 Expertise
- **Management** : Direction de 20 équipes de développement
- **DevOps & CI/CD** : Automatisation et déploiement continu
- **Product Management** : Cycle de vie complet des produits numériques
- **Leadership** : 6+ années d'expérience en tech leadership

### 🏆 Accomplissements
- 🥇 **5 Hackathons remportés** (Piscine Python, POESAM, DevFest, etc.)
- 📊 **14+ projets stratégiques** supervisés
- 👥 **20 équipes** managées simultanément
- 🎓 **Master II** en Management des Systèmes d'Information
- 📜 **6+ certifications** professionnelles

## 🚀 Aperçu du Site

Ce site professionnel personnel présente mon identité professionnelle complète à travers différentes facettes :

### 💼 Carrière Professionnelle
- Head of Development Hub Center chez AccèsBanque Madagascar
- 6+ années d'expérience en DevOps, Product Management et Leadership technique
- Management de 20 équipes et 14 projets stratégiques
- Expertise en Python, Linux, CI/CD et Agile

### 🚀 Services Freelance
- Développement web full-stack (Django, VueJS, React)
- DevOps et automatisation (Docker, CI/CD, Linux)
- Consulting technique et audit de code
- Formation et mentorat

### 🤝 Engagement Communautaire
- Leadership : iTeam-$ Community, GDSC ESTI, Why Not Linux
- Mentorat : 50+ personnes accompagnées (Django Girls, DevFest)
- Impact social : 600+ personnes touchées par mes initiatives
- Organisation d'événements tech et ateliers

### 🏆 Accomplissements
- 5 hackathons remportés (Piscine Python, TELMA, Biodiversité, POESAM, DevFest)
- 3 certifications professionnelles (Lean Management, GRH, Leadership)
- Master II en Management des Systèmes d'Information
- Major de promotion FANDRESENA

### 📚 Partage de Connaissances
- Blog technique avec articles et tutoriels
- Contributions open source
- Ateliers et formations communautaires

### 🎮 Hobbies & Gaming
- Parcours esport Call of Duty Mobile
- Passion pour la tech et l'innovation

## 🛠️ Technologies Utilisées

### Frontend
- **React 18** avec TypeScript
- **Vite** pour le build et le développement
- **React Router DOM** pour la navigation
- **Tailwind CSS** pour le styling
- **Lucide React** pour les icônes

### UI Components
- **Radix UI** - Composants accessibles et non-stylés
- **Shadcn/UI** - Système de design moderne
- **Class Variance Authority** - Gestion des variants CSS
- **Recharts** - Graphiques et visualisations

### Fonctionnalités
- Design responsive et glassmorphism
- Navigation fluide entre les sections
- Système de blog intégré
- Thèmes dark/light (Next Themes)
- Animations et transitions

## 📁 Structure du Projet

```
src/
├── components/           # Composants réutilisables
│   ├── ui/              # Composants UI (Shadcn)
│   ├── figma/           # Composants spécifiques Figma
│   ├── Layout.tsx       # Layout principal
│   ├── Navigation.tsx   # Navigation principale
│   ├── PageHeader.tsx   # En-tête de page
│   └── [Section]Section.tsx # Sections spécialisées
├── pages/               # Pages de l'application
│   ├── HomePage.tsx     # Page d'accueil
│   ├── ProfessionalPage.tsx # Parcours professionnel
│   ├── FreelancePage.tsx    # Services freelance
│   ├── CommunityPage.tsx    # Engagement communautaire
│   ├── GamingPage.tsx      # Parcours gaming
│   ├── BlogPage.tsx        # Liste des articles
│   └── ArticlePage.tsx     # Article individuel
├── data/                # Données statiques
│   └── articles.ts      # Articles de blog
└── styles/              # Styles globaux
    └── globals.css      # CSS global et Tailwind
```

## 🎯 Fonctionnalités Principales

### Navigation
- **Routing** : Navigation SPA avec React Router
- **Layout responsif** : Adaptation mobile/desktop
- **Navigation persistante** : Header fixe avec glassmorphism

### Pages & Sections
1. **HomePage** - Section hero avec présentation et liens
2. **ProfessionalPage** - Expériences: AccèsBanque, RELIA, iTeam-$, Comdata Group
3. **FreelancePage** - Services et projets freelance
4. **CommunityPage** - Leadership communautaire (GDSC, Django Girls, DevFest)
5. **AwardsPage** - 8 prix de hackathons et 6 certifications professionnelles
6. **GamingPage** - Parcours esport CODM
7. **BlogPage** - Articles techniques avec filtres
8. **ArticlePage** - Lecture d'article individuel

### Blog System
- **Articles typés** : Professionnel, Communautaire, Personnel
- **Filtrage dynamique** : Par catégorie
- **Métadonnées** : Date, temps de lecture, vues
- **Article featured** : Mise en avant
- **Navigation** : Liens inter-articles

## 🚀 Installation et Développement

### Prérequis
- Node.js 18+
- npm ou yarn

### Installation
```bash
# Cloner le repository
git clone https://github.com/gaetan1903/gaetan-jonathan.mg.git
cd portfolio

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

### Scripts Disponibles
```bash
npm run dev          # Serveur de développement
npm run build        # Build de production
npm run preview      # Aperçu du build
npm run lint         # Linting du code
```

## 🎨 Design System

Le projet utilise un design system cohérent basé sur :
- **Glassmorphism** : Effets de verre et transparence
- **Gradients** : Dégradés subtils et modernes
- **Spacing** : Système de spacing Tailwind
- **Typography** : Hiérarchie typographique claire
- **Colors** : Palette sombre avec accents colorés

### Couleurs Principales
- **Background** : Gradients de gris/noir
- **Glass Effects** : Transparence avec backdrop-blur
- **Accents** : Bleu, violet, vert, orange selon le contexte
- **Text** : Blanc/gris avec contrastes optimisés

## 📱 Responsive Design

- **Mobile First** : Design optimisé mobile
- **Breakpoints** : Tailwind CSS responsive
- **Navigation** : Menu adaptatif mobile/desktop
- **Content** : Layouts flexibles et adaptatifs

## 🔧 Configuration

### Vite Config
- **React SWC** : Compilation rapide
- **Path Aliases** : Résolution des imports
- **Build Optimization** : Optimisations de bundle

### TypeScript
- Configuration stricte pour la qualité du code
- Types personnalisés pour les données
- Interfaces bien définies

## 🌟 Fonctionnalités Avancées

- **Lazy Loading** : Chargement optimisé des images
- **SEO Ready** : Métadonnées et structure optimisées
- **Performance** : Bundle optimisé et code splitting
- **Accessibility** : Composants Radix UI accessibles
- **Dark Theme** : Support natif du mode sombre

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## 📞 Contact

- **Site Web** : [gaetan-jonathan.mg](https://gaetan-jonathan.mg)
- **GitHub** : [@gaetan1903](https://github.com/gaetan1903)
- **LinkedIn** : [Gaëtan Jonathan](https://linkedin.com/in/gaetan-jonathan)

---

*Développé avec ❤️ par Gaetan Jonathan BAKARY*
  