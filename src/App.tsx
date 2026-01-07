import { Header, Footer } from './components/layout';
import {
  Hero,
  YogaClasses,
  PersonalServices,
  Workshops,
  Instructors,
  YogaTherapy,
} from './components/sections';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <YogaClasses />
        <PersonalServices />
        <Workshops />
        <Instructors />
        <YogaTherapy />
      </main>
      <Footer />
    </div>
  );
}

export default App;
