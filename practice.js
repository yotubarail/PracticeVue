var app = new Vue ({
    el: '#app',
    data: {
        message: "Hello World"
    }
})

var app2 = new Vue ({
    el: ".app2",
    data: {
        message: 'You loaded this page on ' + new Date().toLocaleString()
    }
})

var app3 = new Vue ({
    el: "#app3",
    data: {
        seen: true
    }
})

var app4 = new Vue ({
    el: "#app4",
    data: {
        todos: [
            {text: "Ok"},
            {text: "No"}
        ]
    }
})

var app5 = new Vue ({
    el: "#app5",
    data: {
        message: "こんにちは"
    },
    methods: {
        reverseMessage: function() {
            this.message = this.message.split('').reverse().join("")
        }
    }
})

var app6 = new Vue ({
    el: "#app6",
    data: {
        message: ""
    }
})

var change_sentence = new Vue ({
    el: "#change_sentence",
    data: {
        change_sentence: "",
        sentence: ""
    },
    methods : {
        change: function() {
            this.change_sentence = this.sentence
        }
    }
})

var vue_style = new Vue ({
    el: "#vue_style",
    data: {
        style: {
            color: "red",
            fontSize: "20px"
        }
    }
})

var selectbox = new Vue ({
    el: "#selectbox",
    data: {
        select: "Vue"
    }
})

var checkbox = new Vue ({
    el: "#checkbox",
    data: {
        food: { sushi: true, tenpura: false}
    }
})

var checkbox2 = new Vue ({
    el: "#checkbox2",
    data: {
        expressions: ["☺️"]
    }
})