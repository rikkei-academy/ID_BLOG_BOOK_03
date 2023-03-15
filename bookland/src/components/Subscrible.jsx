import "../css/subscrible.css"
function Subscrible() {
    return (
        <div className="subscribe">
        <div className="subsTitle">
          <div className="subTit">Subscribe our newsletter for <br />newest books updates</div>
        </div>
        <div className="searchSubs">
          <input type="text" placeholder="Type your mail here" />
          <button>Subs</button>
        </div>
      </div>
    )
}
export default Subscrible;