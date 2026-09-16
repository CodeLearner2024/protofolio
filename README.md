# Portfolio — Eric NDIHOKUBWAYO

Site portfolio professionnel d'Eric NDIHOKUBWAYO, Analyste Programmeur / Développeur Full-Stack.

## Stack

- **Next.js 16** (App Router)
- **MUI (Material UI)** v6 — composants, thème custom
- **next-intl** — internationalisation FR / EN
- **Nodemailer** — formulaire de contact avec envoi réel d'email
- **JavaScript** (pas TypeScript)

## Démarrage rapide

```bash
npm install
```

### Configuration email (obligatoire pour le formulaire de contact)

Créez ou modifiez `.env.local` à la racine :

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=votre-email@gmail.com
SMTP_PASS=votre_mot_de_passe_application
```

> **Gmail** : activez les « Mots de passe d'application » dans votre compte Google
> (Sécurité → Connexion à Google → Mots de passe d'application).
> Le mot de passe de l'application est différent de votre mot de passe Gmail.

### Développement

```bash
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000).

### Production

```bash
npm run build
npm start
```

## Structure

```
portfolio-eric/
├── app/
│   ├── [locale]/
│   │   ├── layout.js       # Layout principal (Navbar, Footer, ThemeRegistry)
│   │   └── page.js         # Page unique one-page
│   ├── api/contact/
│   │   └── route.js        # API d'envoi d'email (Nodemailer)
│   └── globals.css
├── components/
│   ├── HeroSection.js      # Section Accueil
│   ├── AboutSection.js     # Section À propos
│   ├── ServicesSection.js  # Section Services
│   ├── ContactSection.js   # Section Contact
│   ├── Navbar.js           # Barre de navigation + sélecteur de langue
│   ├── Footer.js
│   └── ThemeRegistry.js    # Provider MUI SSR
├── i18n/
│   ├── routing.js          # Configuration des locales (fr/en)
│   └── request.js          # Chargement des messages serveur
├── lib/
│   └── theme.js            # Thème MUI custom
├── messages/
│   ├── fr.json             # Traductions françaises
│   └── en.json             # Traductions anglaises
├── public/
│   └── cv-eric-ndihokubwayo.pdf  # ← Remplacez par votre vrai CV
├── proxy.js                # Middleware next-intl (routing i18n)
└── .env.local              # Variables d'environnement (ne pas committer)
```

## CV téléchargeable

Remplacez le fichier `public/cv-eric-ndihokubwayo.pdf` par votre vrai CV au format PDF.

## Internationalisation

Le site est disponible en :
- `/fr` — Français (défaut)
- `/en` — English

Le sélecteur de langue est visible dans la barre de navigation.

## Déploiement

Le site est compatible avec **Vercel**, **Netlify** (SSR), ou tout hébergeur Node.js.

Sur Vercel, ajoutez les variables d'environnement `SMTP_*` dans les paramètres du projet.
# protofolio
