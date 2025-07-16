import { Table, Column, Model, DataType, PrimaryKey, HasMany } from 'sequelize-typescript';
import ProductModel from './product.entity';

@Table({
    tableName: 'category',
    freezeTableName: true,
    timestamps: true,
    paranoid: true,
    createdAt: 'dibuat',
    updatedAt: 'diubah',
    deletedAt: 'dihapus'
})
class CategoryModel extends Model {
    @PrimaryKey
    @Column(DataType.STRING(100))
    title!: string;

    @HasMany(() => ProductModel)
    product!: ProductModel[];
}

export default CategoryModel;