function Card(p1){
    return(
        <>

        {/* <h1>{p1.id}</h1>
        <h2>{p1.name}</h2>
        <h3>{p1.category}</h3>
        <p4>{p1.price}</p4>
        <p>{p1.description}</p> */}

            <div className="card" style={{width:200}}>

            <img className="card-img-top" 
            src="https://picsum.photos/seed/picsum/200/300" 
            alt="card img" />

            <div className="card-body">
                <h4 className="card-title">{p1.id}</h4>
                <h4 className="card-title">{p1.name}</h4>
                <h4 className="card-title">{p1.category}</h4>
                <h4 className="card-title">{p1.price}</h4>
                <h5 className="card-text">{p1.description}</h5>
            <a href="#" className="btn btn-primary">read more</a>
            </div>
            </div>
        </>
    )

}
export default Card;