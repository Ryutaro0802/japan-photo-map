export default function (context: any) {
    if (!context.store.getters.loggedIn) {
        return context.redirect('/login')
    }
}
