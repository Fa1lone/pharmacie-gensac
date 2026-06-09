# TODO — Pharmacie de Gensac-la-Pallue
> Basé sur le cahier des charges 2026-06-09

---

## 🏠 ACCUEIL (index.astro)

- [x] Email visible en clair dans le hero (contact@pharmacie-gensac.fr dans le CTA)
- [x] Téléphone visible dans le hero
- [x] CTA Itinéraire dans le hero
- [x] "English spoken" badge dans le hero
- [x] Pharmacie de garde visible dans le hero
- [x] Statut ouvert/fermé dynamique (pastille hero + barre bas)
- [x] "3 pharmaciens" supprimé — remplacé par 15+, 1er août, 6j/7
- [ ] Retirer "en Charente" du h1 → vérifier qu'il n'apparaît plus nulle part en gros
- [ ] Vérifier que le JS ouvert/fermé est bien basé sur les vrais horaires
- [ ] Hero : s'assurer que la barre pharmacie de garde s'affiche toujours (pas conditionnel)
- [ ] Section nombres : vérifier que "3 pharmaciens" n'est pas caché ailleurs

---

## 💊 LA PHARMACIE (/la-pharmacie)

- [x] Hero photo avec HeroPage composant
- [x] Section Reprise 1er août
- [x] Section Histoire de la pharmacie
- [x] Section Locaux (accès PMR + salle de confidentialité)
- [x] Section Équipe (3 membres : titulaire, adjointe, préparatrice)
- [x] Équipe : rôles génériques (La titulaire / Adjointe / Préparatrice) — pas de noms placeholder
- [x] Section Localisation avec Google Maps iframe
- [x] Section Horaires sur cette page (ajoutée avec cta téléphone/mail/english spoken)
- [x] Badge "English spoken" présent (section horaires + section titulaire)
- [x] Aucune mention "3 pharmaciens" (remplacé par "3 professionnelles")

---

## 🛒 PRODUITS (/produits)

- [x] Toutes catégories CDC présentes (orthopédie, bébé, santé naturelle, beauté)
- [x] "Podologie de série" et "Chaussures orthopédiques de série" séparés en 2 items distincts
- [x] Hero image swappée vers pharmacie-hero.png (façade pharmacie, cohérent)
- [x] "Vétérinaire" présent dans catégorie Bébé & famille

---

## ⚕️ SERVICES (/services)

- [x] Vaccination (sans RDV sauf COVID)
- [x] TROD COVID, Grippe, VRS, Angine, Cystite
- [x] Entretiens : femme enceinte, allaitement, tire-lait, bilan de prévention
- [x] Entretiens personnalisés : asthme, anticoagulants, anticancéreux, opioïdes
- [x] Mesures : tension, glycémie, premiers soins, kit cancer colorectal, piluliers
- [ ] Vérifier que chaque service a un CTA "Appeler" ou "Nous écrire"
- [ ] Supprimer badge incorrect "Actes remboursés" du status bar si pas tous remboursés

---

## 📞 CONTACT (/contact)

- [x] Formulaire de contact
- [x] Téléphone, mail, adresse
- [x] Horaires
- [x] Section urgence médicale
- [x] Google Maps iframe sur la page contact
- [x] Formulaire : mention "ordonnance/mutuelle" + note pièce jointe + checkbox RGPD
- [x] Champ Téléphone présent (optionnel)
- [x] Mention ordonnances/mutuelles par e-mail direct

---

## 🖼️ IMAGES HÉROS

- [x] SWAP produits : hero-produits.jpg (légumes) → pharmacie-hero.png (façade pharmacie)
- [x] La pharmacie : hero-pharmacie.jpg (feuilles vertes, cohérent pharmacie/nature)
- [x] Services : hero-services.jpg (pharmacienne, cohérent services santé)
- [x] Contact : hero-contact.jpg (paysage Charente, local, acceptable)

---

## 🎨 PASSE GRAPHIQUE (skills)

- [x] Skill `impeccable` chargé — directives visuelles actives
- [x] Motifs botaniques SVG feuille en fond atténué (opacity 0.045) sur sections clés via `.section-motif` (LayoutV2 global)
- [x] La pharmacie : section Titulaire + section Locaux avec motif
- [x] Services : section Réassurance avec motif
- [ ] Améliorer les cards services et produits (hover plus prononcé)
- [ ] Passe finale polish sur spacing et rythme visuel

---

## ✅ STATUT GLOBAL

- Pages créées : ✅ 5/5
- Hero cohérents : ✅ 4/4
- Contenu CDC : ✅ ~95% conforme
- Passe graphique : ⚠️ partielle (motifs faits, polish cards restant)
