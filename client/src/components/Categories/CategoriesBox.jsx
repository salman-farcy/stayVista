import { useNavigate, useSearchParams } from "react-router-dom";
import qs from 'query-string';


const CategoriesBox = ({ label, icon: Icon, selected }) => {
     const [params, setParams] = useSearchParams();
     const navigate = useNavigate()

     const handleClick = () => {
          let currentQuery = {}

          if (params) {
               currentQuery = qs.parse(params.toString())
          }

          const updatedQuery = { ...currentQuery, category: label }

          const url = qs.stringifyUrl({
               url: '/',
               query: updatedQuery,
          })

          navigate(url)

     }

     params.get('category')
     return (
          <div
               onClick={handleClick}
               className={`${selected ? "border-b-neutral-900 text-neutral-900" : "border-b-neutral-200 text-neutral-500"} flex flex-col items-center justify-center gap-2 p-3 border-b-2 text-neutral-500 hover:text-neutral-900 transition cursor-pointer`}>
               
               <Icon size={26} />
               <h2 className="text-sm font-semibold">{label}</h2>
          </div>
     );
};

export default CategoriesBox;