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

readLocalStorage();

