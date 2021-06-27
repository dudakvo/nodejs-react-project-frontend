import styles from './ProjectsViewTitel.module.css';
import sprite from '../../sprite.svg';

const ProjectsViewTitel = () => {
  const handleAddProject = () => {
    console.log('add contact');
  };

  return (
    <div className={styles.block_titel}>
      <h2>Projects</h2>
      <button
        type="button"
        className={styles.button_add_project}
        onClick={handleAddProject}
      >
        <div className={styles.button_plus}>
          <svg className={styles.plus}>
            <use href={sprite + '#icon-plus'} />
          </svg>
        </div>

        <p className={styles.button_text}>Create project</p>
      </button>
    </div>
  );
};
export default ProjectsViewTitel;
