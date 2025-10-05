
# Portfolio Professionnel - Gaetan Jonathan

Un portfolio moderne et interactif développé avec React, TypeScript et Tailwind CSS, utilisant un design glassmorphism élégant.

## 🚀 Aperçu du Projet

Ce portfolio présente mon parcours professionnel à travers différentes facettes :
- **Professionnel** : Expériences en entreprise et projets techniques
- **Freelance** : Services de développement indépendant  
- **Communautaire** : Contributions open source et engagement tech
- **Gaming** : Parcours esport Call of Duty Mobile
- **Blog** : Articles techniques et partage de connaissances

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
1. **HomePage** - Section hero avec présentation
2. **ProfessionalPage** - Expériences professionnelles
3. **FreelancePage** - Services et projets freelance
4. **CommunityPage** - Contributions open source
5. **GamingPage** - Parcours esport CODM
6. **BlogPage** - Articles techniques avec filtres
7. **ArticlePage** - Lecture d'article individuel

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

- **Portfolio** : [gaetan-jonathan.mg](https://gaetan-jonathan.mg)
- **GitHub** : [@gaetan1903](https://github.com/gaetan1903)
- **LinkedIn** : [Gaëtan Jonathan](https://linkedin.com/in/gaetan-jonathan)

---

*Développé avec ❤️ par Gaetan Jonathan*
  