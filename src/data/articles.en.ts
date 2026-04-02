// English version of articles data
// Same structure and IDs as articles.ts (French), all content translated

import type { Article } from "./articles";

export const articles: Article[] = [
    {
        id: "patterns-react-2024",
        title: "Advanced React Patterns in 2024",
        excerpt:
            "Discover the most useful React patterns for building robust and maintainable applications.",
        content: `
# Advanced React Patterns in 2024

React continues to evolve, and with it, the patterns and best practices we use to build robust applications. Here's an overview of the most useful patterns in 2024.

## Compound Components Pattern

The Compound Components pattern allows you to create flexible and reusable components by exposing multiple sub-components that work together.

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

## Custom Hooks for Business Logic

Custom hooks remain one of the most powerful patterns for extracting and reusing logic.

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

These patterns will help you build more maintainable and scalable React applications. Feel free to adapt them to your specific needs.
    `,
        category: "React",
        type: "Professionnel",
        date: "Oct 15, 2024",
        readTime: "8 min",
        views: "2.3k",
        comments: 24,
        featured: true,
        author: "Gaetan Jonathan BAKARY",
        tags: ["React", "JavaScript", "Frontend", "Patterns"],
    },
    {
        id: "optimisation-performances-web",
        title: "Web Performance Optimization",
        excerpt:
            "A comprehensive guide to improving the performance of your modern web applications.",
        content: `
# Web Performance Optimization

Web performance is crucial for user experience. Here's a comprehensive guide to optimizing your applications.

## Important Metrics

- **LCP (Largest Contentful Paint)**: < 2.5s
- **FID (First Input Delay)**: < 100ms  
- **CLS (Cumulative Layout Shift)**: < 0.1

## Optimization Techniques

### 1. Code Splitting
Split your code into smaller chunks to reduce the initial bundle.

### 2. Lazy Loading
Load components only when they are needed.

### 3. Image Optimization
- Use modern formats (WebP, AVIF)
- Implement responsive design
- Add placeholders

## Measurement Tools

- Lighthouse
- Web Vitals
- Performance API

Performance is an ongoing process that requires constant monitoring.
    `,
        category: "Performance",
        type: "Professionnel",
        date: "Oct 8, 2024",
        readTime: "12 min",
        views: "1.8k",
        comments: 18,
        author: "Gaetan Jonathan BAKARY",
        tags: ["Performance", "Web", "Optimization", "UX"],
    },
    {
        id: "construire-communaute-tech",
        title: "Building a Tech Community",
        excerpt:
            "My experience in creating and running developer communities.",
        content: `
# Building a Tech Community

Creating and running a tech community is an exciting challenge. Here are my learnings after 3 years of experience.

## The Fundamentals

### 1. Define a Clear Vision
Your community must have a precise objective and shared values.

### 2. Create Value
- Exclusive content
- Networking
- Learning opportunities

### 3. Foster Engagement
- Regular events
- Technical challenges
- Mentorship

## Essential Tools

- **Discord/Slack** for discussions
- **GitHub** for collaborative projects
- **Meetup** for events

## Challenges Encountered

- Maintaining long-term engagement
- Managing moderation
- Balancing beginners and experts

The key to success: consistency and authenticity.
    `,
        category: "Community",
        type: "Communautaire",
        date: "Oct 1, 2024",
        readTime: "6 min",
        views: "1.2k",
        comments: 31,
        author: "Gaetan Jonathan BAKARY",
        tags: ["Community", "Leadership", "Tech", "Networking"],
    },
    {
        id: "gaming-developpement",
        title: "From Gaming to Software Development",
        excerpt:
            "How the skills I acquired in esports help me in my developer career.",
        content: `
# From Gaming to Software Development

My gaming journey on Call of Duty Mobile has taught me invaluable skills for software development.

## Transferable Skills

### 1. Teamwork
- Clear communication under pressure
- Team coordination
- Conflict management

### 2. Analysis and Strategy
- Breaking down complex problems
- Quick adaptation
- Continuous optimization

### 3. Performance Under Pressure
- Stress management
- Quick decision-making
- Sustained focus

## Concrete Parallels

| Gaming | Development |
|--------|-------------|
| Game strategy | Software architecture |
| Gameplay optimization | Code optimization |
| Team communication | Daily stand-ups |
| Meta analysis | Code reviews |

## Leadership

Leading an esports team of 8 players prepared me to:
- Mentor junior developers
- Manage technical projects
- Maintain team motivation

Competitive gaming forges essential soft skills in tech.
    `,
        category: "Career",
        type: "Personnel",
        date: "Sep 25, 2024",
        readTime: "10 min",
        views: "3.1k",
        comments: 42,
        author: "Gaetan Jonathan BAKARY",
        tags: ["Gaming", "Career", "Soft Skills", "Leadership"],
    },
    {
        id: "architecture-microservices-nodejs",
        title: "Microservices Architecture with Node.js",
        excerpt:
            "A practical implementation of a scalable microservices architecture.",
        content: `
# Microservices Architecture with Node.js

A practical guide to implementing a robust microservices architecture with Node.js.

## Fundamental Principles

### 1. Single Responsibility
Each service has a single and well-defined responsibility.

### 2. Autonomy
Independent services with their own databases.

### 3. Asynchronous Communication
Using event-driven architecture.

## Tech Stack

- **Node.js** + Express for services
- **Docker** for containerization
- **Redis** for cache and sessions
- **RabbitMQ** for messaging
- **MongoDB/PostgreSQL** for data

## Implementation Example

\`\`\`javascript
// User service
app.post('/users', async (req, res) => {
  const user = await User.create(req.body);
  
  // Publish an event
  eventBus.publish('user.created', {
    userId: user.id,
    email: user.email
  });
  
  res.status(201).json(user);
});
\`\`\`

## Challenges and Solutions

- **Distributed data management**: Event Sourcing
- **Inter-service communication**: API Gateway
- **Monitoring**: Distributed tracing

Microservices architecture offers exceptional scalability at the cost of increased complexity.
    `,
        category: "Backend",
        type: "Professionnel",
        date: "Sep 18, 2024",
        readTime: "15 min",
        views: "2.7k",
        comments: 28,
        author: "Gaetan Jonathan BAKARY",
        tags: ["Microservices", "Node.js", "Architecture", "Backend"],
    },
    {
        id: "strategies-codm-debutants",
        title: "CODM Strategies for Beginners",
        excerpt:
            "A comprehensive guide to getting started in competitive Call of Duty Mobile.",
        content: `
# CODM Strategies for Beginners

Your comprehensive guide to progressing quickly in ranked Call of Duty Mobile.

## Essential Basics

### 1. Optimal Configuration
- **Sensitivity**: Start low and increase gradually
- **HUD**: Customize according to your play style
- **Audio**: Use quality headphones

### 2. Map Knowledge
Know perfectly:
- Shooting angles
- Cover positions
- Optimal rotations

## Game Modes

### Battle Royale
- **Landing**: Avoid hot zones at first
- **Loot**: Prioritize armor > weapons > attachments
- **Positioning**: Always near cover

### Ranked Multiplayer
- **Nuketown**: Control the houses
- **Crash**: Dominate the middle of the map
- **Crossfire**: Play long distances

## Recommended Progression

1. **Bronze-Silver**: Focus on aim and movement
2. **Gold-Platinum**: Learn maps and positions
3. **Diamond-Master**: Work on game sense
4. **Legendary**: Perfect team communication

## Equipment

### Versatile Loadouts
- **AR**: AK117 or M4
- **SMG**: RUS-79U or QQ9
- **Sniper**: DLQ33 or Locus

Progression requires patience and regular practice.
    `,
        category: "Gaming",
        type: "Communautaire",
        date: "Sep 12, 2024",
        readTime: "7 min",
        views: "4.2k",
        comments: 67,
        author: "Gaetan Jonathan BAKARY",
        tags: ["CODM", "Gaming", "Strategy", "Tutorial"],
    },
];
