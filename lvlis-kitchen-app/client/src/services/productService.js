import {sample_product} from '../data'

export const getAll = async () => sample_product;

export const getById = async productId =>
    sample_product.find(item => item.id === productId)