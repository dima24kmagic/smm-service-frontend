import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'
import '../fonts/fontello/fontello.css'

class TopBar extends Component {
    render() {
        return (
            <header className="nav">
                <div className="nav__info">
                    <nav>
                        <NavLink className={'nav__item'} to={'/feedback'}>
                            Отзывы
                        </NavLink>
                        <NavLink className={'nav__item'} to={'/add_money'}>
                            Пополнить баланс
                        </NavLink>
                    </nav>
                    <div>
                        <span className="balance">
                            <i className="icon-rouble" />
                            {this.props.balance}р
                        </span>
                    </div>
                </div>
                <div className="nav__actions">
                    <nav>
                        <NavLink className="nav__item" to="/clean">
                            Очистка
                        </NavLink>
                        <NavLink className={'nav__item'} to={'/survey'}>
                            Опросы
                        </NavLink>
                    </nav>
                </div>
            </header>
        )
    }
}

export default TopBar
