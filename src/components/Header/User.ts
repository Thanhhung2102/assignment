import reRender from "../../ultilities/reRender";

const UserHeader = {
    render: () => {
      // console.log(JSON.parse(localStorage.getItem("user")).email);
        return `
                <header
      class="bg-[#D70018] max-w-full flex justify-center items-center space-x-24 py-2"
    >
      <div>
        <img src="../public/images/logo.png" alt="" class="w-[30%]" />
      </div>
      <form>
        <div class="relative">
          <div
            class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"
          >
            <svg
              aria-hidden="true"
              class="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            class="block p-4 pl-10 w-[350px] h-[30px] text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required=""
          />
          <button
            type="submit"
            class="absolute right-2.5 bottom-2.5 font-medium rounded-lg text-sm px-4 py-2"
          ></button>
        </div>
      </form>
      <div class="flex space-x-6 text-white text-[14px] items-center">
        <p>Gọi mua hàng <br /><a href="#">1800.2097</a></p>
        <a href="#" class="flex space-x-2 items-center">
          <img src="../public/images/address.png" alt="" class="" />
          <p href="#" class="">
            Cửa hàng <br />
            gần bạn
          </p>
        </a>
        <a href="#" class="flex space-x-2 items-center">
          <img src="../public/images/ship.png" alt="" />
          <p>Tra cứu <br />đơn hàng</p>
        </a>
        <a href="#" class="flex space-x-2 items-center">
          <img src="../public/images/cate.png" alt="" />
          <p>
            Giỏ <br />
            hàng
          </p>
        </a>
        
            ${localStorage.getItem("user") ? `
                        <a class="block px-4 py-3 hover:bg-white hover:text-red-500 text-base cursor-default" id="email"></a>
                        <a class="block px-4 py-3 hover:bg-white hover:text-red-500 cursor-default" id="logout">Logout</a>
        `: `<a href="/signin" class="">Đăng nhập</a>`}
       
      </div>
    </header>
        `
    }
    // afterRender: () => {
    //   console.log("hiiii");
      
    //       const email = document.querySelector('#email');
    //       const logout = document.querySelector('#logout');
    //       email.innerHTML = JSON.parse(localStorage.getItem("user")).email
    //       console.log(localStorage.getItem("user"));
    //       logout.addEventListener('click', function(){
    //           localStorage.removeItem("user");
    //           reRender("header",UserHeader);
    //       })
    // }
}
export default UserHeader