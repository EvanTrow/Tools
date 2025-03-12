import SpotifyApi, { IAuth, UserObjectPublic } from './lib/API';
import Artist from './lib/details/Atrist';
import Playlist from './lib/details/Playlist';
import SongDetails from './lib/details/Track';
import { Readable } from 'stream';
export default class SpotifyFetcher extends SpotifyApi {
    constructor(auth: IAuth);
    /**
     * Get the track details of the given track URL
     * @param url
     * @returns {SongDetails} Track
     */
    getTrack: (url: string) => Promise<SongDetails>;
    /**
     * Gets the info the given album URL
     * @param url
     * @returns {Playlist} Album
     */
    getAlbum: (url: string) => Promise<Playlist>;
    /**
     * Gets the info of the given Artist URL
     * @param url
     * @returns {Artist} Artist
     */
    getArtist: (url: string) => Promise<Artist>;
    /**
     * Gets the list of albums from the given Artists URL
     * @param url
     * @returns {Playlist[]} Albums
     */
    getArtistAlbums: (url: string) => Promise<{
        albums: Playlist[];
        artist: Artist;
    }>;
    /**
     * Gets the playlist info from URL
     * @param url URL of the playlist
     * @returns
     */
    getPlaylist: (url: string) => Promise<Playlist>;
    getID: (url: string) => string;
    /**
     * Downloads the given spotify track
     * @param url Url to download
     * @param filename file to save to
     * @returns `buffer` if no filename is provided and `string` if it is
     */
    downloadTrack: <T extends string | undefined>(url: string, filename?: T | undefined) => Promise<Readable>;
    /**
     * Gets the info of tracks from playlist URL
     * @param url URL of the playlist
     */
    getTracksFromPlaylist: (url: string) => Promise<{
        name: string;
        total_tracks: number;
        tracks: SongDetails[];
    }>;
    /**
     * Gets the info of tracks from Album URL
     * @param url URL of the playlist
     */
    getTracksFromAlbum: (url: string) => Promise<{
        name: string;
        total_tracks: number;
        tracks: SongDetails[];
    }>;
    getSpotifyUser: (id: string) => Promise<UserObjectPublic>;
}
