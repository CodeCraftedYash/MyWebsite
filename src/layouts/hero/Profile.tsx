import MyImage from "../../assets/yash.webp";
import LineSvg from "../../components/svgs/LineSvg";
const Profile = () => {
  return (
    <div className="relative w-fit">
      <img src={MyImage} className="w-44 min-w-10 aspect-square rounded-full" style={{boxShadow:"var(--box-shadow)"}}/>
      <div className="absolute w-full h-full -left-8 -bottom-4"><LineSvg /></div>
    </div>
  );
};

export default Profile;