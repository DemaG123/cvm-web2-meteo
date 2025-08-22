
# Ahmed Gacem

## Animation

1) Seagull : une mouette vole de droite à gauche à travers l'écran en répétition dans le sea et sky level. Lorque l'utilisateur essayer de cliquer la mouette accélère.

2) Shark : un requin nage de droite à gauche à travers l'écran en répétition dans le deep level. Lorque l'utilisateur essayer de cliquer le requin un jumpscare et afficher en plein écran d'une attaque de requin.

3) Wind : 100 feuilles d'arbre volent de droite à gauche à travers l'écran en répétition dans la page météo. la vitesse de l'animation varie selon la vitesse afficher par le API si la vitesse est supérieur à 0 l'animation apparait si la touche W ou w est presser. Quand la souris entre en contact avec une feuille celle-ci part au point de départ.

4) Snow : 100 flocons de neige tombent de haut en bas en répétition dans la page météo. la vitesse de l'animation varie selon la vitesse afficher par le API si la vitesse est supérieur à 0 l'animation apparait si la touche S ou s est presser. Quand la souris entre en contact avec un flocon celle-ci part au point de départ.

5) Rain : 100 gouttes d'eau tombent de haut en bas en répétition dans la page météo. la vitesse de l'animation varie selon la vitesse afficher par le API si la vitesse est supérieur à 0 l'animation apparait si la touche R ou r est presser. Quand la souris entre en contact avec une gouttes celle-ci part au point de départ.

6) Ombrage : lorsqu'il fait jour l'écran et illuminé. Par contre, lorqu'il fait nuit un filtre opaque recouvre l'écran en entier.


# CVM Météo

## Pré-requis

- Avoir nodejs d'installé sur votre machine. Pour savoir si vous l'avez installé, exécutez dans un terminal:

````
node -v
````
Si cela vous retourne une version, alors nodejs est bien installé.

## Installation du projet

Suite à l'installation de nodejs, il faut ouvrir un terminal dans le répertoire du projet, puis exécuter cette commande à partir de la racine du projet :

````
npm install
````
Cela installera les librairies nécessaires au fonctionnement interne du projet.

## Démarrer votre projet

Pour démarrer la reconstruction du front-end, ouvrez un terminal dans la racine du projet (pas le dossier client), puis...

````
npm run webpack
````

Si webpack est actif, votre JavaScript se regénèrera automatiquement lorsqu'un fichier est modifié. Par exemple, si vous modifiez le fichier "client/src/page-index.js" (ou n'importe quel fichier utilisé dans celui-ci), webpack mettra à jour le fichier "client/dist/index.js" avec vos modifications.

Vous pouvez ensuite ouvrir les pages `meteo.html` et `index.html` via votre navigateur et dans VS Code.


## Et ensuite?...

Pour ce projet, ne programmez que dans le dossier `client/`. Vous pouvez modifier tous les fichiers qui s'y trouvent, mais il est fortement déconseillé d'altérer les lignes de code déjà en place, car il est 100% fonctionnel. Ajoutez des lignes, créez des fichiers et images, mais attention de ne pas *briser* l'accès à l'API.

Toutes les informations nécessaires à la réalisation du projet se trouvent ici : [https://notes-de-cours.com/webjs/travaux]

## Remise du projet

Les informations concernant la remise du projet se trouvent ici : [https://notes-de-cours.com/webjs/travaux]