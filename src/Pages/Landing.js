import { useDataContext } from "../Context/DataContext";

export function Landing(){
    const { category,navigate } = useDataContext();
    return(<div className="main-page">
        <h1>Categories</h1>
        <div className="category-container">{category.map((item,index)=><div key={index}className="card" onClick={()=>navigate(`/${item.category}`)}><img src={item.thumbnail} alt=""></img><p className="bold">{item.category}</p></div>)}</div>
    </div>);
}