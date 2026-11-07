const productService = require("../3.services/productService");

// Controller untuk mengambil data Semua Product
const getProduct = async (req, res, next) => {
  try {
    const product = await productService.getAllProducts();
    res.status(200).json({
      success: true,
      data: product,
    });
  } catch (error) {
    next(error);
  }
};

//Controller untuk mengambil Data produk berdasarkan ID
const getProductById = async (req, res, next) => {
  try {
    const id = Number(req.params.id);

    if (!Number.isInteger(id) || id <= 0) {
      return res.status(400).json({
        success: false,
        message: "ID Produk tidak valid",
      });
    }

    const product = await productService.getProductById(id);
    res.status(200).json({
      success: true,
      data: product,
    });
  } catch (error) {
    next(error);
  }
};

const createProduct = async (req, res, next)=>{
  try {
    const data = req.body;
    const product = await productService.createProduct(data);
    res.status(201).json({
      success:true,
      message: "Produk berhasil di tambahkan",
      data: product
    })
  } catch (error) {
    next(error)
  }
};


module.exports = {
  getProduct,
  getProductById,
  createProduct
}