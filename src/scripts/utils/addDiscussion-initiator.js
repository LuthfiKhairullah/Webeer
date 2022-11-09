const AddDiscussionInitiator = {
    async init({ addDiscussionContainer }) {
        this._addDiscussionContainer = addDiscussionContainer;

        await this.render();
    }

    async _render() {
        const addDiscussionButton = document.querySelector('#addDiscussionButton')
    }
}