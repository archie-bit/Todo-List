import "./style.css";
import { project } from "./project.js";
import { createInterface } from "./dom.js";

createInterface();


function readLocalStorage(){
    Object.keys(localStorage).forEach((key)=>{
        let projectKey = new project(key)
        // console.log(key);
        if(localStorage.getItem(key)){
            // console.log(project.allProjects[key]['tasks'])
            const tasks = JSON.parse(localStorage.getItem(key));
            // console.log(tasks);
            for (let task in tasks){
                // console.log(tasks[task]);
                let title = tasks[task]["title"];
                let desc = tasks[task]["description"];
                let dueDate = tasks[task]["dueDate"];
                let parentProject = tasks[task]["parentProject"];
                let priority = tasks[task]["priority"];
                let checkStatus = tasks[task]["checkStatus"];
                // console.log(checkStatus);
                projectKey.addNewTask(title, 
                    desc, 
                    dueDate, 
                    priority, 
                    checkStatus,
                )
                // console.log(projectKey);
            }
        }
    })
}

// let kokoproject = new project("A7a");
// let kokotwoproject = new project("Teez");
// kokoproject.addNewTask("neeek", "tesadzxcxsadzxczsdxzxadscxzcsafdscczvzxvfdvXcXCcxasdxzcasdxzcxzcjajksndjknzljsdnljnjlkdvnLKSDNFknzlcl:MLASDcxcadez", "18/7/2002", "high");
// kokoproject.addNewTask("bzazi", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", "18/3/2002", "low");
// kokoproject.addNewTask("b33bssss", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", "18/3/2002", "low");
// kokoproject.addNewTask("asdxzc", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", "18/3/2002", "low");
// kokoproject.addNewTask("sadzxvzx", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", "18/3/2002", "low");
// kokoproject.addNewTask("gsaedfas", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", "18/3/2002", "low");
// kokoproject.addNewTask("4543", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", "18/3/2002", "low");
// kokoproject.addNewTask("vx", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", "18/3/2002", "low");
// kokoproject.addNewTask("nbm", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", "18/3/2002", "low");

readLocalStorage();

