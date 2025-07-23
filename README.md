# Azure Changelog Extension

Une extension de navigateur simple pour suivre et afficher les changements récents d'Azure directement dans votre navigateur.

## Fonctionnalités
- Affiche les dernières mises à jour et nouveautés Azure
- Interface popup légère et intuitive
- Facile à installer et à utiliser

## Installation
1. Téléchargez le fichier `.zip` ou `.xpi` depuis le dossier `web-ext-artifacts/` ou la page des releases.
2. Ouvrez votre navigateur (Firefox ou compatible).
3. Accédez à la page de gestion des extensions.
4. Cliquez sur "Installer une extension depuis un fichier" et sélectionnez l'archive téléchargée.

## Utilisation
- Cliquez sur l'icône de l'extension dans la barre d'outils pour ouvrir la popup.
- Consultez les dernières nouveautés Azure directement depuis la popup.

## Développement
Pour contribuer ou modifier l'extension :

```bash
git clone <repo-url>
cd azure-changelog
```

- Modifiez les fichiers JavaScript (`background.js`, `content.js`, `popup.js`) ou HTML (`popup.html`).
- Testez localement en chargeant le dossier comme extension non empaquetée.

## Structure du projet
```
background.js      # Script principal de fond
content.js         # Script injecté dans les pages
popup.html         # Interface utilisateur de la popup
popup.js           # Logique de la popup
manifest.json      # Manifest de l'extension
web-ext-artifacts/ # Archives prêtes à l'emploi
```

## Licence
Ce projet est sous licence MIT. Voir le fichier [LICENSE](LICENSE).

---

*Développé avec ❤️ pour la communauté Azure.*

