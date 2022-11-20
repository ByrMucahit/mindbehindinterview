import styles from './style.module.css'

const IconComponent = ({componentIcon}) => {

    return (
        <div className={styles.componentIcon}>
            {componentIcon}
        </div>
    )

}

export default IconComponent;