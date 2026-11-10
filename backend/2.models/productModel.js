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

const deleteProduct = async (id)=>{
  const [result] = await db.query(
    `DELETE  FROM products WHERE id = ?`, [id]
  )
  return result.affectedRows;
}

const updateProduct = async (id, data)=>{
  const [result] = await db.query(
    `UPDATE products
    SET name = ?, sku=?,category=?, stock=?, price=?
    WHERE id = ?` ,
    [
      data.name,
      data.sku,
      data.category,
      data.stock,
      data.price,
      id
    ]
  )
  return result.affectedRows;
}


module.exports = 
  {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
};
