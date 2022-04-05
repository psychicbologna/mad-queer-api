import { Resource } from "@models/resource-model";

/**
 * 
 * Returns a full string url for an image using req params. The database just stores the filename.
 * 
 * @param protocol 
 * @param resources 
 * @param url 
 * @returns 
 */
export function resourceDecorator(protocol: string, resources: Resource[], url: string): Resource[] {
    const decoratedResources = resources.map(item => {
        item.image.url = `${protocol}://${url}/images/resources/${item.image.url}`;
        return item;
    })
    return decoratedResources;
}