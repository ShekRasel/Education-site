import { useState } from 'react'
import { FiArrowUpRight, FiArrowRight, FiBookOpen, FiClock, FiMenu, FiX, FiCheck, FiCode, FiPenTool, FiTrendingUp, FiPlay, FiAward } from 'react-icons/fi'
import { FaStar } from 'react-icons/fa'

const courses = [
  { title: 'UI/UX design: from idea to interface', category: 'Design', image: 'image2.jpg', lessons: 24, hours: 12, price: 39, rating: '5.0', teacher: 'Sarah Johnson', portrait: 'instructor1.avif', color: 'peach' },
  { title: 'The complete web development bootcamp', category: 'Development', image: 'image1.jpg', lessons: 42, hours: 28, price: 99, rating: '5.0', teacher: 'Alex Morgan', portrait: 'instructor2.jpg', color: 'lavender' },
  { title: 'Build a business that makes an impact', category: 'Business', image: 'image4.jpg', lessons: 18, hours: 9, price: 93, rating: '4.8', teacher: 'David Miller', portrait: 'instructor3.webp', color: 'sage' },
  { title: 'Modern JavaScript, made simple', category: 'Development', image: 'image3.jpg', lessons: 32, hours: 16, price: 19, rating: '4.9', teacher: 'Alex Morgan', portrait: 'instructor2.jpg', color: 'lavender' },
  { title: 'Email marketing that connects', category: 'Marketing', image: 'image5.jpg', lessons: 16, hours: 8, price: 92, rating: '5.0', teacher: 'Sarah Johnson', portrait: 'instructor1.avif', color: 'peach' },
  { title: 'Your first steps with Python', category: 'Development', image: 'image6.jpg', lessons: 22, hours: 11, price: 9, rating: '4.8', teacher: 'David Miller', portrait: 'instructor3.webp', color: 'sage' },
]
const categories = ['All courses', 'Design', 'Development', 'Business', 'Marketing']

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [category, setCategory] = useState('All courses')
  const [showAll, setShowAll] = useState(false)
  const filtered = courses.filter(course => category === 'All courses' || course.category === category)
  const visible = showAll ? filtered : filtered.slice(0, 3)
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header">
        <div className="container nav-wrap">
          <a href="#home" className="brand" aria-label="EduLearn home"><span className="brand-mark"><FiBookOpen /></span>edu<span className="brand-light">learn</span><span className="brand-dot">.</span></a>
          <nav className={menuOpen ? 'navigation is-open' : 'navigation'} aria-label="Main navigation">
            {[['Home', 'home'], ['Courses', 'course'], ['Why EduLearn', 'about'], ['Mentors', 'mentor'], ['Journal', 'blog']].map(([label, id]) => <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>{label}</a>)}
            <a className="button mobile-start" href="#course" onClick={() => setMenuOpen(false)}>Start learning <FiArrowUpRight /></a>
          </nav>
          <a className="button header-cta" href="#course">Start learning <FiArrowUpRight /></a>
          <button className="menu-toggle" aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <FiX /> : <FiMenu />}</button>
        </div>
      </header>
      <main id="main">
        <section className="hero container" id="home">
          <div className="hero-copy">
            <div className="eyebrow"><span className="little-star">?</span> A LITTLE CURIOSITY. LIMITLESS POSSIBILITY.</div>
            <h1>Your next chapter<br />starts with<br /><span>something new.</span></h1>
            <p>Big dreams start with small steps. Discover practical courses, learn from inspiring people, and build a future that feels like you.</p>
            <div className="hero-actions"><a className="button" href="#course">Explore courses <FiArrowUpRight /></a><a className="text-button" href="#about"><span className="play-icon"><FiPlay /></span> A better way to learn</a></div>
            <div className="social-proof"><div className="avatar-stack">{['instructor1.avif', 'instructor2.jpg', 'instructor3.webp', 'instructor4.webp'].map(img => <img key={img} src={`/images/${img}`} alt="" />)}</div><div><div className="stars" aria-label="5 out of 5 stars">????? <span>4.9/5</span></div><p>Join a community of curious minds</p></div></div>
          </div>
          <div className="hero-visual">
            <span className="orbit orbit-one" /><span className="orbit orbit-two" />
            <div className="hero-photo"><img src="/images/hero-img.png" alt="A learner enjoying an online course on her laptop" /><div className="photo-caption"><span className="live-dot" /> YOUR FUTURE IS A WORK IN PROGRESS.</div></div>
            <div className="floating-note note-top"><span className="note-icon"><FiAward /></span><div><strong>Small steps. Big growth.</strong><span>Learn something that moves you.</span></div></div>
            <div className="floating-note note-bottom"><div className="progress-icon"><FiCheck /></div><div><strong>Your next chapter</strong><span>One new skill away <span className="sparkle">?</span></span></div></div>
            <span className="hero-spark">?</span><span className="image-label">GROW AT YOUR OWN PACE ?</span>
          </div>
        </section>
        <section className="benefit-strip"><div className="container benefit-grid"><div><FiBookOpen /><span>Real-world skills<strong>Made for what’s next</strong></span></div><div><FiAward /><span>Expert-led learning<strong>People who know their craft</strong></span></div><div><FiClock /><span>Your time, your pace<strong>Learning that fits your life</strong></span></div><div><FiTrendingUp /><span>Room to grow<strong>From curious to confident</strong></span></div></div></section>
        <section className="courses-section container section" id="course">
          <div className="section-heading"><div><div className="eyebrow">FIND YOUR NEXT THING</div><h2>A little learning.<br /><span>A lot of possibility.</span></h2></div><p>Pick a passion. Build a skill. Take the next step.<br />There’s a course for wherever you want to go.</p></div>
          <div className="course-toolbar"><div className="filters" aria-label="Filter courses">{categories.map(item => <button key={item} aria-pressed={category === item} className={category === item ? 'filter active' : 'filter'} onClick={() => { setCategory(item); setShowAll(false) }}>{item}</button>)}</div><button className="text-button view-all" onClick={() => { setCategory('All courses'); setShowAll(!showAll) }}>{showAll ? 'Show featured' : 'View all courses'} <FiArrowUpRight /></button></div>
          <div className="course-grid">{visible.map(course => <article className="course-card" key={course.title}><div className={`course-image ${course.color}`}><img src={`/images/${course.image}`} alt="" loading="lazy" /><span className="course-tag">{course.category}</span><span className="course-bookmark"><FiBookOpen /></span></div><div className="course-body"><div className="course-rating"><span><FaStar /> {course.rating}</span><span>Beginner friendly</span></div><h3>{course.title}</h3><div className="course-meta"><span><FiBookOpen /> {course.lessons} lessons</span><span><FiClock /> {course.hours} hours</span></div><div className="course-bottom"><div className="teacher"><img src={`/images/${course.portrait}`} alt="" loading="lazy" />{course.teacher}</div><a href={`mailto:swe.rasel@gmail.com?subject=${encodeURIComponent(`Course enquiry: ${course.title}`)}`} aria-label={`Enquire about ${course.title}, $${course.price}`} className="course-price">${course.price}<FiArrowUpRight /></a></div></div></article>)}</div>
          <p className="course-footnote">Not sure where to start? <a href="mailto:swe.rasel@gmail.com?subject=Help%20choosing%20a%20course">Let’s find your fit <FiArrowRight /></a></p>
        </section>
        <section className="about-section" id="about"><div className="container about-grid"><div className="about-art"><img src="/images/welcome-img.png" alt="Students discovering new skills together" loading="lazy" /><span className="about-sticker">Stay curious.<br /><em>Keep growing.</em><span>?</span></span></div><div className="about-copy"><div className="eyebrow">MORE THAN JUST A COURSE</div><h2>Learning for life.<br /><span>And all its possibilities.</span></h2><p>You don’t need to have it all figured out. Just bring your curiosity. We’ll help you turn it into the confidence to do something great.</p><ul><li><FiCheck /><div><strong>Learn it. Try it. Make it yours.</strong><p>Practical lessons and projects you can put to work.</p></div></li><li><FiCheck /><div><strong>Good teachers make all the difference.</strong><p>Learn from people who love what they do.</p></div></li><li><FiCheck /><div><strong>A little every day goes a long way.</strong><p>Make progress on your schedule, at your own pace.</p></div></li></ul><a className="button" href="#course">Find your first course <FiArrowUpRight /></a></div></div></section>
        <section className="section container" id="mentor"><div className="section-heading"><div><div className="eyebrow">REAL PEOPLE. REAL EXPERIENCE.</div><h2>Meet your next<br /><span>favorite teacher.</span></h2></div><p>Passionate people who make complicated<br />things feel a little more possible.</p></div><div className="mentor-grid">{[['Sarah Johnson', 'Design & creativity', 'instructor1.avif', FiPenTool], ['Alex Morgan', 'Code & development', 'instructor2.jpg', FiCode], ['David Miller', 'Business & growth', 'instructor3.webp', FiTrendingUp]].map(([name, role, img, Icon]) => <article className="mentor-card" key={name}><img src={`/images/${img}`} alt={name} loading="lazy" /><div><div><h3>{name}</h3><p>{role}</p></div><Icon /></div></article>)}</div></section>
        <section className="journal-section container section" id="blog"><div className="section-heading"><div><div className="eyebrow">THE CURIOUS CORNER</div><h2>A little inspiration<br /><span>for the journey.</span></h2></div><p>Fresh perspectives and practical ideas<br />to keep your curiosity going.</p></div><div className="journal-grid">{[['Design', 'Modern tools for better design', 'blog-1.jpg', 'Start with a sketch, explore a few directions, and use a reusable set of colors and type styles. A clear design system helps your ideas stay consistent as they grow.'], ['Development', 'The small details that build trust', 'blog-2.jpg', 'Fast pages, readable text, secure connections, and clear navigation all shape a better web experience. Start with these fundamentals before adding more features.'], ['Creativity', 'Your first idea is just the beginning', 'blog-3.jpg', 'Create a rough first draft, ask someone to try it, and pay attention to where they hesitate. Small rounds of feedback can turn an early idea into something useful.']].map(([tag, title, img, body]) => <article className="journal-card" key={title}><img src={`/images/${img}`} alt="" loading="lazy" /><div className="journal-meta">{tag}<span>3 min read</span></div><h3>{title}</h3><details><summary>Read the story <FiArrowUpRight /></summary><p>{body}</p></details></article>)}</div></section>
        <section className="cta-section container" id="contact"><span className="cta-spark">?</span><div><div className="eyebrow">YOUR NEXT CHAPTER IS WAITING</div><h2>Be curious. Be bold.<br /><em>Begin here.</em></h2><p>You bring the ambition. We’ll bring the possibilities.</p></div><a className="button button-cream" href="#course">Let’s start learning <FiArrowUpRight /></a></section>
      </main>
      <footer className="container"><div className="footer-top"><a href="#home" className="brand"><span className="brand-mark"><FiBookOpen /></span>edu<span className="brand-light">learn</span><span className="brand-dot">.</span></a><p>A little learning can change a lot.</p><a href="mailto:swe.rasel@gmail.com">Say hello <FiArrowUpRight /></a></div><div className="footer-bottom"><span>© {new Date().getFullYear()} EduLearn. Keep growing.</span><div><a href="#course">Courses</a><a href="#mentor">Our mentors</a><a href="#blog">Journal</a><a href="tel:01648936921">Contact us</a></div><span>Made for curious minds ?</span></div></footer>
    </>
  )
}
export default App
