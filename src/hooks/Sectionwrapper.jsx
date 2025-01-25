import { styles } from '../utils/styles';

const Sectionwrapper = (Component, idName) =>
  function Hoc() {
    return (
      <section className={`${styles.padding} max-w-7xl mx-auto relative z-0`}>
        <Component />
      </section>
    )
  }

export default Sectionwrapper;  