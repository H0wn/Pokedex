type PokemonAbility = any; // Puoi definire una struttura più specifica se conosci i dettagli dell'abilità
type PokemonForm = any; // Puoi definire una struttura più specifica se conosci i dettagli della forma
type PokemonGameIndex = any; // Puoi definire una struttura più specifica se conosci i dettagli dell'indice di gioco
type PokemonMove = any; // Puoi definire una struttura più specifica se conosci i dettagli della mossa
type PokemonStat = any; // Puoi definire una struttura più specifica se conosci i dettagli della statistica
type PokemonType = any; // Puoi definire una struttura più specifica se conosci i dettagli del tipo

export type Pokemon = {
    abilities: PokemonAbility[];
    base_experience: number;
    cries: { latest: string; legacy: string };
    forms: PokemonForm[];
    game_indices: PokemonGameIndex[];
    height: number;
    held_items: any[]; // Puoi definire una struttura più specifica se conosci i dettagli degli oggetti tenuti
    id: number;
    is_default: boolean;
    location_area_encounters: string;
    moves: PokemonMove[];
    name: string;
    order: number;
    past_abilities: any[]; // Puoi definire una struttura più specifica se conosci i dettagli delle abilità passate
    past_types: any[]; // Puoi definire una struttura più specifica se conosci i dettagli dei tipi passati
    species: { name: string; url: string };
    sprites: {
        back_default: String;
        back_female: string;
        back_shiny: string;
        back_shiny_female: string;
        front_default: string;
        // Aggiungi altre proprietà se necessario
    };
    stats: PokemonStat[];
    types: PokemonType[];
    weight: number;
};

export type PokemonModel = {
    number : {
        name: string,
        url : string
    }
}
