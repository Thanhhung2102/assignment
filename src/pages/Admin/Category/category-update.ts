import { get, update } from "../../../api/category";
import AdminHeader from "../../../components/Header/admin";
import Sidebar from "../../../components/Sidebar/index";
import Category from "../../../model/category";

const EditCategoryPage = {
    render: async (id) => {
        const category = await get(id);
        const categories: Category[] = category.data
        console.log(categories);

        return /*html*/`
        ${AdminHeader.render()}
        <div class="flex mt-4 divide-x mx-10">
            <div class="w-[250px] flex-none">
                ${Sidebar.render()}
            </div>
            <div class="grow">
                <h3 class="font-bold text-2xl">Cập nhật Danh Mục</h3>
                <div class="col-span-2 mx-20">
                    <div class="flex flex-col mt-4">
                        <label for="">Tên Danh Mục:</label>
                        <input id="name" type="text" value="${categories.name} "class="w-[50%] border rounded-sm mt-3 h-10">
                    </div>
                    <button class="border rounded-md bg-blue-400 mt-4 text-white" id="edit-category-btn">Cập nhật</button>
                </div>
                
                </div>
            </div>
        </div>
        `
    },
    afterRender: async (id) => {
        const editProductBtn = document.querySelector('#edit-category-btn')
        editProductBtn?.addEventListener('click', async () => {
            const category = {
                id: id,
                name: document.querySelector('#name')?.value
            }
            try {
                const data = await update(category)
                alert('Cập nhật thành công')
                location.href = "/admin/categories"
            } catch (err) {
                console.log(err)
            }
        })
    }
}

export default EditCategoryPage