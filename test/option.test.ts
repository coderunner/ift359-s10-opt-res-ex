import { describe, expect, test } from "vitest";
import {
  filter,
  flatMap,
  fromNullable,
  get,
  getOrElse,
  isNone,
  isSome,
  map,
  matchOption,
  none,
  Option,
  Some,
  some,
  toResult,
} from "../src/option.js";
import { error, Result, value } from "../src/result.js";

describe("Exercices sur le type Option", () => {
  describe("Construction : some, none et fromNullable", () => {
    test("some : créer une Option contenant une valeur", () => {
      // Utilisez la fonction `some` pour encapsuler la variable `nombre` dans une Option
      // et assignez le résultat à `resultat`.
      const nombre = 42;

      const resultat: Option<number> = undefined as unknown as Option<number>; // À faire

      expect(resultat).toEqual({ tag: "Some", valeur: 42 });
    });

    test("none : représenter l'absence de valeur", () => {
      // Assignez la constante `none` à la variable `resultat` pour représenter une Option vide.
      const resultat: Option<string> = undefined as unknown as Option<string>; // À faire

      expect(resultat).toEqual({ tag: "None" });
    });

    test("fromNullable : convertir une valeur définie en Some", () => {
      // Utilisez `fromNullable` pour convertir `texte` en Option et assignez-la à `resultat`.
      const texte: string | null = "Bonjour";

      const resultat: Option<string> = undefined as unknown as Option<string>; // À faire

      expect(resultat).toEqual(some("Bonjour"));
    });

    test("fromNullable : convertir null et undefined en None", () => {
      // Utilisez `fromNullable` pour convertir `valeurNulle` et `valeurIndefinie`
      // et assignez-les respectivement à `resultatNull` et `resultatUndefined`.
      const valeurNulle: number | null = null;
      const valeurIndefinie: number | undefined = undefined;

      const resultatNull: Option<number> = undefined as unknown as Option<number>; // À faire
      const resultatUndefined: Option<number> = undefined as unknown as Option<number>; // À faire

      expect(resultatNull).toBe(none);
      expect(resultatUndefined).toBe(none);
    });
  });

  describe("Gardes de type et extraction : isSome, isNone, get et getOrElse", () => {
    test("isSome : vérifier si une Option contient une valeur", () => {
      // Utilisez `isSome` sur `optPresente` et `optVide` pour déterminer si elles contiennent une valeur.
      const optPresente: Option<number> = some(10);
      const optVide: Option<number> = none;

      const testPresente: boolean = undefined as unknown as boolean; // À faire
      const testVide: boolean = undefined as unknown as boolean; // À faire

      expect(testPresente).toBe(true);
      expect(testVide).toBe(false);
    });

    test("isNone : vérifier si une Option est vide", () => {
      // Utilisez `isNone` sur `optPresente` et `optVide` pour déterminer si elles sont vides.
      const optPresente: Option<number> = some(10);
      const optVide: Option<number> = none;

      const testPresente: boolean = undefined as unknown as boolean; // À faire
      const testVide: boolean = undefined as unknown as boolean; // À faire

      expect(testPresente).toBe(false);
      expect(testVide).toBe(true);
    });

    test("get : extraire la valeur d'un Some", () => {
      // Utilisez la fonction `get` pour extraire la valeur contenue dans `optSome`
      // et assignez-la à `resultat`.
      const optSome: Some<string> = { tag: "Some", valeur: "IFT359" };

      const resultat: string = undefined as unknown as string; // À faire

      expect(resultat).toBe("IFT359");
    });

    test("getOrElse : extraire la valeur d'un Some ou retourner une valeur par défaut", () => {
      // Utilisez `getOrElse` sur `optPresente` et `optVide` avec une fonction retournant 0 par défaut.
      const optPresente: Option<number> = some(25);
      const optVide: Option<number> = none;

      const resultatPresent: number = undefined as unknown as number; // À faire
      const resultatVide: number = undefined as unknown as number; // À faire

      expect(resultatPresent).toBe(25);
      expect(resultatVide).toBe(0);
    });
  });

  describe("Transformation et filtrage : map, flatMap et filter", () => {
    test("map : transformer la valeur contenue dans un Some", () => {
      // Utilisez `map` pour doubler (multiplier par 2) la valeur de `optNombre`.
      const optNombre: Option<number> = some(21);

      const resultat: Option<number> = undefined as unknown as Option<number>; // À faire

      expect(resultat).toEqual(some(42));
    });

    test("map : transformer un None retourne None", () => {
      // Utilisez `map` pour calculer la longueur de la chaîne dans `optTexte`.
      const optTexte: Option<string> = none;

      const resultat: Option<number> = undefined as unknown as Option<number>; // À faire

      expect(resultat).toBe(none);
    });

    test("flatMap : chaîner une fonction qui retourne une Option (cas Some)", () => {
      // Utilisez `flatMap` avec la fonction `diviser100Par` sur `optDiviseurValide`.
      const diviser100Par = (n: number): Option<number> => (n === 0 ? none : some(100 / n));
      const optDiviseurValide: Option<number> = some(4);

      const resultat: Option<number> = undefined as unknown as Option<number>; // À faire

      expect(resultat).toEqual(some(25));
    });

    test("flatMap : chaîner une fonction qui retourne None ou partir d'un None", () => {
      // Utilisez `flatMap` avec `diviser100Par` sur `optZero` et sur `optVide`.
      const diviser100Par = (n: number): Option<number> => (n === 0 ? none : some(100 / n));
      const optZero: Option<number> = some(0);
      const optVide: Option<number> = none;

      const resultatZero: Option<number> = undefined as unknown as Option<number>; // À faire
      const resultatVide: Option<number> = undefined as unknown as Option<number>; // À faire

      expect(resultatZero).toBe(none);
      expect(resultatVide).toBe(none);
    });

    test("filter : conserver la valeur uniquement si elle respecte le prédicat", () => {
      // Utilisez `filter` avec le prédicat `estPair` sur `optPair` et `optImpair`.
      const estPair = (n: number): boolean => n % 2 === 0;
      const optPair: Option<number> = some(8);
      const optImpair: Option<number> = some(7);

      const resultatPair: Option<number> = undefined as unknown as Option<number>; // À faire
      const resultatImpair: Option<number> = undefined as unknown as Option<number>; // À faire

      expect(resultatPair).toEqual(some(8));
      expect(resultatImpair).toBe(none);
    });
  });

  describe("Destruction et conversion : matchOption et toResult", () => {
    test("matchOption : produire un message selon que l'Option est Some ou None", () => {
      // Utilisez `matchOption` sur `optNom` et `optAnonyme` :
      // - Si None, retournez "Invité"
      // - Si Some(nom), retournez `Bonjour ${nom}`
      const optNom: Option<string> = some("Alice");
      const optAnonyme: Option<string> = none;

      const messageNom: string = undefined as unknown as string; // À faire
      const messageAnonyme: string = undefined as unknown as string; // À faire

      expect(messageNom).toBe("Bonjour Alice");
      expect(messageAnonyme).toBe("Invité");
    });

    test("toResult : convertir une Option en Result", () => {
      // Utilisez `toResult` pour convertir `optSucces` et `optEchec` en Result.
      // Si l'option est None, l'erreur retournée doit être "Valeur manquante".
      const optSucces: Option<number> = some(100);
      const optEchec: Option<number> = none;

      const resultatSucces: Result<string, number> = undefined as unknown as Result<string, number>; // À faire
      const resultatEchec: Result<string, number> = undefined as unknown as Result<string, number>; // À faire

      expect(resultatSucces).toEqual(value(100));
      expect(resultatEchec).toEqual(error("Valeur manquante"));
    });
  });

  describe("Scénarios de chaînage", () => {
    test("Scénario 1 : nettoyer, valider et extraire un code promotionnel (fromNullable -> map -> filter -> getOrElse)", () => {
      // Pour chaque entrée (`entreeValide`, `entreeTropCourte`, `entreeNulle`) :
      // 1. Convertissez l'entrée en Option avec `fromNullable`
      // 2. Transformez la chaîne avec `map` pour retirer les espaces (`s.trim()`) et mettre en majuscules (`s.toUpperCase()`)
      // 3. Filtrez avec `filter` pour conserver uniquement les codes d'au moins 5 caractères (`s.length >= 5`)
      // 4. Extrayez la valeur avec `getOrElse`, ou retournez "AUCUN" par défaut
      const entreeValide: string | null = "  promo25  ";
      const codeValide = undefined as unknown as string; // À faire

      const entreeTropCourte: string | null = "  ab ";
      const codeTropCourt: string = undefined as unknown as string; // À faire

      const entreeNulle: string | null = null;
      const codeNul: string = undefined as unknown as string; // À faire

      expect(codeValide).toBe("PROMO25");
      expect(codeTropCourt).toBe("AUCUN");
      expect(codeNul).toBe("AUCUN");
    });

    test("Scénario 2 : rechercher un étudiant et calculer sa note finale (flatMap -> map -> matchOption)", () => {
      // À partir d'un matricule optionnel (`optMatriculePresent`, `optMatriculeInconnu`) :
      // 1. Utilisez `flatMap` avec `trouverEtudiant` pour obtenir l'étudiant
      // 2. Utilisez `map` pour extraire sa `note` et y ajouter un bonus de 5 points
      // 3. Utilisez `matchOption` pour retourner "Étudiant introuvable" si None,
      //    ou `Note finale : ${note}` si Some
      interface Etudiant {
        matricule: string;
        note: number;
      }
      const etudiants: Etudiant[] = [
        { matricule: "A100", note: 80 },
        { matricule: "B200", note: 90 },
      ];
      const trouverEtudiant = (matricule: string): Option<Etudiant> =>
        fromNullable(etudiants.find((e) => e.matricule === matricule));

      const optMatriculePresent: Option<string> = some("A100");
      const affichagePresent: string = undefined as unknown as string; // À faire

      const optMatriculeInconnu: Option<string> = some("Z999");
      const affichageInconnu: string = undefined as unknown as string; // À faire

      expect(affichagePresent).toBe("Note finale : 85");
      expect(affichageInconnu).toBe("Étudiant introuvable");
    });

    test("Scénario 3 : parser un âge et vérifier la majorité (fromNullable -> flatMap -> filter)", () => {
      // Pour chaque saisie (`saisieMajeur`, `saisieMineur`, `saisieInvalide`) :
      // 1. Convertissez la saisie avec `fromNullable`
      // 2. Utilisez `flatMap` avec `parserEntier` pour convertir la chaîne en nombre
      // 3. Utilisez `filter` pour conserver uniquement les âges >= 18
      const parserEntier = (texte: string): Option<number> => {
        const n = Number(texte);
        return Number.isInteger(n) ? some(n) : none;
      };

      const saisieMajeur: string | undefined = "21";
      const ageMajeur: Option<number> = undefined as unknown as Option<number>; // À faire

      const saisieMineur: string | undefined = "16";
      const ageMineur: Option<number> = undefined as unknown as Option<number>; // À faire

      const saisieInvalide: string | undefined = "abc";
      const ageInvalide: Option<number> = undefined as unknown as Option<number>; // À faire

      expect(ageMajeur).toEqual(some(21));
      expect(ageMineur).toBe(none);
      expect(ageInvalide).toBe(none);
    });
  });
});
