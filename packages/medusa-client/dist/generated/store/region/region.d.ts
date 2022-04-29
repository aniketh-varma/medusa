/**
 * Generated by orval v6.7.1 🍺
 * Do not edit manually.
 * Medusa Storefront API
 * OpenAPI spec version: 1.0.0
 */
import type { GetRegionsRegion200, GetRegions200 } from ".././model";
/**
 * Retrieves a Region.
 * @summary Retrieves a Region
 */
export declare const getRegionsRegion: (id: string) => Promise<GetRegionsRegion200>;
/**
 * Retrieves a list of Regions.
 * @summary List Regions
 */
export declare const getRegions: () => Promise<GetRegions200>;
declare type AsyncReturnType<T extends (...args: any) => Promise<any>> = T extends (...args: any) => Promise<infer R> ? R : any;
export declare type GetRegionsRegionResult = NonNullable<AsyncReturnType<typeof getRegionsRegion>>;
export declare type GetRegionsResult = NonNullable<AsyncReturnType<typeof getRegions>>;
export {};