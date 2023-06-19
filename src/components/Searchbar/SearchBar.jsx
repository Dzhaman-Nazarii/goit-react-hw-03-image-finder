import { Component } from "react";
import css from './Searchbar.module.css'

export default class Searchbar extends Component {
    state = {
        galleryName: ''
    }

    handleChange = event => {
        this.setState({galleryName: event.currentTarget.value.toLowerCase()})
    }

    handleSubmit = event => {
        event.preventDefault()
        if (this.state.galleryName.trim() === '') {
            alert('Введіть назву у пошуку')
            return
        }
        this.props.onSubmit(this.state.galleryName)
        this.setState({galleryName: ''})
    }

    render() {
        return (
            <header className={css.Searchbar}>
                <form onSubmit={this.handleSubmit} className={css.SearchForm}>
                    <button type="submit" className={css.SearchFormButton}>
                        <span className={css.SearchButtonLabel}>Search</span>
                    </button>
                    <input
                         className={css.SearchFormInput}
                        type="text"
                        name="galleryName"
                        value={this.state.galleryName }
                        onChange={this.handleChange}
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                    />
                </form>
            </header>
        )
    }
}