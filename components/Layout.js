import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="container">
      <Navbar />
      <main>{children}</main>
      <div className="br-xl" />
      <Footer />
    </div>
  );
}
