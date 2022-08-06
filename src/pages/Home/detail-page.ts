import Footer from "../../components/Footer";
import UserHeader from "../../components/Header/User";

const DetailPage = {
    render: () => {
        return `
            ${UserHeader.render()}
             <h2 class="mb-4 py-3 border-[#D1D5DB] border">
      Samsung Galaxy A73 (5G) 256GB
    </h2>
    <div class="max-w-7xl mx-auto">
      <div class="grid grid-cols-2">
        <div>
          <img src="../public/images/product/a72.png" alt="" />
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
            <span class="text-2xl text-[#D70018]">11.690.000 ₫</span>
            <span class="text-[#707070] text-sm ml-2">12.990.000 ₫</span>
          </div>
          <p class="mt-8 text-sm">
            Mô tả ngắn: Trước khi mua bất kỳ chiếc điện thoại nào, người dùng
            cũng sẽ quan tâm đến thiết kế sản phẩm trước. Với phiên bản A73,
            Samsung đã tạo nên một chiếc smartphone với vẻ ngoài mang đến cảm
            giác sang trọng và tinh tế.
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
        <div>
          <img src="../public/images/product/2.png" alt="" />
          <p>Iphone 13 Pro White 512 GB</p>
          <div>
            <span class="text-sm text-[#D70018]">11.690.000 ₫</span>
            <span class="text-[#707070] text-xs ml-2">12.990.000 ₫</span>
          </div>
        </div>
        <div>
          <img src="../public/images/product/2.png" alt="" />
          <p>Iphone 13 Pro White 512 GB</p>
          <div>
            <span class="text-sm text-[#D70018]">11.690.000 ₫</span>
            <span class="text-[#707070] text-xs ml-2">12.990.000 ₫</span>
          </div>
        </div>
        <div>
          <img src="../public/images/product/2.png" alt="" />
          <p>Iphone 13 Pro White 512 GB</p>
          <div>
            <span class="text-sm text-[#D70018]">11.690.000 ₫</span>
            <span class="text-[#707070] text-xs ml-2">12.990.000 ₫</span>
          </div>
        </div>
        <div>
          <img src="../public/images/product/2.png" alt="" />
          <p>Iphone 13 Pro White 512 GB</p>
          <div>
            <span class="text-sm text-[#D70018]">11.690.000 ₫</span>
            <span class="text-[#707070] text-xs ml-2">12.990.000 ₫</span>
          </div>
        </div>
        <div>
          <img src="../public/images/product/2.png" alt="" />
          <p>Iphone 13 Pro White 512 GB</p>
          <div>
            <span class="text-sm text-[#D70018]">11.690.000 ₫</span>
            <span class="text-[#707070] text-xs ml-2">12.990.000 ₫</span>
          </div>
        </div>
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
        Năm 2022 hứa hẹn sẽ là một năm rất đáng trông đợi đối với những ai là
        fan của thương hiệu điện thoại Samsung. Mới đây, hãng sẽ tiếp tục cho ra
        mắt nhiều smartphone với sự cải tiến trong thiết kế và cấu hình, trong
        đó phải kể đến chiếc Samsung Galaxy A73 với nhiều cải tiến so với thế hệ
        trước. Vậy sản phẩm có gì nổi bật, giá bao nhiêu và liệu có nên mua
        không? Tìm hiểu ngay nhé! Đánh giá Samsung A73 - Hiệu năng mượt mà, chụp
        ảnh chuyên nghiệp Điện thoại cao cấp nhất dòng Galaxy A series sở hữu
        nhiều nâng cấp đáng giá so với thế hệ trước, từ ngoại hình cho đến hiệu
        năng, đặc biệt là hệ thống camera. Sau đây là những đánh giá chi tiết về
        chiếc Thiết kế sang trọng, màn hình Super AMOLED Trước khi mua bất kỳ
        chiếc điện thoại nào, người dùng cũng sẽ quan tâm đến thiết kế sản phẩm
        trước. Với phiên bản A73, Samsung đã tạo nên một chiếc smartphone với vẻ
        ngoài mang đến cảm giác sang trọng và tinh tế. Samsung Galaxy A73 được
        thiết kế gọn nhẹ với tiêu chí đáp ứng khả năng mang theo để tiện đi lại
        cho người dùng. Giờ đây, bạn có thể mang theo chiếc smartphone bên cạnh
        đến bất cứ đâu, bất cứ lúc nào. Kích thước và trọng lượng của chiếc điện
        thoại rất vừa phải và dĩ nhiên sẽ không chiếm quá nhiều diện tích trong
        túi xách và có thể di chuyển dễ dàng.
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
    }
}
export default DetailPage