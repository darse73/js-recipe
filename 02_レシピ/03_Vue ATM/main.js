new Vue({
    el: "#ATM",
    data: {
        inputAmount: "",
        balance:0,
        logs:[],
        check:false
    },
    methods: {
        deposit: function() {
            this.balance += Number(this.inputAmount)
            this.logs.push({   
                date: new Date(),
                type: "入金",
                money: this.inputAmount
            })
            this.checkMethod()
        },
        withdrawal: function() {
            this.balance -= Number(this.inputAmount)
            this.logs.push({   
                date: new Date(),
                type: "出金",
                money: this.inputAmount
            })
            this.checkMethod()
        },
        checkMethod: function() {
            if(this.checkCalculation == true){
                this.check = true
            }else{
                this.check = false
            }
        }
    },
    computed: {
        checkCalculation: function() {
            return this.balance < this.inputAmount
        }
    }
})

