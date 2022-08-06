import './style.css'
import typescriptLogo from './typescript.svg'
import Navigo from 'navigo'
import AdminPage from './pages/Admin'
import HomePage from './pages/Home'
import AddProductPage from './pages/Admin/Product/add'
import EditProductPage from './pages/Admin/Product/edit'
import Signup from './pages/Auth/signup'
import Signin from './pages/Auth/signin'
import DetailPage from './pages/Home/detail-page'

const router = new Navigo('/', {linksSelector: "a"})

export type ComponentBase = {
  render: (params) => Promise<string>;
  afterRender?: (params) => void
}

const print = async (component: ComponentBase, params?: any) => {
  document.getElementById('app').innerHTML = await component.render(params)
  if(component.afterRender) {
    component.afterRender(params)
  }
}

router.on({
  "/": () => {
    print(HomePage)
  },
   "/detail/:id": (data) => {
    print(DetailPage ,data.data.id)
  },
  "/signup": () => {
    print(Signup)
  },
  "/signin": () => {
    print(Signin)
  },
  "/admin": () => {
    print(AdminPage)
  },
  "/admin/products/add": () => {
    print(AddProductPage)
  },
  "/admin/products/:id/edit": (data) => {
    print(EditProductPage , data.data.id)
  },
})
router.resolve()