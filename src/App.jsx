import Banner from "./Components/Banner";
import AircraftCharter from "./Components/Blocks/AircraftCharter";
import AircraftMaintenance from "./Components/Blocks/AircraftMaintenance";
import AircraftSalesServices from "./Components/Blocks/AircraftSalesServices";
import CarRentals from "./Components/Blocks/CarRentals";
import CommercialAirlines from "./Components/Blocks/CommercialAirlines";
import Dining from "./Components/Blocks/Dining";
import Entertainment from "./Components/Blocks/Entertainment";
import FlightTrainingRental from "./Components/Blocks/FlightTrainingRental";
import HelicopterFlightTraining from "./Components/Blocks/HelicopterFlightTraining";
import PilotSupplies from "./Components/Blocks/PilotSupplies";
import Footer from "./Components/Footer";
import Nav from "./Components/Nav";
import PreNav from "./Components/PreNav";
import Section from "./Components/Section";
import Test from "./Components/Test";

export default function App() {
  return (
    <div className=" font-Inter">
      {/* <Test /> */}
      <PreNav />
      <Nav />
      <Banner />
      <Section />
      <AircraftCharter />
      <AircraftMaintenance />
      <AircraftSalesServices />
      <CarRentals />
      <CommercialAirlines />
      <Dining />
      <Entertainment />
      <FlightTrainingRental />
      <HelicopterFlightTraining />
      <PilotSupplies />
      {/* <Footer /> */}
    </div>
  )
}