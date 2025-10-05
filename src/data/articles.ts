export interface Article {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  type: "Professionnel" | "Communautaire" | "Personnel";
  date: string;
  readTime: string;
  views: string;
  comments: number;
  featured?: boolean;
  author: string;
  tags: string[];
}

export const articles: Article[] = [
  {
    id: "patterns-react-2024",
    title: "Les Patterns React Avancés en 2024",
    excerpt: "Découvrez les patterns React les plus utiles pour créer des applications robustes et maintenables.",
    content: `
# Les Patterns React Avancés en 2024

React continue d'évoluer et avec lui, les patterns et bonnes pratiques que nous utilisons pour créer des applications robustes. Voici un tour d'horizon des patterns les plus utiles en 2024.

## Compound Components Pattern

Le pattern Compound Components permet de créer des composants flexibles et réutilisables en exposant plusieurs sous-composants qui travaillent ensemble.

\`\`\`jsx
function Modal({ children, ...props }) {
  return (
    <ModalContext.Provider value={props}>
      <div className="modal">{children}</div>
    </ModalContext.Provider>
  );
}

Modal.Header = function ModalHeader({ children }) {
  return <div className="modal-header">{children}</div>;
};

Modal.Body = function ModalBody({ children }) {
  return <div className="modal-body">{children}</div>;
};
\`\`\`

## Custom Hooks pour la logique métier

Les custom hooks restent l'un des patterns les plus puissants pour extraire et réutiliser la logique.

\`\`\`jsx
function useApi(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false));
  }, [url]);

  return { data, loading, error };
}
\`\`\`

## Conclusion

Ces patterns vous aideront à créer des applications React plus maintenables et scalables. N'hésitez pas à les adapter selon vos besoins spécifiques.
    `,
    category: "React",
    type: "Professionnel",
    date: "15 Oct 2024",
    readTime: "8 min",
    views: "2.3k",
    comments: 24,
    featured: true,
    author: "Votre Nom",
    tags: ["React", "JavaScript", "Frontend", "Patterns"]
  },
  {
    id: "optimisation-performances-web",
    title: "Optimisation des Performances Web",
    excerpt: "Guide complet pour améliorer les performances de vos applications web modernes.",
    content: `
# Optimisation des Performances Web

Les performances web sont cruciales pour l'expérience utilisateur. Voici un guide complet pour optimiser vos applications.

## Métriques importantes

- **LCP (Largest Contentful Paint)** : < 2.5s
- **FID (First Input Delay)** : < 100ms  
- **CLS (Cumulative Layout Shift)** : < 0.1

## Techniques d'optimisation

### 1. Code Splitting
Divisez votre code en chunks plus petits pour réduire le bundle initial.

### 2. Lazy Loading
Chargez les composants uniquement quand ils sont nécessaires.

### 3. Optimisation des images
- Utilisez des formats modernes (WebP, AVIF)
- Implémentez le responsive design
- Ajoutez des placeholders

## Outils de mesure

- Lighthouse
- Web Vitals
- Performance API

La performance est un processus continu qui nécessite une surveillance constante.
    `,
    category: "Performance",
    type: "Professionnel",
    date: "8 Oct 2024",
    readTime: "12 min",
    views: "1.8k",
    comments: 18,
    author: "Votre Nom",
    tags: ["Performance", "Web", "Optimisation", "UX"]
  },
  {
    id: "construire-communaute-tech",
    title: "Construire une Communauté Tech",
    excerpt: "Mon expérience dans la création et l'animation de communautés de développeurs.",
    content: `
# Construire une Communauté Tech

Créer et animer une communauté tech est un défi passionnant. Voici mes apprentissages après 3 ans d'expérience.

## Les fondamentaux

### 1. Définir une vision claire
Votre communauté doit avoir un objectif précis et des valeurs partagées.

### 2. Créer de la valeur
- Contenus exclusifs
- Networking
- Opportunités d'apprentissage

### 3. Favoriser l'engagement
- Events réguliers
- Challenges techniques
- Mentorat

## Outils essentiels

- **Discord/Slack** pour les discussions
- **GitHub** pour les projets collaboratifs
- **Meetup** pour les événements

## Défis rencontrés

- Maintenir l'engagement long terme
- Gérer la modération
- Équilibrer débutants et experts

La clé du succès : la consistance et l'authenticité.
    `,
    category: "Communauté",
    type: "Communautaire",
    date: "1 Oct 2024",
    readTime: "6 min",
    views: "1.2k",
    comments: 31,
    author: "Votre Nom",
    tags: ["Communauté", "Leadership", "Tech", "Networking"]
  },
  {
    id: "gaming-developpement",
    title: "Du Gaming au Développement",
    excerpt: "Comment les compétences acquises en esport m'aident dans ma carrière de développeur.",
    content: `
# Du Gaming au Développement

Mon parcours gaming sur Call of Duty Mobile m'a enseigné des compétences précieuses pour le développement.

## Compétences transférables

### 1. Travail d'équipe
- Communication claire sous pression
- Coordination d'équipe
- Gestion des conflits

### 2. Analyse et stratégie
- Décomposition de problèmes complexes
- Adaptation rapide
- Optimisation continue

### 3. Performance sous pression
- Gestion du stress
- Prise de décision rapide
- Concentration prolongée

## Parallèles concrets

| Gaming | Développement |
|--------|---------------|
| Stratégie de jeu | Architecture logicielle |
| Optimisation du gameplay | Optimisation du code |
| Team communication | Stand-ups quotidiens |
| Meta analysis | Code reviews |

## Leadership

Diriger une équipe esport de 8 joueurs m'a préparé à :
- Encadrer des développeurs juniors
- Gérer des projets techniques
- Maintenir la motivation d'équipe

Le gaming compétitif forge des soft skills essentielles en tech.
    `,
    category: "Career",
    type: "Personnel",
    date: "25 Sep 2024",
    readTime: "10 min",
    views: "3.1k",
    comments: 42,
    author: "Votre Nom",
    tags: ["Gaming", "Career", "Soft Skills", "Leadership"]
  },
  {
    id: "architecture-microservices-nodejs",
    title: "Architecture Microservices avec Node.js",
    excerpt: "Implémentation pratique d'une architecture microservices scalable.",
    content: `
# Architecture Microservices avec Node.js

Guide pratique pour implémenter une architecture microservices robuste avec Node.js.

## Principes fondamentaux

### 1. Single Responsibility
Chaque service a une responsabilité unique et bien définie.

### 2. Autonomie
Services indépendants avec leurs propres bases de données.

### 3. Communication asynchrone
Utilisation d'event-driven architecture.

## Stack technique

- **Node.js** + Express pour les services
- **Docker** pour la conteneurisation
- **Redis** pour le cache et les sessions
- **RabbitMQ** pour la messagerie
- **MongoDB/PostgreSQL** pour les données

## Exemple d'implémentation

\`\`\`javascript
// Service utilisateur
app.post('/users', async (req, res) => {
  const user = await User.create(req.body);
  
  // Publier un événement
  eventBus.publish('user.created', {
    userId: user.id,
    email: user.email
  });
  
  res.status(201).json(user);
});
\`\`\`

## Défis et solutions

- **Gestion des données distribuées** : Event Sourcing
- **Communication inter-services** : API Gateway
- **Monitoring** : Distributed tracing

L'architecture microservices offre une scalabilité exceptionnelle au prix d'une complexité accrue.
    `,
    category: "Backend",
    type: "Professionnel",
    date: "18 Sep 2024",
    readTime: "15 min",
    views: "2.7k",
    comments: 28,
    author: "Votre Nom",
    tags: ["Microservices", "Node.js", "Architecture", "Backend"]
  },
  {
    id: "strategies-codm-debutants",
    title: "Stratégies CODM pour Débutants",
    excerpt: "Guide complet pour bien commencer sa carrière compétitive sur Call of Duty Mobile.",
    content: `
# Stratégies CODM pour Débutants

Votre guide complet pour progresser rapidement en ranked sur Call of Duty Mobile.

## Bases essentielles

### 1. Configuration optimale
- **Sensibilité** : Commencez bas et augmentez progressivement
- **HUD** : Personnalisez selon votre style de jeu
- **Audio** : Utilisez un casque de qualité

### 2. Maps knowledge
Connaissez parfaitement :
- Les angles de tir
- Les positions de cover
- Les rotations optimales

## Modes de jeu

### Battle Royale
- **Landing** : Évitez les zones chaudes au début
- **Loot** : Priorisez armure > armes > attachments
- **Positionnement** : Toujours près d'un cover

### Ranked Multiplayer
- **Nuketown** : Contrôlez les maisons
- **Crash** : Dominez le milieu de map
- **Crossfire** : Jouez les longues distances

## Progression recommandée

1. **Bronze-Silver** : Focus sur l'aim et mouvement
2. **Gold-Platinum** : Apprenez les maps et positions
3. **Diamond-Master** : Travaillez le game sense
4. **Legendary** : Perfectionnez la communication d'équipe

## Équipement

### Loadouts polyvalents
- **AR** : AK117 ou M4
- **SMG** : RUS-79U ou QQ9
- **Sniper** : DLQ33 ou Locus

La progression demande de la patience et de la pratique régulière.
    `,
    category: "Gaming",
    type: "Communautaire",
    date: "12 Sep 2024",
    readTime: "7 min",
    views: "4.2k",
    comments: 67,
    author: "Votre Nom",
    tags: ["CODM", "Gaming", "Strategy", "Tutorial"]
  }
];