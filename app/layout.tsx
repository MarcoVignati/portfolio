import "./reset.css"
import "./global.css"
import NavBar from "../components/navbar";
import Footer from "../components/footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
        <div className="wrapper">
          <NavBar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}