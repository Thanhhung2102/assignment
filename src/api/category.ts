import Category from "../model/category";
import instance from "./instance";


export const getAllCate = () => {
    const url = "/categories"
    return instance.get(url)
}
export const relationships = (id) => {
    const url = `/categories/${id}?_embed=products`
    return instance.get(url)
}
export const get = (id) => {
    const url = `/categories/${id}`
    return instance.get(url)
}
export const add = (category: Category) => {
    return instance.post("/categories", category)
}
export const remove = (id) => {
    return instance.delete(`/categories/${id}`);
};
export const update = (category: Category) => {
    return instance.put(`/categories/${category.id}`, category);
};
