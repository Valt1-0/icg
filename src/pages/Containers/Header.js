import Navbar from "./Navbar";
import {
  TruckIcon,
  CreditCardIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";

const Header = () => {
  return (
    <>
      <Navbar />
      <div className="bg-primary">
        <div className="flex justify-center items-center mt-5 mx-2 text-white">
          <TruckIcon color="#ffffff" width={30} height={30} /> Livraison
          Gratuite
          <div className="w-[300px] bg-white text-slate-400 rounded-md mx-4">
            {" "}
            <MagnifyingGlassIcon width={25} />
          </div>
          <CreditCardIcon color="#ffffff" width={30} height={30} /> Paiement
          Sécurisé
        </div>
      </div>
    </>
  );
};
export default Header;
