import express, { Router } from "express";
import { PriceController } from "../controllers/price.controller";

export function priceHttpRoutes(
  app: express.Application,
  priceController: PriceController
) {
  const router = Router();
  router.get(
    "/price/:id/:name",
    priceController.getPriceSpecial.bind(priceController)
  );

  app.use("/api", router);
}