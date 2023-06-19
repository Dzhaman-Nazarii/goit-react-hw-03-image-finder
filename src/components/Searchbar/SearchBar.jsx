import { Component } from "react";

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
            <header className="searchbar">
                <form onSubmit={this.handleSubmit} className="form">
                    <input
                        className="input"
                        type="text"
                        name="galleryName"
                        value={this.state.galleryName }
                        onChange={this.handleChange}
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                    />
                    <button type="submit" className="button">
                        <span className="button-label">Search</span>
                    </button>
                </form>
            </header>
        )
    }
}