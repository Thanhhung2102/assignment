import { add } from "../../../api/category"
import AdminHeader from "../../../components/Header/admin"
import Sidebar from "../../../components/Sidebar/index"
import Category from "../../../model/category"

const AddCategoryPage = {
    render: () => {
        return /*html*/`
        ${AdminHeader.render()}
        <div class="flex mt-4 divide-x mx-10">
            <div class="w-[250px] flex-none">
                ${Sidebar.render()}
            </div>
            <div class="grow">
                <h3 class="font-bold text-2xl">Thêm mới Danh Mục</h3>
                <div >
                <div class="col-span-2 mx-20">
                    <div class="flex flex-col mt-10 ">
                        <label for="">Tên Danh Mục:</label>
                        <input id="name" type="text" placeholder="Tên Danh Mục"  class="w-[50%] border rounded-sm mt-3 h-10">
                        <div class="error" id="nameErr"></div>
                    </div>
                    <button class="border rounded-md bg-blue-400 mt-3 text-white" id="add-category-btn" type="submit">Thêm mới</button>
                </div>
                
                </div>
            </div>
        </div>
        `
    },
    afterRender: async () => {
        const addCategoryBtn = document.querySelector('#add-category-btn')
        addCategoryBtn?.addEventListener('click', async () => {
            const name = document.querySelector('#name')?.value
            const category = new Category(name)
            try {
                const data = await add(category)
                alert('Thêm mới thành công')
                location.href = "/admin/categories"
            } catch (err) {
                console.log(err)
            }
        })
    }
}


export default AddCategoryPage