import Logo from '@/components/Logo';
import './Header.scss'
import classNames from 'classnames';
import Button from '@/components/Button';
import BurgerButton from '@/components/BurgerButton';

const Header = (props) => {
    const { url } = props

    const menuItems = [
        { label: 'Главная', href: '/' },
        { label: 'Основное меню', href: '#', className: 'header__menu-item--tooltip' },
        { label: 'Наши сервисы', href: '/' },
        { label: 'Контакты', href: '/' }
    ];

    const tooltipItems = [
        { label: 'Заказать вёрстку', href: '/' },
        { label: 'Отправить макет на проверку', href: '/' },
        { label: 'Хочу работать у вас', href: '/' },
        { label: 'Есть предложение по работе с клиентами', href: '#', className: 'header__tooltip-item--tooltip' }
    ];

    const tooltipItemsSecond = [
        { label: 'У меня есть оффер', href: '/' },
        { label: 'Сделать партнером', href: '/' },

    ];




    return (
        <header className='header' data-js-overlay-menu="">
            <div className='header__inner container'>
                <Logo
                    className='header__logo'
                    loading="eager"
                />
                <dialog className="header__overlay-menu-dialog"
                    data-js-overlay-menu-dialog="">
                    <nav className="header__menu">
                        <ul className="header__menu-list">
                            {menuItems.map(({ label, href, className }, index) => (
                                <li
                                    className={classNames('header__menu-item', className)}
                                    key={index}
                                >
                                    <a
                                        className={classNames('header__menu-link', {
                                            'is-active': href === url
                                        })}
                                        href={href}
                                    >
                                        {label}

                                        {className && <span className="header__menu-icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="7" height="9" viewBox="0 0 7 9" fill="none">
                                                <path d="M6.45999 4.53589L0.459991 8.53589L0.459991 0.535888L6.45999 4.53589Z" fill="#F2994A" />
                                            </svg>
                                        </span>}
                                    </a>
                                    {className && <div className="header__tooltip">
                                        <ul className="header__tooltip-list">
                                            {tooltipItems.map(({ label, href, className }, index) => (
                                                <li className={classNames('header__tooltip-item', className)} key={index}>
                                                    <a className="header__tooltip-link" href={href}>{label}
                                                        {className && <span className="header__tooltip-icon">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="7" height="9" viewBox="0 0 7 9" fill="none">
                                                                <path d="M6.45999 4.53589L0.459991 8.53589L0.459991 0.535888L6.45999 4.53589Z" fill="#F2994A" />
                                                            </svg>
                                                        </span>}
                                                    </a>
                                                    {className && (
                                                        <div className="header__tooltip header__tooltip--secondary">
                                                            <ul className="header__tooltip-list">
                                                                {tooltipItemsSecond.map(({ label, href }, index) => (
                                                                    <li className="header__tooltip-item" key={index}>
                                                                        <a className="header__tooltip-link" href={href}>{label}</a>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    )}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>}

                                </li>

                            ))}
                        </ul>
                    </nav>

                </dialog>
                <div className="header__actions">
                    <Button
                        className='header__button button--tel'
                        label='+1 (321) 222 - 33 -33'
                        isLabelHidden={false}
                        mode='default'
                        iconName='phone'
                        isLink={true}
                        href='tel:+13212223333'
                    >
                    </Button>
                </div>
                <BurgerButton
                    className='header__burger-button visible-tablet'
                    extraAttrs={{
                        'data-js-overlay-menu-burger-button': '',
                    }}
                />
            </div>
        </header>


    );
}


export default Header;

