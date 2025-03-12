/// <reference types="node" />
import { Readable } from 'stream';
/**
 * Function to download the give `YTURL`
 * @param {string} url The youtube URL to download
 * @returns `Buffer`
 * @throws Error if the URL is invalid
 */
export declare const downloadYT: (url: string) => Promise<Readable>;
/**
 * Function to get buffer of files with their URLs
 * @param url URL to get Buffer of
 * @returns Buffer
 */
export declare const getBufferFromUrl: (url: string) => Promise<Buffer>;
