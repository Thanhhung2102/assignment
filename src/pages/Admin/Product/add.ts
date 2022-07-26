import { getAllCate } from "../../../api/category"
import { upload } from "../../../api/image"
import { createProduct } from "../../../api/product"
import AdminHeader from "../../../components/Header/Admin"
import Sidebar from "../../../components/Sidebar"
import Product from "../../../model/product"

const AddProductPage = {
    render: async () => {
        const { data } = await getAllCate()
        console.log(data);
        
        return /*html*/`
        ${AdminHeader.render()}
        <div class="flex mt-4">
            <div class="w-[250px] flex-none ">
                ${Sidebar.render()}
            </div>
            <div class="grow border-l border-[#E5E5E5]">
                <h3 class="ml-8 mb-5 text-[30px] font-semibold">Thêm mới sản phẩm</h3>
                <form class="grid grid-cols-3 gap-8 ml-8" id="addForm">
                <div class="">
                    <div class="flex flex-col justify-center items-center border rounded-md h-[250px] w-full overflow-hidden">
                    <label htmlFor="">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-[#00B0D7]" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                            clip-rule="evenodd" />
                        </svg>
                        <input id="input-file" type="file" class="hidden" name="image" accept="image/jpg, image/jpeg, image/png" />
                        <img id="preview-image" class="z-0"/>
                    </label>
                    <div class="mt-4">Thêm ảnh</div>
                    </div>
                    <div class="mt-3">
                        <label for="">Mô tả ngắn</label>
                        <textarea class="w-full border outline-none h-[80px]" id="short-description" name="shortDescription"></textarea>    
                    </div>
                </div>
                <div class="col-span-2">
                    <div class="text-[20px] font-medium border-b mb-4 pb-4">Thông tin sản phẩm</div>
                    <div class="flex flex-col mt-4">
                    <label for="">Tên sản phẩm:</label>
                    <input id="name" name="name" type="text" placeholder="Tên sản phẩm" class="w-full border rounded-sm h-10">
                    </div>
                    <div class="grid grid-cols-2 gap-4 mt-4">
                    <div class="flex flex-col">
                        <label for="">Giá gốc:</label>
                        <input id="originalPrice" name="originalPrice" type="text" placeholder="Giá gốc" class="w-full border rounded-sm h-10">
                    </div>
                    <div class="flex flex-col">
                        <label for="">Giá khuyến mãi:</label>
                        <input id="promotion-price" name="saleOffPrice" type="text" placeholder="Giá khuyến mãi" class="w-full border rounded-sm h-10">
                    </div>
                    <div class="mb-4">
                        <label for="" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Danh mục sản phẩm</label>
                        <select id="category" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[100%] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        ${data.map((item) => {
                            return `<option value="${item.id}">${item.name}</option>`
                        }).join("")}
                        </select>
                    </div>
                    </div>
                    <div class="mb-4">
                        <label for="">Đặc điểm nổi bật</label>
                        <textarea class="w-full h-[120px] outline-none border" id="salient-features" name="feature"></textarea>
                    </div>
                    <div>
                        <label for="">Mô tả dài</label>
                        <textarea class="w-full h-[120px] outline-none border" id="long-description" name="description"></textarea>
                    </div>
                </div>
                <button class="text-white rounded-md bg-[#00B0D7] w-[100px] h-[40px]" id="add-product-btn">Thêm mới</button>
                </form>
            </div>
        </div>
        `
    },
    afterRender: async () => {
        // const addProductBtn = document.querySelector('#add-product-btn')
        const inputFile = document.querySelector('#input-file')
        const previewImage = document.querySelector('#preview-image')
        
        $("#addForm").validate({
            rules: {
                name: {
                    required : true,
                },
                originalPrice: {
                    required: true,
                    number : true
                },
                feature : "required",
                description : "required",
                saleOffPrice : {
                    required: true,
                    number : true
                },
                shortDescription : "required"
            },
            messages: {
                name: {
                    required : "Vui lòng không để trống",
                },
                originalPrice: {
                    required: "Vui lòng không để trống",
                    number : "Vui lòng nhập số"
                },
                feature : "Vui lòng không để trống",
                description : "Vui lòng không để trống",
                saleOffPrice : {
                    required: "Vui lòng không để trống",
                    number : "Vui lòng nhập số"
                },
                shortDescription : "Vui lòng không để trống"
            },
            submitHandler: async () => {
                const name = document.querySelector('#name')?.value
                const originalPrice = document.querySelector('#originalPrice')?.value
                const saleOffPrice = document.querySelector('#promotion-price')?.value
                const categoryId = parseInt(document.querySelector("#category")?.value)
                const shortDescription = document.querySelector('#short-description')?.value
                const description = document.querySelector('#long-description')?.value
                const feature = document.querySelector('#salient-features')?.value
                const image = previewImage?.src
                const product = new Product(name, originalPrice, image, categoryId, feature, description, saleOffPrice, shortDescription)
                try {
                    const data = await createProduct(product)
                    if(data) alert("Thêm thành công")
                    window.location.href = "/admin"
                } catch (error) {
                    error
                }
            }
        })

        inputFile?.addEventListener('change', async (e) => {
            // console.log(e.target.files)
            const file = e.target.files[0]
            const reader = new FileReader()
            reader.readAsDataURL(file)
            reader.onloadend = async () => {
                 try {
                    const res = await upload(reader.result)
                    const data = res.data
                    previewImage.src = data.url
                 } catch(err) {
                    console.log(err)
                 }
            }
        })

    }
}

export default AddProductPage