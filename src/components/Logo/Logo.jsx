import './Logo.scss';
import classNames from 'classnames';

const Logo = (props) => {
    const {
        className,
        loading = "lazy"
    } = props
    const title = 'Home'

    return (
        <a className={classNames(className, 'logo')}
            href="/"
            title={title}
            aria-label={title}
        >
            <img
                src="/logo.svg"
                alt=""
                className="logo__image"
                width={46}
                height={46}
                loading={loading}
            />
        </a>
    );
}

export default Logo;