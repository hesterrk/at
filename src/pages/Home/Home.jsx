import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';
import styles from './Home.module.css';

function Home() {
  const logoLines = Array.from(Array(5).keys());
  const recommendedArticles = [
    'Another interesting article',
    'And another interesting article',
    'Not that interesting article',
    'Kinda interesting article',
    'Might be interesting article',
    'Not interesting article',
  ];

  return (
    <>
      <section className={styles.headerNavContainer}>
        <header className={styles.logoContainer}>
          {logoLines.map((line) => (
            <span className={styles.line} key={line}></span>
          ))}
          <h1>A C M E</h1>
        </header>
        <NavBar />
      </section>

      <div className={styles.homeContainer}>
        <section className={styles.mainContent}>
          <h1>An interesting article</h1>
          <h3>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc pretium pulvinar convallis. Fusce euismod
            dolor mi, at rutrum orci finibus posuere. Fusce eros nibh, imperdiet a turpis vitae.
          </h3>
          <h2>How we do it</h2>
          <div>
            <span>
              <p>
                Lorem ipsum dolor sit amet, <strong>consectetur</strong> adipiscing elit. In faucibus laoreet risus, ut
                elementum tortor porta quis. Fusce eget massa mattis, vulputate nisl at, ultricies diam. Proin vulputate
                neque diam, non condimentum elit imperdiet sit amet. In iaculis purus sed ligula sollicitudin, nec
                aliquam enim condimentum. Aliquam erat volutpat. Pellentesque in sollicitudin ipsum. Nunc dignissim
                vulputate nisl eget congue. Etiam semper neque non auctor sodales. Donec vehicula neque magna, quis
                congue lectus ullamcorper sit amet. Maecenas eu lorem vel augue suscipit rhoncus. In convallis nisi a
                est suscipit, ut ullamcorper leo fermentum. Ut quis orci non nisl feugiat porttitor ac eget orci.
              </p>
              <p>One person said:</p>
              <p>
                &quot;Donec vehicula neque magna, quis congue lectus ullamcorper sit amet. Maecenas eu lorem vel augue
                suscipit rhoncus.&quot;
              </p>
            </span>
            <img src="https://placehold.co/300x200/BFDBFE/svg" alt="placeholder" />
          </div>
        </section>

        <section className={styles.recommendedArticles}>
          <aside>
            <h2>More like this</h2>
            <ul>
              {recommendedArticles.map((article) => (
                <li key={article}>
                  <a href="#article">{article}</a>
                </li>
              ))}
            </ul>
            <button>
              {' '}
              <span>&#9734;</span> Sign up to our newsletter <span>&#9734;</span>
            </button>
          </aside>
        </section>
      </div>
      <Footer />
    </>
  );
}
export default Home;
