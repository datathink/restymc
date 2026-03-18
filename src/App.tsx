import { Header, Footer } from "./components/layout";
import {
    Hero,
    YogaClasses,
    AboutStudio,
    Workshops,
    Instructors,
    YogaTherapy,
} from "./components/sections";

function App() {
    return (
        <div className="min-h-screen">
            <Header />
            <main>
                <Hero />
                <YogaClasses />
                <AboutStudio />
                <Workshops />
                <YogaTherapy />
                <Instructors />
            </main>
            <Footer />
        </div>
    );
}

export default App;
