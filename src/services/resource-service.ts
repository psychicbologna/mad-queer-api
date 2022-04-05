import resourceRepo from "@repos/resource-repo";
import { Resource } from "@models/resource-model";
import { ResourceNotFoundError } from "@shared/errors";
import { resourceDecorator } from "./service.helpers";




/**
 * Get all resources.
 *
 * @returns
 */
async function getAll(protocol: string, url: string): Promise<void | Resource[]> {
    const resources: Resource[] = await resourceRepo.getAll();
    const finalResources: Resource[] = resourceDecorator(protocol, resources, url)
    return finalResources;
}

/**
 * Add one resource.
 *
 * @param 
 * @returns
 */
function addOne(resource: Resource): Promise<void> {
    return resourceRepo.add(resource);
}

//Update a single resource by id
const updateOne = async (resource: Resource) => {
    const persists = await resourceRepo.persists(resource.id);
    if (!persists) {
        throw new ResourceNotFoundError();
    }
    return resourceRepo.update(resource);
}

/**
 * Delete a user by their id.
 *
 * @param id
 * @returns
 */
async function deleteOne(id: string) {
    const persists = await resourceRepo.persists(id);
    if (!persists) {
        throw new ResourceNotFoundError();
    }
    return resourceRepo.delete(id);
}

// Export default
export default {
    getAll,
    addOne,
    updateOne,
    delete: deleteOne,
} as const;