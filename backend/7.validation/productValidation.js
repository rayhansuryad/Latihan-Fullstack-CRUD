const validateCreateProduct = (req, res, next)=>{
    const {name, sku, category, stock, price} = req.body;

    const errors =[];

    // Validasi nama produk (Nama Produk tidak boleh kosong)
    if (!name || name.trim()===""){
        errors.push("Nama Produk Wajib diisi");
    }

    // Validasi SKU (SKU tidak boleh kosong)
    if (!sku || sku.trim()===""){
        errors.push("SKU tidak boleh kosong")
    }

    // Validasi STOK agar stok berupa angka bulat dan tidak angka negatif
    if (stock === undefined || !Number.isInteger(Number(stock))|| Number(stock)< 0) {
        errors.push("Stok harus berupa angka bulat dan tidak negatif");
    }

    // Validasi Price agar berupa angka dan lebih besar dari 0
    if (price === undefined || !Number.isInteger(Number(price))|| Number(price)<=0){
        errors.push("Harga harus berupa angka dan lebih dari 0")
    }

    // Jika di temukan kesalahan
    if(errors.length>0){
        return res.status(400).json({
            success:false,
            message: "Validasi gagal",
            errors
        });
    }

    // Jika Validasi Berhasi
    next();
}

module.exports = validateCreateProduct;