import { describe, expect, test } from "vitest";
import {
  filter,
  fromNullable,
  getOrElse as getOrElseOption,
  map as mapOption,
  none,
  Option,
  some,
  toResult,
} from "../src/option.js";
import {
  error,
  flatMap as flatMapResult,
  map as mapResult,
  Result,
  toOption,
  tryCatch,
  value,
} from "../src/result.js";

describe("Exercices de conversion entre Option et Result", () => {
  test("Passer de Option à Result : rechercher une configuration et valider sa valeur", () => {
    // Pour chaque clé (` "PORT"`, `"HOST"`, `"TIMEOUT"`) :
    // 1. Cherchez la clé dans `config` et convertissez-la en Option avec `fromNullable`
    // 2. Convertissez l'Option en Result avec `toResult` (erreur : "Clé introuvable")
    // 3. Enchaînez avec `flatMapResult` et `parserPositif` pour obtenir un nombre strictement positif
    const config: Record<string, string | undefined> = {
      PORT: "8080",
      TIMEOUT: "-5",
    };
    const parserPositif = (texte: string): Result<string, number> => {
      const n = Number(texte);
      return !Number.isNaN(n) && n > 0
        ? value(n)
        : error("Valeur numérique invalide");
    };

    const resPort: Result<string, number> = undefined as unknown as Result<
      string,
      number
    >; // À faire
    const resHost: Result<string, number> = undefined as unknown as Result<
      string,
      number
    >; // À faire
    const resTimeout: Result<string, number> = undefined as unknown as Result<
      string,
      number
    >; // À faire

    expect(resPort).toEqual(value(8080));
    expect(resHost).toEqual(error("Clé introuvable"));
    expect(resTimeout).toEqual(error("Valeur numérique invalide"));
  });

  test("Passer de Result à Option : parser un JSON puis filtrer une propriété optionnelle", () => {
    // Pour chaque entrée JSON (`jsonActif`, `jsonInactif`, `jsonInvalide`) :
    // 1. Utilisez `tryCatch` avec `() => JSON.parse(...) as Utilisateur`
    // 2. Convertissez le Result en Option avec `toOption` (les erreurs de parsing deviennent `none`)
    // 3. Utilisez `filter` pour ne garder que les utilisateurs où `u.actif` est vrai
    // 4. Utilisez `mapOption` pour extraire uniquement le `nom` de l'utilisateur
    interface Utilisateur {
      nom: string;
      actif: boolean;
    }
    const jsonActif = '{"nom": "Clara", "actif": true}';
    const jsonInactif = '{"nom": "Marc", "actif": false}';
    const jsonInvalide = "{nom: Clara}";

    const optActif: Option<string> = undefined as unknown as Option<string>; // À faire
    const optInactif: Option<string> = undefined as unknown as Option<string>; // À faire
    const optInvalide: Option<string> = undefined as unknown as Option<string>; // À faire

    expect(optActif).toEqual(some("Clara"));
    expect(optInactif).toBe(none);
    expect(optInvalide).toBe(none);
  });

  test("Aller-retour Option -> Result -> Option : appliquer un rabais et extraire avec valeur par défaut", () => {
    // Pour chaque panier (`panierEligible`, `panierTropPetit`, `panierVide`) :
    // 1. Filtrez l'Option avec `filter` pour garder uniquement un montant >= 50
    // 2. Convertissez en Result avec `toResult` (erreur : "Montant insuffisant")
    // 3. Utilisez `mapResult` pour appliquer un rabais de 10 $ (`montant - 10`)
    // 4. Reconvertissez en Option avec `toOption`, puis extrayez le montant final avec `getOrElseOption`
    //    (valeur par défaut : 0)
    const panierEligible: Option<number> = some(75);
    const panierTropPetit: Option<number> = some(30);
    const panierVide: Option<number> = none;

    const totalEligible: number = undefined as unknown as number; // À faire
    const totalTropPetit: number = undefined as unknown as number; // À faire
    const totalVide: number = undefined as unknown as number; // À faire

    expect(totalEligible).toBe(65);
    expect(totalTropPetit).toBe(0);
    expect(totalVide).toBe(0);
  });
});
