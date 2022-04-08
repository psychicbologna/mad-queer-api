import { RandomUUIDOptions } from "crypto"

//TODO
/*
This will define the meta for how images are uploaded, as well as how images are retrieved from Cloudflare and referenced in the database. API will upload an image with the required meta referencing a point in the app (resources, reflections page) and be retrievable with that meta. This will require .env storage of the API key for this app (madQueer)

The example object from the API:
{
  "id": "ZxR0pLaXRldlBtaFhhO2FiZGVnaA",
  "filename": "avatar.png",
  "metadata": {
    "meta": "metaID"
  },
  "requireSignedURLs": true,
  "variants": {
    "thumbnail": "https://imagedelivery.net/MTt4OTd0b0w5aj/ZxR0pLaXRldlBtaFhhO2FiZGVnaA/thumbnail",
    "hero": "https://imagedelivery.net/MTt4OTd0b0w5aj/ZxR0pLaXRldlBtaFhhO2FiZGVnaA/hero",
    "original": "https://imagedelivery.net/MTt4OTd0b0w5aj/ZxR0pLaXRldlBtaFhhO2FiZGVnaA/original"
  },
  "uploaded": "2014-01-02T02:20:00Z"
}

*/

export interface image {
    url: string
    meta: {
        id: string, //randomizer
        accessPoint: string, //madqueer
        alt: string //stored in database, retrievable by image id?
    }
}