export default function (context: any) {
    console.log('context.store.getters.loggedIn', context.store.getters.loggedIn)
    if (!context.store.getters.loggedIn) {
        console.log('redirect login')
        return context.redirect('/login')
    }
}
