import UserHeader from "../../components/Header/User"

const HomePage = {
    render: async () => {
        return /*html*/`
            ${UserHeader.render()}
             <div class="flex justify-center space-x-16 max-w-7xl mx-auto mt-5 mb-12">
                <ul class="w-[20%]">
                    <li class="mb-2">
                    <a href="#" class="flex items-center justify-between">
                        <div class="flex space-x-2">
                        <img src="./public/images/icon dt.png" alt="" />
                        <p>Điện thoại</p>
                        </div>
                        <img src="./public/images/icon select.png" alt="" />
                    </a>
                    </li>
                    <li class="mb-2">
                    <a href="#" class="flex items-center justify-between">
                        <div class="flex space-x-2">
                        <img src="./public/images/icon laptop.png" alt="" />
                        <p>Laptop</p>
                        </div>
                        <img src="./public/images/icon select.png" alt="" />
                    </a>
                    </li>
                    <li class="mb-2">
                    <a href="#" class="flex items-center justify-between">
                        <div class="flex space-x-2">
                        <img src="./public/images/icon ipad.png" alt="" />
                        <p>Máy tính bảng</p>
                        </div>
                        <img src="./public/images/icon select.png" alt="" />
                    </a>
                    </li>
                    <li class="mb-2">
                    <a href="#" class="flex items-center justify-between">
                        <div class="flex space-x-2">
                        <img src="./public/images/icon dongho.png" alt="" />
                        <p>Đồng Hồ</p>
                        </div>
                        <img src="./public/images/icon select.png" alt="" />
                    </a>
                    </li>
                    <li class="mb-2">
                    <a href="#" class="flex items-center justify-between">
                        <div class="flex space-x-2">
                        <img src="./public/images/icon tainghe.png" alt="" />
                        <p>Tai Nghe</p>
                        </div>
                        <img src="./public/images/icon select.png" alt="" />
                    </a>
                    </li>
                    <li class="mb-2">
                    <a href="#" class="flex items-center justify-between">
                        <div class="flex space-x-2">
                        <img src="./public/images/icon home.png" alt="" />
                        <p>Nhà Thông Minh</p>
                        </div>
                        <img src="./public/images/icon select.png" alt="" />
                    </a>
                    </li>
                </ul>
                <div class="banner">
                    <img src="./public/images/banner.png" alt="" />
                </div>
            </div>
              <div>
      <h2 class="mb-5 max-w-7xl mx-auto">ĐIỆN THOẠI NỔI BẬT NHẤT</h2>
      <div class="grid grid-cols-6 gap-5 px-4">
        <a href="#">
          <img src="./public/images/product/1.png" alt="" />
          <p>iPhone 11 64GB I Chính hãng VN/A</p>
          <div class="flex items-center space-x-6 mt-4">
            <p class="text-[#D70018]">18.990.000 ₫</p>
            <p class="text-[#707070]">13.990.000 ₫</p>
          </div>
          <div class="bg-[#F3F4F6] border-[#E5E7EB] border p-1 rounded-md my-2">
            <p>
              [HOT] Thu cũ lên đời giá cao - Thủ tục nhanh - Trợ giá lên tới
              1.000.000đ
            </p>
          </div>
          <div class="flex items-center">
            <svg
              aria-hidden="true"
              class="w-5 h-5 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>First star</title>
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
              ></path>
            </svg>
            <svg
              aria-hidden="true"
              class="w-5 h-5 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Second star</title>
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
              ></path>
            </svg>
            <svg
              aria-hidden="true"
              class="w-5 h-5 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Third star</title>
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
              ></path>
            </svg>
            <svg
              aria-hidden="true"
              class="w-5 h-5 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Fourth star</title>
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
              ></path>
            </svg>
            <svg
              aria-hidden="true"
              class="w-5 h-5 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Fifth star</title>
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
              ></path>
            </svg>
          </div>
        </a>
        <a href="#">
          <img src="./public/images/product/1.png" alt="" />
          <p>iPhone 11 64GB I Chính hãng VN/A</p>
          <div class="flex items-center space-x-6 mt-4">
            <p class="text-[#D70018]">18.990.000 ₫</p>
            <p class="text-[#707070]">13.990.000 ₫</p>
          </div>
          <div class="bg-[#F3F4F6] border-[#E5E7EB] border p-1 rounded-md my-2">
            <p>
              [HOT] Thu cũ lên đời giá cao - Thủ tục nhanh - Trợ giá lên tới
              1.000.000đ
            </p>
          </div>
          <div class="flex items-center">
            <svg
              aria-hidden="true"
              class="w-5 h-5 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>First star</title>
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
              ></path>
            </svg>
            <svg
              aria-hidden="true"
              class="w-5 h-5 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Second star</title>
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
              ></path>
            </svg>
            <svg
              aria-hidden="true"
              class="w-5 h-5 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Third star</title>
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
              ></path>
            </svg>
            <svg
              aria-hidden="true"
              class="w-5 h-5 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Fourth star</title>
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
              ></path>
            </svg>
            <svg
              aria-hidden="true"
              class="w-5 h-5 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Fifth star</title>
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
              ></path>
            </svg>
          </div>
        </a>
        <a href="#">
          <img src="./public/images/product/1.png" alt="" />
          <p>iPhone 11 64GB I Chính hãng VN/A</p>
          <div class="flex items-center space-x-6 mt-4">
            <p class="text-[#D70018]">18.990.000 ₫</p>
            <p class="text-[#707070]">13.990.000 ₫</p>
          </div>
          <div class="bg-[#F3F4F6] border-[#E5E7EB] border p-1 rounded-md my-2">
            <p>
              [HOT] Thu cũ lên đời giá cao - Thủ tục nhanh - Trợ giá lên tới
              1.000.000đ
            </p>
          </div>
          <div class="flex items-center">
            <svg
              aria-hidden="true"
              class="w-5 h-5 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>First star</title>
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
              ></path>
            </svg>
            <svg
              aria-hidden="true"
              class="w-5 h-5 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Second star</title>
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
              ></path>
            </svg>
            <svg
              aria-hidden="true"
              class="w-5 h-5 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Third star</title>
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
              ></path>
            </svg>
            <svg
              aria-hidden="true"
              class="w-5 h-5 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Fourth star</title>
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
              ></path>
            </svg>
            <svg
              aria-hidden="true"
              class="w-5 h-5 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Fifth star</title>
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
              ></path>
            </svg>
          </div>
        </a>
        <a href="#">
          <img src="./public/images/product/1.png" alt="" />
          <p>iPhone 11 64GB I Chính hãng VN/A</p>
          <div class="flex items-center space-x-6 mt-4">
            <p class="text-[#D70018]">18.990.000 ₫</p>
            <p class="text-[#707070]">13.990.000 ₫</p>
          </div>
          <div class="bg-[#F3F4F6] border-[#E5E7EB] border p-1 rounded-md my-2">
            <p>
              [HOT] Thu cũ lên đời giá cao - Thủ tục nhanh - Trợ giá lên tới
              1.000.000đ
            </p>
          </div>
          <div class="flex items-center">
            <svg
              aria-hidden="true"
              class="w-5 h-5 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>First star</title>
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
              ></path>
            </svg>
            <svg
              aria-hidden="true"
              class="w-5 h-5 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Second star</title>
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
              ></path>
            </svg>
            <svg
              aria-hidden="true"
              class="w-5 h-5 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Third star</title>
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
              ></path>
            </svg>
            <svg
              aria-hidden="true"
              class="w-5 h-5 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Fourth star</title>
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
              ></path>
            </svg>
            <svg
              aria-hidden="true"
              class="w-5 h-5 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Fifth star</title>
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
              ></path>
            </svg>
          </div>
        </a>
        <a href="#">
          <img src="./public/images/product/1.png" alt="" />
          <p>iPhone 11 64GB I Chính hãng VN/A</p>
          <div class="flex items-center space-x-6 mt-4">
            <p class="text-[#D70018]">18.990.000 ₫</p>
            <p class="text-[#707070]">13.990.000 ₫</p>
          </div>
          <div class="bg-[#F3F4F6] border-[#E5E7EB] border p-1 rounded-md my-2">
            <p>
              [HOT] Thu cũ lên đời giá cao - Thủ tục nhanh - Trợ giá lên tới
              1.000.000đ
            </p>
          </div>
          <div class="flex items-center">
            <svg
              aria-hidden="true"
              class="w-5 h-5 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>First star</title>
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
              ></path>
            </svg>
            <svg
              aria-hidden="true"
              class="w-5 h-5 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Second star</title>
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
              ></path>
            </svg>
            <svg
              aria-hidden="true"
              class="w-5 h-5 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Third star</title>
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
              ></path>
            </svg>
            <svg
              aria-hidden="true"
              class="w-5 h-5 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Fourth star</title>
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
              ></path>
            </svg>
            <svg
              aria-hidden="true"
              class="w-5 h-5 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Fifth star</title>
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
              ></path>
            </svg>
          </div>
        </a>
        <a href="#">
          <img src="./public/images/product/1.png" alt="" />
          <p>iPhone 11 64GB I Chính hãng VN/A</p>
          <div class="flex items-center space-x-6 mt-4">
            <p class="text-[#D70018]">18.990.000 ₫</p>
            <p class="text-[#707070]">13.990.000 ₫</p>
          </div>
          <div class="bg-[#F3F4F6] border-[#E5E7EB] border p-1 rounded-md my-2">
            <p>
              [HOT] Thu cũ lên đời giá cao - Thủ tục nhanh - Trợ giá lên tới
              1.000.000đ
            </p>
          </div>
          <div class="flex items-center">
            <svg
              aria-hidden="true"
              class="w-5 h-5 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>First star</title>
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
              ></path>
            </svg>
            <svg
              aria-hidden="true"
              class="w-5 h-5 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Second star</title>
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
              ></path>
            </svg>
            <svg
              aria-hidden="true"
              class="w-5 h-5 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Third star</title>
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
              ></path>
            </svg>
            <svg
              aria-hidden="true"
              class="w-5 h-5 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Fourth star</title>
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
              ></path>
            </svg>
            <svg
              aria-hidden="true"
              class="w-5 h-5 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Fifth star</title>
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
              ></path>
            </svg>
          </div>
        </a>
        <a href="#">
          <img src="./public/images/product/1.png" alt="" />
          <p>iPhone 11 64GB I Chính hãng VN/A</p>
          <div class="flex items-center space-x-6 mt-4">
            <p class="text-[#D70018]">18.990.000 ₫</p>
            <p class="text-[#707070]">13.990.000 ₫</p>
          </div>
          <div class="bg-[#F3F4F6] border-[#E5E7EB] border p-1 rounded-md my-2">
            <p>
              [HOT] Thu cũ lên đời giá cao - Thủ tục nhanh - Trợ giá lên tới
              1.000.000đ
            </p>
          </div>
          <div class="flex items-center">
            <svg
              aria-hidden="true"
              class="w-5 h-5 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>First star</title>
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
              ></path>
            </svg>
            <svg
              aria-hidden="true"
              class="w-5 h-5 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Second star</title>
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
              ></path>
            </svg>
            <svg
              aria-hidden="true"
              class="w-5 h-5 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Third star</title>
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
              ></path>
            </svg>
            <svg
              aria-hidden="true"
              class="w-5 h-5 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Fourth star</title>
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
              ></path>
            </svg>
            <svg
              aria-hidden="true"
              class="w-5 h-5 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Fifth star</title>
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
              ></path>
            </svg>
          </div>
        </a>
      </div>
    </div>
    <div class="max-w-7xl mx-auto my-5">
      <div class="flex justify-between my-3 items-center">
        <h3 class="text-[22px] font-normal">PHỤ KIỆN</h3>
        <a href="#">Xem tất cả</a>
      </div>
      <div class="grid grid-cols-10 gap-4">
        <div class="bg-[#FFA3A3] rounded-lg">
          <p class="text-white pl-2">Nổi bật</p>
          <div class="flex justify-center items-center pt-2">
            <img src="./public/images/img-medal.png" alt="" />
          </div>
        </div>
        <div class="bg-[#FFB8B8] rounded-lg">
          <p class="text-white pl-1">Phụ kiện Apple</p>
          <div class="flex justify-center items-center pt-2">
            <img
              src="./public/images/img-phone.png"
              alt=""
              class="rounded-b-lg w-full"
            />
          </div>
        </div>
        <div class="bg-[#FF94EB] rounded-lg">
          <p class="text-white pl-2">Dán màn hình</p>
          <div class="flex justify-center items-center pt-2">
            <img src="./public/images/img-protect.png" alt="" class="w-full" />
          </div>
        </div>
        <div class="bg-[#FFA3A3] rounded-lg">
          <p class="text-white pl-2">Nổi bật</p>
          <div class="flex justify-center items-center pt-2">
            <img src="./public/images/img-medal.png" alt="" />
          </div>
        </div>
        <div class="bg-[#FFB8B8] rounded-lg">
          <p class="text-white pl-1">Phụ kiện Apple</p>
          <div class="flex justify-center items-center pt-2">
            <img
              src="./public/images/img-phone.png"
              alt=""
              class="rounded-b-lg w-full"
            />
          </div>
        </div>
        <div class="bg-[#FF94EB] rounded-lg">
          <p class="text-white pl-2">Dán màn hình</p>
          <div class="flex justify-center items-center pt-2">
            <img src="./public/images/img-protect.png" alt="" class="w-full" />
          </div>
        </div>
        <div class="bg-[#FFA3A3] rounded-lg">
          <p class="text-white pl-2">Nổi bật</p>
          <div class="flex justify-center items-center pt-2">
            <img src="./public/images/img-medal.png" alt="" />
          </div>
        </div>
        <div class="bg-[#FFB8B8] rounded-lg">
          <p class="text-white pl-1">Phụ kiện Apple</p>
          <div class="flex justify-center items-center pt-2">
            <img
              src="./public/images/img-phone.png"
              alt=""
              class="rounded-b-lg w-full"
            />
          </div>
        </div>
        <div class="bg-[#FF94EB] rounded-lg">
          <p class="text-white pl-2">Dán màn hình</p>
          <div class="flex justify-center items-center pt-2">
            <img src="./public/images/img-protect.png" alt="" class="w-full" />
          </div>
        </div>
        <div class="bg-[#FFA3A3] rounded-lg">
          <p class="text-white pl-2">Nổi bật</p>
          <div class="flex justify-center items-center pt-2">
            <img src="./public/images/img-medal.png" alt="" />
          </div>
        </div>
        <div class="bg-[#D6D6D6] rounded-lg">
          <p class="text-white pl-2">Apple Care</p>
          <div class="flex justify-center items-center pt-2">
            <img src="./public/images/img-apple.png" alt="" class="w-full" />
          </div>
        </div>
      </div>
    </div>
    <div class="max-w-7xl mx-auto my-5">
      <div class="flex justify-between my-3 items-center">
        <h3 class="text-[22px] font-normal">Linh kiện máy tính</h3>
        <a href="#">Xem tất cả</a>
      </div>
      <div class="grid grid-cols-10 gap-4">
        <div class="bg-[#FFA3A3] rounded-lg">
          <p class="text-white pl-2">PC ráp sẵn CellphoneS</p>
          <div class="flex justify-center items-center pt-2">
            <img src="./public/images/lkmt1.png" alt="" />
          </div>
        </div>
        <div class="bg-[#FDA4AF] rounded-lg">
          <p class="text-white pl-2">PC ráp sẵn CellphoneS</p>
          <div class="flex justify-center items-center pt-2">
            <img src="./public/images/lkmt1.png" alt="" />
          </div>
        </div>
        <div class="bg-[#F9A8D4] rounded-lg">
          <p class="text-white pl-2">PC ráp sẵn CellphoneS</p>
          <div class="flex justify-center items-center pt-2">
            <img src="./public/images/lkmt1.png" alt="" />
          </div>
        </div>
        <div class="bg-[#C4B5FD] rounded-lg">
          <p class="text-white pl-2">PC ráp sẵn CellphoneS</p>
          <div class="flex justify-center items-center pt-2">
            <img src="./public/images/lkmt1.png" alt="" />
          </div>
        </div>
        <div class="bg-[#A5B4FC] rounded-lg">
          <p class="text-white pl-2">PC ráp sẵn CellphoneS</p>
          <div class="flex justify-center items-center pt-2">
            <img src="./public/images/lkmt1.png" alt="" />
          </div>
        </div>
        <div class="bg-[#93C5FD] rounded-lg">
          <p class="text-white pl-2">PC ráp sẵn CellphoneS</p>
          <div class="flex justify-center items-center pt-2">
            <img src="./public/images/lkmt1.png" alt="" />
          </div>
        </div>
        <div class="bg-[#6EE7B7] rounded-lg">
          <p class="text-white pl-2">PC ráp sẵn CellphoneS</p>
          <div class="flex justify-center items-center pt-2">
            <img src="./public/images/lkmt1.png" alt="" />
          </div>
        </div>
        <div class="bg-[#FCD34B] rounded-lg">
          <p class="text-white pl-2">PC ráp sẵn CellphoneS</p>
          <div class="flex justify-center items-center pt-2">
            <img src="./public/images/lkmt1.png" alt="" />
          </div>
        </div>
      </div>
    </div>
    <footer class="mt-44">
      <div class="max-w-7xl mx-auto grid grid-cols-4 gap-8 mb-10">
        <div class="flex flex-col">
          <a href="#" class="text-[18px]">Tìm cửa hàng</a>
          <a href="#" class="text-[12px] mt-2 mb-1">Tìm cửa hàng gần nhất</a>
          <a href="#" class="text-[12px] mb-1">Mua hàng từ xa</a>
          <a href="#" class="text-[12px] mb-1 text-[#FF0000]"
            >Gặp trực tiếp cửa hàng gần nhất (Zalo hoặc gọi điện)</a
          >
          <a href="#" class="text-[12px] mb-1">Phương thức thanh toán</a>
          <div class="grid grid-cols-4 mt-2 gap-2">
            <img src="./public/images/nh1.png" alt="" />
            <img src="./public/images/nh2.png" alt="" />
            <img src="./public/images/nh3.png" alt="" />
            <img src="./public/images/nh4.png" alt="" />
            <img src="./public/images/nh5.png" alt="" />
          </div>
        </div>
        <div>
          <p class="text-[12px]">Gọi mua hàng: 1800.2044 (8h00 - 22h00)</p>
          <p class="text-[12px]">Gọi khiếu nại: 1800.2063 (8h00 - 21h30)</p>
          <p class="text-[12px]">Gọi bảo hành: 1800.2064 (8h00 - 21h00)</p>
          <div class="my-3">
            <p>Đối tác dịch vụ bảo hành</p>
            <p class="text-[14px]">Điện Thoại - Máy tính</p>
          </div>
          <div>
            <p class="mb-2">Trung tâm bảo hành uỷ quyền Apple</p>
            <img src="./public/images/sub-logo.png" alt="" />
          </div>
        </div>
        <div class="flex flex-col">
          <a href="#" class="text-[12px] my-1">Mua hàng và thanh toán Online</a>
          <a href="#" class="text-[12px] my-1">Mua hàng trả góp Online</a>
          <a href="#" class="text-[12px] my-1">Tra thông tin đơn hàng</a>
          <a href="#" class="text-[12px] my-1">Tra điểm Smember</a>
          <a href="#" class="text-[12px] my-1">Tra thông tin bảo hành</a>
          <a href="#" class="text-[12px] my-1">Tra cứu hoá đơn VAT điện tử</a>
          <a href="#" class="text-[12px] my-1">Trung tâm bảo hành chính hãng</a>
          <a href="#" class="text-[12px] my-1"
            >Quy định về việc sao lưu dữ liệu</a
          >
          <a href="#" class="text-[#D70018] text-[12px]"
            >Dịch vụ bảo hành điện thoại</a
          >
        </div>
        <div class="flex flex-col">
          <a href="#" class="text-[12px] my-1">Quy chế hoạt động</a>
          <a href="#" class="text-[12px] my-1">Chính sách Bảo hành</a>
          <a href="#" class="text-[12px] my-1">Liên hệ hợp tác kinh doanh</a>
          <a href="#" class="text-[12px] my-1">Khách hàng doanh nghiệp (B2B)</a>
          <a href="#" class="text-[#D70018] text-[12px] my-1"
            >Ưu đãi thanh toán</a
          >
          <a href="#" class="text-[12px]">Tuyển dụng</a>
        </div>
      </div>
      <div class="bg-[#F8F8F8] flex items-center justify-center h-[80px]">
        <p class="text-[#707070] text-[12px]">
          Công ty TNHH Thương mại và dịch vụ kỹ thuật DIỆU PHÚC - GPĐKKD:
          0316172372 do sở KH & ĐT TP. HCM cấp ngày 02/03/2020. Địa chỉ: 350-352
          Võ Văn Kiệt, Phường Cô Giang, Quận 1, Thành phố Hồ Chí Minh, Việt Nam.
          Điện thoại: 028.7108.9666.
        </p>
      </div>
    </footer>
        `
    }
}

export default HomePage