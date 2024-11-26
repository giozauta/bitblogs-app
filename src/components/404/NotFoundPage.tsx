import { Link } from "react-router-dom";
export const NotFoundPage: React.FC = () => {
  return (
    <div className="w-100 h-screen flex flex-col items-center justify-center ">
      <div className="text-xl">
        404 the page you are looking for not avaible! click here :
        <Link className="text-red-700" to="/">
          <span> go home</span>
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
