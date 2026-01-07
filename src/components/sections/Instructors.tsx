import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { instructors } from '../../data/content';

export function Instructors() {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation();

  return (
    <section id="about" className="py-20 bg-rest-light-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={sectionRef}
          className="space-y-16"
        >
          {instructors.map((instructor, index) => (
            <div
              key={instructor.id}
              className={`
                grid grid-cols-1 lg:grid-cols-2 gap-8 items-center
                transition-all duration-700 ease-out
                ${sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
              `}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* Image - alternating sides */}
              <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="relative max-w-md mx-auto lg:mx-0">
                  <img
                    src={instructor.image}
                    alt={`${instructor.name} - Yoga Instructor`}
                    className="rounded-lg shadow-xl w-full h-[400px] object-cover"
                  />
                  {/* Decorative element */}
                  <div
                    className={`
                      absolute -bottom-4 w-full h-full border-2 border-rest-sage/30 rounded-lg -z-10
                      ${index % 2 === 0 ? '-right-4' : '-left-4'}
                    `}
                  />
                </div>
              </div>

              {/* Content */}
              <div className={`${index % 2 === 1 ? 'lg:order-1 lg:text-right' : ''}`}>
                <h3 className="font-script text-3xl text-rest-charcoal mb-2">
                  Hi! I'm {instructor.name}
                </h3>

                <p className="font-serif text-lg text-rest-warm-brown italic mb-6">
                  {instructor.tagline}
                </p>

                <p className="text-rest-warm-gray leading-relaxed mb-6">
                  {instructor.bio}
                </p>

                {instructor.credentials && (
                  <ul className={`space-y-1 text-sm text-rest-taupe ${index % 2 === 1 ? 'lg:ml-auto' : ''}`}>
                    {instructor.credentials.map((credential, credIndex) => (
                      <li
                        key={credIndex}
                        className={`flex items-center ${index % 2 === 1 ? 'lg:justify-end' : ''}`}
                      >
                        <span className={`text-rest-sage ${index % 2 === 1 ? 'lg:order-2 lg:ml-2' : 'mr-2'}`}>
                          ✓
                        </span>
                        {credential}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Instructors;
