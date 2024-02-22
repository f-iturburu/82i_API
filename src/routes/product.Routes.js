import { Router } from "express";
import {
  createProduct,
  getAll,
  getById,
  deleteById,
  getProductsWithOptions,
  edit,
  getAllMyProducts
} from "../controllers/product.controllers.js";
import { verifyUserToken } from "../validators/verifyToken.js";
// import { tokenRoleValidation } from "../validators/productValidations.js";
import { validateFields } from "../validators/validateFields.js";

const router = Router();

router.get("/product/:id", getById);
router.get("/products/search", getProductsWithOptions);
router.get("/products", verifyUserToken, getAll);
router.get("/products/me", verifyUserToken, getAllMyProducts)
router.post("/product",verifyUserToken, createProduct);
router.delete("/product/:id", verifyUserToken, validateFields, deleteById);
router.patch("/product/:id",verifyUserToken, edit )
export default router;
