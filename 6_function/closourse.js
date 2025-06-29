let outer = ()=>{

            let a = 20

            let inner =()=>{
                a=a + 1
                console.log(a)

            }
            return inner

        }
        let res = outer()

        res()
        res()
        res()

        // closourse means if outer function is executed then also inner function can access the properties of outer function