/**
 * Generated by orval v6.7.1 🍺
 * Do not edit manually.
 * Medusa Admin API
 * OpenAPI spec version: 1.0.0
 */
import type { Customer } from "./customer";
import type { CustomerGroupMetadata } from "./customerGroupMetadata";
/**
 * Represents a customer group
 */
export interface CustomerGroup {
    id?: string;
    name?: string;
    customers?: Customer[];
    created_at?: string;
    updated_at?: string;
    deleted_at?: string;
    metadata?: CustomerGroupMetadata;
}