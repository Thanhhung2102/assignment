import { signin } from "../../api/user"

const Signin = {
   render: async () => {
      return `
         <div class="flex justify-center items-center bg-gray-100 h-[100vh]">
      <div class="w-[800px] bg-white flex justify-around p-8">
        <form class="w-[400px]" id="signin">
          <div class="mb-2">
            <label class="block text-xl font-normal">Email</label>
            <input
              type="text"
              class="block border w-[410px] h-[44px] my-2 outline-none rounded-md" name="email" id="email"
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
            Đăng Nhập
          </button>
          <p class="text-center my-4 font-normal">Hoặc đăng nhập bằng</p>
          <div class="flex justify-center items-center space-x-4">
            <a href="#"
              ><img src="./public/images/Rectangle.png" alt="" class="w-[80%]"
            /></a>
            <a href="#"
              ><img src="./public/images/gg.png" alt="" class="w-[80%]"
            /></a>
          </div>
        </form>
        <div class="flex justify-center items-center pb-24">
          <img src="./public/images/anhhtus-logo 2.png" alt="" />
        </div>
      </div>
    </div>
      `
   },

   afterRender: () => {
      const formSignin = document.querySelector("#signin")
      formSignin?.addEventListener("submit", async function(e){
        e.preventDefault()
        try {
          const user = {
            email: document.querySelector("#email")?.value,
            password: document.querySelector("#password")?.value
          }
          const result = await signin(user)
          if(result){
            alert("Đăng nhập thành công")
          }
        } catch (error) {
          alert("Sai tài khoản hoặc mật khẩu")
        }
      })
      
   }
}
export default Signin