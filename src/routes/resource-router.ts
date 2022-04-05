import StatusCodes from "http-status-codes";
import { Request, Response, Router } from "express";
import cors from 'cors';

import resourceService from "@services/resource-service";
import { ParamMissingError } from "@shared/errors";

// Constants
const router = Router();
const { CREATED, OK } = StatusCodes;

// Paths
export const p = {
    get: "/all",
    add: "/add",
    update: "/update",
    delete: "/delete/:id",
} as const;

/**
 * Get one resource.
 */
router.get(p.get, cors(), async (_: Request, res: Response) => {
    const users = await resourceService.getAll();
    return res.status(OK).json({ users });
});

/**
 * Add one resource.
 */
router.post(p.add, async (req: Request, res: Response) => {
    const { user } = req.body;
    // Check param
    if (!user) {
        throw new ParamMissingError();
    }
    // Fetch data
    await resourceService.addOne(user);
    return res.status(CREATED).end();
});

/**
 * Update one resource.
 */
router.put(p.update, async (req: Request, res: Response) => {
    const { resource } = req.body;
    // Check param
    if (!resource) {
        throw new ParamMissingError();
    }
    // Fetch data
    await resourceService.updateOne(resource);
    return res.status(OK).end();
});

/**
 * Delete one resource.
 */
router.delete(p.delete, async (req: Request, res: Response) => {
    const { id } = req.params;
    // Check param
    if (!id) {
        throw new ParamMissingError();
    }
    // Fetch data
    await resourceService.delete(id);
    return res.status(OK).end();
});

// Export default
export default router;