import "../css/storeContainer.css"

const store = [
    {
        img: "./image/Vector.png",
        number: "125,663",
        stt: "Happy Customers",
    },
    {
        img: "./image/open-book 1.png",
        number: "50,672+",
        stt: "Book Collections",
    },
    {
        img: "./image/store 1.png",
        number: "1,562",
        stt: "Our Stores",
    },
    {
        img: "./image/quill 1.png",
        number: "457",
        stt: "Famous Writers",
    }
]
function StoreContainer() {
    return (
        <div className="storeContainer">
            {store.map((item) => {
                return (
                    <div className="storeItem">
                        <img src={item.img} alt="" className="storeImg" />
                        <p className="storeNumber">{item.number}</p>
                        <p className="storeStt">{item.stt}</p>
                    </div>
                )
            })}
        </div>
    )
}
export default StoreContainer;