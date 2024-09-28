

import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './pages/Home'
import FavRecipes from './pages/FavRecipes'
import RecipesPage from './pages/RecipesPage'
import Contact from './pages/Contact'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import RecipeContextProvider, { useRecipeContext } from "./service/providers/RecipeContextProvider"
import Modal from "./components/Modal"
function App() {
  

  return (
    <RecipeContextProvider>
      <div className='app h-screen w-full grid grid-rows-page grid-cols-1 '>
        
        <BrowserRouter>
          <Navbar/>
          
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/favorite-recipes' element={<FavRecipes/>}/>
              <Route path='/my-recipes' element={<RecipesPage/>}/>
              <Route path='/contact' element={<Contact/>}></Route>
            </Routes>
            
          
          <Footer/>
        </BrowserRouter>
        
      </div>
    </RecipeContextProvider>
    
  )
}

export default App
