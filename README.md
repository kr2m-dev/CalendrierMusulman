# 🕌 Calendrier Musulman Interactif

Un calendrier musulman moderne, élégant et interactif inspiré du site calendriermusulman.net, repensé avec une interface utilisateur moderne et intuitive.

![Calendrier Musulman](screenshot.png)

## ✨ Fonctionnalités

- 📅 **Double calendrier** : Affichage simultané des dates grégoriennes et hégiriennes
- 🎨 **Coloration intelligente** :
  - 🔴 **Rouge** : Jours non recommandés (déménagement, voyage, mariage, etc.)
  - 🟡 **Jaune** : Jeûne recommandé (vendredi)
  - 🔵 **Bleu** : Rasage recommandé
  - 🟤 **Marron** : Relations déconseillées
  - 🟣 **Violet** : Magals et événements majeurs
- 🖱️ **Dates cliquables** : Modal avec détails complets pour chaque jour
- 🌙 **Événements** : Tous les Magals de la Mouridiya et fêtes islamiques
- 📱 **Responsive** : S'adapte à tous les écrans
- ⚡ **Performant** : Code optimisé et rapide

## 🚀 Démarrage Rapide

1. **Cloner le repository**
   ```bash
   git clone https://github.com/kr2m-dev/CalendrierMusulman.git
   cd CalendrierMusulman
   ```

2. **Ouvrir dans le navigateur**
   ```bash
   # Simplement ouvrir index.html dans votre navigateur
   open index.html
   ```

   Ou utiliser un serveur local :
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Node.js
   npx serve
   ```

3. **Accéder à l'application**
   ```
   http://localhost:8000
   ```

## 📁 Structure du Projet

```
CalendrierMusulman/
├── index.html              # Page principale
├── js/
│   ├── hijri-converter.js # Convertisseur Grégorien ↔ Hégirien
│   ├── events-data.js       # Données des événements (Magals, fêtes)
│   └── calendar.js          # Logique du calendrier
└── README.md
```

## 🎯 Magals Inclus

- ⭐ **Grand Magal de Touba** (18 Safar)
- ⭐ **Gamou** (12 Rabi' al-awwal)
- ⭐ **Magal Mame Mor Diara** (15 Shawwal)
- ⭐ **Magal S. Ibrahima Mbacké** (17 Shawwal)
- ⭐ **Magal S. A. Ahad Mbacké** (23 Shawwal)
- ⭐ **Magal S. Mbacké Madina** (25 Shawwal)

## 🕌 Fêtes Islamiques

- 🎉 Aïd al-Fitr (fin du Ramadan)
- 🎉 Aïd al-Adha (fête du sacrifice)
- 🎉 Nouvel An Hégirien
- 🎉 Mawlid (naissance du Prophète)
- 🎉 Laylat al-Qadr
- 🎉 Ashura

## 🛠️ Technologies Utilisées

- **HTML5** - Structure sémantique
- **Tailwind CSS** - Framework CSS utilitaire
- **JavaScript Vanilla** - Logique et interactivité
- **Google Fonts** - Police Amiri pour l'arabe

## 📱 Responsive Design

Le calendrier s'adapte automatiquement à :
- 💻 Ordinateurs de bureau
- 📱 Smartphones
- 📲 Tablettes

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à :
1. Fork le projet
2. Créer une branche (`git checkout -b feature/AmazingFeature`)
3. Commit vos changements (`git commit -m 'Add some AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrir une Pull Request

## 📝 Licence

Distribué sous la licence MIT. Voir `LICENSE` pour plus d'informations.

## 🙏 Remerciements

- Basé sur les données de [calendriermusulman.net](https://calendriermusulman.net)
- Style inspiré des traditions mourides
- Conçu pour la communauté musulmane

## 📞 Contact

- GitHub: [@kr2m-dev](https://github.com/kr2m-dev)
- Email: votre-email@example.com

---

**N.B.** : Les dates hégiriennes sont calculées approximativement. Pour les dates officielles, veuillez consulter les autorités religieuses compétentes.
