import { signup } from "../../api/user";
import User from "../../model/user";


const Signup = {
   render: async () => {
      return /*html*/`
         <div class="flex justify-center items-center bg-gray-100 h-[100vh]">
      <div class="w-[800px] bg-white flex justify-around p-8">
        <form class="w-[400px]" id="signup">
          <div class="mb-2">
            <label class="block text-xl font-normal">Email</label>
            <input
              type="text"
              class="block border w-[410px] h-[44px] my-2 outline-none rounded-md" name="email" id="email"
            />
          </div>
          <div class="mb-2">
            <label class="block text-xl font-normal">Số điện thoại</label>
            <input
              type="text"
              class="block border w-[410px] h-[44px] my-2 outline-none rounded-md" name="phone" id="phone"
            />
          </div>
          <div class="mb-2">
            <label class="block text-xl font-normal">Mật khẩu</label>
            <input
              type="password"
              class="block border w-[410px] h-[44px] my-2 outline-none rounded-md" name="password" id="password"
            />
          </div>
          <button
            type="submit"
            class="text-center bg-[#FF424E] text-white w-[410px] h-[48px] rounded-md mt-1"
          >
            Đăng Ký
          </button>
          <div class="flex justify-center items-center mt-8">
             <a href="/signin" class="text-red-400 underline">Đăng nhập</a>
         </div>
        </form>
        <div class="flex justify-center items-center">
          <img src="./public/images/anhhtus-logo 2.png" alt="" />
        </div>
      </div>
    </div>
      `
   },

   afterRender: async () => {
     $("#signup").validate({
      rules: {
        email: {
          required: true,
          email: true
        },
        phone: {
          required: true,
          number: true,
          minlength: 10
        },
        password: {
          required: true,
          minlength: 6
        }
      },
      messages: {
        email: {
          required: "Vui lòng nhập email",
          email: "Vui lòng nhập đúng định dạng email"
        },
        phone: {
          required: "Vui lòng nhập số điện thoại",
          number: "Điện thoại chỉ được nhập số",
          minlength: "Vui lòng nhập từ 10 số trở lên"
        },
        password: {
          required: "Vui lòng nhập password",
          minlength: "Vui lòng nhập lớn hơn 6 kí tự"
        }
      },
      submitHandler: async function(){
            const email = document.querySelector('#email')?.value
            const phone = document.querySelector('#phone')?.value
            const password = document.querySelector('#password')?.value
            const role = 0
            const user = new User(email,phone,password,role)
            signup(user)
            alert("Đăng ký thành công")
            location.href = "/signin"
        }
    });
   }
}
export default Signup