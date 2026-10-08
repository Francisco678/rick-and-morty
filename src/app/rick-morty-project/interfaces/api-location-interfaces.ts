import { CharacterResponse } from "./api-character-interfaces";

export interface ApiLocationResponse {
    info:    Info;
    results: LocationResponse[];
}

export interface Info {
    count: number;
    pages: number;
    next:  string;
    prev:  null;
}

export interface LocationResponse {
    id:        number;
    name:      string;
    type:      string;
    dimension: string;
    residents: string[];
    url:       string;
    created:   Date;
}

export interface CustomLocationResponse{
    id:        number;
    name:      string;
    type:      string;
    dimension: string;
    residents: CharacterResponse[];
    url:       string;
    created:   Date;

}
