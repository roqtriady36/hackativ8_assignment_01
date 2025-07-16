import { Table, Column, Model, DataType, PrimaryKey, AllowNull, ForeignKey, BelongsTo, HasMany, AutoIncrement, HasOne } from 'sequelize-typescript';
import CategoryModel from './category.entity';
import RatingModel from './rating.entity';
import ImageModel from './image.entity';

@Table({
    tableName: 'product',
    freezeTableName: true,
    timestamps: true,
    paranoid: true,
    createdAt: 'dibuat',
    updatedAt: 'diubah',
    deletedAt: 'dihapus'
})
class ProductModel extends Model {
    @PrimaryKey    
    @AutoIncrement
    @Column(DataType.INTEGER)
    id!: number;
    
    @AllowNull(false)
    @Column(DataType.STRING())
    title!: string;

    @AllowNull(false)
    @Column(DataType.DECIMAL(10,2))
    price!: string;

    @AllowNull(false)
    @Column(DataType.TEXT())
    description!: string;

    @ForeignKey(() => CategoryModel)
    @AllowNull(false)
    @Column(DataType.STRING(100))
    id_category!: string;

    @BelongsTo(() => CategoryModel)
    category!: CategoryModel;

    @HasOne(() => RatingModel)
    rating!: RatingModel;

    @HasMany(() => ImageModel)
    image!: ImageModel[];
}

export default ProductModel;