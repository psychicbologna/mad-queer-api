import { Resource } from '@models/resource-model'
import { uuid } from "@shared/functions";
import orm from "./mock-orm";

/**
 * Get one resource.
 *
 * @param id
 * @returns
 */
async function getOne(id: string): Promise<Resource | null> {
    const db = await orm.openDb();
    for (const resource of db.resources) {
        if (resource.id === id) {
            return resource;
        }
    }
    return null;
}

/**
 * See if a resource with the given id exists.
 *
 * @param id
 */
async function persists(id: string): Promise<boolean> {
    const db = await orm.openDb();
    for (const resource of db.resources) {
        if (resource.id === id) {
            return true;
        }
    }
    return false;
}

/**
 * Get all resources.
 *
 * @returns
 */
async function getAll(): Promise<Resource[]> {
    const db = await orm.openDb();
    return db.resources;
}

/**
 * Add one resource.
 *
 * @param user
 * @returns
 */
async function add(resource: Resource): Promise<void> {
    const db = await orm.openDb();
    resource.id = uuid();
    db.resources.push(resource);
    return orm.saveDb(db);
}

/**
 * Update a resource.
 *
 * @param user
 * @returns
 */
async function update(resource: Resource): Promise<void> {
    const db = await orm.openDb();
    for (let i = 0; i < db.resources.length; i++) {
        if (db.resources[i].id === resource.id) {
            db.resources[i] = resource;
            return orm.saveDb(db);
        }
    }
}

/**
 * Delete one resource.
 *
 * @param id
 * @returns
 */
async function deleteOne(id: string): Promise<void> {
    const db = await orm.openDb();
    for (let i = 0; i < db.resources.length; i++) {
        if (db.resources[i].id === id) {
            db.resources.splice(i, 1);
            return orm.saveDb(db);
        }
    }
}

// Export default
export default {
    getOne,
    persists,
    getAll,
    add,
    update,
    delete: deleteOne,
} as const;