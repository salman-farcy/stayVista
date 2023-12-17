import { useSearchParams } from "react-router-dom";
import Container from "../Shared/Container";
import CategoriesBox from "./CategoriesBox";
import { categories } from "./CategoriesData";


const Categories = () => {
     const [params, setParams] = useSearchParams();
     const category = params.get('category')
     

     return (
          <Container>
               <div className="flex items-center gap-2 md:gap-4 justify-between overflow-x-auto py-4">
                    {categories.map(item =>
                         <CategoriesBox
                              key={item.label}
                              label={item.label}
                              icon={item.icon}
                              selected={category === item.label}
                         />)
                    }
               </div>
          </Container>
     );
};

export default Categories;