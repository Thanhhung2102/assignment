import { relationships } from "../../api/category";
import { getProduct } from "../../api/product";
import Footer from "../../components/Footer";
import UserHeader from "../../components/Header/User";
import reRender from "../../ultilities/reRender";

const DetailPage = {
    render: async (id) => {
      const {data : product} = await getProduct(id)
      const {data : relationshipProduct} = await relationships(product.categoryId)
      const productPopulate = relationshipProduct.products
        return `
           <header>
                ${UserHeader.render()}
            </header>
             <h2 class="mb-4 py-3 border-[#D1D5DB] border pl-16 text-lg font-medium">
                ${product.name}
              </h2>
    <div class="max-w-7xl mx-auto">
      <div class="grid grid-cols-2">
        <div>
          <img src="${product.image}" alt="" class="w-[55%]"/>
          <div class="mt-4 flex items-center space-x-2">
            <div
              class="flex flex-col items-center justify-center text-center border-[#D70018] border p-1 rounded-md"
            >
              <img src="../public/images/start.png" alt="" class="w-[14%]" />
              <p class="w-[70%] text-xs">Tình năng nổi bật</p>
            </div>
            <div class="border-[##D1D5DB] border p-1 rounded-md">
              <img src="../public/images/product/img-small1.png" alt="" />
            </div>
            <div class="border-[##D1D5DB] border p-1 rounded-md">
              <img src="../public/images/product/img-small2.png" alt="" />
            </div>
            <div class="border-[##D1D5DB] border p-1 rounded-md">
              <img src="../public/images/product/img-small1.png" alt="" />
            </div>
            <div class="border-[##D1D5DB] border p-1 rounded-md">
              <img src="../public/images/product/img-small2.png" alt="" />
            </div>
          </div>
        </div>
        <div>
          <div>
            <span class="text-2xl text-[#D70018]">${product.saleOffPrice} ₫</span>
            <span class="text-[#707070] text-sm ml-2">${product.originalPrice} ₫</span>
          </div>
          <p class="mt-8 text-sm">
            ${product.shortDescription}
          </p>
          <div class="mt-64 flex space-x-5">
            <button
              type="submit"
              class="bg-[#FF3945] text-white px-16 py-2 rounded-md"
            >
              Mua ngay
            </button>
            <div class="flex space-x-3">
              <div class="border-[#D70018] border p-2 rounded-md">
                <button><img src="../public/images/cart.png" alt="" /></button>
              </div>
              <p class="text-sm w-[49%]">Thêm vào giỏ hàng</p>
            </div>
          </div>
        </div>
      </div>
      <h3 class="my-4">Sản phẩm cùng loại</h3>
      <div class="grid grid-cols-5 gap-8 place-items-center">
        ${productPopulate.map((item) => {
            return `
                <div>
                  <img src="${item.image}" alt="" class="mx-auto"/>
                  <p>${item.name}</p>
                  <div>
                    <span class="text-sm text-[#D70018]">${item.saleOffPrice} ₫</span>
                    <span class="text-[#707070] text-xs ml-2">${item.originalPrice} ₫</span>
                  </div>
                </div>
            `
        }).join("")}
      </div>
      <div class="mt-6 mb-4 bg-[#F2F2F2] p-3">
        <h3 class="text-[#D70018] text-lg text-center">ĐẶC ĐIỂM NỔI BẬT</h3>
        <p class="text-sm pt-4">
          Camera chất lượng, bắt trọn từng khoảng khắc - Cụm 4 camera với cảm
          biến chính lên đến 108 MP Thưởng thức không gian giải trí cực đỉnh -
          Màn hình lớn 6.7 inch, độ phân giải Full HD+, 120Hz mượt mà Cấu hình
          Galaxy A73 5G được nâng cấp mạnh với chip Snapdragon 778G, RAM lên đến
          8 GB Chiến game thoải mái không lo gián đoạn - Viên pin lớn 5000 mAh,
          hỗ trợ sạc nhanh 25 W
        </p>
      </div>
      <p class="text-[15px]">
        ${product.description}
      </p>
      <div class="flex justify-center items-center">
        <button
        class="mt-4 border-[#000000] border rounded-md px-24 text-sm py-1 hover:bg-red-500 hover:border-red-500 hover:text-white">
        Xem Thêm
      </button>
      </div>
    </div>
    ${Footer.render()}
        `
    },
    afterRender: () => {
          const email = document.querySelector('#email');
          const logout = document.querySelector('#logout');
          email.innerHTML = JSON.parse(localStorage.getItem("user")).email
          console.log(localStorage.getItem("user"));
          logout.addEventListener('click', function(){
              localStorage.removeItem("user");
              reRender("header", DetailPage);
          })
    }
}
export default DetailPage