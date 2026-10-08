
export interface ApiEpisodeResponse {
    results: EpisodeResponse[];
}

export interface EpisodeResponse {
    id:         number;
    name:       string;
    air_date:   string;
    episode:    string;
    url:        string;
    created:    string;
}
