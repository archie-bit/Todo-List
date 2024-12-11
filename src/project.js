import { toDoItem } from "./toDoItem";
import { showProject } from "./dom";

export class project{
    constructor(name){
        if(project.isProjectDub(name)){
            // throw new Error(`Project name "${name}" is already taken.`);
            // alert(`Project name "${name}" already exists.`)
        }else{
            this.name=name;
            project.#createProject(this);
            project.allProjects[this.name]=this;
            if(!localStorage.getItem(name)){
                localStorage.setItem(this.name, "");
            }
        }
    };
    
    static allProjects = {}
    tasks={};
    // static allTasks={};

    addNewTask(title, description, dueDate, priority, checkStatus) {
        this.tasks[title] = new toDoItem(title, description, dueDate, priority, checkStatus, this.name);
        localStorage.setItem(this.name, JSON.stringify(this.tasks));
        // if (!project.allTasks[this.name]) {
        //     project.allTasks[this.name] = {};
        // }
        // project.allTasks[this.name][title]=this.tasks[title];
    }

    removeTask(task){
        delete this.tasks[task];
    }

    static isProjectDub(projectName){
        return project.allProjects.hasOwnProperty(projectName);
    }

    static #createProject(item){
        const projectMenu = document.querySelector(".projectMenu");
    
        const projectItemContainer = document.createElement("div");
        projectItemContainer.classList.add("projectItemContainer");
    
        const projectItem = document.createElement("button");
        projectItem.classList.add("project");
        projectItem.textContent=item.name;
    
        const projectDel = document.createElement("button");
        projectDel.textContent="Delete";
        projectDel.classList.add("projectDel");
        projectDel.addEventListener("click", ()=>{
            projectMenu.removeChild(projectItemContainer);
            projectItem.remove();
            projectDel.remove();
            delete project.allProjects[item.name];
            localStorage.removeItem(item.name);
        })
    
        projectItemContainer.append(projectItem, projectDel);
        projectMenu.appendChild(projectItemContainer, projectDel);
        showProject(projectItem, item);
    }
}