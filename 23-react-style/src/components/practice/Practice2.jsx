import img1 from "../../assets/grass.png";
import "../../style/practice2.scss";

export default function Practice2() {
  return (
    <>
      <div className="larva">
        <div className="body body1">
          <div className="eye-white">
            <div className="eye-black"></div>
          </div>
        </div>
        <div className="body body2"></div>
        <div className="body body3"></div>
        <div className="body body4"></div>
        <div className="body body5"></div>

        <img src={img1} alt="grass" className="grass" />
      </div>
    </>
  );
}
