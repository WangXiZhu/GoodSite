interface Counter{
    readonly start: number          // 只读
    title: string
    lable?: string                  // 可选属性
    add(str: string): void          // 函数
}

function getCounter(): Counter {
    function counter(str: string) {
        
    }
    counter.start = 0
    counter.title = '123'
    counter.add = function (str: string) { }
    
    return counter;
}

let counter: Counter = {
    start: 1,
    title: '123',
    lable: '+',
    add: (str1: string)=>{}
}

interface SubCounter extends Counter {
    title: string
    add(str: string): void
    decerate(num: number): number
}

class Sub implements SubCounter{
    start = 0
    title = 'abc'

    add(str: string) {
        console.log(this.title + str) 
    }

    decerate(num: number) {
        return 1
    }
}




export default {
    run(){
        let sub = new Sub()

        sub.add('-1234')

        console.error(sub.decerate(1))
    }
}