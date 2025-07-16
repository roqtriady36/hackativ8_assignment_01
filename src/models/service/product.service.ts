import ImageModel from "../entity/image.entity";
import ProductModel from "../entity/product.entity"
import RatingModel from "../entity/rating.entity";

const ProductData = {
    getAll: async(): Promise<ProductModel[]> => {
        const data = await ProductModel.findAll()
        if(data.length == 0) throw new Error('Data tidak ada')
        return data
    },
    getDetail: async(id: bigint): Promise<ProductModel> => {
        const data =  await ProductModel.findOne({
            where: { id },
            include: [
                { 
                    model: ImageModel,
                    attributes: ['id', 'url']
                },                
                { 
                    model: RatingModel,
                    attributes: ['id', 'rate', 'count']
                },
            ]
        })
        if(!data) throw new Error('Data tidak ditemukan')
        return data
    },
}

export default ProductData;