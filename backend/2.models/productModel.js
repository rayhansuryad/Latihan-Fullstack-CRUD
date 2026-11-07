const db = require("../1.config/database");

const getAllProducts = async () => {
  const [rows] = await db.query("SELECT * FROM products");
  return rows;
};

const getProductById = async(id)=>{
  const [rows ] = await db.query('SELECT * FROM products WHERE id = ?' [id])
  return rows [0]
}

const createProduct = async (data)=>{
  const [result ] = await db.query(
    `INSERT INTO products (name, sku, category, stock, price)
    VALUES (?,?,?,?,?)`,
    [
      data.name,
      data.sku,
      data.category,
      data.stock,
      data.price
    ]
  );

  return {
    id: result.insertId,
    ...data
  };
}
module.exports = 
  {
    getAllProducts,
    getProductById,
    createProduct,
};
