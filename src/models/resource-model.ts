import { image } from '@shared/types'

export const resourceTypes: string[] = ["misc", "crisis", "advocacy", "educational", "safety", "disability", "minority", "immigration", "legal"]

//GET:Resources/[id]
export interface Resource {
    id: string,
    title: string | "",
    subtitle: string | "",
    description: string | "",
    authors: string[] | [],
    type: [...typeof resourceTypes],
    image: image,
    link: string
}


export interface ResourceResponses {
    numberOfResults: number;
    startIndex: number;
    endIndex: number;
    hasNext: boolean;
    payload: Resource[]
}