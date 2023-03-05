//유저가 값을 입력한다.
// + 버튼을 클릭하면 할일이 추가된다.
// 유저가 딜리트버튼을 누르면 할일이 삭제된다.
// 체크버튼을 누르면 할일이 끝나면서 밑줄이 간다
// 끝남탭은 끝난 아이템만 진행중탭은 진행중 아이템만.
// 전체 탭을 누르면 다시 전체아이템으로 돌아옴.


// check 버튼을 누르면 true false
// true 이면 끝난걸로 보고 밑줄 그어주기
// false 이면 안끝난걸로 보고 그대로

let taskInput = document.getElementById('task-input');
// 1 일단 인풋박스를 가져온다
// console.log(taskInput);
let addBtn = document.getElementById('add-button');

// 015 정보를 다 가져온다 
let tabs = document.querySelectorAll(".task-tabs div");
console.log(tabs);
// 6 리스트가 될, 빈 배열을 선언해준다.
let taskList = []
let mode = '';
addBtn.addEventListener('click', addTask);

// 2 버튼에 아이디를 달아주고 버튼을 가져온다.
// 3 버튼에 이벤트를 달아주고 콘솔로 확인한다.
// 4 버튼에 addTask 라는 함수를 넣어준다.

for(let i = 1; i < tabs.length; i++){
    tabs[i].addEventListener("click", function(event){
        filter();
    });
}

// 5 addTask 함수선언
function addTask(){
    // let taskContent = taskInput.value;
    // 7 클릭할때마다 인풋태그의 밸류값을 들고와서 저장한다

    //let taskContent = taskInput.value; 스트링만으로는 표현이 힘듬
    // 여러가지 추가정보를 같이 넣어줘야해서 객체가 필요함.
    let task = {
        id : randumIDGenerate(), // 맨마지막에 넣음.
        taskContent : taskInput.value,
        isComplete : false
    }
    // 05_ 아이디를 부여한다. randumIDGenerate 함수를 아이디값으로 넣어준다.
    // 01_객체로 변경 선언
    taskList.push(task); //taskContent 가 아니라 task 자체가 들어감. 
    // 8 밸류값을 배열의 뒤에 넣는다.
    console.log(taskList);
    render();
    // 14 랜더함수 추가
}

// 9 화면에 뿌려줄 함수
function render(){
    let resultHTML = '';
    // 10 빈 문자열 선언
    for(let i = 0; i < taskList.length; i++){
        // 12 태스크 리스트의 길이보다 작을때 까지 반복한다.
        if(taskList[i].isComplete == true){ // 09 if문 형태로 변환, true값과 같다면~
            //013 딜리트버튼 활성화  onclick="deleteTask('${taskList[i].id}')
            resultHTML += `<div class="task">
                            <div class="task-done">${taskList[i].taskContent}</div>
                            <div>
                                <button onclick="toggleComplete('${taskList[i].id}')">Check</button>
                                <button onclick="deleteTask('${taskList[i].id}')">Delete</button> 
                            </div>
                        </div>`;
        }else{
            resultHTML += `<div class="task">
                            <div>${taskList[i].taskContent}</div>
                            <div>
                                <button onclick="toggleComplete('${taskList[i].id}')">Check</button>
                                <button onclick="deleteTask('${taskList[i].id}')">Delete</button>
                            </div>
                        </div>`;
        }

    //     resultHTML += `<div class="task">
    //     <div class="task-done">${taskList[i].taskContent}</div>
    //     <div>
    //         <button onclick="toggleComplete('${taskList[i].id}')">Check</button>
    //         <button>Delete</button>
    //     </div>
    //  </div>`;
        
                        // 02_ ${taskList[i]}->${taskList[i].taskContent} 로 변경
                        // 03_ 온클릭 형태로 함수 추가 
                        // 04_ 어떤 아이템이 선택됬는지 알려줘야함.
                        // 07_ toggleComplete 매개변수로 taskList[i].id 값을 받음
        // 13 추가대입 resultHTML taskContent
    }

    document.getElementById('task-board').innerHTML = resultHTML;
    // 11 각각의 테스크가 들어갈 보드 자체에 resultHTML을 대입.
}

// 06_ generate random id 검색 함수로 만들어두기.
function randumIDGenerate(){
    return '_' + Math.random().toString(36).substring(2, 9);
}

// 08 _ taskList 의 id값을 넘겨받음
function toggleComplete(id){
    // console.log(`id : ${id}`);
    for(let i = 0; i < taskList.length; i++){
        if(taskList[i].id == id){
            // taskList[i].isComplete = true; // 계속 true값이면 밑줄을 해제를 못함
            taskList[i].isComplete = !taskList[i].isComplete; // 011 갖고있는값에 반대값을 넣어라.
            break;
        }
    }
    render(); // 010_랜더함수 추가.
    console.log(taskList);
}

function deleteTask(id){ //014 딜리트버튼 셋팅.
    for(let i = 0; i < taskList.length; i++){
        if(taskList[i].id == id){
            taskList.splice(i,1); // i번째 1개 삭제.
            // fruits2.splice(1,0,"Lemon","Kiwi"); 
            // 1-> 오렌지 0 -> 아무것도 삭제안하겠다. 레몬, 키위 -> 집어넣을것들
            break;
        }
    }
    render();
}

function filter(event){
    mode = event.target.id;
    let filterList = [];
    if(mode == "All"){
        render();
    }else if(mode == "going"){
        for(let i = 0; i < taskList.length; i++){
            if(taskList[i].isComplete == false){
                filterList.push(taskList[i]);
            }
        }
        taskList = filterList;
        render();
    }
    
}
