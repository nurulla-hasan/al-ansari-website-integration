import Footer from "@/components/shared/footer/Footer";
import Navbar from "@/components/shared/navbar/Navbar";


export default async function MainRouteLayout({ children }) {
    
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    );
}