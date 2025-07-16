import { Table, Column, Model, DataType, PrimaryKey, AllowNull, Default, ForeignKey, BelongsTo, IsUUID } from 'sequelize-typescript';
import ProductModel from './product.entity';

@Table({
    tableName: 'image',
    freezeTableName: true,
    timestamps: true,
    paranoid: true,
    createdAt: 'dibuat',
    updatedAt: 'diubah',
    deletedAt: 'dihapus'
})
class ImageModel extends Model {
    @IsUUID(4)
    @Default(DataType.UUIDV4)
    @PrimaryKey
    @Column
    id!: string;
    
    @AllowNull(false)
    @Column(DataType.TEXT())
    url!: string;

    @ForeignKey(() => ProductModel)
    @AllowNull(false)
    @Column(DataType.INTEGER)
    id_product!: number;

    @BelongsTo(() => ProductModel)
    product!: ProductModel;
}

export default ImageModel;