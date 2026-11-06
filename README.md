# Exercices pratiques : Option et Result — IFT359 : Programmation Fonctionnelle

Ce projet propose des exercices pratiques en TypeScript pour manipuler les types fonctionnels `Option` et `Result`.

## Prérequis

- [Node.js](https://nodejs.org/) (version LTS recommandée)

## Installation

Une fois Node.js installé, ouvrez un terminal à la racine du projet et exécutez la commande suivante pour installer les dépendances nécessaires :

```bash
npm install
```

## Structure du projet

- `src/option.ts` : Définition du type `Option<A>` (`Some<A>` | `None`) et de ses fonctions utilitaires (`some`, `none`, `fromNullable`, `isSome`, `isNone`, `get`, `getOrElse`, `map`, `flatMap`, `filter`, `matchOption`, `toResult`).
- `src/result.ts` : Définition du type `Result<E, A>` (`Error<E>` | `Value<A>`) et de ses fonctions utilitaires (`value`, `error`, `isValue`, `isError`, `getOrElse`, `map`, `mapError`, `flatMap`, `matchResult`, `toOption`, `tryCatch`).
- `test/option.test.ts` : Suite d'exercices sur l'utilisation de `Option` (fonctions en isolation et scénarios de chaînage).
- `test/result.test.ts` : Suite d'exercices sur l'utilisation de `Result` (fonctions en isolation et scénarios de chaînage).
- `test/opt-res.test.ts` : Suite d'exercices combinant `Option` et `Result` (conversions `toResult` et `toOption`).

## Déroulement des exercices

Les exercices se trouvent directement dans les fichiers de tests du dossier `test/` :

1. Lancez les tests en mode surveillance avec `npm run test:watch`.
2. Dans chaque test, lisez les consignes en commentaire, puis remplacez l'expression `undefined as unknown as ...` sur les lignes marquées par `// À faire`.
3. Vérifiez que les tests passent.

### Cibler un fichier ou un sous-ensemble de tests

Pour éviter d'avoir tous les tests en échec affichés en même temps pendant que vous progressez, vous pouvez :

- **Exécuter un seul fichier de tests** en passant son nom à la commande :
  ```bash
  npm run test:watch -- option
  npm run test:watch -- result
  npm run test:watch -- opt-res
  ```
- **Isoler une section ou un test précis avec `.only`** directement dans le code de test :
  - Remplacez `describe("...", () => { ... })` par `describe.only("...", () => { ... })` pour n'exécuter que les tests de cette section.
  - Remplacez `test("...", () => { ... })` par `test.only("...", () => { ... })` pour n'exécuter qu'un seul test à la fois.
  - _(N'oubliez pas de retirer `.only` une fois terminé pour valider toute la suite !)_

## Commandes disponibles

| Commande             | Description                                                                                |
| :------------------- | :----------------------------------------------------------------------------------------- |
| `npm run test`       | Exécute l'ensemble des tests une seule fois.                                               |
| `npm run test:watch` | Exécute les tests en continu et les relance automatiquement à chaque sauvegarde.           |
| `npm run build`      | Vérifie les types et compile le projet TypeScript vers JavaScript dans le dossier `dist/`. |
| `npm run clean`      | Supprime le dossier `dist/` contenant les fichiers compilés.                               |
| `npm run format`     | Formate le code du projet avec Prettier.                                                   |
