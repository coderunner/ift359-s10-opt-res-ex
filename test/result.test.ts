import { describe, expect, test } from "vitest";
import { none, Option, some } from "../src/option.js";
import {
  error,
  flatMap,
  getOrElse,
  isError,
  isValue,
  map,
  mapError,
  matchResult,
  Result,
  toOption,
  tryCatch,
  value,
} from "../src/result.js";

describe("Exercices sur le type Result", () => {
  describe("Construction : value et error", () => {
    test("value : créer un Result représentant un succès", () => {
      // Utilisez la fonction `value` pour encapsuler `reponse` dans un Result de succès
      // et assignez-le à `resultat`.
      const reponse = 200;

      const resultat: Result<string, number> = undefined as unknown as Result<
        string,
        number
      >; // À faire

      expect(resultat).toEqual({ tag: "value", value: 200 });
    });

    test("error : créer un Result représentant une erreur", () => {
      // Utilisez la fonction `error` pour encapsuler `messageErreur` dans un Result d'erreur
      // et assignez-le à `resultat`.
      const messageErreur = "Accès refusé";

      const resultat: Result<string, number> = undefined as unknown as Result<
        string,
        number
      >; // À faire

      expect(resultat).toEqual({ tag: "error", error: "Accès refusé" });
    });
  });

  describe("Gardes de type et extraction : isValue, isError et getOrElse", () => {
    test("isValue : vérifier si un Result est un succès", () => {
      // Utilisez `isValue` sur `resSucces` et `resErreur`.
      const resSucces: Result<string, number> = value(10);
      const resErreur: Result<string, number> = error("Échec");

      const testSucces: boolean = undefined as unknown as boolean; // À faire
      const testErreur: boolean = undefined as unknown as boolean; // À faire

      expect(testSucces).toBe(true);
      expect(testErreur).toBe(false);
    });

    test("isError : vérifier si un Result est une erreur", () => {
      // Utilisez `isError` sur `resSucces` et `resErreur`.
      const resSucces: Result<string, number> = value(10);
      const resErreur: Result<string, number> = error("Échec");

      const testSucces: boolean = undefined as unknown as boolean; // À faire
      const testErreur: boolean = undefined as unknown as boolean; // À faire

      expect(testSucces).toBe(false);
      expect(testErreur).toBe(true);
    });

    test("getOrElse : extraire la valeur ou calculer une valeur de defaut à partir de l'erreur", () => {
      // Utilisez `getOrElse` sur `resSucces` et `resErreur`.
      // En cas d'erreur, retournez la longueur du message d'erreur (err.length).
      const resSucces: Result<string, number> = value(50);
      const resErreur: Result<string, number> = error("Erreur");

      const valeurSucces: number = undefined as unknown as number; // À faire
      const valeurRepli: number = undefined as unknown as number; // À faire

      expect(valeurSucces).toBe(50);
      expect(valeurRepli).toBe(6);
    });
  });

  describe("Transformation : map, mapError et flatMap", () => {
    test("map : transformer la valeur d'un Result en succès", () => {
      // Utilisez `map` pour mettre en majuscules (`s.toUpperCase()`) la chaîne dans `resTexte`.
      const resTexte: Result<string, string> = value("bonjour");

      const resultat: Result<string, string> = undefined as unknown as Result<
        string,
        string
      >; // À faire

      expect(resultat).toEqual(value("BONJOUR"));
    });

    test("map : ne modifie pas un Result en erreur", () => {
      // Utilisez `map` pour multiplier par 10 la valeur de `resErreur`.
      const resErreur: Result<string, number> = error("Nombre invalide");

      const resultat: Result<string, number> = undefined as unknown as Result<
        string,
        number
      >; // À faire

      expect(resultat).toEqual(error("Nombre invalide"));
    });

    test("mapError : transformer l'erreur d'un Result en échec", () => {
      // Utilisez `mapError` pour transformer le code d'erreur numérique de `resCodeErreur`
      // en message `Erreur HTTP ${code}`, et faites de même sur `resSucces`.
      const resCodeErreur: Result<number, string> = error(404);
      const resSucces: Result<number, string> = value("OK");

      const resultatErreur: Result<string, string> =
        undefined as unknown as Result<string, string>; // À faire
      const resultatSucces: Result<string, string> =
        undefined as unknown as Result<string, string>; // À faire

      expect(resultatErreur).toEqual(error("Erreur HTTP 404"));
      expect(resultatSucces).toEqual(value("OK"));
    });

    test("flatMap : chaîner une opération pouvant échouer (cas de succès)", () => {
      // Utilisez `flatMap` avec la fonction `verifierPositif` sur `resPositif`.
      const verifierPositif = (n: number): Result<string, number> =>
        n > 0 ? value(n) : error("Le nombre doit être positif");
      const resPositif: Result<string, number> = value(15);

      const resultat: Result<string, number> = undefined as unknown as Result<
        string,
        number
      >; // À faire

      expect(resultat).toEqual(value(15));
    });

    test("flatMap : chaîner une opération qui échoue ou propager l'erreur initiale", () => {
      // Utilisez `flatMap` avec `verifierPositif` sur `resNegatif` et sur `resDejaEnErreur`.
      const verifierPositif = (n: number): Result<string, number> =>
        n > 0 ? value(n) : error("Le nombre doit être positif");
      const resNegatif: Result<string, number> = value(-5);
      const resDejaEnErreur: Result<string, number> = error("Erreur initiale");

      const resultatNegatif: Result<string, number> =
        undefined as unknown as Result<string, number>; // À faire
      const resultatErreurInitiale: Result<string, number> =
        undefined as unknown as Result<string, number>; // À faire

      expect(resultatNegatif).toEqual(error("Le nombre doit être positif"));
      expect(resultatErreurInitiale).toEqual(error("Erreur initiale"));
    });
  });

  describe("Destruction, conversion et capture d'exceptions : matchResult, toOption et tryCatch", () => {
    test("matchResult : traiter les cas d'erreur et de succès", () => {
      // Utilisez `matchResult` sur `resSucces` et `resErreur` :
      // - En cas d'erreur (err), retournez `Échec : ${err}`
      // - En cas de succès (val), retournez `Succès : ${val}`
      const resSucces: Result<string, number> = value(42);
      const resErreur: Result<string, number> = error("Fichier introuvable");

      const messageSucces: string = undefined as unknown as string; // À faire
      const messageErreur: string = undefined as unknown as string; // À faire

      expect(messageSucces).toBe("Succès : 42");
      expect(messageErreur).toBe("Échec : Fichier introuvable");
    });

    test("toOption : convertir un Result en Option", () => {
      // Utilisez `toOption` pour convertir `resSucces` et `resErreur` en Option.
      const resSucces: Result<string, number> = value(99);
      const resErreur: Result<string, number> = error("Ignorée");

      const optSucces: Option<number> = undefined as unknown as Option<number>; // À faire
      const optErreur: Option<number> = undefined as unknown as Option<number>; // À faire

      expect(optSucces).toEqual(some(99));
      expect(optErreur).toBe(none);
    });

    test("tryCatch : capturer l'exécution d'une fonction pouvant lancer une exception", () => {
      // Utilisez `tryCatch` pour parser `jsonValide` et `jsonInvalide` avec `JSON.parse`.
      // Si une exception est lancée, retournez la chaîne "JSON invalide" dans `onError`.
      const jsonValide = '{"cours": "IFT359"}';
      const jsonInvalide = "{cours: IFT359}";

      const resultatValide: Result<string, { cours: string }> =
        undefined as unknown as Result<string, { cours: string }>; // À faire
      const resultatInvalide: Result<string, { cours: string }> =
        undefined as unknown as Result<string, { cours: string }>; // À faire

      expect(resultatValide).toEqual(value({ cours: "IFT359" }));
      expect(resultatInvalide).toEqual(error("JSON invalide"));
    });
  });

  describe("Scénarios de chaînage", () => {
    test("Scénario 1 : parser un JSON et valider un prix positif (tryCatch -> map -> flatMap)", () => {
      // Pour chaque chaîne JSON (`jsonValide`, `jsonPrixNegatif`, `jsonMalforme`) :
      // 1. Utilisez `tryCatch` avec `JSON.parse` pour obtenir un `Result<string, { prix: number }>`
      //    (retournez "Format JSON invalide" en cas d'exception)
      // 2. Utilisez `map` pour extraire la propriété `prix`
      // 3. Utilisez `flatMap` avec `validerPrixPositif` pour vérifier que le prix est > 0
      const validerPrixPositif = (prix: number): Result<string, number> =>
        prix > 0 ? value(prix) : error("Le prix doit être supérieur à 0");

      const jsonValide = '{"prix": 49.99}';
      const jsonPrixNegatif = '{"prix": -10}';
      const jsonMalforme = "{prix: 49.99}";

      const resValide: Result<string, number> = undefined as unknown as Result<
        string,
        number
      >; // À faire
      const resPrixNegatif: Result<string, number> =
        undefined as unknown as Result<string, number>; // À faire
      const resMalforme: Result<string, number> =
        undefined as unknown as Result<string, number>; // À faire

      expect(resValide).toEqual(value(49.99));
      expect(resPrixNegatif).toEqual(error("Le prix doit être supérieur à 0"));
      expect(resMalforme).toEqual(error("Format JSON invalide"));
    });

    test("Scénario 2 : calculer une part par personne avec taxe et formater l'erreur (flatMap -> map -> mapError)", () => {
      // À partir d'un nombre de participants (`resParticipantsValide`, `resAucunParticipant`) :
      // 1. Utilisez `flatMap` avec `diviserFacture` (qui retourne un code d'erreur numérique 400 si n <= 0)
      // 2. Utilisez `map` pour ajouter 15 % de taxes (`montant * 1.15`)
      // 3. Utilisez `mapError` pour transformer le code numérique en message `Erreur ${code} : division impossible`
      const diviserFacture = (participants: number): Result<number, number> =>
        participants > 0 ? value(100 / participants) : error(400);

      const resParticipantsValide: Result<number, number> = value(4);
      const resAucunParticipant: Result<number, number> = value(0);

      const totalValide: Result<string, number> =
        undefined as unknown as Result<string, number>; // À faire
      const totalErreur: Result<string, number> =
        undefined as unknown as Result<string, number>; // À faire

      expect(totalValide).toEqual(value(28.75));
      expect(totalErreur).toEqual(error("Erreur 400 : division impossible"));
    });

    test("Scénario 3 : valider un nom d'utilisateur et produire un message final (flatMap -> map -> matchResult)", () => {
      // À partir d'une saisie (`resNomValide`, `resNomTropCourt`) :
      // 1. Utilisez `map` pour retirer les espaces autour du nom (`s.trim()`)
      // 2. Utilisez `flatMap` avec `validerLongueur` pour vérifier que le nom a au moins 3 caractères
      // 3. Utilisez `matchResult` pour retourner `Refusé : ${err}` en cas d'erreur,
      //    ou `Bienvenue, ${nom}!` en cas de succès
      const validerLongueur = (nom: string): Result<string, string> =>
        nom.length >= 3 ? value(nom) : error("Nom trop court");

      const resNomValide: Result<string, string> = value("   Sam  ");
      const resNomTropCourt: Result<string, string> = value("  Al ");

      const messageValide: string = undefined as unknown as string; // À faire
      const messageRefuse: string = undefined as unknown as string; // À faire

      expect(messageValide).toBe("Bienvenue, Sam!");
      expect(messageRefuse).toBe("Refusé : Nom trop court");
    });
  });
});
