import { Table, Column, Model, DataType, PrimaryKey, AllowNull, Default, ForeignKey, BelongsTo, IsUUID } from 'sequelize-typescript';
import ProductModel from './product.entity';

@Table({
    tableName: 'rating',
    freezeTableName: true,
    timestamps: true,
    paranoid: true,
    createdAt: 'dibuat',
    updatedAt: 'diubah',
    deletedAt: 'dihapus'
})
class RatingModel extends Model {
    @IsUUID(4)
    @Default(DataType.UUIDV4)
    @PrimaryKey
    @Column
    id!: string;
    
    @AllowNull(false)
    @Column(DataType.DECIMAL(5,2))
    rate!: number;

    @AllowNull(false)
    @Column(DataType.INTEGER())
    count!: number;

    @ForeignKey(() => ProductModel)
    @AllowNull(false)
    @Column(DataType.INTEGER)
    id_product!: number;

    @BelongsTo(() => ProductModel)
    product!: ProductModel;
}

export default RatingModel;