import { useRouter } from "next/router";
import carsData from "../../data/carsData";
import CarDetails from "../../components/templates/CarDetails";
const carDetail = () => {
  const router = useRouter();
  const { carId } = router.query;
  const carDetail = carsData[carId - 1];
  return <CarDetails {...carDetail}/>;
};

export default carDetail;
