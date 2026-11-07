const productModel = require ('../2.models/productModel');

// READ: Mengambil semua product
const getAllProducts = async ()=>{
    return await productModel.getAllProducts();
}

// READ: Mengambil produk berdasarkan ID
const getProductById = async (id) =>{
    const product = await productModel.getProductById(id);
    if(!product){
        throw new Error ('Produk tidak di temukan')
    }
    return product;
};

// CREATE: Menambahkan produk
const createProduct = async (data)=>{
    return await productModel.createProduct(data);
}

// UPDATE: Mengubah produk :id
const updateProduct = async (id, data) =>{
    const product = await productModel.updateProduct(id);
    if(!product){
        throw new Error ('Produk gagal di Update');
    }
    return await productModel.updateProduct(id,data);
};

// DELETE: Menghapus Produk :id
const deleteProduct = async (id)=>{
    const product = await productModel.deleteProduct(id);
    if(!product){
        throw new Error ('Produk gagal di hapus')
    }
    return await productModel.deleteProduct(id);
};

module.exports ={
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct,

}