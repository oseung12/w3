<!-- 데이터 -->

function outer(){

    let arr = [] //빈 배열 선언
    let idx = 0

    //Js는 함수안에 함수를 선언 할 수 있다.  ; add(대상)라는 function 만들기.
    function add(todo) {
        todo.idx = idx++
        arr.push(todo)
        // console.log(arr) //; 현재 arr 의 형태를 확인한다.
    }
    function removeTodo(num){
        console.log("remove Todo...")

        const result = arr.filter(todo => todo.idx !== num)

        arr = result;
    }
    function getTodo(idx){
        console.log("get Todo......")
    }
    function getAll(){
        return arr
    }
    function changeAll(){
        for (let i = 0; i < arr.length ; i++) {
            arr[i].complete = !arr[i].complete
        }
    }

    const obj = {add, removeTodo, getTodo, getAll, changeAll}

    return obj
}