import MainLayout from "../components/MainLayout"
import Header from "../components/header/Header"
import OrderContainer from "../components/lastOrder section/OrderContainer"
import Sidebar from "../components/sidebar/Sidebar"
import TrendsContainer from "../components/trends-section/TrendsContainer"

const Dashboard = () => {
  return <MainLayout>
    <div className="flex flex-row gap-3">
        <Sidebar />
        <Header />
        <TrendsContainer />
        <OrderContainer />     
    </div>
    
  </MainLayout>
}

export default Dashboard