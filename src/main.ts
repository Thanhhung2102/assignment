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
import CategoryPage from './pages/Admin/Category/category'
import AddCategoryPage from './pages/Admin/Category/category-add'
import EditCategoryPage from './pages/Admin/Category/category-update'
import CategoryList from './pages/Admin/Category/category-list'

const router = new Navigo("/", { linksSelector: "a", hash: true });

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

router.on("/admin/*", () => {}, {
    before(done, match) {
        if(JSON.parse(localStorage.getItem('user'))){
            const role = JSON.parse(localStorage.getItem('user')).role;
            if(role == 1){
                done();
            } else {
                document.location.href="/"
            }
        } else {
            document.location.href="/"
        }
      
      
    }
})

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
   "/admin/categories": () => {
    print(CategoryPage)
  },
  "/admin/categories/:id/list": (data) => {
    print(CategoryList, data.data.id)
  },
  "/admin/categories/add": () => {
    print(AddCategoryPage)
  },
  "/admin/categories/:id/edit": (data) => {
    print(EditCategoryPage , data.data.id)
  },
})
router.resolve()