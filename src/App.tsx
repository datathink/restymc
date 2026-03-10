import { Header, Footer } from "./components/layout";
import {
    Hero,
    YogaClasses,
    AboutStudio,
    PersonalServices,
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
                <PersonalServices />
                <Workshops />
                <YogaTherapy />
                <Instructors />
            </main>
            <Footer />
        </div>
    );
}

export default App;
