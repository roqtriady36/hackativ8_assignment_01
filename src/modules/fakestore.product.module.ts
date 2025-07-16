import CategoryModel from "../models/entity/category.entity";
import ProductModel from "../models/entity/product.entity";
import API_FAKESTORE from "../services/api.service";
import ImageModel from "../models/entity/image.entity";
import RatingModel from "../models/entity/rating.entity";

interface Rating {
  rate: number;
  count: number;
}

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
}

const processFakeStore = {
    getUniqueCategories: (products: Product[]): string[] => {
        return [...new Set(products.map(p => p.category))];
    },

    filterByCategory: (products: Product[], category: string): Product[] => {
        return products.filter(product => product.category === category);
    }
}

class FakeStore {
    async fetchSave(): Promise<any>{
        try {
            const response = await API_FAKESTORE('products').get('/');
            const products: Product[] = response.data
            
            const category = processFakeStore.getUniqueCategories(response.data)            
            for(let i in category){
                // console.log(category[i])
                await CategoryModel.findOrCreate({
                    where: { title: category[i] }
                })
            }

            for(let i in products){
                // console.log(products[i])
                await ProductModel.findOrCreate({
                    where: { id: products[i].id },
                    defaults: {
                        title: products[i].title,
                        price: products[i].price,
                        description: products[i].description,
                        id_category: products[i].category,
                    }
                })

                await ImageModel.findOrCreate({
                    where: { 
                        url: products[i].image, 
                        id_product: products[i].id
                    }
                })

                await RatingModel.findOrCreate({
                    where: { id_product: products[i].id },
                    defaults: { 
                        rate: products[i].rating.rate,
                        count: products[i].rating.count,
                    }
                })
            }
            
            return products;
        } catch (err) {
            console.error("Gagal mengambil data product:", err);
            return [];
        }
    }
}

export { processFakeStore };
export default new FakeStore();