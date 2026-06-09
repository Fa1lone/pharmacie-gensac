# Pharmacie de Gensac-la-Pallue — Site Web

## Statut
- **Phase** : V2 — DA officielle intégrée (charte 26/05/26)
- **Stack** : Astro 6.4, HTML/CSS/JS vanilla, port 3010 (dev sur 4322)
- **Port local** : `npm run dev` → http://localhost:4322

## Direction artistique : "Pharmacie Jardin"

### Concept
Seul site de pharmacie française avec une identité végétale assumée, inspirée du logo existant (vigne, iris, ruban bleu rivière). Ambiance domaine viticole premium + officine de village. 100% différenciant vs concurrence (template WordPress bleu/blanc générique).

### Palette — valeurs officielles Pantone (charte 26/05/26)
| Token | Valeur | Pantone | Usage |
|---|---|---|---|
| `--cream` | `#F7F4EA` | — | Fond principal (70%) |
| `--cream-2` | `#FFFDF7` | — | Cards, surfaces |
| `--green-deep` | `#046A38` | 349C | Vert profond, CTA, titres |
| `--green-vivid` | `#43B02A` | 361C | Vert vivant, accents |
| `--green-leaf` | `#97D700` | 375C | Vert lime, décorations |
| `--blue-river` | `#0072CE` | 285C | Bleu eau, hover effects |
| `--yellow-iris` | `#FFCD00` | 116C | Jaune iris, touches 3% |
| `--brown-trunk` | `#623412` | 732C | Brun tronc |
| `--text-main` | `#0D2118` | — | Texte principal |

### Typographies — charte officielle
- **Titres** : **Montserrat Bold/SemiBold** (alternative Google Fonts à Gotham Bold)
- **Corps** : **Figtree** (alternative à Gotham Book)
- **Script** : police Japan Regular dans la charte → non utilisée sur le web

### Assets logos (public/)
- `logo-vertical.png` — logo officiel vertical (header)
- `logo-horizontal.png` — logo officiel horizontal (footer, fond blanc obligatoire)
- `logo-rond.png` — logo officiel rond (réseaux sociaux, favicon futur)

### Éléments de DA
- Fond texture papier (SVG noise, fixed, pointer-events:none)
- Motifs SVG vigne + iris + ruban bleu dans le hero
- Ligne bleue rivière qui glisse au hover des cards (::after scaleX)
- Double-bezel sur toutes les photos (outer shell + inner core)
- Badges flottants animés (float keyframe)
- Reveal scroll IntersectionObserver (prefers-reduced-motion respecté)
- Menu mobile overlay avec staggered link reveal

## Structure homepage V1

| Section | Statut | Notes |
|---|---|---|
| Header sticky | ✅ | Logo PNG officiel, nav, CTA Appeler |
| Mobile menu overlay | ✅ | Hamburger → X morph, stagger links, overlay plein écran |
| Hero | ✅ | Split layout, motif SVG végétal, 2 badges flottants |
| Quick Actions | ✅ | 3 cartes fond vert, ligne bleue hover |
| Services (8) | ✅ | Grid 4col → 2col → 1col, hover blue river |
| Bloc humain | ✅ | Quote, stats, placeholder équipe |
| Infos pratiques | ✅ | Horaires, coordonnées, map placeholder |
| Footer | ✅ | 4 colonnes, liens utiles |
| Barre mobile sticky | ✅ | 3 actions : Appeler, Itinéraire, Ordonnance |

## À faire (prochaines itérations)

### Contenus réels (à obtenir du client)
- [ ] Numéro de téléphone réel
- [ ] Adresse exacte + email
- [ ] Photo de la façade / intérieur pharmacie
- [ ] Photo de l'équipe
- [ ] Horaires exacts (incluant jours fériés)
- [ ] Texte "À propos" de l'équipe (pharmaciens, années d'activité)

### Fonctionnalités
- [ ] Intégration Google Maps ou OpenStreetMap
- [ ] Formulaire envoi ordonnance (ou lien Doctolib/Pharmavie)
- [ ] Intégration logo officiel (PNG fourni → convertir SVG ou img)
- [ ] Système de garde dynamique (API pharmacie.fr ou Pharmabase)
- [ ] SEO local : schema.org Pharmacy, LocalBusiness
- [ ] Sitemap.xml + robots.txt
- [ ] Google Analytics / Plausible

### Itérations design
- [ ] Page "Services" détaillée
- [ ] Page "Équipe" avec biographies
- [ ] Page "Infos pratiques" complète avec FAQ
- [ ] Section blog conseils santé saisonniers
- [ ] Animations Lenis scroll smooth (optionnel)
- [ ] Mode contraste élevé accessibility

## Notes techniques
- Phosphor Icons via CDN (unpkg.com) — version 2.1.1
- Google Fonts (Rufina + Figtree) — preconnect optimisé
- IntersectionObserver pour reveals (pas de window.scroll)
- Jamais `backdrop-blur` sur éléments scrollants (uniquement header sticky)
- CSS custom properties pour tous les tokens de design
- `min-height: 100dvh` pour iOS Safari (pas de `vh`)
- `env(safe-area-inset-bottom)` sur la barre mobile sticky

## Concurrence analysée
- **Profil type** : WordPress + Pharmagest/Itekpharma, vert/bleu générique, zéro personnalité locale
- **Notre différenciation** : seule pharmacie FR avec identité végétale/botanique complète, typographie éditoriale, qualité domaine viticole premium
- **Avantage SEO local** : "pharmacie Gensac-la-Pallue", "pharmacie Charente proximité", "pharmacie village Cognac"
