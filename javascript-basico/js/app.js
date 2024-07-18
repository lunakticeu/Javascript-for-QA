
const LIST = [
    {
        id: 1,
        name:'C3PO',
        avatar: 'images/c3po.png'
    },
    {
        id: 2,
        name:'Chewbacca',
        avatar: 'images/chewbacca.png'
    },
    {
        id: 3,
        name:'Han Solo',
        avatar: 'images/hansolo.png'
    },
    {
        id: 4,
        name:'Princess Leia',
        avatar: 'images/leia.png'
    },
    {
        id: 5,
        name:'Luke Skywalker',
        avatar: 'images/luke.png'
    },
    {
        id: 6,
        name:'R2D2',
        avatar: 'images/r2d2.png'
    },
    {
        id: 7,
        name:'Darth Vader',
        avatar: 'images/vader.png'
    },
    {
        id: 8,
        name:'Master Yoda',
        avatar: 'images/yoda.png'
    }
]

const App = new Vue({
    el: '#app',
    data: {
        title: 'Star Wars Lego',
        username: 'Luna',
        characters: LIST
    }
})